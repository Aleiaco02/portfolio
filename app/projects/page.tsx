import Badge from "@/components/ui/Badge";
import GlowLine from "@/components/GlowLine";
import Link from "next/link";
import { projects } from "@/data";

export default function Projects() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 pt-32 pb-16">
      <GlowLine from="left"  className="top-[72px]" />
      <GlowLine from="right" className="bottom-0" entryDelay={0.15} />
      <div className="max-w-5xl w-full">
        <p className="text-sm font-mono text-zinc-600 tracking-widest uppercase mb-4 text-center">
          Work
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Projects</h1>

        <div className="space-y-px">
          {projects.map((project) => (
            <article
              key={project.id}
              aria-label={project.title}
              className="group border border-zinc-900 p-6 hover:border-zinc-700 transition-colors duration-300"
            >
              {/* Mobile */}
              <div className="flex flex-col gap-4 md:hidden">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-zinc-600" aria-hidden="true">
                      {project.id}
                    </span>
                    <h2 className="text-lg font-semibold group-hover:text-white transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} su GitHub`}
                    className="text-xs font-mono px-3 py-1.5 rounded-full text-center text-white/90 bg-white/10 backdrop-blur-md border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-white/20 hover:text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    GitHub ↗
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — demo live`}
                      className="text-xs font-mono px-3 py-1.5 rounded-full text-center text-black bg-white/90 backdrop-blur-md border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-white hover:border-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Visita ↗
                    </Link>
                  )}
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden md:flex items-center justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-zinc-600" aria-hidden="true">
                      {project.id}
                    </span>
                    <h2 className="text-lg font-semibold group-hover:text-white transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} label={t} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} su GitHub`}
                    className="text-xs font-mono px-3 py-1.5 rounded-full text-center text-white/90 bg-white/10 backdrop-blur-md border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-white/20 hover:text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    GitHub ↗
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — demo live`}
                      className="text-xs font-mono px-3 py-1.5 rounded-full text-center text-black bg-white/90 backdrop-blur-md border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-white hover:border-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Visita ↗
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
