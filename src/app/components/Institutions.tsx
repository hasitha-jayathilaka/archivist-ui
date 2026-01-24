import { ArrowRight, Building2, MapPinned, Users, Landmark } from "lucide-react";

const PartnerCard = ({ icon: Icon, title, desc }: any) => (
  <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-5">
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-2xl bg-black/5 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm font-semibold">{title}</div>
    </div>
    <p className="mt-3 text-sm text-black/70 leading-relaxed">{desc}</p>
  </div>
);

export default function Institutions() {
  return (
    <section id="institutional" className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">For institutions</h2>
          <p className="mt-2 text-sm text-black/70 leading-relaxed">
            Deploy historically accurate immersive environments for exhibitions, public engagement, cultural diplomacy, and tourism showcases -
            powered by game technology for scale and accessibility.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/?type=demo#contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
            >
              Request Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#partners"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
            >
              Partnership Pathways
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <PartnerCard
            icon={Building2}
            title="Museums & Archives"
            desc="Immersive exhibits, contextual storytelling, digital preservation layers, and guided visitor journeys."
          />
          <PartnerCard
            icon={MapPinned}
            title="Cities & Tourism"
            desc="Digital heritage showcases, inbound interest, pre-visit engagement, and cultural districts accessible worldwide."
          />
          <PartnerCard
            icon={Users}
            title="Public Installations"
            desc="On-site VR stations, events, traveling exhibitions, and hybrid activations for cultural engagement."
          />
          <PartnerCard
            icon={Landmark}
            title="Cultural Diplomacy"
            desc="Share cultural memory across borders through curated, historically grounded immersive worlds."
          />
        </div>
      </div>
    </section>
  );
}
