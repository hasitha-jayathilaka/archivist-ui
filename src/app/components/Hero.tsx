import {
  ArrowRight,
  Layers,
  Building2,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start lg:items-stretch">

          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-black/70">
              <Layers className="h-4 w-4" />
              Institutional cultural worlds built with game technology
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Heritage you can{" "}
              <span className="underline decoration-black/20">walk</span> - for
              institutions, classrooms, destinations, and players.
            </h1>

            <p className="mt-4 text-base md:text-lg text-black/70 leading-relaxed max-w-xl">
              A <span className="font-medium">research-led cultural world</span>{" "}
              reconstructed from paintings, letters, maps and archives - deployable by{" "}
              <span className="font-medium">
                museums, universities, tourism boards, and travel platforms
              </span>
              , and also released as a{" "}
              <span className="font-medium">
                narrative exploration game
              </span>{" "}
              for global audiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
  {/* Primary CTA */}
  <a
    href="/?type=demo#contact"
    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm bg-black text-white hover:opacity-90 transition"
  >
    Request Institutional Demo
    <ArrowRight className="h-4 w-4" />
  </a>

  {/* Secondary CTA */}
  <a
    href="/?type=partnership#contact"
    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
  >
    Partnership Inquiry
  </a>
</div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-black/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                <Building2 className="h-4 w-4" />
                Institutions • Education
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                <GraduationCap className="h-4 w-4" />
                Destinations • IFE
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                Public edition
              </span>
            </div>

            <div className="mt-4 text-xs text-black/60">
              Built in Unreal Engine • VR-ready prototypes • Institutional
              demonstrations available
            </div>
          </div>

          {/* RIGHT: VIDEO HERO CARD */}
          <div className="lg:col-span-6 h-full flex flex-col">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm flex-1">

              {/* Video container */}
              <div className="relative h-[300px] sm:h-[380px] lg:h-full lg:min-h-[560px] bg-black">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/videos/prototype.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              {/* Top chips */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                <div className="flex gap-2 flex-wrap">
                  <span className="rounded-full bg-white/80 backdrop-blur border border-black/10 px-3 py-1 text-xs">
                    Institutional Deployment
                  </span>
                  <span className="rounded-full bg-white/80 backdrop-blur border border-black/10 px-3 py-1 text-xs">
                    Research-led Reconstruction
                  </span>
                  <span className="rounded-full bg-white/80 backdrop-blur border border-black/10 px-3 py-1 text-xs">
                    VR + Desktop
                  </span>
                </div>
              </div>

            </div>

            {/* Scroll hint */}
            <div className="mt-4 flex items-center gap-2 text-xs text-black/60">
              <ChevronDown className="h-4 w-4" />
              Scroll for institutional deployment modes, readiness, and team.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
