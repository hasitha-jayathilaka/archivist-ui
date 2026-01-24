import { ArrowRight } from "lucide-react";

export default function Partnerships() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-6 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Partnerships</h2>
            <p className="mt-3 text-sm text-black/70 leading-relaxed">
              We collaborate with museums, archives, cities, tourism boards, universities, and aligned investors to build the next layer of
              cultural access - with pilots, deployments, and long-term world expansion.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
  href="/?type=demo#contact"
  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm bg-black text-white hover:opacity-90 transition"
>
  Request Demo <ArrowRight className="h-4 w-4" />
</a>

<a
  href="/?type=pilot#contact"
  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
>
  Discuss a Pilot
</a>
            </div>

            <div className="mt-5 text-xs text-black/60">
              Typical next step: a short walkthrough + pilot scope (venue, audience, duration, hardware).
            </div>
          </div>

          <div className="md:col-span-6 relative overflow-hidden">
  <img
    src="/images/partnerships/exhibit.jpg"
    alt="Institutional partnership deployment"
    className="h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
</div>
        </div>
      </div>
    </section>
  );
}
