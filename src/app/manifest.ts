import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Your Webs - Producción Audiovisual y Desarrollo Web',
    short_name: 'Your Webs',
    description: 'Especializados en videos de alta calidad para redes sociales de restaurantes Michelin y desarrollo web profesional con IA.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/logo_yourwebs.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
  };
}

