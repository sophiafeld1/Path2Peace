"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-ink"
        aria-label="Toggle navigation"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-20 bg-white shadow-lg border-t border-gray-100 z-50">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const hasChildren = "children" in link && link.children;
              return (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm font-medium text-ink hover:text-teal-600"
                    >
                      {link.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() =>
                          setExpandedGroup(
                            expandedGroup === link.label ? null : link.label
                          )
                        }
                        className="p-2 text-ink"
                      >
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            expandedGroup === link.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasChildren && expandedGroup === link.label && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-teal-600 hover:text-ink"
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
        </div>
      )}
    </div>
  );
}
