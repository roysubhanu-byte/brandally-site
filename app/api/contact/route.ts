import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // For now, log the contact submission
    // TODO: Integrate with Formspree or Resend when API key is available
    console.log("Contact form submission:", { name, email, subject, message });

    // Send to Formspree if configured
    const formspreeId = process.env.FORMSPREE_ID;
    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _replyto: email,
        }),
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "Failed to send message" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
