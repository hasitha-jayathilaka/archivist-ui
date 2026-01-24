import Link from "next/link";

type Btn = {
  label: string;
  href: string;
  note?: string;
  primary?: boolean;
  external?: boolean;
};

const buttons: Btn[] = [
  {
    label: "Watch the VR Demo",
    href: "https://www.youtube.com/",
    primary: true,
    external: true,
    note: "2–3 mins",
  },
  { label: "View Case Studies", href: "/case-studies", note: "Proof of work" },
  { label: "Project Deck (PDF)", href: "/deck.pdf", external: true, note: "Investor-ready" },
  { label: "Contact", href: "#contact", note: "Partnerships / Funding" },
];

export default function PortfolioButtons() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {buttons.map((b) => {
          const base =
            "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition border";
          const primary =
            "bg-white text-black border-white hover:opacity-90";
          const secondary =
            "bg-transparent text-white border-white/20 hover:border-white/40 hover:bg-white/5";

          const cls = `${base} ${b.primary ? primary : secondary}`;

          const content = (
            <div className="flex flex-col leading-tight">
              <span>{b.label}</span>
              {b.note ? <span className="text-xs opacity-70">{b.note}</span> : null}
            </div>
          );

          if (b.external) {
            return (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className={cls}
              >
                {content}
              </a>
            );
          }

          // App Router supports Link with hash anchors too
          return (
            <Link key={b.label} href={b.href} className={cls}>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
