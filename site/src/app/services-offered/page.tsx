import type { Metadata } from "next";
import Link from "next/link";

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

export default function ServicesOfferedPage() {
  return (
    <section className="bg-banner-bg font-banner py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-ink">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">Our services</h3>

        <p className="text-lg leading-relaxed mb-6">
          Path to Peace Psychotherapy offers in-person counseling services at our
          welcoming office in Reston, Virginia, conveniently located near Reston
          Town Center. Our practice is easily accessible for individuals, teens,
          and families seeking therapy in Reston, Herndon, Great Falls, Vienna,
          Oakton, Fairfax, and surrounding Northern Virginia communities.
        </p>

        <p className="text-lg leading-relaxed mb-12">
          We understand that flexibility is important. In addition to in-person
          appointments, we offer secure telehealth and hybrid therapy throughout
          Virginia, Maryland and DC.
        </p>

        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-bold mb-4">Individual Therapy</h4>
            <ul className="mx-auto inline-block text-left list-disc pl-6 space-y-1 marker:text-banner-line">
              {individualTherapy.map((item) => (
                <li key={item} className="text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h4 className="text-xl font-bold">Group Therapy</h4>

          <h4 className="text-xl font-bold">Parent Guidance/Coaching</h4>

          <h4 className="text-xl font-bold">Family Counseling</h4>

          <div>
            <h4 className="text-xl font-bold mb-4">Specialty Areas</h4>
            <ul className="mx-auto inline-block text-left list-disc pl-6 space-y-1 marker:text-banner-line">
              {specialtyAreas.map((item) => (
                <li key={item} className="text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-14 inline-flex items-center justify-center bg-banner-line px-8 py-3 text-lg font-bold tracking-wide text-ivory rounded-lg shadow-sm transition-all hover:brightness-90"
        >
          contact us
        </Link>
      </div>
    </section>
  );
}
