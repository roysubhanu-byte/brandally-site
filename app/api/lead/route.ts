import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Lead = {
  name: string;
  business: string;
  business_email: string;
  website: string;
  niche: string;
};

// Fire-and-forget notification; a mail failure must never lose the lead.
async function notifyPartners(lead: Lead) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.LEAD_NOTIFY_TO;
  if (!host || !user || !pass || !to) return;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: `"BrandAlly Leads" <${user}>`,
      to,
      replyTo: lead.business_email,
      subject: `New lead: ${lead.name}${lead.business ? ` (${lead.business})` : ""}${lead.niche ? ` · ${lead.niche}` : ""}`,
      text: [
        `Name: ${lead.name}`,
        `Business: ${lead.business || "-"}`,
        `Email: ${lead.business_email}`,
        `Website: ${lead.website || "-"}`,
        `Type: ${lead.niche || "-"}`,
        "",
        "Reply to this email to reach the lead directly.",
      ].join("\n"),
    });
  } catch (err) {
    console.error("Lead notification email failed:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = (body.name || "").trim();
    const business = (body.business || "").trim();
    const business_email = (body.business_email || "").trim();
    const website = (body.website || "").trim();
    const niche = (body.niche || "").trim();

    if (!name || !business_email) {
      return NextResponse.json(
        { error: "Name and business email are required" },
        { status: 400 }
      );
    }

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const lead = { name, business, business_email, website, niche };

    // No DB configured yet: log so nothing is lost, still succeed.
    if (!url || !key) {
      console.log("Lead (no DB configured):", lead);
      await notifyPartners(lead);
      return NextResponse.json({ success: true });
    }

    const res = await fetch(`${url}/rest/v1/brandally_leads`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        business,
        business_email,
        website,
        niche,
        source: "website",
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Supabase insert failed:", res.status, detail);
      return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }

    await notifyPartners(lead);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
