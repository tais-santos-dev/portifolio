import { skills } from "@/lib/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group, i) => (
        <Reveal key={group.name} delay={(i % 3) * 80} className="h-full">
          <div className="h-full rounded-xl border border-[--color-border] bg-[--color-surface] p-5 transition-colors duration-300 hover:border-[--color-accent]/40">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[--color-accent]">
              {group.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-[--color-bg] px-2.5 py-1 text-sm text-[--color-muted] transition-colors duration-200 hover:bg-[--color-accent]/10 hover:text-[--color-text]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
