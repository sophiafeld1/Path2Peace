import Link from "next/link";
import Card from "./ui/Card";
import type { Modality } from "@/data/modalities";

export default function ModalityCard({ modality }: { modality: Modality }) {
  return (
    <Card>
      <h3 className="font-heading text-xl font-bold text-ink">
        {modality.shortName}
      </h3>
      <p className="mt-3 text-body text-sm leading-relaxed">
        {modality.description}
      </p>
      <Link
        href={`/modalities/${modality.slug}`}
        className="inline-block mt-6 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
      >
        Learn More &rarr;
      </Link>
    </Card>
  );
}
