"use client";

/*
  TODO: drop real logo files into /public/images/partners/:
    - pico.png
    - nanotek.png
  Until those exist, the name renders as a text fallback instead of breaking.
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
    role: "Preferred XR Hardware & Launch Partner",
    logo: "/images/partners/pico.png",
    desc:
      "Pico has supplied Yellow House Productions with Pico 4 Ultra Enterprise devices and development support, and is confirmed as the preferred launch partner for Archivist titles following Arles.",
  },
  {
    name: "Nanotek",
    role: "Official Technology Partner",
    logo: "/images/partners/nanotek.png",
    desc:
      "Nanotek is the official technology partner supporting Yellow House Productions' hardware and technical infrastructure.",
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
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Partners</h2>
      <p className="mt-2 text-sm text-black/70 max-w-2xl">
        Hardware and technology partners supporting the studio's XR development pipeline.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {PARTNERS.map((p) => (
          <PartnerLogoCard key={p.name} partner={p} />
        ))}
      </div>
    </section>
  );
}
