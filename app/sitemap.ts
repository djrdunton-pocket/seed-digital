import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: 'https://seed-digital.ai', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://seed-digital.ai/ai-audit', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://seed-digital.ai/services', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://seed-digital.ai/web', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://seed-digital.ai/privacy', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://seed-digital.ai/terms', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://seed-digital.ai/cookies', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
