"use client";

import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";

/*
  Each tile can optionally carry a short, current in-engine walkthrough
  (youtube-nocookie embed, click-to-play - never autoplaying on load,
  and only one plays at a time). Tiles without a videoId just show the
  still, unchanged.
*/

const GalleryCard = ({
  label,
  image,
  videoId,
  caption,
}: {
  label: string;
  image: string;
  videoId?: string;
  caption?: string;
}) => {
  const [playing, setPlaying] = useState(false);

  if (playing && videoId) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm">
        <div className="aspect-[5/3]">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {caption ? (
          <div className="px-4 py-2 text-xs text-white/70 bg-black">{caption}</div>
        ) : null}
      </div>
    );
  }

  return (
    <button
      onClick={() => videoId && setPlaying(true)}
      className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition text-left"
    >
      <div className="aspect-[5/3] overflow-hidden bg-gradient-to-br from-black/5 to-black/10">
        {image ? (
          <img
            src={image}
            alt={label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : null}
      </div>

      {videoId ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition">
          <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
            <Play className="h-5 w-5 ml-0.5" />
          </div>
        </div>
      ) : null}

      <div className="absolute inset-0 p-4 flex items-end">
        <div className="rounded-xl bg-white/70 backdrop-blur px-3 py-2 border border-black/10">
          <div className="text-sm font-semibold">{label}</div>
          <div className="text-xs text-black/60">{videoId ? "Watch walkthrough" : "Explore"} <ArrowRight className="inline h-3 w-3" /></div>
        </div>
      </div>
    </button>
  );
};

export default function WorldsInDevelopment() {
  return (
    <section id="worlds" className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Worlds in development</h2>
          <p className="mt-2 text-sm text-black/70">
            Cultural districts designed for institutional deployment and public exploration.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
        >
          Request a walkthrough <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <GalleryCard
          label="Historic Café & Social Space"
          image="/images/worlds/cafe.jpg"
          videoId="kFBZ_071SHU"
          caption="Night Café - Arles, 1888 - in-engine capture"
        />
        <GalleryCard
          label="Domestic & Interior Spaces"
          image="/images/worlds/interiors.jpg"
          videoId="u5vXSwrXu38"
          caption="Bedroom in Arles - in-engine capture"
        />
        <GalleryCard label="Garden Quarter" image="/images/worlds/garden.jpg" />
      </div>
    </section>
  );
}
