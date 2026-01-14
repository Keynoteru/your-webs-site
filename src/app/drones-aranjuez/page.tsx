import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Drone, Camera, MapPin, Video, CheckCircle, ArrowRight, Shield, Clock, Award, TrendingUp, Users, Zap, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios de Drones en Aranjuez | Grabación, Inspecciones, Topografía | Your Webs',
  description: 'Servicios profesionales de drones en Aranjuez. Grabación aérea, inspecciones industriales, topografía, termografía, renderizado 3D y más. Operadores de drones certificados en Aranjuez, Madrid.',
  keywords: 'drones aranjuez, servicios drones aranjuez, grabación aérea aranjuez, inspecciones drones aranjuez, topografía drones aranjuez, termografía drones aranjuez, fotografía aérea aranjuez, video drones aranjuez, operador drones aranjuez, drones profesionales aranjuez',
  openGraph: {
    title: 'Servicios de Drones Profesionales en Aranjuez | Your Webs',
    description: 'Operadores de drones certificados en Aranjuez. Servicios de grabación, inspecciones, topografía y más.',
    url: 'https://your-webs.com/drones-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/drones-aranjuez',
  },
};

export default function DronesAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Servicios de Drones Aranjuez",
    "description": "Servicios profesionales de drones en Aranjuez. Grabación aérea, inspecciones industriales, topografía y termografía.",
    "url": "https://your-webs.com/drones-aranjuez",
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
    "serviceType": [
      "Servicios de Drones",
      "Grabación Aérea",
      "Inspecciones con Drones",
      "Topografía con Drones",
      "Termografía con Drones"
    ]
  };

  const mainServices = [
    {
      icon: Video,
      title: "Grabación y Video Aéreo",
      description: "Grabación profesional con drones para eventos, promociones y contenido audiovisual en Aranjuez.",
      link: "/drones-aranjuez#grabacion"
    },
    {
      icon: Camera,
      title: "Inspecciones Industriales",
      description: "Inspecciones con drones de paneles solares, torres eólicas, aerogeneradores, carreteras y más en Aranjuez.",
      link: "/inspecciones-drones-aranjuez"
    },
    {
      icon: MapPin,
      title: "Topografía y Cartografía",
      description: "Servicios de topografía con drones para proyectos de construcción y cartografía en Aranjuez.",
      link: "/topografia-drones-aranjuez"
    },
    {
      icon: Drone,
      title: "Termografía con Drones",
      description: "Inspecciones termográficas con drones para detección de problemas en instalaciones de Aranjuez.",
      link: "/termografia-drones-aranjuez"
    }
  ];

  const applications = [
    "Grabación de eventos en Aranjuez",
    "Videos promocionales aéreos",
    "Inspección de paneles solares",
    "Inspección de torres eólicas y aerogeneradores",
    "Inspección de carreteras y puentes",
    "Inspección de torres de alta tensión",
    "Inspección de redes eléctricas",
    "Inspección de centrales nucleares",
    "Topografía para construcción",
    "Cartografía y mapas 3D",
    "Termografía industrial",
    "Renderizado 3D de terrenos"
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
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-black via-orange-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <Drone className="w-20 h-20 text-orange-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Servicios de Drones en{' '}
                <span className="text-orange-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Operadores de drones certificados en Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Grabación aérea, inspecciones industriales, topografía, termografía y renderizado 3D con drones profesionales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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

        {/* Main Services */}
        <section className="py-20" id="grabacion">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Servicios de Drones en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Soluciones profesionales con drones para empresas y particulares en Aranjuez
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {mainServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <service.icon className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 font-light mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 text-orange-400 group-hover:gap-4 transition-all">
                    <span className="font-light">Saber más</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 text-center">
                Aplicaciones de Drones en Aranjuez
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 font-light">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Ventajas de los Servicios de Drones en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "Seguridad", desc: "Eliminamos riesgos para el personal. Los drones permiten inspecciones y grabaciones seguras en Aranjuez sin poner en peligro a trabajadores." },
                { icon: Clock, title: "Rapidez", desc: "Servicios de drones en Aranjuez mucho más rápidos que métodos tradicionales. Cubrimos grandes áreas en menos tiempo." },
                { icon: Zap, title: "Precisión", desc: "Imágenes y datos de alta precisión. Los drones capturan información detallada que sería imposible obtener de otra forma en Aranjuez." },
                { icon: TrendingUp, title: "Coste-Efectivo", desc: "Reducción de costes operativos. Sin necesidad de andamios, grúas o equipos costosos para trabajos en Aranjuez." },
                { icon: Award, title: "Certificados", desc: "Operadores de drones certificados y con todas las autorizaciones necesarias para trabajar en Aranjuez y toda España." },
                { icon: Users, title: "Versatilidad", desc: "Múltiples aplicaciones: grabación, inspecciones, topografía, termografía. Un solo servicio para muchas necesidades en Aranjuez." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-orange-400 mb-4" />
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
                Preguntas Frecuentes sobre Drones en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Necesito algún permiso para usar drones en Aranjuez?",
                  a: "Nosotros tenemos todas las certificaciones y permisos necesarios. Como operadores certificados en Aranjuez, nos encargamos de toda la documentación y autorizaciones requeridas para volar drones en Aranjuez y alrededores."
                },
                {
                  q: "¿Qué tipo de drones utilizáis en Aranjuez?",
                  a: "Utilizamos drones profesionales de última generación adaptados a cada tipo de trabajo en Aranjuez. Desde drones para grabación cinematográfica hasta drones especializados en inspecciones industriales con cámaras térmicas y sensores avanzados."
                },
                {
                  q: "¿Cuánto cuesta un servicio de drones en Aranjuez?",
                  a: "El precio depende del tipo de servicio. Una grabación aérea básica en Aranjuez tiene un coste diferente a una inspección industrial compleja. Contacta con nosotros para un presupuesto personalizado según tus necesidades en Aranjuez."
                },
                {
                  q: "¿Cuánto tiempo tarda un servicio de drones?",
                  a: "Depende del proyecto. Una grabación de evento en Aranjuez puede ser de unas horas, mientras que una inspección completa de paneles solares puede requerir varios días. Te proporcionamos un calendario detallado desde el inicio."
                },
                {
                  q: "¿Podéis trabajar en condiciones meteorológicas adversas en Aranjuez?",
                  a: "Los drones tienen limitaciones con viento fuerte o lluvia. Evaluamos las condiciones meteorológicas antes de cada trabajo en Aranjuez y reprogramamos si es necesario para garantizar la seguridad y calidad del servicio."
                },
                {
                  q: "¿Qué áreas cubrís con drones en Aranjuez?",
                  a: "Trabajamos en Aranjuez y toda la Comunidad de Madrid. También realizamos servicios en otras provincias. Nuestros operadores de drones están certificados para trabajar en toda España, aunque nuestra especialización está en Aranjuez y alrededores."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-orange-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-orange-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-900/20 to-orange-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                ¿Necesitas Servicios de Drones en Aranjuez?
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta con operadores de drones certificados en Aranjuez. Presupuesto gratuito sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
