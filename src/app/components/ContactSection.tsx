"use client";

import React, { useMemo, useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type RequestType =
  | "demo"
  | "pilot"
  | "education"
  | "partnership"
  | "press"
  | "other";

const TYPE_COPY: Record<
  RequestType,
  { title: string; helper: string; messagePlaceholder: string }
> = {
  demo: {
    title: "Request an institutional demo",
    helper:
      "Tell us your institution, audience size, and deployment context. We'll reply with a walkthrough and pilot options.",
    messagePlaceholder:
      "Deployment context (museum / university / tourism / installation), audience size, location, goals…",
  },
  pilot: {
    title: "Discuss a pilot",
    helper:
      "Share venue, timeline, and what success looks like. We'll propose a pilot scope and deployment options.",
    messagePlaceholder:
      "Pilot venue, dates, audience, hardware availability (VR / desktop), and desired outcomes…",
  },
  education: {
    title: "Education pilot inquiry",
    helper:
      "Tell us your learners, curriculum context, and delivery format. We'll suggest a structured pilot plan.",
    messagePlaceholder:
      "Age group / course, learning goals, class size, delivery format (lab, headsets, desktop)…",
  },
  partnership: {
    title: "Partnership inquiry",
    helper:
      "Museums, archives, cities, tourism boards, and aligned partners: share what you're exploring and how we can collaborate.",
    messagePlaceholder:
      "What kind of partnership are you exploring? (exhibition, city showcase, research collaboration, funding)…",
  },
  press: {
    title: "Press / media request",
    helper:
      "Request a press kit, interview, screenshots, or a demo capture. We'll respond with materials and availability.",
    messagePlaceholder:
      "Outlet/channel, deadline, and what you need (quotes, images, demo footage, interview)…",
  },
  other: {
    title: "Contact the team",
    helper: "Send your request and we’ll route it to the right person.",
    messagePlaceholder: "Write your message here…",
  },
};

function normalizeType(raw: string | null): RequestType {
  const t = (raw || "").toLowerCase().trim();
  const allowed: RequestType[] = [
    "demo",
    "pilot",
    "education",
    "partnership",
    "press",
    "other",
  ];
  return allowed.includes(t as RequestType) ? (t as RequestType) : "demo";
}

// Simple + reliable email validation
function isValidEmail(email: string) {
  // pragmatic email regex (good for forms, not over-strict)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation: allow only + digits spaces () -
// Require 7–15 digits total (E.164 typical max 15)
function validatePhone(phone: string) {
  if (!phone) return { ok: true, error: "" };

  const allowedChars = /^[0-9+\-\s()]+$/;
  if (!allowedChars.test(phone)) {
    return { ok: false, error: "Phone can only include digits, +, spaces, (), and -." };
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    return { ok: false, error: "Phone must contain 7–15 digits." };
  }

  return { ok: true, error: "" };
}

export default function ContactSection() {
  const [type, setType] = useState<RequestType>("demo");
  const copy = useMemo(() => TYPE_COPY[type], [type]);

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    country: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const readTypeFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      setType(normalizeType(params.get("type")));
    };

    readTypeFromUrl();
    window.addEventListener("hashchange", readTypeFromUrl);
    window.addEventListener("popstate", readTypeFromUrl);

    return () => {
      window.removeEventListener("hashchange", readTypeFromUrl);
      window.removeEventListener("popstate", readTypeFromUrl);
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setOk(null);
    setError("");

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        org: form.org.trim(),
        country: form.country.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        type,
      };

      if (!payload.name || !payload.email || !payload.message) {
        setOk(false);
        setError("Please fill name, email, and message.");
        return;
      }

      // ✅ Email validation
      if (!isValidEmail(payload.email)) {
        setOk(false);
        setError("Please enter a valid email address.");
        return;
      }

      // ✅ Phone validation (optional)
      const phoneCheck = validatePhone(payload.phone);
      if (!phoneCheck.ok) {
        setOk(false);
        setError(phoneCheck.error);
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = null;
      try {
        data = JSON.parse(text);
      } catch {
        data = null;
      }

      if (!res.ok || !data?.ok) {
        setOk(false);
        setError(
          data?.error || text || `Submission failed (HTTP ${res.status}).`
        );
        return;
      }

      setOk(true);
      setForm({
        name: "",
        email: "",
        org: "",
        country: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      setOk(false);
      setError(err?.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
        <div className="p-7 md:p-10 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">
              Contact
            </div>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              {copy.title}
            </h2>

            <p className="mt-3 text-sm text-black/70 leading-relaxed">
              {copy.helper}
            </p>

            {ok === true && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black/70">
                <CheckCircle2 className="h-5 w-5" />
                Sent successfully. We’ll get back to you soon.
              </div>
            )}

            {ok === false && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                <AlertCircle className="h-5 w-5" />
                {error}
              </div>
            )}
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="grid gap-3" noValidate>
              <div>
                <label className="text-xs text-black/60">Request type</label>
                <select
                  value={type}
                  onChange={(e) => setType(normalizeType(e.target.value))}
                  className="mt-1 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                >
                  <option value="demo">Institutional demo</option>
                  <option value="pilot">Pilot scope</option>
                  <option value="education">Education pilot</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press / media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Name*"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />

                <input
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Email*"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  spellCheck={false}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="grid gap-1">
                  <input
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                    placeholder="Mobile number (optional)"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    inputMode="tel"
                    autoComplete="tel"
                    spellCheck={false}
                  />
                  <div className="text-[11px] text-black/45 pl-1">
                    Example: +94 77 123 4567
                  </div>
                </div>

                <input
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Country (optional)"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  autoComplete="country-name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Organization (optional)"
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  autoComplete="organization"
                />

                {/* ✅ spacer: prevents “clickable empty area” */}
                <div
                  aria-hidden="true"
                  className="hidden sm:block pointer-events-none select-none"
                />
              </div>

              <textarea
                className="w-full min-h-[140px] rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                placeholder={copy.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                minLength={10}
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm bg-black text-white hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send request"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
