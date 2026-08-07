"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
          >
            <span className="font-heading font-semibold text-ink">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 text-teal-600 shrink-0 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
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
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-body leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
