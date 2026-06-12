"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getGlowDelay } from "@/lib/glowSync";

// Sections that live on the home page as anchors
const anchorLinks = [
  { href: "/#hero",    label: "Home",    section: "hero" },
  { href: "/#about",   label: "About",   section: "about" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

// Sections that are separate pages
const pageLinks = [
  { href: "/projects", label: "Projects", match: "/projects" },
  { href: "/blog",     label: "Blog",     match: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("hero");
  const [glowDelay, setGlowDelay] = useState("0.8s");

  useEffect(() => {
    setGlowDelay(getGlowDelay());
  }, []);

  // Track scroll position only on the home page
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const navHeight = 80;
      let current = "hero";

      for (const { section } of anchorLinks) {
        const el = document.getElementById(section);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= navHeight + 20) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string,
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", section);
      router.push("/");
    }
  };

  const isAnchorActive = (section: string) =>
    pathname === "/" && activeSection === section;

  const isPageActive = (match: string) =>
    pathname === match || pathname.startsWith(`${match}/`);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 animate-fade-in bg-black/70"
      style={{ animationDelay: "0.1s" }}
    >
      <nav
        aria-label="Navigazione principale"
        className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto"
      >
        {/* Logo */}
        <Link
          href="/#hero"
          aria-label="Home"
          onClick={(e) => handleAnchorClick(e, "hero")}
          className="text-zinc-500 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <polygon
              points="14,2 25,8 25,20 14,26 3,20 3,8"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinejoin="round"
            />
            <line x1="9"  y1="20" x2="14" y2="9"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="19" y1="20" x2="14" y2="9"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="11" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-4 sm:gap-6">
          {anchorLinks.map(({ href, label, section }) => {
            const active = isAnchorActive(section);
            return (
              <li key={href} className="relative flex flex-col items-center gap-1">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={(e) => handleAnchorClick(e, section)}
                  className={`text-[13px] xs:text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm ${
                    active ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {label}
                </Link>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-[10px] left-0 right-0 h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/70 to-zinc-300/0"
                  style={{
                    transformOrigin: "left center",
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    opacity: active ? 1 : 0,
                    transition: "transform 0.8s ease, opacity 0.4s ease",
                    animation: `glow-pulse 3s ease-in-out ${glowDelay} infinite`,
                  }}
                />
              </li>
            );
          })}

          {pageLinks.map(({ href, label, match }) => {
            const active = isPageActive(match);
            return (
              <li key={href} className="relative flex flex-col items-center gap-1">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[13px] xs:text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm ${
                    active ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {label}
                </Link>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-[10px] left-0 right-0 h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/70 to-zinc-300/0"
                  style={{
                    transformOrigin: "left center",
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    opacity: active ? 1 : 0,
                    transition: "transform 0.8s ease, opacity 0.4s ease",
                    animation: `glow-pulse 3s ease-in-out ${glowDelay} infinite`,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
