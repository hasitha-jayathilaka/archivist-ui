"use client";

/*
  TODO: drop real logo files into /public/images/supporters/:
    - nia.png
    - dimo.png
  TODO: confirm/expand the DIMO description with the actual programme or
  grant name once available.
*/

type Supporter = {
  name: string;
  role: string;
  desc: string;
  logo: string;
};

const SUPPORTERS: Supporter[] = [
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
];

function SupporterCard({ supporter }: { supporter: Supporter }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      <div className="aspect-[16/10] bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center">
        <img
          src={supporter.logo}
          alt={`${supporter.name} logo`}
          className="max-h-[70%] max-w-[70%] object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "block";
          }}
        />
        <div style={{ display: "none" }} className="text-sm font-medium text-black/50">
          {supporter.name}
        </div>
      </div>
      <div className="p-5">
        <div className="text-sm font-semibold">{supporter.name}</div>
        <div className="mt-1 text-xs text-black/60">{supporter.role}</div>
        <p className="mt-3 text-sm text-black/70 leading-relaxed">{supporter.desc}</p>
      </div>
    </div>
  );
}

export default function Supporters() {
  return (
    <section id="supporters" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Supporters</h2>
      <p className="mt-2 text-sm text-black/70 max-w-2xl">
        Institutions and organisations backing the studio's research and commercialisation
        pathway.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {SUPPORTERS.map((s) => (
          <SupporterCard key={s.name} supporter={s} />
        ))}
      </div>
    </section>
  );
}
