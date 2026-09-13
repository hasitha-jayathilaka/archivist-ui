"use client";

/*
  Small, low-emphasis credit line for company-level relationships
  (as opposed to product-relevant partners, which live in
  PartnerNetwork.tsx as the logo rail under the hero).

  This is intentionally minimal — text only, no logos, no descriptions
  — per the site-split plan: full company story (Nanotek, NIA, DIMO,
  The ROI Firm, Linseed, press, studio memberships) belongs on a future
  standalone Yellow House Productions site. Once that site exists,
  swap the plain text below for a real link.
*/

const GROUP_NAMES = ["Nanotek", "NIA", "DIMO", "The ROI Firm", "Linseed"];

export default function StudioGroup() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-black/45">
      <span>
        Yellow House Productions also works with {GROUP_NAMES.join(", ")} across its wider studio and group activities.
      </span>
      {/* TODO: once the Yellow House Productions site exists, replace the line
          above with: "Read more about Yellow House Productions →" linking out. */}
    </div>
  );
}
