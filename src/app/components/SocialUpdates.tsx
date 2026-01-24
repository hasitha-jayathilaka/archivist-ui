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

const UPDATES: UpdateItem[] = [
  {
    date: "2026-01-18",
    tag: "Build",
    title: "Joseph Ginoux character reconstruction (Arles, 1888)",
    body:
      "Added an evidence-bound 3D character showcase built from primary painting references, with an interactive rotatable model and reference panel.",
  },
  {
    date: "2026-01-12",
    tag: "Worlds",
    title: "Worlds in Development tiles updated",
    body:
      "Refined the Arles district tiles to focus on institutional deployment zones and public exploration, with clearer naming and improved layout.",
  },
  {
    date: "2026-01-06",
    tag: "Platform",
    title: "Institution-first homepage architecture",
    body:
      "Restructured the homepage into modular components (Hero, Institutions, Education, Readiness, Team, Partnerships) for easier iteration and updates.",
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
    <section id="social" className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Social updates
          </h2>
          <p className="mt-2 text-sm text-black/70 max-w-2xl">
            Ongoing progress notes, releases, and field updates from the studio.
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
