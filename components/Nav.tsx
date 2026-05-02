"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Connect", href: "/#connect" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="/"
          className="font-bold text-white text-sm tracking-widest uppercase"
        >
          MC
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden flex flex-col px-6 pb-4 gap-4"
          style={{ backgroundColor: "var(--navy)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
