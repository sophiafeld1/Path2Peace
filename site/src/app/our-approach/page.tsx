import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactInfo from "@/components/ui/ContactInfo";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Integrative psychotherapy combining IFS, EMDR, Ego-state Therapy, somatic therapy and mindfulness to address trauma through multiple perspectives.",
};

export default function OurApproachPage() {
  return (
    <>
      <HeroSection
        title="Our Approach"
        subtitle="Integrative psychotherapy combining multiple evidence-based modalities to address trauma through multiple perspectives."
        backgroundImage="/images/hero/hero-nature.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-body mb-12">
            At the heart of our integrative psychotherapy practice in Reston
            lies a profound commitment to healing trauma through a harmonious
            blend of Internal Family Systems (IFS), Eye Movement Desensitization
            and Reprocessing (EMDR), Ego-state Therapy, somatic therapy and
            mindfulness techniques. Each modality enriches the therapeutic
            experience, offering a multi-faceted approach to understanding and
            resolving the complex layers of trauma.
          </p>

          <SectionHeading title="Our Methods" centered={false} />

          <div className="space-y-10">
            <div>
              <h3 className="font-heading text-xl font-bold text-ink mb-4">
                Internal Family Systems & Ego-state Therapy
              </h3>
              <p className="text-body leading-relaxed">
                Together we help clients identify and connect with the various
                parts of themselves &mdash; each with its own perspectives,
                emotions, and roles. This fosters self-compassion and a deeper
                understanding of how past experiences influence present behavior.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-ink mb-4">
                EMDR
              </h3>
              <p className="text-body leading-relaxed">
                EMDR uses guided bilateral stimulation to help clients reprocess
                distressing memories, reduce their emotional intensity, and open
                the door to a shift in perspective.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-ink mb-4">
                Mindfulness & Somatic Work
              </h3>
              <p className="text-body leading-relaxed">
                Grounding clients in the present moment through breath awareness
                and body scans, these practices help clients observe their
                thoughts without judgment and create space for self-discovery and
                acceptance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
