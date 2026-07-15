import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://carroattrezzibrescia24.it/', priority: 1, changeFrequency: 'weekly' },
    { url: 'https://carroattrezzibrescia24.it/#servizi', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://carroattrezzibrescia24.it/#zone', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://carroattrezzibrescia24.it/#contatti', priority: 0.8, changeFrequency: 'monthly' },
  ]
}
