import type { Metadata } from "next";
import ServiceFeatureCard from "@/components/ui/ServiceFeatureCard";
import Button from "@/components/ui/Button";

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
        <div className="mx-auto max-w-4xl border-b border-ink/[0.06] pb-14 text-center">
          <span className="inline-block rounded-full border border-logo-green/35 px-4 py-1.5 text-sm font-medium tracking-wide text-logo-green">
            Path to Peace Psychotherapy
          </span>
          <h2 className="mt-6 !font-banner text-3xl font-bold leading-tight !text-logo-green sm:text-4xl lg:text-[2.75rem]">
            Our services
          </h2>
          <div className="mx-auto mt-5 max-w-4xl rounded-xl border border-ink/[0.06] bg-surface/75 p-6 text-left shadow-sm sm:p-8">
            <p className="text-base leading-relaxed text-body sm:text-lg">
              Path to Peace Psychotherapy offers in-person counseling services at
              our welcoming office in Reston, Virginia, conveniently located near
              Reston Town Center. Our practice is easily accessible for
              individuals, teens, and families seeking therapy in Reston, Herndon,
              Great Falls, Vienna, Oakton, Fairfax, and surrounding Northern
              Virginia communities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
              We understand that flexibility is important. In addition to
              in-person appointments, we offer secure telehealth and hybrid
              therapy throughout Virginia, Maryland and DC.
            </p>
          </div>
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
          <Button href="/contact" variant="primary">
            contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
