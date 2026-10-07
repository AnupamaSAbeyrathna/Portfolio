"use client";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" aria-label="Anupama Abeyrathna, back to top" className="group inline-flex items-center gap-2.5 text-xl font-bold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg border border-line-hi bg-surface text-sm group-hover:border-accent">
            <b className="text-accent">AA</b>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden gap-7 text-sm md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-muted transition-colors hover:text-ink">{n.label}</a>
          ))}
        </nav>

        <button ref={btn} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 cursor-pointer place-items-center rounded-lg border border-line-hi hover:bg-surface-2 md:hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" x2="20" y1="7" y2="7" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="17" y2="17" />
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="absolute inset-x-0 top-full border-b border-line bg-bg px-6 pb-4 pt-2 md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 last:border-b-0">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
