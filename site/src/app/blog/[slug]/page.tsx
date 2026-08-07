import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactInfo from "@/components/ui/ContactInfo";
import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) return {};
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-ivory/70 mb-4">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              &middot; {post.author}
            </p>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold">
              {post.title}
            </h1>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-500 text-ivory px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {post.body ? (
            <div className="prose prose-lg max-w-none text-body">
              {post.body.map((block, i) => {
                if (
                  block._type === "block" &&
                  Array.isArray(block.children)
                ) {
                  const text = (
                    block.children as Array<{ text?: string }>
                  )
                    .map((child) => child.text || "")
                    .join("");
                  return (
                    <p key={i} className="mb-4">
                      {text}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <p className="text-body leading-relaxed">{post.excerpt}</p>
          )}
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
