import Link from "next/link";
import type { HeroVariant } from "@/components/Hero";

const options: { key: HeroVariant; label: string }[] = [
  { key: "side", label: "Side by side" },
  { key: "centered", label: "Centered" },
  { key: "card", label: "Card" },
];

export default function PreviewSwitcher({ active }: { active: HeroVariant }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-[70] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-[--color-border] bg-[--color-surface]/90 p-1 text-xs shadow-xl shadow-black/40 backdrop-blur">
        <span className="px-2 text-[--color-muted]">Preview:</span>
        {options.map((o) => (
          <Link
            key={o.key}
            href={`/preview/${o.key}`}
            className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
              active === o.key
                ? "bg-[--color-accent] text-[#1a0b2e]"
                : "text-[--color-muted] hover:text-[--color-text]"
            }`}
          >
            {o.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
