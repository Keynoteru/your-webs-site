import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilmDivider from '@/components/FilmDivider';
import Footer from '@/components/Footer';

// Lazy load heavy components for better initial load
const VideoShowcase = dynamic(() => import('@/components/VideoShowcase'), {
  ssr: true,
});
const Services = dynamic(() => import('@/components/Services'), {
  ssr: true,
});
const Clients = dynamic(() => import('@/components/Clients'), {
  ssr: true,
});

export default function Home() {
  const services = [
    {
      "@type": "Service",
      "serviceType": "Producción Audiovisual",
      "description": "Creamos contenido cinematográfico que conecta con tu audiencia",
      "provider": {
        "@type": "Organization",
        "name": "Your Webs"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Desarrollo Web",
      "description": "Sitios web y plataformas digitales que impulsan tu crecimiento",
      "provider": {
        "@type": "Organization",
        "name": "Your Webs"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Automatización Inteligente",
      "description": "Sistemas de IA que optimizan operaciones empresariales",
      "provider": {
        "@type": "Organization",
        "name": "Your Webs"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Business Intelligence",
      "description": "Analytics estratégicos para la toma de decisiones ejecutivas",
      "provider": {
        "@type": "Organization",
        "name": "Your Webs"
      }
    }
  ];

  return (
    <>
      {/* Structured Data - WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Your Webs",
            "url": "https://your-webs.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://your-webs.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
          }}
      />
      
      {/* Structured Data - Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": service
            }))
          })
        }}
      />
      
      <main className="min-h-screen" role="main">
        <Header />
        <Hero />
        <FilmDivider />
        <section aria-label="Proyectos destacados">
          <VideoShowcase />
        </section>
        <section aria-label="Nuestros servicios">
          <Services />
        </section>
        <section aria-label="Clientes que confían en nosotros">
          <Clients />
        </section>
        <Footer />
      </main>
    </>
  );
}