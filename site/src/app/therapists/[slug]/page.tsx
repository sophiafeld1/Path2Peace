import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ContactInfo from "@/components/ui/ContactInfo";
import { therapists } from "@/data/therapists";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return therapists.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const therapist = therapists.find((t) => t.slug === slug);
  if (!therapist) return {};
  return {
    title: `${therapist.name}, ${therapist.title}`,
    description: therapist.shortBio,
  };
}

export default async function TherapistPage({ params }: Props) {
  const { slug } = await params;
  const therapist = therapists.find((t) => t.slug === slug);
  if (!therapist) notFound();

  return (
    <>
      {/* Hero with mountains background and therapist headshot */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero/hero-nature.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:grid md:max-w-3xl md:translate-x-6 md:grid-cols-[16rem_minmax(0,1fr)] md:items-start md:gap-x-14 lg:max-w-4xl lg:translate-x-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-x-20">
            {/* Fixed grid column keeps every therapist photo in the same spot. */}
            <div className="w-52 h-72 sm:w-60 sm:h-80 md:w-64 md:h-96 rounded-full overflow-hidden relative shrink-0 ring-4 ring-teal-600 md:col-start-1 md:row-start-1">
              <Image
                src={therapist.image}
                alt={therapist.name}
                fill
                className="object-cover object-top"
                sizes="256px"
              />
            </div>
            <div className="text-center md:col-start-2 md:row-start-1 md:text-left">
              <h1 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
                {therapist.name}, {therapist.title}
              </h1>
              <p className="mt-2 text-teal-600 text-base font-medium">{therapist.role}</p>
              {therapist.services && (
                <p className="mt-1 text-body text-sm">{therapist.services}</p>
              )}
              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-6">
                <Button
                  href="/contact"
                  variant={therapist.contactCtaText ? "green" : "primary"}
                  className="shadow-md ring-2 ring-ivory/60"
                >
                  {therapist.contactCtaText ?? "schedule an appointment today"}
                </Button>
                {therapist.certificationImage && (
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0">
                    <Image
                      src={therapist.certificationImage}
                      alt={therapist.certificationAlt ?? "Professional certification"}
                      fill
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          {therapist.quote && !therapist.bioSections && (
            <blockquote className="text-lg italic text-body border-l-4 border-caramel pl-6">
              &ldquo;{therapist.quote}&rdquo;
            </blockquote>
          )}

          {therapist.bioSections ? (
            therapist.bioSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                  {section.title}
                </h2>
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-body leading-relaxed mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))
          ) : (
            therapist.fullBio && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                  About
                </h2>
                {therapist.fullBio.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-body leading-relaxed mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )
          )}

          {therapist.credentialsSection ? (
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                {therapist.credentialsSection.title}
              </h2>
              {therapist.credentialsSection.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-body leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          ) : (
            therapist.credentials && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                  Credentials & Training
                </h2>
                <ul className="space-y-2">
                  {therapist.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-body">
                      <span className="text-caramel mt-1">&#8226;</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          <div>
            <h2 className="font-heading text-2xl font-bold text-ink mb-4">
              Specializations
            </h2>
            <div className="flex flex-wrap gap-2">
              {therapist.specializations.map((s, i) => (
                <span
                  key={i}
                  className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {therapist.personalBackground && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                {therapist.personalBackgroundTitle ?? "Personal Background"}
              </h2>
              <p className="text-body leading-relaxed">
                {therapist.personalBackground}
              </p>
            </div>
          )}
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
