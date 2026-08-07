import { BUSINESS } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <section className="bg-teal-200 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-body mb-2">{BUSINESS.consultation}</p>
        <a
          href={BUSINESS.phoneHref}
          className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
        >
          {BUSINESS.phone}
        </a>
        <p className="mt-4 text-sm text-gray-500">{BUSINESS.address}</p>
      </div>
    </section>
  );
}
