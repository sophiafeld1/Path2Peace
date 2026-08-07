import Link from "next/link";
import Card from "./ui/Card";

interface BlogPostCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
}

export default function BlogPostCard({
  title,
  slug,
  excerpt,
  date,
  author,
}: BlogPostCardProps) {
  return (
    <Card>
      <p className="text-sm text-teal-600 font-medium mb-2">
        {date} &middot; {author}
      </p>
      <h3 className="font-heading text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-body text-sm leading-relaxed">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="inline-block mt-6 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
      >
        Read More &rarr;
      </Link>
    </Card>
  );
}
