import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import ModalityCard from "@/components/ModalityCard";
import ContactInfo from "@/components/ui/ContactInfo";
import { modalities } from "@/data/modalities";

export const metadata: Metadata = {
  title: "Therapeutic Modalities",
  description:
    "We integrate IFS, EMDR, Ego State Therapy, and AEDP to provide comprehensive trauma treatment.",
};

export default function ModalitiesPage() {
  return (
    <>
      <HeroSection
        title="Therapeutic Modalities"
        subtitle="We integrate multiple evidence-based approaches to provide comprehensive trauma treatment."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modalities.map((m) => (
              <ModalityCard key={m.slug} modality={m} />
            ))}
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
