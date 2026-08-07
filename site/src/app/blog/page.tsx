import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import BlogPostCard from "@/components/BlogPostCard";
import ContactInfo from "@/components/ui/ContactInfo";
import { getAllPosts, type BlogPost } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Our Blog",
  description:
    "Insights and articles on trauma therapy, EMDR, IFS, and the therapeutic relationship from Path to Peace Psychotherapy.",
};

// Fallback posts when Sanity is not configured
const fallbackPosts: BlogPost[] = [
  {
    _id: "1",
    title: "Wait, Am I an Introvert Now? Maybe Not...",
    slug: { current: "wait-am-i-an-introvert-now" },
    author: "Robin Feldman",
    publishedAt: "2025-09-16",
    excerpt:
      "For much of your life, you may have identified as an extrovert - the kind of person who thrived in connection, conversation, and community.",
    tags: ["Trauma"],
  },
  {
    _id: "2",
    title:
      "Why 'Trauma-Informed' Isn't Always Enough: How to Find the Right Help for Healing",
    slug: { current: "trauma-informed-isnt-always-enough" },
    author: "Robin Feldman",
    publishedAt: "2025-04-18",
    excerpt:
      "Being trauma-informed means a practitioner has some awareness of how trauma affects people...But here's the key: Being trauma-informed is not the same as being trained to treat trauma.",
    tags: ["Trauma", "Therapeutic Relationship"],
  },
  {
    _id: "3",
    title: "What Makes Exceptional Therapy? A Guide to Finding Your Best Fit.",
    slug: { current: "what-makes-exceptional-therapy" },
    author: "Robin Feldman",
    publishedAt: "2025-01-19",
    excerpt:
      "Psychotherapy has long been a sanctuary for personal growth, healing, and self-discovery.",
    tags: ["Therapeutic Relationship"],
  },
];

export default async function BlogPage() {
  let posts = fallbackPosts;

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const sanityPosts = await getAllPosts();
      if (sanityPosts.length > 0) {
        posts = sanityPosts;
      }
    }
  } catch {
    // Use fallback posts
  }

  return (
    <>
      <HeroSection
        title="Our Blog"
        subtitle="Insights and articles on trauma therapy, healing, and the therapeutic relationship."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard
                key={post._id}
                title={post.title}
                slug={post.slug.current}
                excerpt={post.excerpt}
                date={new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                author={post.author}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
