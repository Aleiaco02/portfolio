import GlowLine from "@/components/GlowLine";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prev = posts[currentIndex + 1] ?? null;
  const next = posts[currentIndex - 1] ?? null;

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 pt-32 pb-24">
      <GlowLine from="left" className="top-[72px]" />
      <GlowLine from="right" className="bottom-0" entryDelay={0.15} />

      <div className="max-w-2xl w-full">

        {/* Back */}
        <Link
          href="/blog"
          className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors duration-200 mb-12 inline-flex items-center gap-2"
        >
          ← Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 mb-5">
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} di lettura</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-zinc-500 text-base leading-relaxed border-l-2 border-zinc-800 pl-4">
            {post.description}
          </p>
        </header>

        {/* Divider */}
        <div className="h-px bg-zinc-900 mb-10" />

        {/* Content */}
        <article className="space-y-5 text-zinc-400 text-base leading-7">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>

        {/* Footer nav */}
        {(prev || next) && (
          <>
            <div className="h-px bg-zinc-900 mt-16 mb-10" />
            <nav
              aria-label="Articoli correlati"
              className="flex items-start justify-between gap-8 text-sm"
            >
              <div className="flex-1">
                {prev && (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group flex flex-col gap-1"
                  >
                    <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      ← precedente
                    </span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors leading-snug">
                      {prev.title}
                    </span>
                  </Link>
                )}
              </div>

              <div className="flex-1 text-right">
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex flex-col gap-1 items-end"
                  >
                    <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      successivo →
                    </span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors leading-snug">
                      {next.title}
                    </span>
                  </Link>
                )}
              </div>
            </nav>
          </>
        )}

      </div>
    </main>
  );
}
