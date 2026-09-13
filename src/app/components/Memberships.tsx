"use client";

/*
  TODO: drop real logo files into /public/images/memberships/:
    - lexra.png
    - igda.png
*/

type Membership = {
  name: string;
  role: string;
  desc: string;
  logo: string;
};

const MEMBERSHIPS: Membership[] = [
  {
    name: "LEXRA",
    role: "Operator Member",
    logo: "/images/memberships/lexra.png",
    desc:
      "Yellow House Productions is an operator member of the Location-Based XR Association (LEXRA) — the first operator from Sri Lanka to join.",
  },
  {
    name: "IGDA",
    role: "Founder Member",
    logo: "/images/memberships/igda.png",
    desc:
      "Founder membership with the International Game Developers Association (IGDA).",
  },
];

function MembershipCard({ m }: { m: Membership }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      <div className="aspect-[16/10] bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center">
        <img
          src={m.logo}
          alt={`${m.name} logo`}
          className="max-h-[70%] max-w-[70%] object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "block";
          }}
        />
        <div style={{ display: "none" }} className="text-sm font-medium text-black/50">
          {m.name}
        </div>
      </div>
      <div className="p-5">
        <div className="text-sm font-semibold">{m.name}</div>
        <div className="mt-1 text-xs text-black/60">{m.role}</div>
        <p className="mt-3 text-sm text-black/70 leading-relaxed">{m.desc}</p>
      </div>
    </div>
  );
}

export default function Memberships() {
  return (
    <section id="memberships" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Memberships</h2>
      <p className="mt-2 text-sm text-black/70 max-w-2xl">
        Industry associations Yellow House Productions is affiliated with.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {MEMBERSHIPS.map((m) => (
          <MembershipCard key={m.name} m={m} />
        ))}
      </div>
    </section>
  );
}
