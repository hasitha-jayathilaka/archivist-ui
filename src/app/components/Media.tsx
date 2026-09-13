"use client";

/*
  "As featured on" — press logos + clickable headlines, styled the same
  way as the Press and Media Features section on hasithajayathilaka.com.

  Drop logo files into /public/images/press/ as:
    - daily-mirror.png
    - daily-news.png
    - ada-derana.png

  Until a logo file exists, the card falls back to showing the outlet
  name as text instead of breaking.
*/

type PressItem = {
  outlet: string;
  headline: string;
  href: string;
  logo: string;
};

const PRESS_ITEMS: PressItem[] = [
  {
    outlet: "Daily Mirror",
    headline: "Yellow House Productions unveils HELIXRA",
    href: "https://www.dailymirror.lk/print/business-news/Yellow-House-Productions-unveils-HELIXRA/273-345956",
    logo: "/images/press/daily-mirror.png",
  },
  {
    outlet: "Daily News",
    headline: "Reimagining heritage in the digital age",
    href: "https://dailynews.lk/2026/07/02/features/1019450/reimagining-heritage-in-the-digital-age/",
    logo: "/images/press/daily-news.png",
  },
  {
    outlet: "Ada Derana Biz",
    headline: "Yellow House partners with Nanotek to advance Sri Lanka's culture-tech sector",
    href: "https://bizenglish.adaderana.lk/yellow-house-partners-with-nanotek-to-advance-sri-lankas-culture-tech-sector/",
    logo: "/images/press/ada-derana.png",
  },
];

function PressCard({ item }: { item: PressItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden hover:shadow-md transition flex flex-col"
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center">
        <img
          src={item.logo}
          alt={`${item.outlet} logo`}
          className="max-h-[60%] max-w-[70%] object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "block";
          }}
        />
        <div style={{ display: "none" }} className="text-sm font-medium text-black/50">
          {item.outlet}
        </div>
      </div>
      <div className="p-5 flex-1">
        <div className="text-xs text-black/60">{item.outlet}</div>
        <div className="mt-1 text-sm font-semibold leading-snug">{item.headline}</div>
      </div>
    </a>
  );
}

export default function Media() {
  return (
    <section id="media" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">As featured on</h2>
      <p className="mt-2 text-sm text-black/70 max-w-2xl">
        Press and media coverage of Yellow House Productions.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRESS_ITEMS.map((item) => (
          <PressCard key={item.href} item={item} />
        ))}
      </div>
    </section>
  );
}
