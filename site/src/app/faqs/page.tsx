import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import FAQAccordion from "@/components/FAQAccordion";
import ContactInfo from "@/components/ui/ContactInfo";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about our therapy services, fees, insurance, and more.",
};

export default function FAQsPage() {
  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our therapy services, fees, and what to expect."
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
