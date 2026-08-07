"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BANNER_NAV_ROW_1, BANNER_NAV_ROW_2, NAV_LINKS } from "@/lib/constants";
import MobileNav from "./MobileNav";

type NavItem = Exclude<(typeof NAV_LINKS)[number], { label: "Contact Us" }>;

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = NAV_LINKS.filter(
    (l): l is NavItem => l.label !== "Contact Us"
  );

  const row1 = BANNER_NAV_ROW_1.map(({ label }) =>
    navItems.find((l) => l.label === label)
  ).filter((link): link is NavItem => Boolean(link));

  const row2 = BANNER_NAV_ROW_2.map(({ label }) =>
    navItems.find((l) => l.label === label)
  ).filter((link): link is NavItem => link !== undefined);

  const renderNavLink = (link: NavItem) => {
    const hasChildren = "children" in link && link.children;
    return (
      <div
        key={link.href}
        className="relative shrink-0"
        onMouseEnter={() => hasChildren && setOpenDropdown(link.label)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <Link
          href={link.href}
          className="px-1.5 py-1 text-[21px] font-bold text-black hover:text-teal-700 transition-colors whitespace-nowrap"
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
                className="block px-4 py-2 text-[21px] font-bold text-black hover:bg-teal-50 hover:text-teal-700"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-banner-bg font-banner shadow-sm z-50 pt-px">
      <div className="border-y-2 border-banner-line">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto items-center justify-between gap-4 py-3">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/path2peaceLOGO.webp"
              alt="Path to Peace Psychotherapy LLC"
              width={979}
              height={979}
              className="h-64 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav — exactly two rows, right-aligned */}
          <div className="hidden min-w-0 flex-1 flex-col items-end gap-y-1.5 py-3 pl-3 pr-8 lg:flex">
            <div className="flex flex-nowrap justify-end gap-x-0.5">
              {row1.map(renderNavLink)}
            </div>
            <div className="flex flex-nowrap justify-end gap-x-0.5">
              {row2.map(renderNavLink)}
            </div>
          </div>

          <Link
            href="/contact"
            className="hidden shrink-0 bg-banner-line px-4 py-2 text-[21px] font-bold tracking-wide text-ivory rounded-lg shadow-sm transition-all hover:brightness-90 lg:inline-flex"
          >
            Contact Us
          </Link>

          <MobileNav />
        </div>
      </nav>
      </div>
    </header>
  );
}
