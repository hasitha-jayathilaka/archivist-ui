"use client";

/*
  Compact membership badges (smaller than the Partners/Supporters cards
  by design — this section is meant to read as a quick badge strip).

  Logo files expected at:
    /public/images/memberships/lexra.png
    /public/images/memberships/igda.png
*/

type Membership = {
  name: string;
  role: string;
  logo: string;
};

const MEMBERSHIPS: Membership[] = [
  {
    name: "LEXRA",
    role: "Operator Member",
    logo: "/images/memberships/lexra.png",
  },
  {
    name: "IGDA",
    role: "Founder Member",
    logo: "/images/memberships/igda.png",
  },
];

function MembershipBadge({ m }: { m: Membership }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white shadow-sm pl-2 pr-4 py-2">
      <div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center overflow-hidden shrink-0">
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
        <div style={{ display: "none" }} className="text-[9px] font-medium text-black/50">
          {m.name.slice(0, 3)}
        </div>
      </div>
      <div className="leading-tight">
        <div className="text-xs font-semibold">{m.name}</div>
        <div className="text-[11px] text-black/60">{m.role}</div>
      </div>
    </div>
  );
}

export default function Memberships() {
  return (
    <section id="memberships" className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-xl font-semibold tracking-tight">Memberships</h2>

      <div className="mt-4 flex flex-wrap gap-3">
        {MEMBERSHIPS.map((m) => (
          <MembershipBadge key={m.name} m={m} />
        ))}
      </div>
    </section>
  );
}
