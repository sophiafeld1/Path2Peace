import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import ContactInfo from "@/components/ui/ContactInfo";

export const metadata: Metadata = {
  title: "Fees & Photos",
  description:
    "Session fees, payment methods, insurance information, and office photos for Path to Peace Psychotherapy.",
};

const officePhotos = [
  { src: "/images/office/office-01.jpeg", alt: "Office interior" },
  { src: "/images/office/office-02.jpeg", alt: "Therapy room" },
  { src: "/images/office/office-03.jpeg", alt: "Office space" },
  { src: "/images/office/office-06.jpeg", alt: "Waiting area" },
  { src: "/images/office/office-07.jpeg", alt: "Office view" },
  { src: "/images/office/office-04.jpg", alt: "Office detail" },
  { src: "/images/office/office-05.jpg", alt: "Office detail" },
  { src: "/images/office/office-08.jpg", alt: "Building exterior" },
  { src: "/images/office/office-09.jpg", alt: "Building view" },
];

export default function FeesAndPhotosPage() {
  return (
    <>
      <HeroSection
        title="Fees & Photos"
        backgroundImage="/images/hero/hero-nature.jpg"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-4">
            <p className="text-body leading-relaxed">
              Our counseling services are self-pay or out-of-network. We do not
              participate with insurance companies. As licensed social workers
              (LCSW/LMSW) and residents in counseling, sessions may qualify for insurance reimbursement. As an
              out-of-network provider, full payment is made to Path to Peace
              Psychotherapy at the time of service. A monthly statement (superbill)
              will be provided should you wish to submit for reimbursement.
              It&apos;s recommended you contact your insurance company to find out
              about your specific out-of-network mental health coverage.
            </p>
            <p className="text-body leading-relaxed">
              In accordance with the No Surprises Act, you have the right to receive
              clear and transparent information about therapy costs. The fees listed
              below reflect the cost per session. Because we specialize in treating
              complex trauma, your total investment over time will vary based on
              your individual history, needs, and the level of care and consistency
              that best supports your healing.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-ink mb-4">
              Rates
            </h2>
            <p className="text-body leading-relaxed">
              $185-190 per 55 minute session. Fee varies by therapist.
            </p>
            <p className="text-body leading-relaxed mt-4">
              $225-230 for 60 minute initial intake session.
            </p>
            <p className="text-body leading-relaxed mt-4">
              <span className="font-semibold text-ink">Payment:</span> Cash, debit
              card, check, credit cards, and HSA/FSA cards are accepted. To avoid
              credit card transaction fees, payment by check is recommended.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-ink mb-4">
              Cancellation Policy
            </h2>
            <p className="text-body leading-relaxed">
              If you do not show up for your scheduled therapy appointment or
              notification of cancelations is not given at least 24 hours in
              advance, you will be required to pay the full cost of the session.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-ink mb-8 text-center">
            Our Office
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {officePhotos.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
