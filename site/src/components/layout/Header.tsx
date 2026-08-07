"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = NAV_LINKS.filter((l) => l.label !== "Contact Us");

  return (
    <header className="bg-banner-bg shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto py-3 items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <span className="font-heading text-xl font-normal text-ink tracking-tight">
              Path to Peace Psychotherapy LLC
            </span>
          </Link>

          {/* Desktop nav - wrapping allowed, centered */}
          <div className="hidden lg:flex flex-wrap justify-center items-center gap-x-1 gap-y-0.5 max-w-xl">
            {navItems.map((link) => {
              const hasChildren = "children" in link && link.children;
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    hasChildren && setOpenDropdown(link.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-2 py-1 text-sm font-medium text-ink hover:text-teal-600 transition-colors whitespace-nowrap"
                  >
                    {link.label}
                    {hasChildren && (
                      <svg
                        className="ml-0.5 inline-block h-2.5 w-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                  {hasChildren && openDropdown === link.label && (
                    <div className="absolute left-0 top-full mt-0 w-64 bg-banner-bg rounded-lg shadow-lg border border-ink/10 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink hover:bg-teal-50 hover:text-teal-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="hidden lg:inline-flex shrink-0 px-5 py-2 bg-teal-500 text-ivory text-sm font-semibold tracking-wide rounded-lg shadow-sm hover:bg-teal-600 hover:shadow-md transition-all"
          >
            Contact Us
          </Link>

          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
