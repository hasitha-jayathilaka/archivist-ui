import Link from "next/link";
import { CheckCircle2, Layers, Play } from "lucide-react";

export default function FooterContact() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-6">
            <div className="text-sm font-semibold">ARCHIVIST INTO THE ARTVERSE™</div>
            <p className="mt-2 text-sm text-black/70 leading-relaxed max-w-md">
              Research-led cultural worlds built for institutions - with a public exploration release.
            </p>

            <div className="mt-2 text-xs text-black/50">
              A title of Yellow House Productions.
            </div>

            <div className="mt-4 text-sm text-black/70">
              Email: <span className="font-medium">info@thearchivistgame.art</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-black/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                <CheckCircle2 className="h-4 w-4" />
                TRL 6-7
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                <Layers className="h-4 w-4" />
                Unreal Engine
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                <Play className="h-4 w-4" />
                VR + Desktop
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <a className="text-black/70 hover:text-black" href="#institutional">
                Doors
              </a>
              <a className="text-black/70 hover:text-black" href="#education">
                Education
              </a>
              <a className="text-black/70 hover:text-black" href="#readiness">
                Readiness (TRL)
              </a>
              <a className="text-black/70 hover:text-black" href="#research">
                Research
              </a>
              <a className="text-black/70 hover:text-black" href="#team">
                Team
              </a>
              <a className="text-black/70 hover:text-black" href="/?type=demo#contact">
                Request Demo
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-black/60">
              <Link className="hover:text-black" href="/terms">
                Terms & Conditions
              </Link>
              <Link className="hover:text-black" href="/privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-black/10 pt-6 text-xs text-black/55 leading-relaxed">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              © {year} Yellow House Productions. All rights reserved.
            </div>
            <div className="text-black/45">
              Archivist Into the Artverse™ is a trademark of Yellow House Productions.
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 max-w-4xl">
            Disclaimer: Archivist Into the Artverse™ is an independent research-led cultural project. Any references
            to historical artworks, locations, institutions, or archival materials are used for research, education,
            and reconstruction context. All third-party names and marks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
