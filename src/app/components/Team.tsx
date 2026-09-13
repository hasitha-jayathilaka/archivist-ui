"use client";

import React from "react";
import { ExternalLink, Linkedin } from "lucide-react";

/*
  Trimmed per the site-split plan: full studio history, the CTO card,
  and the "Studio owner" plaque now belong on a future standalone
  Yellow House Productions site. This section keeps only a title
  credit and the two named founders, for buyers who want a human face
  without learning the company's structure.
*/

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

const FounderCard = ({
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

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs text-black/50 uppercase tracking-widest">
        A Yellow House Productions title
      </div>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Founders</h2>

      <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-3xl">
        <FounderCard
          name="Hasitha"
          role="Founder"
          image="/images/team/hasitha.jpg"
          desc="Founder of Archivist Into the Artverse™. Leads vision, research direction, and institutional partnerships."
          links={[
            { href: "https://hasithajayathilaka.com/", icon: ExternalLink, label: "Portfolio" },
            { href: "https://www.linkedin.com/in/hsjayathilaka/", icon: Linkedin, label: "LinkedIn" },
          ]}
        />

        <FounderCard
          name="Prabha"
          role="Co-founder"
          image="/images/team/prabha.jpg"
          desc="Co-founder. Oversees creative direction and artistic coherence across the reconstructed world."
          links={[
            { href: "https://prabhahewage.art/", icon: ExternalLink, label: "Portfolio" },
            { href: "https://www.linkedin.com/in/prabhahewage/", icon: Linkedin, label: "LinkedIn" },
          ]}
        />
      </div>
    </section>
  );
}
