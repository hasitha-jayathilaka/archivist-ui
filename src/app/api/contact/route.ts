import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const org = String(body?.org ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: name, email, message." },
        { status: 400 }
      );
    }

    // ✅ For now, just log (so you can confirm it works)
    // Later we can plug in email delivery (Resend/SendGrid/etc.)
    console.log("CONTACT_FORM_SUBMISSION", { name, email, org, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
