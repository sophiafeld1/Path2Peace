import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import TherapistCard from "@/components/TherapistCard";
import ContactInfo from "@/components/ui/ContactInfo";
import { therapists } from "@/data/therapists";

export const metadata: Metadata = {
  title: "Meet Our Therapists",
  description:
    "Meet our team of experienced trauma specialists in Reston, Virginia.",
};

export default function TherapistsPage() {
  return (
    <>
      <HeroSection
        title="Meet Our Therapists"
        subtitle="Our team of experienced trauma specialists is here to support your healing journey."
        backgroundImage="/images/hero/hero-nature.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapists.map((t) => (
              <TherapistCard key={t.slug} therapist={t} />
            ))}
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
