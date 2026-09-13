import { Building2, GraduationCap, MapPinned, Plane, Gamepad2, ArrowRight } from "lucide-react";

const Door = ({ icon: Icon, title, buyer, desc }: any) => (
  <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-5">
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-2xl bg-black/5 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-[11px] text-black/50">{buyer}</div>
      </div>
    </div>
    <p className="mt-3 text-sm text-black/70 leading-relaxed">{desc}</p>
  </div>
);

export default function Institutions() {
  return (
    <section id="institutional" className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">One world. Five doors.</h2>
        <p className="mt-2 text-sm text-black/70 leading-relaxed">
          Archivist is one evidence-bound reconstruction, deployed through several professional
          pathways - plus a public edition for players.
        </p>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Door
          icon={Building2}
          title="Culture & institutions"
          buyer="Museums, archives"
          desc="Exhibition, on-site VR, and guided visitor journeys built around the reconstructed world."
        />
        <Door
          icon={GraduationCap}
          title="Education"
          buyer="Universities, schools"
          desc="Guided mode, lesson layers, and curriculum-aligned exploration for classrooms."
        />
        <Door
          icon={MapPinned}
          title="Destinations"
          buyer="Cities, tourism boards, DMOs"
          desc="Pre-visit experiences, place branding, and a cultural district visitors can enter before they travel."
        />
        <Door
          icon={Plane}
          title="IFE & travel media"
          buyer="Airlines, lounges, travel platforms"
          desc="Short, high-quality cultural segments produced from the same reconstructed world."
        />
        <Door
          icon={Gamepad2}
          title="Public edition"
          buyer="Players"
          desc="The same build, released as a narrative exploration game for global audiences."
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/?type=demo#contact"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
        >
          Request Demo <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="/?type=partnership#contact"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
        >
          Discuss Destinations / IFE / Partnership
        </a>
      </div>
    </section>
  );
}
