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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setGlowDelay(getGlowDelay());
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
    setMenuOpen(false);
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

        {/* Desktop: Nav links + CV button */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-6">
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

          <a
            href="/cv.pdf"
            download="alessandroiacovelli-cv.pdf"
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full text-black bg-white/90 backdrop-blur-md border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-white hover:border-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Scarica CV
          </a>
        </div>

        {/* Mobile: CV button + hamburger */}
        <div className="sm:hidden flex items-center gap-3">
          <a
            href="/cv.pdf"
            download="alessandroiacovelli-cv.pdf"
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full text-black bg-white/90 backdrop-blur-md border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-white hover:border-white transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Scarica CV
          </a>
          <button
            className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6"  x2="21" y2="6"  />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="animate-menu-slide-down sm:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-2">
            {[...anchorLinks.map(({ href, label, section }) => ({
              href, label,
              active: isAnchorActive(section),
              onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleAnchorClick(e, section),
            })), ...pageLinks.map(({ href, label, match }) => ({
              href, label,
              active: isPageActive(match),
              onClick: () => setMenuOpen(false),
            }))].map(({ href, label, active, onClick }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={onClick}
                  className={`flex items-center justify-between py-4 text-sm border-b border-white/5 transition-colors duration-200 ${
                    active ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  );
}
