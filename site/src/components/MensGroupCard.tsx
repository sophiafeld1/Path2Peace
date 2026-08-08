import Link from "next/link";
import Card from "./ui/Card";
import type { MensTherapyGroup } from "@/data/mensTherapyGroups";

export default function MensGroupCard({ group }: { group: MensTherapyGroup }) {
  return (
    <Card>
      <h3 className="font-heading text-xl font-bold text-ink">{group.name}</h3>
      <p className="mt-3 text-body text-sm leading-relaxed">{group.description}</p>
      <Link
        href={`/mens-therapy-group/${group.slug}`}
        className="inline-block mt-6 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
      >
        Learn More &rarr;
      </Link>
    </Card>
  );
}
