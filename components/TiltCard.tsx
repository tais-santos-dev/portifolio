"use client";

import { useRef } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

// Subtle 3D tilt + purple spotlight that follows the cursor.
export default function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y / rect.height - 0.5) * -6).toFixed(2);
    const rotY = ((x / rect.width - 0.5) * 6).toFixed(2);
    el.style.setProperty("--rx", `${rotX}deg`);
    el.style.setProperty("--ry", `${rotY}deg`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`group relative transition-transform duration-200 ease-out [transform:perspective(900px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))] ${className ?? ""}`}
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(18rem 18rem at var(--mx) var(--my), rgba(167,139,250,0.14), transparent 60%)",
        }}
        aria-hidden
      />
      {children}
    </div>
  );
}
