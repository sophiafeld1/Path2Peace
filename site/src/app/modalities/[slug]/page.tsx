import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroSection from "@/components/ui/HeroSection";
import ServiceFeatureCard from "@/components/ui/ServiceFeatureCard";
import ContactInfo from "@/components/ui/ContactInfo";
import { modalities } from "@/data/modalities";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return modalities.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const modality = modalities.find((m) => m.slug === slug);
  if (!modality) return {};
  return {
    title: modality.name,
    description: modality.description,
  };
}

export default async function ModalityPage({ params }: Props) {
  const { slug } = await params;
  const modality = modalities.find((m) => m.slug === slug);
  if (!modality) notFound();

  return (
    <>
      <HeroSection
        title={modality.pageTitle}
        backgroundImage="/images/hero/hero-nature.jpg"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {modality.fullContent.map((p, i) => (
              <p key={i} className="text-body leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {modality.sections && modality.sections.length > 0 && (
            <div className="mt-10">
              {modality.sectionsAsCards ? (
                <>
                  <div className="space-y-4">
                    {modality.sections
                      .filter((section) => section.card !== false)
                      .map((section) => (
                        <ServiceFeatureCard
                          key={section.heading}
                          title={section.heading}
                          description={section.content}
                        />
                      ))}
                  </div>
                  {modality.sections
                    .filter((section) => section.card === false)
                    .map((section) => (
                      <div key={section.heading} className="mt-10">
                        <h2 className="font-heading text-xl font-bold text-ink mb-3">
                          {section.heading}
                        </h2>
                        <p className="text-body leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                </>
              ) : (
                <div className="space-y-8">
                  {modality.sections.map((section) => (
                    <div key={section.heading}>
                      <h2 className="font-heading text-xl font-bold text-ink mb-3">
                        {section.heading}
                      </h2>
                      <p className="text-body leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
