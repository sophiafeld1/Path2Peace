import { client } from "./client";

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  excerpt: string;
  mainImage?: {
    asset: { _ref: string };
    hotspot?: { x: number; y: number };
  };
  tags?: string[];
  body?: Array<Record<string, unknown>>;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, author, publishedAt, excerpt, mainImage, tags
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) return null;
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, author, publishedAt, excerpt, mainImage, tags, body
    }`,
    { slug }
  );
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "blogPost"].slug.current`
  );
}
