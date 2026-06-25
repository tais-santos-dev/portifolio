import { profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Contact() {
  return (
    <div className="rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 text-center sm:p-8 md:p-12">
      <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
        Let&apos;s work together
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-[--color-muted]">
        I&apos;m open to remote roles and relocation. If you&apos;re hiring for QA,
        SDET, or Test Automation, I&apos;d love to talk.
      </p>
      <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--color-accent] px-5 py-2.5 text-sm font-semibold text-[#1a0b2e] transition-transform hover:scale-[1.03]"
        >
          <MailIcon className="h-4 w-4 shrink-0" />
          <span className="break-all">{profile.email}</span>
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[--color-border] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[--color-muted]"
        >
          <LinkedInIcon className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[--color-border] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[--color-muted]"
        >
          <GitHubIcon className="h-4 w-4" /> GitHub
        </a>
      </div>
    </div>
  );
}
