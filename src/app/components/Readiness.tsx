import { CheckCircle2 } from "lucide-react";

const Stat = ({ title, desc }: any) => (
  <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-5">
    <div className="flex items-center gap-2">
      <CheckCircle2 className="h-5 w-5" />
      <div className="text-sm font-semibold">{title}</div>
    </div>
    <p className="mt-2 text-sm text-black/70">{desc}</p>
  </div>
);

export default function Readiness() {
  return (
    <section id="readiness" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Readiness</h2>
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

      <div className="mt-6 rounded-2xl border border-black/10 bg-white shadow-sm p-5">
        <div className="text-sm font-semibold">Why game technology?</div>
        <p className="mt-2 text-sm text-black/70 leading-relaxed">
          Built using game engines to achieve scale, accessibility, and engagement -{" "}
          <span className="font-medium">not positioned as a traditional entertainment-only game</span>.
        </p>
      </div>
    </section>
  );
}
