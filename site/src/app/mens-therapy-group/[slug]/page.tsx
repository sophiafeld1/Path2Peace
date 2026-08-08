import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroSection from "@/components/ui/HeroSection";
import Button from "@/components/ui/Button";
import ContactInfo from "@/components/ui/ContactInfo";
import { mensTherapyGroups } from "@/data/mensTherapyGroups";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mensTherapyGroups.map((group) => ({ slug: group.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = mensTherapyGroups.find((g) => g.slug === slug);
  if (!group) return {};
  return {
    title: group.name,
    description: group.description,
  };
}

export default async function MensTherapyGroupDetailPage({ params }: Props) {
  const { slug } = await params;
  const group = mensTherapyGroups.find((g) => g.slug === slug);
  if (!group) notFound();

  return (
    <>
      <HeroSection
        title={group.pageTitle}
        backgroundImage="/images/hero/mens-group-photo.jpeg"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            {group.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-body leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {group.bullets && group.bullets.length > 0 && (
            <div>
              {group.bulletHeading && (
                <h2 className="font-heading text-xl font-bold text-ink mb-4">
                  {group.bulletHeading}
                </h2>
              )}
              <ul className="space-y-3">
                {group.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body">
                    <span className="text-caramel mt-1">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {group.closing && (
            <p className="font-heading text-lg font-bold text-ink">{group.closing}</p>
          )}

          <div className="space-y-4 pt-2">
            <p className="text-body leading-relaxed">
              If you&apos;re interested in learning more or joining, please fill out
              the interest form:
            </p>
            <Button href={group.interestFormUrl} variant="primary">
              interest form
            </Button>
            <p className="text-sm">
              <Link
                href="/mens-therapy-group"
                className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                &larr; All men&apos;s therapy groups
              </Link>
            </p>
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
