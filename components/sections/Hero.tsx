import SocialLink from "@/components/ui/SocialLink";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export default function Hero({ name, title, bio, socials }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl mx-auto w-full pt-24 pb-16">
        <div className="space-y-6">
          <p className="text-sm font-mono text-zinc-500 tracking-widest uppercase">
            Available for work
          </p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
            {name}
          </h1>

          <h2 className="text-xl md:text-2xl text-zinc-400 font-light">
            {title}
          </h2>

          <p className="text-zinc-500 text-base md:text-lg max-w-md leading-relaxed">
            {bio}
          </p>

          <div className="flex items-center gap-4 pt-2">
            {socials.github && (
              <SocialLink href={socials.github} label="GitHub" platform="github" />
            )}
            {socials.linkedin && (
              <SocialLink href={socials.linkedin} label="LinkedIn" platform="linkedin" />
            )}
            {socials.twitter && (
              <SocialLink href={socials.twitter} label="Twitter" platform="twitter" />
            )}
            {socials.email && (
              <SocialLink href={`mailto:${socials.email}`} label="Email" platform="email" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
