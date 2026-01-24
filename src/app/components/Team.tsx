"use client";

import React from "react";
import { ExternalLink, Linkedin } from "lucide-react";

/* ---------- Small UI blocks ---------- */

const LinkButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-xs text-black/70 hover:bg-black/5 transition"
  >
    <Icon className="h-4 w-4" />
    {label}
  </a>
);

const TeamCard = ({
  name,
  role,
  desc,
  image,
  links,
}: {
  name: string;
  role: string;
  desc: string;
  image?: string | null;
  links?: { href: string; icon: any; label: string }[];
}) => (
  <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
    <div className="aspect-[16/10] bg-gradient-to-br from-black/5 to-black/10 overflow-hidden">
      {image ? <img src={image} alt={name} className="w-full h-full object-cover" /> : null}
    </div>
    <div className="p-5">
      <div className="text-sm font-semibold">{name}</div>
      <div className="mt-1 text-xs text-black/60">{role}</div>
      <p className="mt-3 text-sm text-black/70 leading-relaxed">{desc}</p>

      {links?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((l) => (
            <LinkButton key={l.href} {...l} />
          ))}
        </div>
      ) : null}
    </div>
  </div>
);

const PartnerCard = ({
  name,
  role,
  desc,
  image,
}: {
  name: string;
  role: string;
  desc: string;
  image?: string | null;
}) => (
  <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
    <div className="aspect-[16/10] bg-gradient-to-br from-black/5 to-black/10 overflow-hidden flex items-center justify-center">
      {image ? (
        <img src={image} alt={name} className="max-h-[80%] max-w-[80%] object-contain" />
      ) : (
        <div className="text-xs text-black/40">Logo placeholder</div>
      )}
    </div>
    <div className="p-5">
      <div className="text-sm font-semibold">{name}</div>
      <div className="mt-1 text-xs text-black/60">{role}</div>
      <p className="mt-3 text-sm text-black/70 leading-relaxed">{desc}</p>
    </div>
  </div>
);

/* ---------- Main Section ---------- */

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-12">
      {/* ---------- Yellow House Productions ---------- */}
      <div className="mb-12">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left: Story */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Yellow House Productions
            </h2>

            <p className="mt-4 text-sm text-black/70 leading-relaxed max-w-3xl">
              <strong>Archivist Into the Artverse™</strong> was originally conceived and founded by{" "}
              <strong>Hasitha</strong> as an independent cultural research and world-building project.
            </p>

            <p className="mt-3 text-sm text-black/70 leading-relaxed max-w-3xl">
              During its early development, Hasitha met <strong>Prabha</strong>, and together they founded{" "}
              <strong>Yellow House Productions</strong> to formally carry the project forward as a studio-led initiative
              focused on art, history, and immersive technology.
            </p>

            <p className="mt-3 text-sm text-black/70 leading-relaxed max-w-3xl">
              As the project matured, Yellow House Productions expanded to include a{" "}
              <strong>Chief Technology Officer</strong>, strengthening its technical foundation while preserving the
              original creative and research vision behind <em>Archivist</em>.
            </p>

            <p className="mt-3 text-sm text-black/70 leading-relaxed max-w-3xl">
              While the core vision and direction remain in-house, Yellow House Productions collaborates with a
              distributed network of concept artists, technical artists, and sound designers through its development
              arm, <strong>The ROI Firm</strong>.
            </p>
          </div>

          {/* Right: Studio plaque (polished) */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
              <div className="p-5">
                <div className="text-xs text-black/60 uppercase tracking-widest">
                  Studio owner
                </div>

                {/* Tighter logo frame */}
                <div className="mt-4 rounded-2xl border border-black/10 bg-black/5 p-4 flex items-center justify-center">
                  <img
                    src="/images/brands/yellow-house-logo.png"
                    alt="Yellow House Productions logo"
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const fallback = document.getElementById("yh-logo-fallback");
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                  <div
                    id="yh-logo-fallback"
                    style={{ display: "none" }}
                    className="text-sm text-black/50 font-medium"
                  >
                    Yellow House Productions
                  </div>
                </div>

                <div className="mt-4 text-base font-semibold">
                  Yellow House Productions
                </div>
                <p className="mt-1 text-sm text-black/70 leading-relaxed">
                  Independent culture-tech studio founded by Hasitha and Prabha.
                </p>

                {/* Compact tags */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                  {["Culture-Tech", "EdTech", "VR + Desktop", "Research-led"].map((t) => (
                    <div
                      key={t}
                      className="rounded-xl border border-black/10 bg-white px-3 py-2 text-black/70 text-center"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Core Team ---------- */}
      <h3 className="text-xl font-semibold tracking-tight">Core team</h3>
      <p className="mt-2 text-sm text-black/70 max-w-2xl">
        Founders and leadership responsible for vision, research integrity, and long-term direction.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TeamCard
          name="Hasitha"
          role="Founder"
          image="/images/team/hasitha.jpg"
          desc="Founder of Archivist Into the Artverse™ and co-founder of Yellow House Productions. Leads vision, research direction, institutional partnerships, and long-term strategy across the studio and its cultural ecosystem."
          links={[
            { href: "https://hasithajayathilaka.com/", icon: ExternalLink, label: "Portfolio" },
            { href: "https://www.linkedin.com/in/hsjayathilaka/", icon: Linkedin, label: "LinkedIn" },
          ]}
        />

        <TeamCard
          name="Prabha"
          role="Co-founder"
          image="/images/team/prabha.jpg"
          desc="Co-founder of Yellow House Productions. Oversees creative direction, research-driven visual language, and artistic coherence across historically grounded worlds and institutional deployments."
          links={[
            { href: "https://prabhahewage.art/", icon: ExternalLink, label: "Portfolio" },
            { href: "https://www.linkedin.com/in/prabhahewage/", icon: Linkedin, label: "LinkedIn" },
          ]}
        />

        <TeamCard
          name="Chief Technology Officer"
          role="Engineering & Immersive Systems"
          image="/images/team/cto.jpg"
          desc="Responsible for technical architecture, immersive systems, and scalable deployment across VR and desktop platforms. Supports institutional reliability and performance."
        />
      </div>

      {/* ---------- Collaborators & Ecosystem Partners ---------- */}
      <h3 className="mt-12 text-xl font-semibold tracking-tight">
        Collaborators & ecosystem partners
      </h3>
      <p className="mt-2 text-sm text-black/70 max-w-2xl">
        Independent collaborators, advisors, and institutions contributing to research integrity, production workflows,
        and cultural authenticity.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PartnerCard
          name="Alain Amiel"
          role="Cultural & Historical Advisor - Arles"
          image="/images/advisors/alain-amiel.jpg"
          desc="Provides cultural and historical insight supporting the reconstruction of Arles (1888), contributing local context, historical accuracy, and interpretive depth."
        />

        <PartnerCard
          name="The ROI Firm"
          role="Development & Production Partner"
          image="/images/partners/roi-firm.png"
          desc="The ROI Firm supports Archivist Into the Artverse™ through production coordination, technical development workflows, and access to a global network of creative and technical specialists engaged on a project-by-project basis."
        />

        <PartnerCard
          name="Art Institute of Chicago"
          role="Permission Granted"
          image="/images/partners/art-institute-chicago.png"
          desc="Selected historical maps used in the Arles reconstruction are reproduced with permission from the Art Institute of Chicago, based on materials published in their archival collections."
        />
      </div>
    </section>
  );
}
