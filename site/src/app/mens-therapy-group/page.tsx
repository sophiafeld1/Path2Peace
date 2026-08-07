import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import ContactInfo from "@/components/ui/ContactInfo";

export const metadata: Metadata = {
  title: "Men's Therapy Groups",
  description:
    "Two men's groups offering a safe, grounded, judgment-free space to explore self-awareness, emotional regulation, and meaningful connection.",
};

export default function MensTherapyGroupPage() {
  return (
    <>
      <HeroSection
        title="Men's Therapy Groups"
        subtitle="A safe, grounded, judgment-free space to explore self-awareness, emotional regulation, and the powerful connection between body and mind."
        ctaText="Contact Us to Join"
        ctaHref="/contact"
        backgroundImage="/images/hero/mens-group-photo.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Group 1: Finding Traction */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                Finding Traction
              </h2>
              <p className="text-body leading-relaxed">
                A group for men in their 20s who feel stuck or uncertain about
                their direction. Feeling stuck, burned out, or unsure about your
                next move? You&apos;re not alone.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-ink mb-4">
                Details
              </h3>
              <ul className="space-y-3">
                {[
                  "Weekly 90-minute sessions over 8 weeks",
                  "Maximum of 8 participants",
                  "Starts in late May (flexible)",
                  "In-person or virtual options",
                  "Open to DC, Maryland, or Virginia residents",
                  "$80 per session, with superbill available for insurance reimbursement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body">
                    <span className="text-caramel mt-1">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-ink/10" />

          {/* Group 2: Tolerating Emotions, Building Connections */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                Tolerating Emotions, Building Connections
              </h2>
              <p className="text-body leading-relaxed">
                A weekly men&apos;s group providing a safe, grounded,
                judgment-free space to explore self-awareness, emotional
                regulation, and the powerful connection between body and mind.
                Led by a trauma specialist, it is designed for men dealing with
                connection issues, anxiety, trauma, and loneliness.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-ink mb-4">
                Focus Areas
              </h3>
              <ul className="space-y-3">
                {[
                  "Healthier coping mechanisms",
                  "Grounding and somatic awareness tools",
                  "Emotional resilience",
                  "Self-confidence",
                  "Meaningful connection and reducing isolation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body">
                    <span className="text-caramel mt-1">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-ink mb-4">
                Who Is This For?
              </h3>
              <p className="text-body leading-relaxed">
                Especially well-suited for those currently engaged in trauma
                therapy, offering an embodied space to reinforce healing work
                through connection and practice. The group launches in May.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden">
            <Image
              src="/images/hero/mens-group-flyer.png"
              alt="Men's Therapy Group Flyer"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
