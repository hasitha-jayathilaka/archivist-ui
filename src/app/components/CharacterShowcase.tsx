"use client";

import React, { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Stage } from "@react-three/drei";
import { RotateCw, Lock, Play } from "lucide-react";

/* ---------- Small UI tags ---------- */

function RotatableTag({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-2 text-xs text-black/70 shadow-sm " +
        className
      }
      aria-label="Rotatable model. Drag to rotate."
    >
      <RotateCw className="h-4 w-4" />
      <span className="font-medium">Rotatable</span>
      <span className="text-black/50">-</span>
      <span>Drag to rotate</span>
    </div>
  );
}

function EvidenceTag({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-2 text-xs text-black/70 shadow-sm " +
        className
      }
      aria-label="Evidence-bound reconstruction"
    >
      <Lock className="h-4 w-4" />
      <span className="font-medium">Evidence-bound reconstruction</span>
    </div>
  );
}

/* ---------- 3D Model ---------- */

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} scale={1} />;
}

function Loader() {
  return (
    <Html center>
      <div className="rounded-xl border border-black/10 bg-white/80 px-4 py-2 text-xs text-black/70 shadow-sm">
        Loading 3D model...
      </div>
    </Html>
  );
}

/* ---------- Main Section ---------- */

export default function CharacterShowcase() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showClip, setShowClip] = useState(false);

  // ASCII-only titles to avoid Windows encoding corruption issues
  const refImages = useMemo(
    () => [
      {
        src: "/images/references/ginoux-01.jpg",
        title: "Vincent van Gogh - Portrait of Joseph-Michel Ginoux",
        desc: "Primary facial reference defining bone structure, gaze, and expressive features.",
      },
      {
        src: "/images/references/ginoux-02.jpg",
        title: "Paul Gauguin - Portrait of Joseph-Michel Ginoux",
        desc: "Secondary profile study informing side-face proportions and facial volume.",
      },
      {
        src: "/images/references/ginoux-03.jpg",
        title: "Vincent van Gogh - Cafe de la Gare",
        desc: "Attire, posture, and period costume cues derived from the cafe setting.",
      },
    ],
    []
  );

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
        <div className="p-7 md:p-10">
          {/* Title */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-black/70 w-fit">
              Character reconstruction - Arles (1888)
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Meet Joseph Ginoux - rebuilt from paintings, not imagination.
            </h2>

            <p className="text-sm md:text-base text-black/70 leading-relaxed max-w-3xl">
              A research-led character pipeline translating archival visual evidence into a walkable, explorable presence.
              Below: the primary paintings that governed the reconstruction, alongside an interactive 3D model.
            </p>
          </div>

          {/* Content grid */}
          <div className="mt-8 grid lg:grid-cols-12 gap-6 items-start">
            {/* 3D Viewer */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
                {/* Top tags */}
                <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
                  <RotatableTag />
                  <EvidenceTag />
                </div>

                {/* Canvas area */}
                <div className="h-[360px] sm:h-[420px] lg:h-[520px] bg-gradient-to-br from-black/5 via-black/10 to-black/5">
                  <Canvas
                    camera={{ position: [0, 1.2, 4], fov: 42, near: 0.1, far: 200 }}
                    onPointerDown={() => setHasInteracted(true)}
                  >
                    <Suspense fallback={<Loader />}>
                      <Stage adjustCamera intensity={0.9} environment="city" shadows={false}>
                        <Model url="/models/joseph-ginoux.glb" />
                      </Stage>
                    </Suspense>

                    <OrbitControls enablePan={false} enableZoom rotateSpeed={0.9} zoomSpeed={0.9} />
                  </Canvas>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between gap-3 border-t border-black/10 bg-white/70 backdrop-blur px-4 py-3">
                  <RotatableTag />
                  <div className="text-xs text-black/60">
                    {hasInteracted ? "Scroll to zoom" : "Tip: drag to rotate - scroll to zoom"}
                  </div>
                </div>
              </div>

              {/* Evidence note (no file paths) */}
              <div className="mt-3 text-xs text-black/60 leading-relaxed flex items-start gap-2">
                <Lock className="h-3 w-3 mt-[2px]" />
                <span>
                  Evidence-bound reconstruction: proportions and features constrained by documented primary visual sources.
                </span>
              </div>

              {/* In-engine turnaround clip */}
              <div className="mt-4 relative overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm">
                {showClip ? (
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube-nocookie.com/embed/WA9ymcwiiRU?autoplay=1&rel=0&modestbranding=1"
                      title="Joseph Ginoux - in-engine turnaround"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setShowClip(true)}
                    className="group relative block w-full aspect-video"
                  >
                    <img
                      src="/images/references/ginoux-01.jpg"
                      alt="Joseph Ginoux in-engine turnaround"
                      className="h-full w-full object-cover opacity-70 group-hover:opacity-80 transition"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
                      <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                        <Play className="h-5 w-5 ml-0.5" />
                      </div>
                    </div>
                  </button>
                )}
                <div className="px-4 py-2 text-xs text-white/70 bg-black">
                  Joseph Ginoux - in-engine capture
                </div>
              </div>
            </div>

            {/* Reference paintings */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-black/10 bg-white shadow-sm lg:h-[520px] overflow-hidden flex flex-col">
                <div className="p-5 border-b border-black/10">
                  <div className="text-sm font-semibold">Reference paintings</div>
                  <p className="mt-1 text-xs text-black/60">
                    Primary visual sources informing the character reconstruction.
                  </p>
                </div>

                <div className="p-5 pt-4 overflow-y-auto pr-2">
                  <div className="grid gap-4">
                    {refImages.map((img) => (
                      <div
                        key={img.src}
                        className="rounded-2xl border border-black/10 bg-white overflow-hidden"
                      >
                        <div className="aspect-[16/10] bg-black/5">
                          <img
                            src={img.src}
                            alt={img.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Force text area to always render */}
                        <div className="border-t border-black/10 p-4">
                          <div className="text-sm font-semibold leading-snug">
                            {img.title}
                          </div>
                          <div className="mt-1 text-xs text-black/70 leading-relaxed">
                            {img.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing credibility line */}
          <div className="mt-8 text-xs text-black/60">
            Designed for institutional deployment across museums, education platforms, and research-led cultural exhibitions.
          </div>
        </div>
      </div>
    </section>
  );
}

useGLTF.preload("/models/joseph-ginoux.glb");
