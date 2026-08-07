import Link from "next/link";
import Image from "next/image";
import Card from "./ui/Card";
import type { Therapist } from "@/data/therapists";

export default function TherapistCard({ therapist }: { therapist: Therapist }) {
  return (
    <Link
      href={`/therapists/${therapist.slug}`}
      className="group block h-full rounded-xl transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
    >
      <Card className="h-full transition-shadow duration-200 group-hover:shadow-md">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden relative">
            <Image
              src={therapist.image}
              alt={therapist.name}
              fill
              className="object-cover object-top"
              sizes="128px"
            />
          </div>
          <h3 className="font-heading text-xl font-bold text-ink">
            {therapist.name}, {therapist.title}
          </h3>
          <p className="text-teal-600 font-medium mt-1">{therapist.role}</p>
          <p className="mt-4 text-body text-sm leading-relaxed">
            {therapist.shortBio}
          </p>
          <span className="inline-block mt-6 text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors">
            Learn More &rarr;
          </span>
        </div>
      </Card>
    </Link>
  );
}
