import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import ModalityCard from "@/components/ModalityCard";
import ContactInfo from "@/components/ui/ContactInfo";
import { modalities } from "@/data/modalities";

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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-body leading-relaxed">
          <p>
            At the heart of our integrative psychotherapy practice in Reston,
            Virginia, lies a profound commitment to healing trauma through a
            harmonious blend of{" "}
            <em className="text-ink">Internal Family Systems</em> (IFS),{" "}
            <em className="text-ink">
              Eye Movement Desensitization and Reprocessing
            </em>{" "}
            (EMDR), Ego-state Therapy, <em className="text-ink">somatic</em>{" "}
            therapy and <em className="text-ink">mindfulness</em> techniques. Each
            modality, <em className="text-ink">informed by neuroscience</em>,
            enriches the therapeutic experience, offering a multi-faceted
            approach to understanding and resolving the complex layers of trauma.
          </p>

          <p>
            As trauma therapists, we understand that grief is often an integral
            part of the healing process. Complex trauma frequently involves
            profound losses—not only the loss of people, relationships, or
            experiences that were once present, but also the loss of what was
            never received in the first place. Many individuals carry grief for
            the childhood they didn&apos;t have, the safety they deserved, the
            nurturing they longed for, or the opportunities and sense of self
            that were diminished by traumatic experiences. These losses can be
            just as impactful as grieving something tangible that has been taken
            away. Our work recognizes that healing from trauma often requires
            making space for both kinds of grief. Through a compassionate and
            trauma-informed approach, we help clients process these losses, honor
            their experiences, and move toward greater self-understanding,
            resilience, and healing.
          </p>

          <p>
            In counseling sessions, we begin by exploring the individual&apos;s
            internal landscape through IFS and/or Ego-state Therapy, which
            encourages clients to identify and connect with the various hurt parts
            of themselves. This process fosters self-compassion, allowing clients
            to engage with their inner voices without judgment. By recognizing
            these parts, clients can better understand how past experiences shape
            their present behaviors and emotional responses.
          </p>

          <p>
            Complementing this self-exploration, we use bottom-up processing
            modalities, such as EMDR and somatic therapy, as powerful tools for
            resolving trauma. Using such approaches, clients begin noticing a
            reduction in symptoms and shifts in perspective about themselves and
            their relationships. This is what healing is.
          </p>

          <p>
            Together, these modalities create a comprehensive framework for
            healing trauma. Clients leave our practice not only with a deeper
            understanding of their inner selves but also with practical tools to
            navigate life&apos;s challenges. By integrating IFS, Ego-state Therapy,
            EMDR, and mindfulness, we cultivate a therapeutic environment that
            honors each person&apos;s unique story, fostering resilience and
            facilitating profound healing.
          </p>

          <p>
            Our practice is easily accessible for individuals, teens, and
            families seeking therapy in Reston, Herndon, Great Falls, Vienna,
            Oakton, Fairfax, and surrounding Northern Virginia communities.
          </p>

          <p>
            We offer a complimentary 15–20 minute phone consultation.
          </p>

          <p>We look forward to hearing from you.</p>

          <p>
            Mindfulness practices further enhance our therapeutic approach by
            grounding clients in the present moment. Through techniques such as
            breath awareness and body scans, clients learn to observe their
            thoughts and feelings without attachment, fostering a sense of safety
            and calm. This awareness not only alleviates anxiety but also creates
            space for self-discovery and acceptance, empowering clients to
            embrace their journey toward healing.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-section-blue border-t border-ink/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              <Link
                href="/modalities"
                className="hover:text-teal-700 transition-colors"
              >
                Therapeutic Modalities
              </Link>
            </h2>
            <p className="mt-3 text-body">
              <Link
                href="/modalities"
                className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                Explore our therapeutic modalities &rarr;
              </Link>
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:snap-none">
            {modalities.map((modality) => (
              <div
                key={modality.slug}
                className="w-[min(100%,280px)] shrink-0 snap-start lg:w-auto lg:shrink"
              >
                <ModalityCard modality={modality} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
