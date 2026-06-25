"use client";

import { useState } from "react";

type AvatarProps = {
  src: string;
  name: string;
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

export default function Avatar({ src, name, className }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative h-28 w-28 sm:h-32 sm:w-32 ${className ?? ""}`}>
      {/* Spinning conic glow ring */}
      <div
        className="ring-spin absolute -inset-1 rounded-full opacity-80 blur-[2px]"
        style={{
          background:
            "conic-gradient(from 0deg, #a78bfa, #c084fc, #818cf8, #a78bfa)",
        }}
        aria-hidden
      />
      {/* Soft outer glow */}
      <div className="absolute -inset-3 rounded-full bg-[--color-accent]/20 blur-2xl" aria-hidden />

      {/* Photo or initials fallback */}
      <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-[--color-bg] bg-[--color-surface]">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={name}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[--color-accent] to-[--color-accent-3] text-3xl font-bold text-[#1a0b2e]">
            {initials(name)}
          </div>
        )}
      </div>
    </div>
  );
}
