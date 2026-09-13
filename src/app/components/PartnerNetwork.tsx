"use client";

/*
  Merged Partners, Supporters, and ecosystem/sister companies into one
  section, in this order: Pico, Nanotek, NIA, DIMO, The ROI Firm, Linseed.

  Logo files expected at:
    /public/images/partners/pico.png
    /public/images/partners/nanotek.png
    /public/images/supporters/nia.png
    /public/images/supporters/dimo.png
    /public/images/partners/roi-firm.png        (should already exist)
    /public/images/partners/linseed.png         (TODO: add this one — see note below)

  Until a given logo file exists, that card falls back to showing the
  name as text instead of breaking.
*/

type Partner = {
  name: string;
  role: string;
  desc: string;
  logo: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Pico",
    role: "Enterprise VR hardware and development support",
    logo: "/images/partners/pico.png",
    desc:
      "Pico supplies Yellow House Productions with Pico 4 Ultra Enterprise devices and development support, and is confirmed as the preferred launch partner for Archivist titles following Arles.",
  },
  {
    name: "Nanotek",
    role: "Official Technology Partner",
    logo: "/images/partners/nanotek.png",
    desc:
      "Nanotek is the official technology partner supporting Yellow House Productions' hardware and technical infrastructure.",
  },
  {
    name: "National Innovation Agency (NIA)",
    role: "Supporter · WIPO TISC Center",
    logo: "/images/supporters/nia.png",
    desc:
      "The National Innovation Agency, a WIPO Technology and Innovation Support Center (TISC), supports Yellow House Productions' innovation pipeline. Yellow House Productions is a recipient of the NIA Innovation Voucher for commercialisation.",
  },
  {
    name: "DIMO",
    role: "Sponsor · Helixra R&D",
    logo: "/images/supporters/dimo.png",
    desc: "DIMO supports research and development for Helixra.",
  },
  {
    name: "The ROI Firm",
    role: "Development & Production Partner",
    logo: "/images/partners/roi-firm.png",
    desc:
      "The ROI Firm supports Archivist Into the Artverse™ through production coordination, technical development workflows, and access to a global network of creative and technical specialists engaged on a project-by-project basis.",
  },
  {
    name: "Linseed",
    role: "Sister Company · IP Infrastructure",
    logo: "/images/partners/linseed.png",
    desc:
      "Linseed is Yellow House Productions' sister company, providing the IP licensing and attribution infrastructure behind the studio's cultural content and institutional partnerships.",
  },
];

function PartnerLogoCard({ partner }: { partner: Partner }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      <div className="aspect-[16/10] bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="max-h-[70%] max-w-[70%] object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "block";
          }}
        />
        <div style={{ display: "none" }} className="text-sm font-medium text-black/50">
          {partner.name}
        </div>
      </div>
      <div className="p-5">
        <div className="text-sm font-semibold">{partner.name}</div>
        <div className="mt-1 text-xs text-black/60">{partner.role}</div>
        <p className="mt-3 text-sm text-black/70 leading-relaxed">{partner.desc}</p>
      </div>
    </div>
  );
}

export default function PartnerNetwork() {
  return (
    <section id="partner-network" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Partners & supporters</h2>
      <p className="mt-2 text-sm text-black/70 max-w-2xl">
        Hardware, technology, institutional, and sister-company relationships supporting the
        studio.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PARTNERS.map((p) => (
          <PartnerLogoCard key={p.name} partner={p} />
        ))}
      </div>
    </section>
  );
}
