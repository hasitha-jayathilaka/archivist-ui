import { ArrowRight } from "lucide-react";

const GalleryCard = ({ label, image }: any) => (
  <button className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition text-left">
    <div className="aspect-[5/3] overflow-hidden bg-gradient-to-br from-black/5 to-black/10">
      {image ? (
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : null}
    </div>

    <div className="absolute inset-0 p-4 flex items-end">
      <div className="rounded-xl bg-white/70 backdrop-blur px-3 py-2 border border-black/10">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs text-black/60">Explore →</div>
      </div>
    </div>

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/5" />
  </button>
);

export default function WorldsInDevelopment() {
  return (
    <section id="worlds" className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Worlds in development</h2>
          <p className="mt-2 text-sm text-black/70">
            Cultural districts designed for institutional deployment and public exploration.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-black/10 bg-white hover:bg-black/5 transition"
        >
          Request a walkthrough <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <GalleryCard label="Historic Café & Social Space" image="/images/worlds/cafe.jpg" />
<GalleryCard label="Domestic & Interior Spaces" image="/images/worlds/interiors.jpg" />
<GalleryCard label="Garden Quarter" image="/images/worlds/garden.jpg" />
      </div>

      <div className="mt-4 text-xs text-black/60">
        Tip: put images in <span className="font-medium">/public/images</span> and set each card’s{" "}
        <span className="font-medium">image</span> prop (e.g.{" "}
        <span className="font-medium">image=&quot;/images/worlds/cafe.jpg&quot;</span>).
      </div>
    </section>
  );
}
