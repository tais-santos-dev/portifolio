import { projects } from "@/lib/content";
import { ArrowIcon, GitHubIcon } from "./icons";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 90} className="flex">
          <TiltCard className="flex w-full">
            <article
              className="gradient-border flex w-full flex-col rounded-xl border border-[--color-border] bg-[--color-surface] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[--color-accent]/50 group-hover:shadow-[0_18px_50px_-18px] group-hover:shadow-[--color-accent]/40"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-[--color-accent]">
                  {p.title}
                </h3>
                {p.featured && (
                  <span className="shrink-0 rounded-full border border-[--color-accent]/30 bg-[--color-accent]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[--color-accent]">
                    Featured
                  </span>
                )}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-[--color-muted]">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-[--color-border] px-2 py-1 text-xs text-[--color-muted] transition-colors duration-200 hover:border-[--color-accent]/40 hover:bg-[--color-accent]/10 hover:text-[--color-text]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-4 text-sm">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[--color-muted] transition-colors hover:text-[--color-accent]"
                  >
                    <GitHubIcon className="h-4 w-4" /> Code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[--color-accent] transition-colors hover:underline"
                  >
                    Live demo <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}
