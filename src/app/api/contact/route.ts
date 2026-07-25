import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, subject = "Portfolio Contact Form", message } = body;

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    // 1. Try Web3Forms if key exists
    if (web3FormsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: name.trim(),
          email: email.trim(),
          subject: `[Portfolio Inquiry] ${subject.trim()}`,
          message: message.trim(),
          from_name: `${name.trim()} (Portfolio)`,
        }),
      });

      const resData = await response.json();

      if (resData.success) {
        return NextResponse.json({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
          deliveryMethod: "web3forms",
        });
      } else {
        console.error("Web3Forms error:", resData);
      }
    }

    // 2. Try Resend API if key exists
    if (resendApiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["eseigbesamuel810@gmail.com"],
          reply_to: email.trim(),
          subject: `Portfolio Contact: ${subject.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
        }),
      });

      if (response.ok) {
        return NextResponse.json({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
          deliveryMethod: "resend",
        });
      } else {
        const errorData = await response.text();
        console.error("Resend API error:", errorData);
      }
    }

    // 3. Free Email Service Fallback via FormSubmit (No API keys required)
    // The very first submission will trigger an Activation Email to eseigbesamuel810@gmail.com
    const origin = req.headers.get("origin") || "https://samueleseigbe.vercel.app/";
    const referer = req.headers.get("referer") || "https://samueleseigbe.vercel.app/";

    const formSubmitResponse = await fetch("https://formsubmit.co/ajax/eseigbesamuel810@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Origin: origin,
        Referer: referer,
      },
      body: JSON.stringify({
        _subject: `[Portfolio Inquiry] ${subject.trim()}`,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    });

    const formSubmitData = await formSubmitResponse.json();

    if (formSubmitResponse.ok && (formSubmitData.success === "true" || formSubmitData.success === true)) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
        deliveryMethod: "formsubmit",
      });
    } else {
      console.error("FormSubmit error:", formSubmitData);
      throw new Error("FormSubmit delivery failed");
    }
  } catch (err: any) {
    console.error("Contact API route error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while sending your message. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
