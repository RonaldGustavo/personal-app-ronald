import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.ronaldgustavo.my.id';

// Update this ONLY when the page content actually changes — not on every deploy.
// Google ignores lastmod entirely if it proves unreliable.
const lastContentUpdate = new Date('2026-07-29');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
