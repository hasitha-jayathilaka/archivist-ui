import { BookOpen, Landmark, Globe } from "lucide-react";

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

export default function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid md:grid-cols-3 gap-4">
        <Pillar icon={BookOpen} title="Sources" desc="Paintings, letters, maps, archives and primary documents inform every build." />
        <Pillar icon={Landmark} title="Reconstruction" desc="Research-led worldbuilding that prioritizes historical and cultural accuracy." />
        <Pillar icon={Globe} title="Engagement" desc="Immersive environments institutions can deploy - and the public can explore." />
      </div>
    </section>
  );
}
