import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CurvyUnderline from "@/components/ui/CurvyUnderline";
import Button from "@/components/ui/Button";
import { therapists } from "@/data/therapists";
import { BUSINESS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero — background on the section itself so it always fills edge-to-edge */}
      <section
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero/hero-nature.jpg')",
          backgroundPosition: "50% calc(50% - 2.5in)",
        }}
      >
        <div className="absolute inset-0 bg-ink/30" aria-hidden />
        <div className="relative z-10 flex items-center justify-center px-4 py-20 text-center text-ivory sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="font-banner text-xs font-medium uppercase tracking-[0.22em] text-ivory/90 sm:text-sm">
              {BUSINESS.name}
            </p>
            <h1 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Your Journey to Healing and a{" "}
              <em className="font-banner italic">Path to Peace</em> Starts Here.
            </h1>
            <div className="mt-10">
              <Button
                href="/contact"
                variant="primary"
                className="tracking-wide sm:px-10"
              >
                reach out to us today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Trauma section — muted blue, closer to header than teal-200 */}
      <section className="py-16 sm:py-20 bg-section-blue">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mb-3">
            Transforming Trauma into Triumph:
          </h2>
          {/* On powder-blue bg: same-family teal-300, not caramel — the
              squiggle's shape is the emphasis, not its contrast. */}
          <CurvyUnderline className="mt-1 mb-6 h-3 w-44 sm:w-52 text-teal-300 mx-auto" />
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

      {/* Practice overview — same format as Transforming Trauma section */}
      <section className="py-16 sm:py-20 bg-section-blue">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mb-3">
            Path to Peace Psychotherapy
          </h2>
          <CurvyUnderline className="mt-1 mb-6 h-3 w-44 sm:w-52 text-teal-300 mx-auto" />
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <p className="text-body leading-relaxed">
              Path to Peace Psychotherapy is a warm and welcoming trauma therapy
              practice in Reston, Virginia, serving clients throughout Fairfax
              County and Northern Virginia, including Herndon, Sterling, Great
              Falls, Tysons Corner, Vienna, and nearby communities.
            </p>
            <p className="text-body leading-relaxed">
              Our team of trauma specialists provides compassionate therapy for
              children, teens, adults, and families. Whether you are navigating
              anxiety, trauma, grief, relationship challenges, life transitions,
              or the lasting effects of difficult experiences, we are here to help
              you feel supported, understood, and less alone.
            </p>
            <p className="text-body leading-relaxed">
              At Path to Peace Psychotherapy, we offer a safe and caring space
              where healing can begin. Our therapists bring warmth, expertise,
              and deep respect for each person&apos;s story, helping clients move
              toward greater calm, connection, and resilience.
            </p>
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
