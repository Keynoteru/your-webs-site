import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Your Webs - Producción Audiovisual y Desarrollo Web Profesional',
    short_name: 'Your Webs',
    description: 'Agencia especializada en producción audiovisual de alta calidad, desarrollo web profesional, aplicaciones con IA y análisis Big Data. Transformamos tu presencia digital con soluciones innovadoras.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon-64x64.png',
        sizes: '64x64',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-64x64.png',
        sizes: '64x64',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo_yourwebs.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}

