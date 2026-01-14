import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Ruler, CheckCircle, ArrowRight, Phone, Clock, Shield, TrendingUp, Award, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Topografía con Drones en Aranjuez | Cartografía y Levantamiento Topográfico | Your Webs',
  description: 'Servicios de topografía y cartografía con drones en Aranjuez. Levantamiento topográfico, mapas 3D, curvas de nivel y cartografía profesional para proyectos de construcción en Aranjuez, Madrid.',
  keywords: 'topografía drones aranjuez, cartografía drones aranjuez, levantamiento topográfico aranjuez, mapas 3d drones aranjuez, drones topografía aranjuez, cartografía aérea aranjuez, levantamiento aéreo aranjuez',
  openGraph: {
    title: 'Topografía y Cartografía con Drones en Aranjuez | Your Webs',
    description: 'Servicios profesionales de topografía y cartografía con drones para proyectos en Aranjuez.',
    url: 'https://your-webs.com/topografia-drones-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/topografia-drones-aranjuez',
  },
};

export default function TopografiaDronesAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Topografía con Drones Aranjuez",
    "description": "Servicios de topografía y cartografía con drones en Aranjuez. Levantamiento topográfico y mapas 3D.",
    "url": "https://your-webs.com/topografia-drones-aranjuez",
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
      title: "Levantamiento Topográfico",
      description: "Levantamiento topográfico preciso con drones para proyectos de construcción en Aranjuez.",
      features: ["Precisión centimétrica", "Curvas de nivel", "Modelos 3D", "Informes técnicos"]
    },
    {
      title: "Cartografía y Mapas 3D",
      description: "Creación de mapas 3D y cartografía detallada con drones para proyectos en Aranjuez.",
      features: ["Ortofotos", "Modelos digitales", "Mapas temáticos", "Visualización 3D"]
    },
    {
      title: "Medición de Volúmenes",
      description: "Cálculo preciso de volúmenes de tierra, escombros y materiales con drones en Aranjuez.",
      features: ["Cálculo de volúmenes", "Comparación temporal", "Informes detallados", "Precisión alta"]
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
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-indigo-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <MapPin className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Topografía con Drones en{' '}
                <span className="text-indigo-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Levantamiento topográfico y cartografía con drones en Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Servicios profesionales de topografía y cartografía aérea para proyectos en Aranjuez, Madrid
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
                Servicios de Topografía en Aranjuez
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
                        <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
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
                Ventajas de la Topografía con Drones en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "Rapidez", desc: "Levantamientos topográficos con drones en Aranjuez son 5-10 veces más rápidos que métodos tradicionales. Cubrimos grandes áreas en horas en lugar de días." },
                { icon: Award, title: "Precisión", desc: "Precisión centimétrica con drones en Aranjuez. La fotogrametría con drones proporciona datos topográficos de alta precisión para proyectos en Aranjuez." },
                { icon: Clock, title: "Ahorro de Tiempo", desc: "Ahorra tiempo en tus proyectos de construcción en Aranjuez. Los levantamientos topográficos con drones reducen significativamente los tiempos de trabajo." },
                { icon: TrendingUp, title: "Coste-Efectivo", desc: "Reducción de costes en proyectos de Aranjuez. La topografía con drones es más económica que métodos tradicionales con topógrafos y equipos." },
                { icon: Shield, title: "Seguridad", desc: "Elimina riesgos para topógrafos en Aranjuez. Los drones acceden a terrenos difíciles sin poner en peligro al personal." },
                { icon: Users, title: "Visualización 3D", desc: "Modelos 3D y visualización completa. La topografía con drones en Aranjuez genera modelos digitales que facilitan la planificación de proyectos." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-indigo-400 mb-4" />
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
                Preguntas Frecuentes sobre Topografía con Drones en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Qué precisión tiene la topografía con drones en Aranjuez?",
                  a: "La topografía con drones en Aranjuez puede alcanzar precisiones centimétricas (2-5 cm) dependiendo del tipo de proyecto y equipamiento utilizado. Para la mayoría de proyectos de construcción en Aranjuez, esta precisión es más que suficiente."
                },
                {
                  q: "¿Cuánto tiempo tarda un levantamiento topográfico con drones?",
                  a: "Depende del tamaño del terreno. Un terreno pequeño en Aranjuez puede ser levantado en unas horas, mientras que proyectos grandes pueden requerir 1-2 días. Es mucho más rápido que métodos tradicionales en Aranjuez."
                },
                {
                  q: "¿Qué información recibiré del levantamiento topográfico?",
                  a: "Recibirás ortofotos de alta resolución, modelos digitales del terreno (MDT), curvas de nivel, mapas 3D, cálculos de volúmenes y archivos en formatos estándar (CAD, GIS) para tu proyecto en Aranjuez."
                },
                {
                  q: "¿Puedo usar los datos para proyectos de construcción en Aranjuez?",
                  a: "Sí, los datos topográficos con drones en Aranjuez son válidos para proyectos de construcción, planificación urbanística, estudios de impacto ambiental y más. Cumplen con los estándares técnicos requeridos."
                },
                {
                  q: "¿Cuánto cuesta un levantamiento topográfico con drones?",
                  a: "El precio depende del tamaño del terreno, complejidad y tipo de entregables necesarios. Contacta con nosotros para un presupuesto personalizado para tu proyecto en Aranjuez."
                },
                {
                  q: "¿Necesito algún permiso para la topografía con drones?",
                  a: "Nosotros tenemos todas las certificaciones y permisos necesarios. Como operadores certificados en Aranjuez, nos encargamos de toda la documentación y autorizaciones para volar drones en Aranjuez y alrededores."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-indigo-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-indigo-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-indigo-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                Topografía Profesional en Aranjuez
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta para servicios de topografía y cartografía con drones en Aranjuez. Presupuesto gratuito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
