"use client";

import { FileText, ArrowUpRight } from "lucide-react";

/* ---------- Data (edit these) ---------- */
/*
  Only papers about THIS product (the Archivist reconstruction method)
  live here. ITRA Zeitgeist 2026 (Helixra/traditional games) and the
  SAARC Cultural Centre paper (Linseed/Helixra attribution) are about
  Yellow House Productions' other work, not Archivist - they belong on
  a future Yellow House Productions site instead.

  Cover image: drop an A4-ratio image into /public/images/research/ as:
    - icnatlib.jpg
  Recommended export size: ~1000x1414px (A4 ratio, 1:1.414), JPG or PNG,
  kept under ~500KB. Until the file exists, the card just shows a
  placeholder icon instead of breaking.

  Add an `abstract` field once you have the real abstract text - the
  paragraph only renders when it's present.
*/

type Paper = {
  venue: string;
  location: string;
  date: string;
  title: string;
  abstract?: string;
  image: string;
  href?: string;
};

const PAPERS: Paper[] = [
  {
    venue: "ICNATLIB 2026",
    location: "National Library of Sri Lanka, Colombo",
    date: "8 September 2026",
    title:
      "From Archive to Atmosphere: A Multi-Source Methodology for Reconstructing Documentary Cultural Heritage in Immersive Virtual Reality",
    image: "/images/research/icnatlib.jpg",
    href: "https://www.natlib.lk/ICNATLIB2026/",
  },
];

/* ---------- UI ---------- */

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="aspect-[1/1.414] bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center overflow-hidden">
        <img
          src={paper.image}
          alt={`${paper.title} - cover`}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div
          style={{ display: "none" }}
          className="h-full w-full items-center justify-center text-black/30"
        >
          <FileText className="h-10 w-10" />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-black/60">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 font-medium text-black/70">
            <FileText className="h-3.5 w-3.5" />
            {paper.venue}
          </span>
          <span>{paper.date}</span>
        </div>

        <div className="mt-3 text-sm font-semibold leading-snug">{paper.title}</div>
        <div className="mt-1 text-xs text-black/60">{paper.location}</div>

        {paper.abstract ? (
          <p className="mt-3 text-sm text-black/70 leading-relaxed flex-1">{paper.abstract}</p>
        ) : (
          <div className="flex-1" />
        )}

        {paper.href ? (
          <a
            href={paper.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-xs text-black/70 hover:bg-black/5 transition self-start"
          >
            Event page <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Research & publications
      </h2>
      <p className="mt-2 text-sm text-black/70 max-w-2xl">
        Peer-reviewed and conference-presented research behind Archivist&apos;s reconstruction
        methodology.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PAPERS.map((paper) => (
          <PaperCard key={paper.title} paper={paper} />
        ))}
      </div>
    </section>
  );
}
