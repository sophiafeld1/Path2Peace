import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CurvyUnderline from "@/components/ui/CurvyUnderline";
import Button from "@/components/ui/Button";
import ContactInfo from "@/components/ui/ContactInfo";
import { therapists } from "@/data/therapists";

export default function HomePage() {
  return (
    <>
      {/* Hero - mountain image with light muted overlay, centered italic text in a bordered box */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero/hero-nature.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Fully transparent text frame — border matches the text color
            (teal-700) so the box reads as a single dark-blue feature. */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex items-center justify-center">
          <div className="border-2 border-teal-700 rounded-[2.5rem] px-10 py-10 sm:px-14 sm:py-12 max-w-2xl">
            <p className="text-center text-teal-700 text-lg sm:text-2xl font-semibold italic leading-relaxed">
              We&apos;re a warm welcoming practice of trauma specialists located
              in Reston, Virginia, offering support for kids, teens, adults, and
              families. We&apos;re here to help you navigate life&apos;s challenges with
              utmost care and understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Transforming Trauma section - light blue/lavender bg */}
      <section className="py-16 sm:py-20 bg-teal-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mb-3">
            Transforming Trauma into Triumph:
          </h2>
          {/* On powder-blue bg: same-family teal-300, not caramel — the
              squiggle's shape is the emphasis, not its contrast. */}
          <CurvyUnderline className="mt-1 mb-6 h-3 w-44 sm:w-52 text-teal-300 mx-auto" />
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-ink mb-10">
            Your Journey to Healing and a <em>Path to Peace</em> Starts Here.
          </h3>
          <div className="space-y-4 text-center">
            <p className="text-body leading-relaxed">
              We&apos;re grateful for the chance to help our clients make
              meaningful changes toward their best selves. Seeking counseling,
              whether for yourself or a loved one, requires courage and strength.
            </p>
            <p className="text-body leading-relaxed">
              Finding the right therapist can be challenging, but it&apos;s a brave
              step toward healing. Avoiding or suppressing pain rather than working
              through and healing from it can drain energy, often leading to symptoms
              like sleep disturbance, chronic fatigue, anxiety and depression.
            </p>
            <p className="text-body leading-relaxed">
              As skilled trauma therapists, we focus on deepening our understanding
              of treating and resolving anxiety, depression, and trauma. We&apos;re
              here to support you every step of the way as you navigate your path to
              a brighter, more fulfilling future.
            </p>
            <p className="text-body leading-relaxed">
              Consider putting your trust in one of our Reston mental health
              therapists. We are here to answer any questions, and ultimately help
              you reach your goals and be on your way to having the life you have
              always wanted and deserved.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              reach out to us today
            </Button>
          </div>
        </div>
      </section>

      {/* A Place for Restoration - cream bg with therapist cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="A Place for Restoration, Growth, and Renewal"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center mt-12">
            {/* Therapist photos - the focus of the section (~60%). Negative
                vertical spacing lets the staggered rows overlap, keeping the
                section compact even as the photos grow. */}
            <div className="lg:col-span-3 -space-y-8 sm:-space-y-10">
              {therapists.map((t, i) => (
                <Link
                  key={t.slug}
                  href={`/therapists/${t.slug}`}
                  className={`flex items-center gap-6 sm:gap-8 group ${
                    i % 2 === 1 ? "ml-16 lg:ml-32" : ""
                  }`}
                >
                  <div className="w-44 h-60 sm:w-52 sm:h-72 rounded-full overflow-hidden relative shrink-0 ring-4 ring-caramel transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                  <div className="bg-teal-100 border border-ink/10 rounded-full px-6 py-3">
                    <p className="font-heading font-bold text-base sm:text-lg text-ink">
                      {t.name}, {t.title}
                    </p>
                    <p className="text-teal-600 text-sm">{t.role}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Office photos - supporting, welcoming touch (~40%) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/office/office-chairs.jpeg"
                  alt="Comfortable seating in our Reston office, ready for a conversation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/office/office-kids.jpeg"
                  alt="Play and sand-tray area for children and teens in our office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
              <p className="text-center lg:text-left text-body">
                A warm, welcoming space for kids, teens, adults, and families.
              </p>
              <div className="text-center lg:text-left">
                <Button href="/therapists" variant="secondary">
                  Meet Our Therapists
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're Here For You CTA - light blue/lavender bg */}
      <section className="py-16 sm:py-20 bg-teal-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mb-3">
            We&apos;re Here For You.
          </h2>
          {/* Same-family teal-300 on powder bg, per the squiggle rule. */}
          <CurvyUnderline className="mt-1 mb-6 h-3 w-40 sm:w-48 text-teal-300 mx-auto" />
          <p className="text-body text-lg mb-2">
            Send us a message and let us know how we can help you start your
          </p>
          <p className="text-body text-lg mb-8">
            journey on a{" "}
            <span className="font-semibold text-teal-600">Path to Peace.</span>
          </p>
          <Button href="/contact" variant="primary">
            take the next step
          </Button>
        </div>
      </section>
    </>
  );
}
