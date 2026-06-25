import { profile } from "@/lib/content";
import { ArrowIcon, DownloadIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="dot-grid relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[--color-accent]/10 blur-3xl" />
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        {profile.available && (
          <span className="hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-[--color-accent]/30 bg-[--color-accent]/10 px-3 py-1 text-xs font-medium text-[--color-accent]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[--color-accent] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[--color-accent]" />
            </span>
            {profile.availableText}
          </span>
        )}

        <h1 className="hero-in max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl" style={{ animationDelay: "80ms" }}>
          {profile.name}
        </h1>
        <p className="hero-in mt-3 text-lg font-medium sm:text-xl md:text-2xl" style={{ animationDelay: "160ms" }}>
          <span className="gradient-text">{profile.role}</span>
        </p>
        <p className="hero-in mt-5 max-w-2xl text-base leading-relaxed text-[--color-muted] sm:mt-6 sm:text-lg" style={{ animationDelay: "240ms" }}>
          {profile.tagline}
        </p>
        <p className="hero-in mt-3 text-sm text-[--color-muted]" style={{ animationDelay: "320ms" }}>
          {profile.location}
        </p>

        <div className="hero-in mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center" style={{ animationDelay: "400ms" }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--color-accent] px-5 py-2.5 text-sm font-semibold text-[#1a0b2e] transition-transform hover:scale-[1.03]"
          >
            View my work <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[--color-border] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[--color-muted]"
          >
            <MailIcon className="h-4 w-4" /> Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[--color-muted] transition-colors hover:text-[--color-text]"
          >
            <DownloadIcon className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
