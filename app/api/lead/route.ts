import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { createHash } from "crypto";

type Lead = {
  name: string;
  business: string;
  business_email: string;
  phone: string;
  website: string;
  niche: string;
  message: string;
};

// Server-side Conversions API Lead, deduped with the browser pixel via event_id.
async function sendCapiLead(
  lead: Lead,
  eventId: string | undefined,
  sourceUrl: string,
  req: NextRequest
) {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!pixelId || !token) return;

  try {
    const em = createHash("sha256")
      .update(lead.business_email.trim().toLowerCase())
      .digest("hex");
    const ph = lead.phone
      ? createHash("sha256")
          .update(lead.phone.replace(/[^0-9]/g, ""))
          .digest("hex")
      : undefined;
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() || undefined;
    const ua = req.headers.get("user-agent") || undefined;

    const res = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              action_source: "website",
              event_source_url: sourceUrl,
              user_data: {
                em: [em],
                ...(ph ? { ph: [ph] } : {}),
                client_ip_address: ip,
                client_user_agent: ua,
              },
            },
          ],
          access_token: token,
        }),
      }
    );
    if (!res.ok) {
      console.error("CAPI Lead failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("CAPI Lead error:", err);
  }
}

// Fire-and-forget notification; a mail failure must never lose the lead.
async function notifyPartners(lead: Lead, sourceUrl: string) {
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
        `Phone: ${lead.phone || "-"}`,
        `Website: ${lead.website || "-"}`,
        `Type: ${lead.niche || "-"}`,
        "",
        "Message:",
        lead.message || "(none)",
        "",
        `Page: ${sourceUrl}`,
        "Reply to this email to reach the lead directly.",
      ].join("\n"),
    });
  } catch (err) {
    console.error("Lead notification email failed:", err);
  }
}

// Insert into Supabase. Falls back to the base columns if phone/message
// columns have not been added yet, so a lead is never lost to a schema gap.
async function saveLead(lead: Lead, url: string, key: string) {
  const base = {
    name: lead.name,
    business: lead.business,
    business_email: lead.business_email,
    website: lead.website,
    niche: lead.niche,
    source: "website",
  };

  async function insert(payload: Record<string, unknown>) {
    return fetch(`${url}/rest/v1/brandally_leads`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });
  }

  let res = await insert({ ...base, phone: lead.phone, message: lead.message });
  if (!res.ok) {
    const detail = await res.text();
    console.error("Supabase insert (full) failed:", res.status, detail);
    // Retry without the newer columns in case the migration hasn't run.
    res = await insert(base);
    if (!res.ok) {
      console.error(
        "Supabase insert (base) failed:",
        res.status,
        await res.text()
      );
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = (body.name || "").trim();
    const business = (body.business || "").trim();
    const business_email = (body.business_email || "").trim();
    const phone = (body.phone || "").trim();
    const website = (body.website || "").trim();
    const niche = (body.niche || "").trim();
    const message = (body.message || "").trim();

    if (!name || !business_email) {
      return NextResponse.json(
        { error: "Name and business email are required" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      name,
      business,
      business_email,
      phone,
      website,
      niche,
      message,
    };
    const eventId =
      typeof body.event_id === "string" ? body.event_id : undefined;
    const sourceUrl =
      typeof body.source_url === "string" && body.source_url
        ? body.source_url
        : "https://brandally.net/";

    // Notify + CAPI first so a lead is captured even if the DB write fails.
    await Promise.all([
      notifyPartners(lead, sourceUrl),
      sendCapiLead(lead, eventId, sourceUrl, req),
    ]);

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (url && key) {
      await saveLead(lead, url, key);
    } else {
      console.log("Lead (no DB configured):", lead);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
