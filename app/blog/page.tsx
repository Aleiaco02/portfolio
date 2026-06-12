import GlowLine from "@/components/GlowLine";
import Link from "next/link";
import { posts } from "@/data";

function formatDate(dateStr: string) {
  // Append T00:00:00 so the string is parsed as local time, not UTC midnight,
  // preventing off-by-one date errors in timezones behind UTC.
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 pt-32 pb-16">
      <GlowLine from="left"  className="top-[72px]" />
      <GlowLine from="right" className="bottom-0" entryDelay={0.15} />
      <div className="max-w-5xl w-full">
        <p className="text-sm font-mono text-zinc-600 tracking-widest uppercase mb-4 text-center">
          Writing
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Blog</h1>

        <div className="space-y-px">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-start md:justify-between border border-zinc-900 p-6 hover:border-zinc-700 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white gap-3"
            >
              <div className="space-y-2 flex-1 max-w-lg">
                <h2 className="text-base font-medium group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 md:flex-col md:items-end md:justify-start md:gap-1 shrink-0 md:pl-8">
                <p className="text-xs font-mono text-zinc-500">
                  {formatDate(post.date)}
                </p>
                <span className="text-zinc-700 md:hidden" aria-hidden="true">·</span>
                <p className="text-xs font-mono text-zinc-500">
                  {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
