import { NextRequest, NextResponse } from "next/server";

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

    // No DB configured yet: log so nothing is lost, still succeed.
    if (!url || !key) {
      console.log("Lead (no DB configured):", {
        name,
        business,
        business_email,
        website,
        niche,
      });
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

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
