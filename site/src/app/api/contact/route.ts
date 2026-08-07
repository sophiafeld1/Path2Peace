import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    // Validate required fields
    const { name, email, phone, message } = body;
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const token = process.env.POSTMARK_SERVER_TOKEN;
    const from = process.env.POSTMARK_FROM_EMAIL;
    const to = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!token || !from || !to) {
      console.error("Missing Postmark environment variables");
      return NextResponse.json(
        { error: "Contact form is not configured. Please call 703-340-6920." },
        { status: 500 }
      );
    }

    const { ServerClient } = await import("postmark");
    const client = new ServerClient(token);

    await client.sendEmail({
      From: from,
      To: to,
      ReplyTo: email,
      Subject: `New Contact Form Submission from ${name}`,
      TextBody: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please call 703-340-6920." },
      { status: 500 }
    );
  }
}
