import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-webs.com';
  const now = new Date();
  
  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Hub principal Aranjuez
    {
      url: `${baseUrl}/aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Páginas de marketing local Aranjuez
    {
      url: `${baseUrl}/gestion-redes-sociales-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/marketing-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/agencia-marketing-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Páginas de servicios web Aranjuez
    {
      url: `${baseUrl}/diseno-web-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecommerce-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Páginas de drones Aranjuez
    {
      url: `${baseUrl}/drones-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/inspecciones-drones-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/termografia-drones-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/topografia-drones-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/renderizado-3d-drones-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Páginas de tecnología Aranjuez
    {
      url: `${baseUrl}/inteligencia-artificial-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/big-data-aranjuez`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}

