"use client";

import React from "react";
import { Play, ChevronDown } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <a
            href="#top"
            className="h-10 w-10 rounded-xl bg-black/5 flex items-center justify-center overflow-hidden"
            aria-label="Go to top"
          >
            <img
              src="/images/brands/archivist-logo.png"
              alt="Archivist Into the Artverse logo"
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </a>

          {/* Title */}
          <div className="leading-tight">
            <div className="text-sm font-semibold leading-none">
              Archivist Into the Artverse™
            </div>
            <div className="text-xs text-black/60">
              Culture-Tech • EdTech • VR • Public Game Release
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
          <a className="hover:text-black inline-flex items-center gap-1" href="#institutional">
            Platform <ChevronDown className="h-4 w-4 opacity-70" />
          </a>
          <a className="hover:text-black" href="#institutional">
            Institutions
          </a>
          <a className="hover:text-black" href="#team">
            Team
          </a>
          <a className="hover:text-black" href="#readiness">
            Readiness
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
          >
            Request Institutional Demo
            <Play className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
