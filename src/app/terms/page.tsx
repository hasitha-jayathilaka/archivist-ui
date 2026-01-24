import Link from "next/link";

export default function TermsPage() {
  const updated = "25 Jan 2026";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f3ee] via-white to-[#f7f3ee] text-black">
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
          <div className="p-7 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Terms & Conditions
              </h1>
              <div className="text-xs text-black/60">Last updated: {updated}</div>
            </div>

            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              These Terms & Conditions (“Terms”) govern your use of the website{" "}
              <span className="font-medium">thearchivistgame.art</span> (the “Site”),
              operated by <span className="font-medium">Yellow House Productions</span> (“we”, “us”, “our”).
              By accessing or using the Site, you agree to these Terms.
            </p>

            <div className="mt-8 space-y-6 text-sm text-black/70 leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-black">1. Use of the Site</h2>
                <p className="mt-2">
                  You may use the Site for lawful purposes only. You agree not to misuse the Site,
                  attempt unauthorized access, interfere with normal operation, or use the Site
                  in a way that violates applicable laws or third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">2. Intellectual Property</h2>
                <p className="mt-2">
                  The Site and its content (including text, visuals, trademarks, logos, and design)
                  are owned by or licensed to Yellow House Productions and are protected by
                  applicable intellectual property laws. You may not copy, reproduce, distribute,
                  or create derivative works without prior written permission, except where permitted by law.
                </p>
                <p className="mt-2">
                  <span className="font-medium">Archivist Into the Artverse™</span> is a trademark of Yellow House Productions.
                  Third-party names and marks are the property of their respective owners.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">3. Research & Cultural References</h2>
                <p className="mt-2">
                  The Site may reference historical artworks, locations, institutions, archival materials,
                  and cultural subjects for research, education, and reconstruction context. Such references
                  do not imply endorsement by any third party unless explicitly stated.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">4. Submissions & Contact Requests</h2>
                <p className="mt-2">
                  If you submit a message through our contact form or newsletter, you represent that the information
                  provided is accurate and that you have the right to submit it. You grant us permission to use your
                  submission to respond to your request and to operate our communications (e.g., follow-ups).
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">5. Third-Party Services</h2>
                <p className="mt-2">
                  The Site may use third-party services (e.g., analytics, email delivery, embedded media, or social pixels).
                  Those services may have their own terms and privacy practices. We are not responsible for third-party services
                  beyond what is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">6. Disclaimers</h2>
                <p className="mt-2">
                  The Site is provided “as is” and “as available.” We do not guarantee uninterrupted access, error-free operation,
                  or that information on the Site is complete or current at all times. Any reliance on the Site is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">7. Limitation of Liability</h2>
                <p className="mt-2">
                  To the maximum extent permitted by law, Yellow House Productions will not be liable for any indirect, incidental,
                  consequential, or special damages arising out of or related to your use of the Site.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">8. Changes to These Terms</h2>
                <p className="mt-2">
                  We may update these Terms from time to time. The “Last updated” date will reflect the latest version.
                  Continued use of the Site after changes means you accept the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">9. Governing Law</h2>
                <p className="mt-2">
                  These Terms are governed by the laws of <span className="font-medium">Sri Lanka</span>.
                  Any disputes shall be subject to the jurisdiction of the competent courts of Sri Lanka.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">10. Contact</h2>
                <p className="mt-2">
                  Questions about these Terms? Email us at{" "}
                  <span className="font-medium">info@thearchivistgame.art</span>.
                </p>
              </section>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
              >
                Back to Home
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
