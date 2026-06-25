import { experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <div className="relative space-y-12 border-l border-[--color-border] pl-8 md:space-y-16">
      {experience.map((job, i) => (
        <Reveal key={i} delay={i * 90}>
          <div className="group relative">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-[--color-accent] bg-[--color-bg] transition-transform duration-300 group-hover:scale-125" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">
                {job.role}{" "}
                <span className="text-[--color-accent]">@ {job.company}</span>
              </h3>
              <span className="text-sm text-[--color-muted]">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-[--color-muted]">{job.location}</p>
            <ul className="mt-4 space-y-2.5">
              {job.highlights.map((h, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm leading-relaxed text-[--color-muted]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[--color-accent]" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
