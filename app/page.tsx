"use client";

import Badge from "@/components/ui/Badge";
import GlowLine from "@/components/GlowLine";
import Reveal from "@/components/Reveal";
import SocialLink from "@/components/ui/SocialLink";
import Typewriter from "@/components/Typewriter";
import { profile } from "@/data";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const section = sessionStorage.getItem("scrollTo");
    if (section) {
      sessionStorage.removeItem("scrollTo");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col overflow-hidden"
      >
        <GlowLine from="left" className="top-[72px]" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 md:px-6 text-center">
          <div className="max-w-3xl w-full space-y-6">

            {/* "Available for work" — starts first */}
            <p className="text-sm tracking-widest uppercase text-zinc-500">
              <Typewriter text={profile.availability} speed={25} delay={0.2} />
            </p>

            {/* Name — starts after availability finishes */}
            <h1 className="text-[58px] xs:text-6xl md:text-8xl font-bold tracking-tight leading-[1.25] sm:leading-[1.15]">
              <Typewriter text={profile.name} speed={50} delay={0.75} />
            </h1>

            {/* Title — starts after name finishes */}
            <h2 className="text-xl md:text-2xl text-zinc-400 mt-3">
              <Typewriter text={profile.title} speed={25} delay={1.85} />
            </h2>

            {/* Bio — fades in after title */}
            <p
              className="animate-fade-in text-zinc-500 text-base md:text-lg leading-relaxed mt-10"
              style={{ animationDelay: "2.5s" }}
            >
              {profile.heroTagline}
            </p>

            {/* Social links — fade in last */}
            <div
              className="animate-fade-in flex items-center justify-center gap-6 pt-2"
              style={{ animationDelay: "2.8s" }}
            >
              {profile.socialLinks.map((link) => (
                <SocialLink
                  key={link.platform}
                  href={link.href}
                  label={link.label}
                  platform={link.platform}
                />
              ))}
            </div>

          </div>
        </div>

        <GlowLine from="right" className="bottom-0" entryDelay={0.15} />
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col items-center justify-center px-10 md:px-6 py-32"
      >
        <div className="max-w-5xl w-full">

          {/* Header — always centered */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase text-zinc-600 mb-3">
              <Typewriter text="About" speed={35} />
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              <Typewriter text="Chi sono" speed={45} delay={0.3} />
            </h2>
          </div>

          {/* Two columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-center md:items-center">

            {/* Left — bio */}
            <Reveal delay={0.1}>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                {profile.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Right — stack */}
            <Reveal delay={0.2}>
              <p className="text-sm tracking-widest uppercase text-zinc-600 mb-10">
                Stack
              </p>
              {/* Mobile: piramide più stretta */}
              {/* Mobile: flat wrap */}
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 md:hidden">
                {profile.skills.map((skill) => (
                  <Badge key={skill} label={skill} />
                ))}
              </div>

              {/* Desktop: 6-5-3-2-1 */}
              <div className="hidden md:flex flex-col items-center gap-6">
                {[
                  profile.skills.slice(6, 11),
                  profile.skills.slice(0, 5),
                  profile.skills.slice(14, 16),
                  profile.skills.slice(11, 14),
                  profile.skills.slice(16, 17),
                  [profile.skills[5]],
                ].map((row, i) => (
                  <div key={i} className="flex gap-2 flex-wrap justify-center">
                    {row.map((skill) => (
                      <Badge key={skill} label={skill} />
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>

        <GlowLine from="left" className="bottom-0" />
      </section>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative min-h-screen flex flex-col items-center justify-center px-10 md:px-6 py-32 text-center"
      >
        <div className="max-w-2xl w-full space-y-8">

          <div>
            <p className="text-sm tracking-widest uppercase text-zinc-600 mb-3">
              <Typewriter text="Contact" speed={35} />
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <Typewriter text="Parliamo" speed={50} delay={0.35} />
            </h2>
          </div>

          <Reveal delay={0.1}>
            <p className="text-zinc-500 text-lg leading-relaxed">
              {profile.contactDescription}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Invia un'email a ${profile.email}`}
              className="inline-block text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-zinc-300 hover:text-white border-b border-zinc-700 hover:border-white pb-1 transition-colors duration-200"
            >
              {profile.email}
            </a>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-zinc-600 text-sm tracking-widest uppercase mt-10">
              Oppure contattami su
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-6 pt-2">
              {profile.socialLinks
                .filter((link) => link.platform !== "email")
                .map((link) => (
                  <SocialLink
                    key={link.platform}
                    href={link.href}
                    label={link.label}
                    platform={link.platform}
                  />
                ))}
            </div>
          </Reveal>
        </div>

        <GlowLine from="right" className="bottom-0" />
      </section>
    </main>
  );
}
