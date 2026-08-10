import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import MensGroupCard from "@/components/MensGroupCard";
import ContactInfo from "@/components/ui/ContactInfo";
import { mensTherapyGroups } from "@/data/mensTherapyGroups";

export const metadata: Metadata = {
  title: "Men's Therapy Groups",
  description:
    "Men's therapy groups offering a safe, grounded, judgment-free space to explore self-awareness, emotional regulation, and meaningful connection.",
};

export default function MensTherapyGroupPage() {
  return (
    <>
      <HeroSection
        title="Men's Therapy Groups"
        subtitle="A safe, grounded, judgment-free space to explore self-awareness, emotional regulation, and the powerful connection between body and mind."
        backgroundImage="/images/hero/hero-nature.jpg"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {mensTherapyGroups.map((group) => (
              <MensGroupCard key={group.slug} group={group} />
            ))}
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
