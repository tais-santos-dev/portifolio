"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[--color-border] bg-[--color-bg]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {profile.name}
          <span className="text-[--color-accent]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 text-sm text-[--color-muted] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className={`relative transition-colors hover:text-[--color-text] ${
                  active === l.href ? "text-[--color-text]" : ""
                }`}
                href={l.href}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[--color-accent] transition-all duration-300 ${
                    active === l.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[--color-muted] transition-all hover:-translate-y-0.5 hover:text-[--color-text]"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[--color-muted] transition-all hover:-translate-y-0.5 hover:text-[--color-text]"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-1 ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-[--color-muted] transition-colors hover:text-[--color-text] md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-[--color-border] bg-[--color-bg] transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-2 sm:px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm transition-colors hover:text-[--color-text] ${
                  active === l.href ? "text-[--color-accent]" : "text-[--color-muted]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
