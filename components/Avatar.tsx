"use client";

import { useState } from "react";

type AvatarProps = {
  src: string;
  name: string;
  /** tailwind size classes, e.g. "h-44 w-44" */
  sizeClass?: string;
  /** "circle" | "rounded" */
  shape?: "circle" | "rounded";
  /** spinning conic ring vs. a soft static gradient frame */
  spin?: boolean;
  className?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export default function Avatar({
  src,
  name,
  sizeClass = "h-28 w-28",
  shape = "circle",
  spin = false,
  className,
}: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const radius = shape === "circle" ? "rounded-full" : "rounded-3xl";

  return (
    <div className={`relative ${sizeClass} ${className ?? ""}`}>
      {/* Soft outer glow */}
      <div
        className={`absolute -inset-4 ${radius} bg-[--color-accent]/20 blur-2xl`}
        aria-hidden
      />

      {/* Gradient frame: spinning conic OR static gradient */}
      {spin ? (
        <div
          className={`ring-spin absolute -inset-[3px] ${radius} opacity-80 blur-[1px]`}
          style={{
            background:
              "conic-gradient(from 0deg, #a78bfa, #c084fc, #818cf8, #a78bfa)",
          }}
          aria-hidden
        />
      ) : (
        <div
          className={`absolute -inset-[3px] ${radius}`}
          style={{
            background:
              "linear-gradient(140deg, #a78bfa, #c084fc 45%, #818cf8)",
          }}
          aria-hidden
        />
      )}

      {/* Photo or initials fallback */}
      <div
        className={`absolute inset-0 overflow-hidden ${radius} border-2 border-[--color-bg] bg-[--color-surface]`}
      >
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={name}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[--color-accent] to-[--color-accent-3] text-4xl font-bold text-[#1a0b2e]">
            {initials(name)}
          </div>
        )}
      </div>
    </div>
  );
}
