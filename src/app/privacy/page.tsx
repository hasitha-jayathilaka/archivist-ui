import Link from "next/link";

export default function PrivacyPage() {
  const updated = "25 Jan 2026";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f3ee] via-white to-[#f7f3ee] text-black">
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
          <div className="p-7 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Privacy Policy
              </h1>
              <div className="text-xs text-black/60">Last updated: {updated}</div>
            </div>

            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              This Privacy Policy explains how <span className="font-medium">Yellow House Productions</span> (“we”, “us”, “our”)
              collects, uses, and protects information when you use{" "}
              <span className="font-medium">thearchivistgame.art</span> (the “Site”).
            </p>

            <div className="mt-8 space-y-6 text-sm text-black/70 leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-black">1. Information We Collect</h2>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Contact requests:</span> name, email, organization (optional), country (optional),
                    and the message you submit.
                  </li>
                  <li>
                    <span className="font-medium">Newsletter:</span> email address and basic subscription metadata (e.g., time of signup).
                  </li>
                  <li>
                    <span className="font-medium">Usage data:</span> pages viewed, approximate location, device/browser info, and similar
                    analytics signals.
                  </li>
                  <li>
                    <span className="font-medium">Cookies / tracking:</span> analytics cookies and social media pixels (where enabled).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">2. How We Use Information</h2>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>To respond to your messages and provide requested information (e.g., demos, pilots, partnerships).</li>
                  <li>To send newsletters and updates if you subscribe (you can unsubscribe anytime).</li>
                  <li>To understand how the Site is used and improve performance, content, and user experience.</li>
                  <li>To prevent abuse, protect security, and comply with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">3. Cookies & Tracking</h2>
                <p className="mt-2">
                  We use cookies and similar technologies for analytics and measurement, and we may use social media pixels to understand
                  how visitors interact with our pages and campaigns. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">4. Sharing & Disclosure</h2>
                <p className="mt-2">
                  We do not sell your personal information. We may share information with trusted service providers that help us operate the Site
                  (e.g., hosting, analytics, email/newsletter delivery) and only as needed to perform those services.
                  We may also disclose information if required by law or to protect our rights and safety.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">5. Data Security</h2>
                <p className="mt-2">
                  We take reasonable measures to protect your data. However, no online system can be guaranteed 100% secure.
                  Please use the Site at your own discretion.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">6. Data Retention</h2>
                <p className="mt-2">
                  We keep contact submissions as long as needed to respond and maintain records of communication. Newsletter subscription data is
                  retained until you unsubscribe. Analytics data is retained according to our analytics provider settings.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">7. Your Choices</h2>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>You can unsubscribe from newsletters at any time using the link in the email.</li>
                  <li>You can disable cookies via your browser settings (some site features may be affected).</li>
                  <li>You may request access, correction, or deletion of your submitted data by emailing us.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">8. Children’s Privacy</h2>
                <p className="mt-2">
                  The Site is not intended for children under 13, and we do not knowingly collect personal data from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">9. Changes to This Policy</h2>
                <p className="mt-2">
                  We may update this Privacy Policy from time to time. The “Last updated” date will reflect the latest version.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-black">10. Contact</h2>
                <p className="mt-2">
                  Questions or requests related to privacy? Email{" "}
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
                href="/terms"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
              >
                View Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
