import type { MetadataRoute } from "next";
import { ORG } from "@/content/holding";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ORG.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
