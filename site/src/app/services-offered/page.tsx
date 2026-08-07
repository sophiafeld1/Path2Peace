import type { Metadata } from "next";
import Link from "next/link";
import ServiceFeatureCard from "@/components/ui/ServiceFeatureCard";

export const metadata: Metadata = {
  title: "Services Offered",
  description:
    "In-person and telehealth therapy for individuals, teens, children, families, and groups in Reston, Virginia and throughout VA, MD, and DC.",
};

const individualTherapy = [
  "Older Adults / Young Adults / College Students",
  "Teens / Adolescents",
  "Children",
];

const coreServices = [
  "Group Therapy",
  "Parent Guidance/Coaching",
  "Family Counseling",
];

const specialtyAreas = [
  "Trauma Therapy",
  "Anxiety",
  "Depression",
  "Play Therapy and Sandtray Play",
  "Grief & Loss Counseling",
  "ADHD Support",
  "Stress & Burnout",
  "Self-Esteem & Confidence",
  "Life Transitions",
  "Gay, Lesbian, Bisexual and Questioning Counseling",
  "Women's Issues",
  "Men's Issues",
  "Adoption counseling",
  "Relational Therapy",
  "Somatic Therapy",
  "Nervous System Regulation",
];

function ServiceGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((title) => (
        <ServiceFeatureCard key={title} title={title} />
      ))}
    </div>
  );
}

export default function ServicesOfferedPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Our services
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-body">
            Path to Peace Psychotherapy offers in-person counseling services at
            our welcoming office in Reston, Virginia, conveniently located near
            Reston Town Center. Our practice is easily accessible for
            individuals, teens, and families seeking therapy in Reston, Herndon,
            Great Falls, Vienna, Oakton, Fairfax, and surrounding Northern
            Virginia communities.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-body">
            We understand that flexibility is important. In addition to
            in-person appointments, we offer secure telehealth and hybrid
            therapy throughout Virginia, Maryland and DC.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          <div>
            <h4 className="mb-6 font-heading text-xl font-bold text-ink">
              Individual Therapy
            </h4>
            <ServiceGrid items={individualTherapy} />
          </div>

          <div>
            <h4 className="mb-6 font-heading text-xl font-bold text-ink">
              Additional Services
            </h4>
            <ServiceGrid items={coreServices} />
          </div>

          <div>
            <h4 className="mb-6 font-heading text-xl font-bold text-ink">
              Specialty Areas
            </h4>
            <ServiceGrid items={specialtyAreas} />
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-8 py-3 text-base font-semibold tracking-wide text-ivory shadow-sm transition-all hover:bg-teal-600"
          >
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
