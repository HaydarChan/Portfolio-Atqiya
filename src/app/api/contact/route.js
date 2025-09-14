// app/api/contact/route.js
import { Resend } from "resend";

export const runtime = "nodejs"; // Resend bisa di Edge; boleh juga "nodejs"
const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ message: "Invalid email format" }, { status: 400 });
    }

    const adminHtml = `
      <div style="font-family:Arial, sans-serif; max-width:600px; margin:0 auto;">
        <h2 style="color:#1c1c1c; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">
          New Contact Form Submission
        </h2>
        <div style="margin:20px 0;">
          <h3 style="color:#333; margin-bottom:10px;">Contact Details:</h3>
          <p style="margin:5px 0;"><strong>Name:</strong> ${esc(name)}</p>
          <p style="margin:5px 0;"><strong>Email:</strong> ${esc(email)}</p>
          <p style="margin:5px 0;"><strong>Subject:</strong> ${esc(subject)}</p>
        </div>
        <div style="margin:20px 0;">
          <h3 style="color:#333; margin-bottom:10px;">Message:</h3>
          <div style="background:#f9f9f9; padding:15px; border-radius:5px; white-space:pre-wrap;">
            ${esc(message)}
          </div>
        </div>
      </div>
    `;

    const autoReplyHtml = `
      <div style="font-family:Arial, sans-serif; max-width:600px; margin:0 auto;">
        <h2 style="color:#1c1c1c; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">
          Thank You for Reaching Out!
        </h2>
        <p style="font-size:16px; line-height:1.6; color:#333;">Hi ${esc(name)},</p>
        <p style="font-size:16px; line-height:1.6; color:#333;">
          I've received your inquiry about "<strong>${esc(subject)}</strong>" and will reply within 24–48 hours.
        </p>
        <div style="background:#f9f9f9; padding:15px; border-radius:5px; margin:20px 0;">
          <h3 style="color:#333; margin-top:0;">Your Message:</h3>
          <p style="margin:0; white-space:pre-wrap;">${esc(message)}</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.CONTACT_TO,
      subject: `New Contact Form Message: ${subject}`,
      html: adminHtml,
      reply_to: `${name} <${email}>`,
    });

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: `Thank you for your message, ${name}!`,
      html: autoReplyHtml,
    });

    return Response.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ message: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
