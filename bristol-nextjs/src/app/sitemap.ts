import type { MetadataRoute } from 'next';
import { getAllPageSlugs, getAllPostSlugs } from '@/lib/wordpress';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bristolbr.com.ar';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pageSlugs, postSlugs] = await Promise.all([getAllPageSlugs(), getAllPostSlugs()]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const pageRoutes: MetadataRoute.Sitemap = pageSlugs.map((slug) => ({
    url: `${BASE}/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...pageRoutes, ...postRoutes];
}
