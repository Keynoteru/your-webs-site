import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box, CheckCircle, ArrowRight, Phone, Clock, Shield, TrendingUp, Award, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Renderizado 3D con Drones en Aranjuez | Modelos 3D y Visualización | Your Webs',
  description: 'Servicios de renderizado 3D con drones en Aranjuez. Creación de modelos 3D, visualización de terrenos, edificios y proyectos mediante fotogrametría con drones en Aranjuez, Madrid.',
  keywords: 'renderizado 3d drones aranjuez, modelos 3d drones aranjuez, fotogrametría aranjuez, visualización 3d aranjuez, drones 3d aranjuez, modelado 3d aranjuez, reconstrucción 3d aranjuez',
  openGraph: {
    title: 'Renderizado 3D con Drones en Aranjuez | Your Webs',
    description: 'Servicios profesionales de renderizado y modelado 3D con drones para proyectos en Aranjuez.',
    url: 'https://your-webs.com/renderizado-3d-drones-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/renderizado-3d-drones-aranjuez',
  },
};

export default function Renderizado3DDronesAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Renderizado 3D con Drones Aranjuez",
    "description": "Servicios de renderizado y modelado 3D con drones en Aranjuez. Creación de modelos 3D mediante fotogrametría.",
    "url": "https://your-webs.com/renderizado-3d-drones-aranjuez",
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

  const services = [
    {
      title: "Modelos 3D de Terrenos",
      description: "Creación de modelos 3D precisos de terrenos y parcelas en Aranjuez mediante fotogrametría con drones.",
      features: ["Modelos digitales", "Texturas realistas", "Mediciones precisas", "Exportación múltiples formatos"]
    },
    {
      title: "Reconstrucción 3D de Edificios",
      description: "Renderizado 3D de edificios y estructuras en Aranjuez. Visualización completa de proyectos arquitectónicos.",
      features: ["Reconstrucción completa", "Texturas detalladas", "Modelos editables", "Visualización VR"]
    },
    {
      title: "Visualización de Proyectos",
      description: "Renderizado 3D de proyectos de construcción y desarrollo en Aranjuez antes de su ejecución.",
      features: ["Previsualización", "Análisis de impacto", "Presentaciones", "Documentación técnica"]
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
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <Box className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Renderizado 3D con Drones en{' '}
                <span className="text-purple-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Modelos 3D y visualización con drones en Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Servicios profesionales de renderizado 3D mediante fotogrametría con drones para proyectos en Aranjuez
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
                Servicios de Renderizado 3D en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="font-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                Ventajas del Renderizado 3D con Drones en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "Visualización Realista", desc: "Modelos 3D realistas y detallados. El renderizado 3D con drones en Aranjuez proporciona visualizaciones precisas de terrenos y edificios." },
                { icon: Award, title: "Precisión", desc: "Modelos 3D con precisión milimétrica. La fotogrametría con drones en Aranjuez genera modelos digitales exactos para proyectos." },
                { icon: Clock, title: "Rapidez", desc: "Renderizado 3D rápido con drones. Los modelos 3D en Aranjuez se generan en días en lugar de semanas con métodos tradicionales." },
                { icon: TrendingUp, title: "Planificación", desc: "Mejora la planificación de proyectos en Aranjuez. Los modelos 3D facilitan la visualización y toma de decisiones." },
                { icon: Shield, title: "Análisis", desc: "Análisis detallado de terrenos y estructuras. El renderizado 3D con drones en Aranjuez permite análisis volumétricos y de superficie." },
                { icon: Users, title: "Presentación", desc: "Presentaciones profesionales para clientes en Aranjuez. Los modelos 3D son herramientas de comunicación visual muy efectivas." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-purple-400 mb-4" />
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
                Preguntas Frecuentes sobre Renderizado 3D con Drones en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Qué es el renderizado 3D con drones?",
                  a: "El renderizado 3D con drones utiliza fotogrametría para crear modelos tridimensionales a partir de fotografías aéreas. En Aranjuez, usamos esta tecnología para generar modelos 3D de terrenos, edificios y proyectos de construcción."
                },
                {
                  q: "¿Qué precisión tienen los modelos 3D?",
                  a: "Los modelos 3D con drones en Aranjuez pueden alcanzar precisiones de 1-3 cm dependiendo del proyecto. Esta precisión es suficiente para la mayoría de aplicaciones en construcción y arquitectura en Aranjuez."
                },
                {
                  q: "¿Qué formatos de archivo recibiré?",
                  a: "Proporcionamos modelos 3D en múltiples formatos: OBJ, PLY, FBX, DAE y más. También podemos exportar a formatos CAD y GIS según las necesidades de tu proyecto en Aranjuez."
                },
                {
                  q: "¿Cuánto tiempo tarda en generarse un modelo 3D?",
                  a: "Depende del tamaño y complejidad. Un modelo 3D básico de un terreno pequeño en Aranjuez puede estar listo en 2-3 días, mientras que proyectos complejos pueden requerir 1-2 semanas."
                },
                {
                  q: "¿Puedo usar los modelos 3D para visualización VR?",
                  a: "Sí, los modelos 3D generados con drones en Aranjuez pueden exportarse para visualización en realidad virtual, lo que es muy útil para presentaciones de proyectos arquitectónicos y de construcción en Aranjuez."
                },
                {
                  q: "¿Cuánto cuesta un renderizado 3D con drones?",
                  a: "El precio depende del tamaño del área, complejidad del modelo y nivel de detalle requerido. Contacta con nosotros para un presupuesto personalizado para tu proyecto en Aranjuez."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-purple-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-purple-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                Renderizado 3D Profesional en Aranjuez
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta para servicios de renderizado y modelado 3D con drones en Aranjuez. Presupuesto gratuito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
