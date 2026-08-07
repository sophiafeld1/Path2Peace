import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import ContactForm from "@/components/ContactForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Path to Peace Psychotherapy. We offer a free 15-minute phone consultation.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Thank you for reaching out to us and taking the next step on your Path to Peace. We offer a free 15-minute phone consultation."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4 text-body">
                  <div>
                    <p className="font-semibold text-ink">Phone</p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Address</p>
                    <p>{BUSINESS.address}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">
                      {BUSINESS.consultation}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-ink mb-4">
                  What to Expect
                </h2>
                <p className="text-body leading-relaxed">
                  Please provide information about yourself or your child/teen
                  and describe how we can help. Expect a response within one
                  business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
