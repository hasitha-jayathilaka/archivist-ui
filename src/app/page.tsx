"use client";

import React from "react";
import { ArrowRight, Globe, Landmark, BookOpen, Play, Layers, CheckCircle2 } from "lucide-react";

const Pillar = ({ icon: Icon, title, desc }: any) => (
  <div className="rounded-2xl bg-white/60 backdrop-blur border border-black/5 shadow-sm p-5 hover:shadow-md transition">
    <div className="h-11 w-11 rounded-2xl bg-black/5 flex items-center justify-center">
      <Icon className="h-5 w-5" />
    </div>
    <div className="mt-4">
      <div className="text-sm font-semibold tracking-wide uppercase text-black/70">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-black/70">{desc}</p>
    </div>
  </div>
);

const GalleryCard = ({ label }: any) => (
  <button className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition">
    <div className="aspect-[4/3] bg-gradient-to-br from-black/5 to-black/10" />
    <div className="absolute inset-0 p-4 flex items-end">
      <div className="rounded-xl bg-white/70 backdrop-blur px-3 py-2 border border-black/10">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs text-black/60">Explore →</div>
      </div>
    </div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/5" />
  </button>
);

const Stat = ({ title, desc }: any) => (
  <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-5">
    <div className="flex items-center gap-2">
      <CheckCircle2 className="h-5 w-5" />
      <div className="text-sm font-semibold">{title}</div>
    </div>
    <p className="mt-2 text-sm text-black/70">{desc}</p>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f3ee] via-white to-[#f7f3ee] text-black">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-black text-white flex items-center justify-center font-bold">A</div>
            <div>
              <div className="text-sm font-semibold leading-none">THE ARCHIVIST</div>
              <div className="text-xs text-black/60">Culture-Tech • VR • Heritage</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
            <a className="hover:text-black" href="#worlds">Worlds</a>
            <a className="hover:text-black" href="#how">How it works</a>
            <a className="hover:text-black" href="#partners">Partners</a>
            <a className="hover:text-black" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-black/10 bg-white hover:bg-black/5 transition">
              Explore <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition">
              Request VR Demo <Play className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-black/70">
                <Layers className="h-4 w-4" />
                Rebuilding cultural memory as explorable worlds
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                Where art, place and history become <span className="underline decoration-black/20">walkable</span>.
              </h1>

              <p className="mt-4 text-base md:text-lg text-black/70 leading-relaxed max-w-xl">
                A Culture-Tech & VR platform that reconstructs heritage environments from paintings, letters, maps and archives — designed for players, educators, museums and tourism partners.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm bg-black text-white hover:opacity-90 transition">
                  Request a VR Demo <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm border border-black/10 bg-white hover:bg-black/5 transition">
                  Explore the Worlds <Globe className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 text-xs text-black/60">
                Built in Unreal Engine • VR-ready prototypes • Institutional demonstrations available
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                <div className="aspect-[16/10] bg-gradient-to-br from-black/5 via-black/10 to-black/5" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex gap-2">
                    <span className="rounded-full bg-white/70 backdrop-blur border border-black/10 px-3 py-1 text-xs">Yellow House</span>
                    <span className="rounded-full bg-white/70 backdrop-blur border border-black/10 px-3 py-1 text-xs">Night Café</span>
                    <span className="rounded-full bg-white/70 backdrop-blur border border-black/10 px-3 py-1 text-xs">Gardens</span>
                  </div>
                  <div className="rounded-2xl bg-white/70 backdrop-blur border border-black/10 p-4 max-w-sm">
                    <div className="text-sm font-semibold">Immersive cultural district</div>
                    <p className="mt-1 text-xs text-black/70 leading-relaxed">
                      Replace this area with a cinematic loop or screenshot collage from your current prototype.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          <Pillar icon={BookOpen} title="Art" desc="Iconic works become navigable worlds, with contextual learning built in." />
          <Pillar icon={Landmark} title="Place" desc="Historic streets, cafés, gardens and landmarks reconstructed from sources." />
          <Pillar icon={Globe} title="Story" desc="Narrative journeys that create emotional connection to real human history." />
        </div>
      </section>

      {/* Worlds Gallery */}
      <section id="worlds" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our worlds</h2>
        <p className="mt-2 text-sm text-black/70">Cultural districts designed for exploration, education, and tourism engagement.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GalleryCard label="Artist’s House" />
          <GalleryCard label="Historic Café" />
          <GalleryCard label="Garden District" />
          <GalleryCard label="Street & Square" />
          <GalleryCard label="Interior Spaces" />
          <GalleryCard label="Night Scene" />
        </div>
      </section>

      {/* Status */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Where we are now</h2>
        <p className="mt-2 text-sm text-black/70">Working prototypes you can experience today.</p>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-black/70">
          <CheckCircle2 className="h-4 w-4" />
          Validated working prototypes with institutional demonstrations (TRL 6–7)
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Stat title="VR environments built" desc="Navigable districts with locomotion and interactions." />
          <Stat title="Interactive prototype running" desc="Unreal Engine demo ready for presentations." />
          <Stat title="Institutional demos underway" desc="Prepared for cultural partnerships and showcases." />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="text-sm font-semibold">THE ARCHIVIST</div>
          <p className="mt-2 text-sm text-black/70 leading-relaxed max-w-sm">
            A Culture-Tech & VR initiative turning heritage into explorable worlds.
          </p>
          <p className="mt-4 text-sm text-black/70">
            Email: <span className="font-medium">info@thearchivistgame.com</span>
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-black/50">
          © {new Date().getFullYear()} Yellow House Productions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
