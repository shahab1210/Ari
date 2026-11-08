import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, organization, inquiryType, budget, message } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = "arifaanjum143@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Dispatch automated notification email via Resend API
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Arifa Portfolio <onboarding@resend.dev>",
          to: [recipientEmail],
          subject: `New Lead: ${name} (${inquiryType || "General Consultation"})`,
          html: `
            <h2>New Inquiry Received from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryType || "General Consultation"}</p>
            <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <blockquote>${message || "No message content"}</blockquote>
            <hr />
            <p><small>Received at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</small></p>
          `,
        }),
      });

      if (!res.ok) {
        console.error("Resend API error:", await res.text());
      }
    } else {
      // Simulate realistic network delay and log submission in development/standalone mode
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log("[Contact Submission Received]:", {
        name,
        email,
        phone,
        organization,
        inquiryType,
        budget,
        message,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully. Arifa will respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API Route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry. Please try again or WhatsApp directly." },
      { status: 500 }
    );
  }
}
