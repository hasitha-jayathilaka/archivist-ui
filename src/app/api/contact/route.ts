import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return c;
    }
  });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  if (!phone) return { ok: true, error: "" };

  const allowedChars = /^[0-9+\-\s()]+$/;
  if (!allowedChars.test(phone)) {
    return {
      ok: false,
      error: "Phone can only include digits, +, spaces, (), and -.",
    };
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    return { ok: false, error: "Phone must contain 7–15 digits." };
  }

  return { ok: true, error: "" };
}

export async function POST(req: Request) {
  console.log("CONTACT_ROUTE_HIT", new Date().toISOString());

  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const org = String(body?.org ?? "").trim();
    const country = String(body?.country ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const type = String(body?.type ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: name, email, message." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const phoneCheck = validatePhone(phone);
    if (!phoneCheck.ok) {
      return NextResponse.json(
        { ok: false, error: phoneCheck.error },
        { status: 400 }
      );
    }

    // ✅ Read env INSIDE the handler (build-safe)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO;
    const CONTACT_FROM = process.env.CONTACT_FROM;
    const SITE_NAME = process.env.SITE_NAME ?? "Archivist Into the Artverse™";

    if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email not configured. Missing RESEND_API_KEY / CONTACT_TO / CONTACT_FROM.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const safe = {
      name: esc(name),
      email: esc(email),
      org: esc(org),
      country: esc(country),
      phone: esc(phone),
      type: esc(type),
      message: esc(message),
      siteName: esc(SITE_NAME),
    };

    const result = await resend.emails.send({
      from: CONTACT_FROM,
      to: email,
      cc: CONTACT_TO,
      subject: "We received your message - Archivist Into the Artverse™",
      replyTo: email,
      html: `
        <div style="font-family: ui-sans-serif, system-ui; line-height:1.6; color:#111">
          <p>Hi ${safe.name},</p>
          <p>
            Thank you for reaching out to <b>${safe.siteName}</b>.
            We’ve received your message and a member of our team will get back to you shortly.
          </p>

          <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5" />

          <p style="margin:0 0 6px 0"><b>Request details</b></p>
          <p style="margin:0"><b>Type:</b> ${safe.type || "-"}</p>
          <p style="margin:0"><b>Email:</b> ${safe.email}</p>
          <p style="margin:0"><b>Mobile:</b> ${safe.phone || "-"}</p>
          <p style="margin:0"><b>Organization:</b> ${safe.org || "-"}</p>
          <p style="margin:0 0 12px 0"><b>Country:</b> ${safe.country || "-"}</p>

          <div style="background:#f7f7f7;padding:14px;border-radius:10px;font-size:14px">
            ${safe.message.replace(/\n/g, "<br/>")}
          </div>

          <p style="margin-top:20px">
            Best regards,<br/>
            <b>The ${safe.siteName} Team</b>
          </p>
        </div>
      `,
    });

    console.log("CONTACT_EMAIL_SENT", {
      to: email,
      cc: CONTACT_TO,
      id: (result as any)?.data?.id || (result as any)?.id || null,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("CONTACT_FORM_ERROR", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
