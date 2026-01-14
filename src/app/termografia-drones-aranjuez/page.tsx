import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Thermometer, Search, CheckCircle, ArrowRight, Phone, Clock, Shield, TrendingUp, Award, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Termografía con Drones en Aranjuez | Inspección Termográfica Aérea | Your Webs',
  description: 'Servicios de termografía con drones en Aranjuez. Inspección termográfica aérea para detección de problemas en instalaciones, paneles solares, edificios y más en Aranjuez, Madrid.',
  keywords: 'termografía drones aranjuez, inspección termográfica aranjuez, termografía aérea aranjuez, drones termografía aranjuez, cámara térmica drones aranjuez, inspección térmica aranjuez, termografía industrial aranjuez',
  openGraph: {
    title: 'Termografía con Drones en Aranjuez | Your Webs',
    description: 'Servicios profesionales de termografía aérea con drones para empresas de Aranjuez.',
    url: 'https://your-webs.com/termografia-drones-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/termografia-drones-aranjuez',
  },
};

export default function TermografiaDronesAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Termografía con Drones Aranjuez",
    "description": "Servicios de termografía aérea con drones en Aranjuez. Inspección termográfica para detección de problemas.",
    "url": "https://your-webs.com/termografia-drones-aranjuez",
    "telephone": "+34-680-548-144",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aranjuez",
      "addressRegion": "Madrid",
      "postalCode": "28300",
      "addressCountry": "ES"
    },
    "areaServed": {
      "@type": "City",
      "name": "Aranjuez"
    }
  };

  const applications = [
    {
      title: "Inspección de Paneles Solares",
      description: "Detección de células defectuosas y puntos calientes en paneles solares de Aranjuez mediante termografía aérea."
    },
    {
      title: "Análisis de Edificios",
      description: "Detección de pérdidas de calor, humedades y problemas de aislamiento en edificios de Aranjuez."
    },
    {
      title: "Inspección Industrial",
      description: "Detección de sobrecalentamientos en instalaciones industriales de Aranjuez."
    },
    {
      title: "Instalaciones Eléctricas",
      description: "Localización de problemas en instalaciones eléctricas mediante termografía con drones en Aranjuez."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      
      <Header />
      <main className="min-h-screen bg-black text-white">
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <Thermometer className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Termografía con Drones en{' '}
                <span className="text-yellow-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Inspección termográfica aérea profesional en Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Detección de problemas mediante cámaras térmicas con drones en Aranjuez, Madrid
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  Consulta Gratuita
                </a>
                <a
                  href="/#proyectos"
                  className="border border-white/30 hover:border-white text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Proyectos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Aplicaciones de Termografía con Drones en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-light text-white mb-4">{app.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Ventajas de la Termografía con Drones en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "Detección Temprana", desc: "Detecta problemas antes de que se conviertan en fallos costosos. La termografía con drones en Aranjuez identifica puntos calientes y anomalías térmicas." },
                { icon: Shield, title: "Sin Contacto", desc: "Inspección sin contacto físico. Los drones con cámaras térmicas en Aranjuez permiten inspeccionar instalaciones sin necesidad de acceso directo." },
                { icon: Clock, title: "Rapidez", desc: "Inspecciones rápidas y completas. La termografía aérea con drones en Aranjuez cubre grandes áreas en menos tiempo que métodos tradicionales." },
                { icon: TrendingUp, title: "Prevención", desc: "Previene fallos y averías costosas. La detección temprana con termografía en Aranjuez ahorra dinero en reparaciones." },
                { icon: Award, title: "Precisión", desc: "Imágenes térmicas de alta resolución. Los drones en Aranjuez capturan datos precisos que permiten análisis detallados." },
                { icon: Users, title: "Seguridad", desc: "Elimina riesgos para el personal. La termografía con drones en Aranjuez es más segura que inspecciones manuales en altura." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-light text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Preguntas Frecuentes sobre Termografía con Drones en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Qué es la termografía con drones?",
                  a: "La termografía con drones utiliza cámaras térmicas montadas en drones para detectar variaciones de temperatura en instalaciones. En Aranjuez, usamos esta tecnología para identificar problemas en paneles solares, edificios, instalaciones eléctricas y más."
                },
                {
                  q: "¿Qué problemas puede detectar la termografía en Aranjuez?",
                  a: "La termografía con drones en Aranjuez detecta células defectuosas en paneles solares, pérdidas de calor en edificios, sobrecalentamientos en instalaciones eléctricas, humedades, problemas de aislamiento y más. Es especialmente útil para mantenimiento preventivo en Aranjuez."
                },
                {
                  q: "¿Cuánto cuesta un servicio de termografía con drones?",
                  a: "El precio depende del tamaño de la instalación y tipo de análisis necesario. Contacta con nosotros para un presupuesto personalizado para tu instalación en Aranjuez."
                },
                {
                  q: "¿Qué información recibiré después de la inspección termográfica?",
                  a: "Recibirás imágenes térmicas de alta resolución, informe detallado con análisis de problemas detectados, ubicación GPS de cada anomalía, recomendaciones de mantenimiento y comparativas térmicas. Todo adaptado a tu instalación en Aranjuez."
                },
                {
                  q: "¿Funciona la termografía en cualquier condición meteorológica?",
                  a: "Las condiciones meteorológicas afectan la termografía. Funciona mejor en días nublados o al amanecer/atardecer. Evaluamos las condiciones antes de cada trabajo en Aranjuez para garantizar resultados óptimos."
                },
                {
                  q: "¿Necesito parar la producción para la termografía?",
                  a: "En la mayoría de casos no. La termografía con drones en Aranjuez se realiza sin necesidad de parar la producción, lo que es especialmente importante en instalaciones industriales y paneles solares en Aranjuez."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-yellow-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-yellow-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-yellow-900/20 to-yellow-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                Termografía Profesional en Aranjuez
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta para servicios de termografía con drones en Aranjuez. Presupuesto gratuito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  Consulta Gratuita
                </a>
                <a
                  href="/#proyectos"
                  className="border border-white/30 hover:border-white text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Proyectos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
