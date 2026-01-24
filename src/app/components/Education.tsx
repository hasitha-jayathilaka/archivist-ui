import { ArrowRight } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7 p-7 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">For education</h3>
            <p className="mt-3 text-sm text-black/70 leading-relaxed">
              Place-based learning that students can walk through. We support guided tours, lesson overlays, and structured activities that align
              with institutional learning goals - without turning history into a lecture.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <div className="rounded-2xl bg-black/5 border border-black/10 p-4">
                <div className="text-sm font-semibold">Guided Mode</div>
                <div className="text-xs text-black/70 mt-1">Curated tours, educator pacing, chapter-based exploration.</div>
              </div>
              <div className="rounded-2xl bg-black/5 border border-black/10 p-4">
                <div className="text-sm font-semibold">Learning Layers</div>
                <div className="text-xs text-black/70 mt-1">Primary sources, context cards, and interactive learning prompts.</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
  href="/?type=education#contact"
  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
>
  Discuss an Education Pilot <ArrowRight className="h-4 w-4" />
</a>
              <a
                href="#readiness"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
              >
                View Readiness (TRL)
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative overflow-hidden">
  <img
    src="/images/education/classroom.jpg"
    alt="Immersive education environment"
    className="h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
</div>
        </div>
      </div>
    </section>
  );
}
