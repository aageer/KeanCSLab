import type { MetadataRoute } from "next";
import { news } from "@/lib/data/news";
import { people } from "@/lib/data/people";
import { researchAreas } from "@/lib/data/research";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/people",
    "/research",
    "/phd",
    "/publications",
    "/news",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const research = researchAreas.map((area) => ({
    url: `${site.url}/research/${area.slug}`,
    lastModified: new Date(),
  }));

  const roster = people.map((person) => ({
    url: `${site.url}/people/${person.slug}`,
    lastModified: new Date(),
  }));

  const updates = news.map((item) => ({
    url: `${site.url}/news/${item.slug}`,
    lastModified: new Date(item.date),
  }));

  return [...staticRoutes, ...research, ...roster, ...updates];
}
