"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative mb-4 w-full">
      <nav
        className="flex items-center justify-between rounded-full border border-[#E9E7E0] bg-white px-5 py-3 shadow-xs md:px-8 md:py-3.5"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
        href="#"
        aria-label="Pipely Accueil"
        className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-brand-dark"
        >
        <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-black/10">
            <Image
            src="/images/amadou.jpeg"
            alt="Amadou"
            fill
            sizes="32px"
            className="object-cover"
            />
        </span>
        <span>Magnetic Groupe</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 text-[15px] font-medium text-[#4A4A4A] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-brand-dark"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-xs transition-all duration-200 hover:scale-[1.02] hover:bg-brand-accent-hover active:scale-[0.98] md:px-6"
          >
            Démarrer
          </a>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-brand-dark hover:bg-brand-cream md:hidden"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 mt-2 rounded-3xl border border-[#E9E7E0] bg-white p-3 shadow-lg md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-[#4A4A4A] hover:bg-brand-cream hover:text-brand-dark"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}