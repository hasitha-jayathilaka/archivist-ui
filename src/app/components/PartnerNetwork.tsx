"use client";

/*
  Product-relevant partner rail only — marks that help a buyer trust
  THIS product (hardware it runs on, venue/deployment validation).

  Company-level partners and supporters (Nanotek, NIA, DIMO, The ROI
  Firm, Linseed) are intentionally NOT here — they describe Yellow
  House Productions as a company, not why Archivist is safe to deploy
  in a museum, classroom, or airport. They're held in StudioGroup.tsx
  as a small footer-level credit line until a separate Yellow House
  Productions site exists to carry that story properly.

  Logo files expected at:
    /public/images/partners/pico.png
    /public/images/memberships/lexra.png   (existing file, reused here)
*/

type Partner = {
  name: string;
  role: string;
  logo: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Pico",
    role: "Enterprise VR hardware and development support",
    logo: "/images/partners/pico.png",
  },
  {
    name: "LEXRA",
    role: "Location-Based XR Association — operator member",
    logo: "/images/memberships/lexra.png",
  },
];

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "block";
          }}
        />
        <div style={{ display: "none" }} className="text-xs font-medium text-black/50">
          {partner.name}
        </div>
      </div>
      <div className="hidden sm:block leading-tight">
        <div className="text-xs font-semibold">{partner.name}</div>
        <div className="text-[11px] text-black/50">{partner.role}</div>
      </div>
    </div>
  );
}

export default function PartnerNetwork() {
  return (
    <section id="partner-network" className="mx-auto max-w-6xl px-4 py-6">
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-black/10 py-5">
        <span className="text-xs uppercase tracking-widest text-black/40">Built with</span>
        {PARTNERS.map((p) => (
          <PartnerLogo key={p.name} partner={p} />
        ))}
      </div>
    </section>
  );
}
