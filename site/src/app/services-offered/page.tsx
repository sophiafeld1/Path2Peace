import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import ContactInfo from "@/components/ui/ContactInfo";

export const metadata: Metadata = {
  title: "Services Offered",
  description:
    "Therapy services for kids, teens, adults, and families at Path to Peace Psychotherapy in Reston, Virginia.",
};

export default function ServicesOfferedPage() {
  return (
    <>
      <HeroSection
        title="Services Offered"
        subtitle="Individual, family, and group therapy for children, teens, and adults."
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-body">
            Content coming soon.
          </p>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
