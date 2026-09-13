"use client";

import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

/* ---------- Helpers ---------- */

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

type UpdateItem = {
  date: string; // ISO string
  title: string;
  body: string;
  tag?: string;
  href?: string; // optional link
};

/* ---------- Data (edit these) ---------- */

/*
  TODO: add hrefs (announcement posts, articles, press links) once
  available for each item below, and keep adding new entries here as
  updates happen — most recent first.
*/
const UPDATES: UpdateItem[] = [
  {
    date: "2026-09-16",
    tag: "Event",
    title: "SAARC Cultural Centre workshop",
    body:
      "Presented \"Fair Attribution, Shared Benefit\" to SAARC delegates, combining Linseed's attribution infrastructure with Helixra as a working proof point.",
  },
  {
    date: "2026-09-08",
    tag: "Research",
    title: "Paper presented at ICNATLIB 2026",
    body:
      "Presented The Archivist's reconstruction methodology at the National Library of Sri Lanka's 5th International Research Conference.",
  },
  {
    date: "2026-08-05",
    tag: "Research",
    title: "Paper published and presented at ITRA Zeitgeist 2026",
    body:
      "Helixra's paper on preservation and modernisation of traditional Sri Lankan board games was peer-reviewed and presented in Augsburg, Germany.",
  },
  {
    date: "2026-07-16",
    tag: "Partnership",
    title: "Nanotek named official technology partner",
    body:
      "Nanotek joined as the official technology partner supporting the studio's hardware and technical infrastructure.",
  },
  {
    date: "2026-06-24",
    tag: "Membership",
    title: "Joined LEXRA",
    body:
      "Yellow House Productions joined the Location-Based XR Association (LEXRA) as an operator member — the first operator from Sri Lanka to join.",
  },
  {
    date: "2026-01-18",
    tag: "Build",
    title: "Joseph Ginoux character reconstruction (Arles, 1888)",
    body:
      "Added an evidence-bound 3D character showcase built from primary painting references, with an interactive rotatable model and reference panel.",
  },
];

/* ---------- UI ---------- */

function UpdateCard({ item }: { item: UpdateItem }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-5 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-black/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(item.date)}
            </span>
            {item.tag ? (
              <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1">
                {item.tag}
              </span>
            ) : null}
          </div>

          <div className="mt-3 text-sm font-semibold leading-snug">
            {item.title}
          </div>
          <p className="mt-2 text-sm text-black/70 leading-relaxed">
            {item.body}
          </p>
        </div>

        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-xs text-black/70 hover:bg-black/5 transition"
          >
            View <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function SocialUpdates() {
  return (
    <section id="news" className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            News
          </h2>
          <p className="mt-2 text-sm text-black/70 max-w-2xl">
            Recent updates, research milestones, and partnership news from the studio.
          </p>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
        >
          Share a partnership inquiry <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {UPDATES.map((item) => (
          <UpdateCard key={`${item.date}-${item.title}`} item={item} />
        ))}
      </div>

      <div className="mt-6 text-xs text-black/60 leading-relaxed">
        Tip: update the <span className="font-medium">UPDATES</span> array in{" "}
        <span className="font-medium">SocialUpdates.tsx</span> whenever you post
        a new milestone, release, or institutional demo progress note.
      </div>
    </section>
  );
}
