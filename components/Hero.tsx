import { profile } from "@/lib/content";
import { ArrowIcon, DownloadIcon, MailIcon } from "./icons";
import Avatar from "./Avatar";

export type HeroVariant = "side" | "centered" | "card";

function Badge() {
  return (
    <span className="hero-in inline-flex items-center gap-2 rounded-full border border-[--color-accent]/30 bg-[--color-accent]/10 px-3 py-1 text-xs font-medium text-[--color-accent]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[--color-accent] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[--color-accent]" />
      </span>
      {profile.availableText}
    </span>
  );
}

function Buttons({ center }: { center?: boolean }) {
  return (
    <div
      className={`hero-in mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center ${
        center ? "sm:justify-center" : ""
      }`}
      style={{ animationDelay: "400ms" }}
    >
      <a
        href="#projects"
        className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[--color-accent] to-[--color-accent-2] px-5 py-2.5 text-sm font-semibold text-[#1a0b2e] shadow-lg shadow-[--color-accent]/25 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-[--color-accent]/40"
      >
        View my work{" "}
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
  );
}

function TextBlock({ center }: { center?: boolean }) {
  return (
    <>
      {profile.available && (
        <div className={`mb-6 ${center ? "flex justify-center" : ""}`}>
          <Badge />
        </div>
      )}
      <h1
        className="hero-in text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        style={{ animationDelay: "80ms" }}
      >
        {profile.name}
      </h1>
      <p
        className="hero-in mt-3 text-lg font-medium sm:text-xl md:text-2xl"
        style={{ animationDelay: "160ms" }}
      >
        <span className="gradient-text">{profile.role}</span>
      </p>
      <p
        className={`hero-in mt-5 text-base leading-relaxed text-[--color-muted] sm:mt-6 sm:text-lg ${
          center ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
        style={{ animationDelay: "240ms" }}
      >
        {profile.tagline}
      </p>
      <p
        className="hero-in mt-3 text-sm text-[--color-muted]"
        style={{ animationDelay: "320ms" }}
      >
        {profile.location}
      </p>
      <Buttons center={center} />
    </>
  );
}

function Blobs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="blob absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[--color-accent]/20 blur-3xl" />
      <div
        className="blob absolute -top-10 right-10 h-72 w-72 rounded-full bg-[--color-accent-3]/20 blur-3xl"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="blob absolute top-40 left-1/2 h-64 w-64 rounded-full bg-[--color-accent-2]/15 blur-3xl"
        style={{ animationDelay: "-9s" }}
      />
    </div>
  );
}

export default function Hero({ variant = "side" }: { variant?: HeroVariant }) {
  return (
    <section id="top" className="dot-grid relative overflow-hidden">
      <Blobs />

      <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24 md:py-28">
        {variant === "centered" && (
          <div className="text-center">
            {profile.photo && (
              <div className="hero-in mb-7 flex justify-center">
                <Avatar
                  src={profile.photo}
                  name={profile.name}
                  sizeClass="h-40 w-40 sm:h-44 sm:w-44"
                  shape="circle"
                />
              </div>
            )}
            <TextBlock center />
          </div>
        )}

        {variant === "side" && (
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
            {profile.photo && (
              <div className="hero-in order-first flex justify-center md:order-last">
                <Avatar
                  src={profile.photo}
                  name={profile.name}
                  sizeClass="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64"
                  shape="circle"
                />
              </div>
            )}
            <div>
              <TextBlock />
            </div>
          </div>
        )}

        {variant === "card" && (
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
            {profile.photo && (
              <div className="hero-in order-first flex justify-center md:order-last">
                <Avatar
                  src={profile.photo}
                  name={profile.name}
                  sizeClass="h-56 w-48 sm:h-72 sm:w-60"
                  shape="rounded"
                />
              </div>
            )}
            <div>
              <TextBlock />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
