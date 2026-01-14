import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Megaphone, ShoppingCart, Monitor, Instagram, Facebook, Linkedin, Youtube, Drone, Brain, Database, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios de Marketing Digital y Tecnología en Aranjuez | Your Webs',
  description: 'Agencia de marketing digital, diseño web, e-commerce, gestión de redes sociales, drones, inteligencia artificial y Big Data en Aranjuez, Madrid. Soluciones completas para empresas de Aranjuez.',
  keywords: 'marketing aranjuez, agencia marketing aranjuez, diseño web aranjuez, ecommerce aranjuez, redes sociales aranjuez, drones aranjuez, inteligencia artificial aranjuez, big data aranjuez, servicios digitales aranjuez',
  openGraph: {
    title: 'Servicios Digitales en Aranjuez | Your Webs',
    description: 'Marketing digital, diseño web, e-commerce, redes sociales, drones, IA y Big Data para empresas de Aranjuez.',
    url: 'https://your-webs.com/aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/aranjuez',
  },
};

export default function AranjuezPage() {
  const services = [
    {
      category: 'Marketing',
      icon: Megaphone,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          title: 'Agencia de Marketing',
          description: 'Estrategias de marketing digital completas para empresas de Aranjuez',
          link: '/agencia-marketing-aranjuez',
        },
        {
          title: 'Marketing Digital',
          description: 'Campañas y estrategias de marketing online en Aranjuez',
          link: '/marketing-aranjuez',
        },
        {
          title: 'Gestión de Redes Sociales',
          description: 'Community management y estrategia de redes sociales en Aranjuez',
          link: '/gestion-redes-sociales-aranjuez',
        },
      ],
    },
    {
      category: 'Web',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          title: 'Diseño Web',
          description: 'Diseño y desarrollo de páginas web para empresas de Aranjuez',
          link: '/diseno-web-aranjuez',
        },
        {
          title: 'E-commerce',
          description: 'Tiendas online y soluciones de comercio electrónico en Aranjuez',
          link: '/ecommerce-aranjuez',
        },
      ],
    },
    {
      category: 'Drones',
      icon: Drone,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          title: 'Servicios de Drones',
          description: 'Hub de servicios de drones profesionales en Aranjuez',
          link: '/drones-aranjuez',
        },
        {
          title: 'Inspecciones con Drones',
          description: 'Inspecciones industriales y de infraestructura con drones',
          link: '/inspecciones-drones-aranjuez',
        },
        {
          title: 'Termografía con Drones',
          description: 'Análisis termográfico aéreo para mantenimiento y eficiencia',
          link: '/termografia-drones-aranjuez',
        },
        {
          title: 'Topografía con Drones',
          description: 'Levantamientos topográficos y cartografía aérea',
          link: '/topografia-drones-aranjuez',
        },
        {
          title: 'Renderizado 3D con Drones',
          description: 'Modelado 3D y visualización aérea',
          link: '/renderizado-3d-drones-aranjuez',
        },
      ],
    },
    {
      category: 'Tecnología',
      icon: Sparkles,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          title: 'Inteligencia Artificial',
          description: 'Soluciones de IA para empresas de Aranjuez',
          link: '/inteligencia-artificial-aranjuez',
        },
        {
          title: 'Big Data',
          description: 'Análisis de datos y business intelligence en Aranjuez',
          link: '/big-data-aranjuez',
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Your Webs - Servicios Digitales Aranjuez",
            "description": "Agencia de marketing digital, diseño web, e-commerce, redes sociales, drones, IA y Big Data en Aranjuez",
            "url": "https://your-webs.com/aranjuez",
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
          })
        }}
      />
      
      <Header />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/30 to-black">
          <div className="container mx-auto px-4 py-10 md:py-12 lg:py-20 xl:py-24">
            <div className="max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extralight text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 tracking-tight">
                Servicios Digitales en{' '}
                <span className="text-purple-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-base md:text-xl lg:text-3xl xl:text-4xl text-gray-300 mb-4 md:mb-6 lg:mb-8 xl:mb-10 font-light leading-relaxed max-w-4xl lg:max-w-5xl mx-auto">
                Marketing Digital, Diseño Web, E-commerce, Redes Sociales, Drones, IA y Big Data para empresas de Aranjuez
              </p>
              <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-400 mb-10 md:mb-12 lg:mb-16 xl:mb-20 font-light max-w-3xl lg:max-w-4xl mx-auto">
                Soluciones completas de transformación digital para tu negocio en Aranjuez, Madrid
              </p>
              <div className="flex flex-row gap-3 sm:gap-4 lg:gap-6 justify-center w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 md:px-10 md:py-5 lg:px-14 lg:py-6 xl:px-16 xl:py-7 rounded-full text-sm md:text-lg lg:text-xl xl:text-2xl font-medium transition-colors inline-flex items-center justify-center flex-1 whitespace-nowrap"
                >
                  Consulta Gratuita
                </a>
                <a
                  href="/#proyectos"
                  className="border border-white/30 hover:border-white text-white px-6 py-2.5 md:px-10 md:py-5 lg:px-14 lg:py-6 xl:px-16 xl:py-7 rounded-full text-sm md:text-lg lg:text-xl xl:text-2xl font-medium transition-colors inline-flex items-center justify-center gap-2 flex-1 whitespace-nowrap"
                >
                  Proyectos
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                Nuestros Servicios en Aranjuez
              </h2>
              <p className="text-base md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                Soluciones digitales completas para empresas de Aranjuez
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
              {services.map((category, categoryIdx) => (
                <div key={categoryIdx} className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 flex items-center justify-center`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-white mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.services.map((service, serviceIdx) => (
                      <Link
                        key={serviceIdx}
                        href={service.link}
                        className="block group"
                      >
                        <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="text-lg md:text-xl font-normal text-white mb-2 group-hover:text-purple-400 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-sm md:text-base text-gray-400 font-light">
                                {service.description}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                ¿Listo para Crecer en Aranjuez?
              </h2>
              <p className="text-base md:text-xl text-gray-300 font-light mb-6 md:mb-8">
                Contacta con nosotros y descubre cómo podemos ayudar a tu negocio en Aranjuez
              </p>
              <div className="flex flex-row gap-2 sm:gap-4 justify-center w-full max-w-md mx-auto">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 md:px-10 md:py-5 rounded-full text-sm md:text-lg font-medium transition-colors inline-flex items-center justify-center flex-1 whitespace-nowrap"
                >
                  Consulta Gratuita
                </a>
                <a
                  href="/#proyectos"
                  className="border border-white/30 hover:border-white text-white px-6 py-2.5 md:px-10 md:py-5 rounded-full text-sm md:text-lg font-medium transition-colors inline-flex items-center justify-center gap-2 flex-1 whitespace-nowrap"
                >
                  Proyectos
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
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
