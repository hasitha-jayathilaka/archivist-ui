import { Building2, GraduationCap, Gamepad2 } from "lucide-react";

const ModeCard = ({ icon: Icon, title, desc }: any) => (
  <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4" />
      <div className="font-semibold text-sm">{title}</div>
    </div>
    <div className="text-xs text-white/80 mt-2 leading-relaxed">{desc}</div>
  </div>
);

export default function PublicRelease() {
  return (
    <section id="release" className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl border border-black/10 bg-black text-white overflow-hidden">
        <div className="p-8 md:p-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              An institutional platform - with a public game release
            </h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              The Archivist is designed first as an <span className="font-medium">institutional cultural platform</span> - enabling museums,
              archives, universities, and tourism bodies to deploy immersive environments for education, exhibitions, and public engagement.
            </p>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              These same worlds are also released as a <span className="font-medium">story-driven exploration game</span>, allowing global
              audiences to access culture through play and discovery - without compromising historical integrity.
            </p>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              <span className="font-medium">One research and world-building pipeline. Multiple deployment modes.</span>
            </p>
          </div>

          <div className="md:col-span-5 grid gap-3">
            <ModeCard
              icon={Building2}
              title="Institution Mode"
              desc="Exhibitions • showcases • on-site installations • curated visitor journeys."
            />
            <ModeCard
              icon={GraduationCap}
              title="Education Mode"
              desc="Guided tours • lesson layers • classroom prompts • curriculum-aligned modules."
            />
            <ModeCard
              icon={Gamepad2}
              title="Game Mode"
              desc="Exploration • narrative progression • collectibles • discovery-driven learning."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
