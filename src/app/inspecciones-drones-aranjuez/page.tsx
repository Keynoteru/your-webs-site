import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Zap, Wind, MapPin, Building, Atom, CheckCircle, ArrowRight, Phone, Clock, Shield, TrendingUp, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inspecciones con Drones en Aranjuez | Paneles Solares, Eólicas, Carreteras | Your Webs',
  description: 'Inspecciones industriales con drones en Aranjuez. Inspección de paneles solares, torres eólicas, aerogeneradores, carreteras, torres de alta tensión, redes eléctricas y centrales nucleares. Servicios profesionales de inspección con drones en Aranjuez, Madrid.',
  keywords: 'inspecciones drones aranjuez, inspección paneles solares aranjuez, inspección torres eólicas aranjuez, inspección aerogeneradores aranjuez, inspección carreteras drones aranjuez, inspección torres alta tensión aranjuez, inspección redes eléctricas aranjuez, inspección centrales nucleares aranjuez, drones inspección industrial aranjuez',
  openGraph: {
    title: 'Inspecciones Industriales con Drones en Aranjuez | Your Webs',
    description: 'Servicios profesionales de inspección con drones para paneles solares, eólicas, carreteras y más en Aranjuez.',
    url: 'https://your-webs.com/inspecciones-drones-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/inspecciones-drones-aranjuez',
  },
};

export default function InspeccionesDronesAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Inspecciones con Drones Aranjuez",
    "description": "Servicios profesionales de inspección industrial con drones en Aranjuez. Inspección de paneles solares, eólicas, carreteras y más.",
    "url": "https://your-webs.com/inspecciones-drones-aranjuez",
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
    },
    "serviceType": "Inspecciones con Drones"
  };

  const inspectionTypes = [
    {
      icon: Zap,
      title: "Inspección de Paneles Solares",
      description: "Inspección detallada de campos de paneles solares con drones en Aranjuez. Detección de defectos, células dañadas y problemas de rendimiento.",
      benefits: [
        "Detección de células defectuosas",
        "Análisis de rendimiento",
        "Identificación de daños",
        "Informes detallados"
      ],
      keywords: ["inspección paneles solares aranjuez", "drones paneles solares", "mantenimiento paneles solares aranjuez"]
    },
    {
      icon: Wind,
      title: "Inspección de Torres Eólicas y Aerogeneradores",
      description: "Inspección aérea de torres eólicas y aerogeneradores en Aranjuez y alrededores. Análisis de palas, estructura y componentes.",
      benefits: [
        "Inspección de palas",
        "Análisis de estructura",
        "Detección de grietas",
        "Evaluación de desgaste"
      ],
      keywords: ["inspección torres eólicas aranjuez", "drones aerogeneradores", "mantenimiento eólicas aranjuez"]
    },
    {
      icon: MapPin,
      title: "Inspección de Carreteras y Puentes",
      description: "Inspección de infraestructura viaria con drones en Aranjuez. Análisis de carreteras, puentes y estructuras de transporte.",
      benefits: [
        "Análisis de pavimento",
        "Inspección de puentes",
        "Detección de grietas",
        "Evaluación estructural"
      ],
      keywords: ["inspección carreteras drones aranjuez", "drones puentes aranjuez", "inspección infraestructura aranjuez"]
    },
    {
      icon: Building,
      title: "Inspección de Torres de Alta Tensión y Redes Eléctricas",
      description: "Inspección segura de torres de alta tensión y redes eléctricas con drones en Aranjuez. Sin necesidad de cortes de suministro.",
      benefits: [
        "Inspección sin cortes",
        "Seguridad mejorada",
        "Análisis de aisladores",
        "Detección de corrosión"
      ],
      keywords: ["inspección torres alta tensión aranjuez", "drones redes eléctricas", "mantenimiento eléctrico aranjuez"]
    },
    {
      icon: Atom,
      title: "Inspección de Centrales Nucleares",
      description: "Servicios especializados de inspección con drones para centrales nucleares. Cumplimiento de normativas de seguridad.",
      benefits: [
        "Cumplimiento normativo",
        "Inspección segura",
        "Documentación completa",
        "Análisis detallado"
      ],
      keywords: ["inspección centrales nucleares drones", "drones nucleares aranjuez", "inspección industrial aranjuez"]
    },
    {
      icon: Search,
      title: "Inspecciones Industriales Generales",
      description: "Inspección de cualquier tipo de instalación industrial con drones en Aranjuez. Soluciones personalizadas para cada necesidad.",
      benefits: [
        "Versatilidad",
        "Soluciones personalizadas",
        "Informes profesionales",
        "Análisis completo"
      ],
      keywords: ["inspección industrial drones aranjuez", "drones industriales", "inspección instalaciones aranjuez"]
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
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-red-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Inspecciones con Drones en{' '}
                <span className="text-red-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Inspecciones industriales profesionales con drones en Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Paneles solares, torres eólicas, carreteras, torres de alta tensión, redes eléctricas y centrales nucleares
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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

        {/* Inspection Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Tipos de Inspecciones con Drones en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Servicios especializados de inspección industrial con drones para empresas de Aranjuez
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {inspectionTypes.map((inspection, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all"
                >
                  <inspection.icon className="w-12 h-12 text-red-400 mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">{inspection.title}</h3>
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">{inspection.description}</p>
                  <ul className="space-y-3 mb-6">
                    {inspection.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="font-light text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {inspection.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs font-light"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 text-center">
                Ventajas de las Inspecciones con Drones en Aranjuez
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3">Seguridad</h3>
                  <p className="text-gray-400 font-light">
                    Eliminamos riesgos para el personal. Las inspecciones con drones en Aranjuez son más seguras que los métodos tradicionales.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3">Eficiencia</h3>
                  <p className="text-gray-400 font-light">
                    Inspecciones más rápidas y completas. Cubrimos grandes áreas en menos tiempo en Aranjuez.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3">Precisión</h3>
                  <p className="text-gray-400 font-light">
                    Imágenes de alta resolución y análisis detallados. Detectamos problemas que pasarían desapercibidos.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3">Coste-Efectivo</h3>
                  <p className="text-gray-400 font-light">
                    Reducción de costes operativos. Sin necesidad de andamios, grúas o cortes de suministro en Aranjuez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Proceso de Inspección con Drones en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Cómo realizamos inspecciones profesionales con drones paso a paso
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Evaluación", desc: "Analizamos tus necesidades de inspección en Aranjuez" },
                  { step: "02", title: "Planificación", desc: "Creamos un plan de vuelo y protocolo de seguridad" },
                  { step: "03", title: "Inspección", desc: "Realizamos la inspección con drones profesionales" },
                  { step: "04", title: "Informe", desc: "Entregamos informe detallado con análisis y recomendaciones" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-light">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Preguntas Frecuentes sobre Inspecciones con Drones en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Qué tipos de inspecciones realizáis con drones en Aranjuez?",
                  a: "Realizamos inspecciones de paneles solares, torres eólicas, aerogeneradores, carreteras, puentes, torres de alta tensión, redes eléctricas, centrales nucleares y cualquier instalación industrial en Aranjuez. Nuestros drones están equipados con cámaras de alta resolución y térmicas para detectar problemas."
                },
                {
                  q: "¿Cuánto cuesta una inspección con drones en Aranjuez?",
                  a: "El precio depende del tipo de instalación, tamaño y complejidad. Una inspección de paneles solares en Aranjuez tiene un coste diferente a una inspección de torres eólicas. Contacta con nosotros para un presupuesto personalizado según tu instalación en Aranjuez."
                },
                {
                  q: "¿Qué información recibiré después de la inspección?",
                  a: "Recibirás un informe completo con imágenes de alta resolución, análisis detallado de los problemas encontrados, ubicación GPS de cada defecto, recomendaciones de mantenimiento y, si es necesario, modelos 3D de la instalación inspeccionada en Aranjuez."
                },
                {
                  q: "¿Necesito parar la producción para la inspección?",
                  a: "En la mayoría de casos no. Las inspecciones con drones en Aranjuez se realizan sin necesidad de parar la producción o cortar el suministro. Esto es especialmente importante en instalaciones como paneles solares o torres eólicas en Aranjuez."
                },
                {
                  q: "¿Qué certificaciones tenéis para inspecciones industriales?",
                  a: "Nuestros operadores de drones en Aranjuez tienen certificaciones AESA (Agencia Estatal de Seguridad Aérea), seguros de responsabilidad civil y experiencia en inspecciones industriales. Cumplimos con todas las normativas para trabajar en instalaciones críticas en Aranjuez."
                },
                {
                  q: "¿Podéis inspeccionar instalaciones fuera de Aranjuez?",
                  a: "Sí, aunque estamos especializados en Aranjuez y alrededores, realizamos inspecciones en toda España. Nuestros operadores de drones certificados pueden desplazarse a cualquier ubicación para realizar inspecciones industriales."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-red-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-red-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-red-900/20 to-red-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                ¿Necesitas una Inspección con Drones en Aranjuez?
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta con operadores de drones certificados para inspecciones industriales en Aranjuez. Presupuesto gratuito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
