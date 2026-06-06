import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, occasion, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind erforderlich." },
        { status: 400 }
      );
    }

    // For now, log the contact form submission.
    // TODO: Connect to Resend or Formspree for actual email delivery.
    console.log("Contact form submission:", {
      name,
      email,
      occasion,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
