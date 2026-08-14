import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Site name */}
        <div className="text-center mb-6">
          <Link href="/" className="font-heading text-lg font-bold">
            Path to Peace Psychotherapy
          </Link>
        </div>

        {/* Nav links row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-8">
          <Link href="/" className="text-ivory/80 hover:text-white transition-colors">Home</Link>
          <Link href="/our-approach" className="text-ivory/80 hover:text-white transition-colors">Our Approach</Link>
          <Link href="/therapists" className="text-ivory/80 hover:text-white transition-colors">Meet Our Therapists</Link>
          <Link href="/fees-and-photos" className="text-ivory/80 hover:text-white transition-colors">Fees &amp; Photos</Link>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm text-ivory/80 border-t border-ivory/15 pt-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-2">
            <span>Phone number:</span>
            <a href={BUSINESS.phoneHref} className="hover:text-white transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2">
            <span>Office and mailing address:</span>
            <span>{BUSINESS.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
