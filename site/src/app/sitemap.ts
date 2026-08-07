import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pathtopeacepsychotherapy.com";

  const staticPages = [
    "",
    "/our-approach",
    "/therapists",
    "/therapists/robin-feldman",
    "/therapists/robert-alexander",
    "/therapists/anita-madhava",
    "/modalities",
    "/modalities/internal-family-systems",
    "/modalities/emdr",
    "/modalities/ego-state-therapy",
    "/modalities/aedp",
    "/fees-and-photos",
    "/faqs",
    "/blog",
    "/mens-therapy-group",
    "/contact",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
