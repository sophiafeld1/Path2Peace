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
        title="Insurance Info"
        backgroundImage="/images/hero/hero-nature.jpg"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <p className="text-body leading-relaxed">
              Our counseling services are self pay only. We do not participate in
              insurance companies. As licensed social workers (LCSW/LMSW),
              sessions may qualify for insurance reimbursement. As an &ldquo;out
              of network&rdquo; provider, full payment is made to Path to Peace
              Psychotherapy LLC at the time of service. At your request, a
              monthly statement (superbill) will be provided should you wish to
              submit for reimbursement. I encourage you to contact your insurance
              company to find out about your specific out of pocket mental health
              coverage.
            </p>
            <p className="text-body leading-relaxed mt-4">
              As stated in the No Surprises Act, you are entitled to fair and
              accurate information about your therapy charges. Below are the fees
              you can expect to pay per session. Your annual investment in
              therapy will vary based on what services you utilize and how often
              you participate in therapy.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-ink mb-4">
              Rates
            </h2>
            <p className="text-body leading-relaxed">
              $185-190 per 55-minute session. Fee varies by therapist.
            </p>
            <p className="text-body leading-relaxed mt-2">
              Payment: Cash, debit card, check, credit card, HSA/FSA cards are
              accepted for payment.
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
