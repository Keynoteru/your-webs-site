import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, CheckCircle, ArrowRight, TrendingUp, Users, Award, Clock, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agencia de Marketing Digital en Aranjuez | Your Webs',
  description: 'Agencia de marketing digital en Aranjuez especializada en producción audiovisual, desarrollo web, SEO y estrategias digitales para empresas locales. Servicios de marketing online en Aranjuez, Madrid.',
  keywords: 'marketing digital aranjuez, agencia marketing aranjuez, marketing online aranjuez, seo aranjuez, publicidad aranjuez, redes sociales aranjuez, desarrollo web aranjuez, producción audiovisual aranjuez',
  openGraph: {
    title: 'Agencia de Marketing Digital en Aranjuez | Your Webs',
    description: 'Especialistas en marketing digital y producción audiovisual en Aranjuez. Ayudamos a empresas locales a crecer con estrategias digitales efectivas.',
    url: 'https://your-webs.com/marketing-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/marketing-aranjuez',
  },
};

export default function MarketingAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Agencia de Marketing Digital Aranjuez",
    "image": "https://your-webs.com/logo_your_webs.svg",
    "description": "Agencia de marketing digital en Aranjuez especializada en producción audiovisual, desarrollo web, SEO y estrategias digitales para empresas locales.",
    "url": "https://your-webs.com/marketing-aranjuez",
    "telephone": "+34-680-548-144",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aranjuez",
      "addressLocality": "Aranjuez",
      "addressRegion": "Madrid",
      "postalCode": "28300",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.0311",
      "longitude": "-3.6025"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "City",
      "name": "Aranjuez"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Marketing Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Digital Aranjuez",
            "description": "Estrategias de marketing digital personalizadas para empresas en Aranjuez"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Aranjuez",
            "description": "Optimización para motores de búsqueda para empresas locales de Aranjuez"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Producción Audiovisual Aranjuez",
            "description": "Videos profesionales para empresas y restaurantes en Aranjuez"
          }
        }
      ]
    }
  };

  const services = [
    {
      title: "Marketing Digital en Aranjuez",
      description: "Estrategias personalizadas de marketing digital para empresas locales de Aranjuez. Gestión de redes sociales, publicidad online y campañas dirigidas.",
      features: ["Gestión de Redes Sociales", "Publicidad en Google Ads", "Email Marketing", "Análisis y Reportes"]
    },
    {
      title: "SEO Local para Aranjuez",
      description: "Optimización SEO específica para aparecer en los primeros resultados cuando buscan servicios en Aranjuez. Posicionamiento local efectivo.",
      features: ["SEO Local", "Google My Business", "Keywords Locales", "Link Building"]
    },
    {
      title: "Producción Audiovisual",
      description: "Videos profesionales para restaurantes, hoteles y empresas de Aranjuez. Contenido cinematográfico que destaca tu negocio local.",
      features: ["Videos Promocionales", "Videos para Redes Sociales", "Fotografía Profesional", "Drones y Aerial"]
    },
    {
      title: "Desarrollo Web",
      description: "Sitios web profesionales optimizados para empresas de Aranjuez. Diseño responsive y optimizado para conversiones.",
      features: ["Diseño Web Responsive", "E-commerce", "Landing Pages", "Mantenimiento Web"]
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
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Agencia de Marketing Digital en{' '}
                <span className="text-purple-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                Especialistas en marketing digital y producción audiovisual para empresas de Aranjuez. 
                Ayudamos a negocios locales a destacar y crecer en el mundo digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+34680548144"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center"
                >
                  Consulta Gratuita
                </a>
                <Link
                  href="/#proyectos"
                  className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  Proyectos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-light text-white">Servimos a Empresas en Aranjuez</h2>
              </div>
              <p className="text-gray-400 font-light text-lg mb-8">
                Somos una agencia de marketing digital ubicada en Aranjuez, Madrid. 
                Conocemos el mercado local y ayudamos a empresas de la zona a destacar online.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Phone className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
                  <h3 className="text-white font-medium mb-2">Teléfono</h3>
                  <a href="https://wa.me/34680548144" className="text-gray-400 hover:text-white transition-colors">
                    +34 680 548 144
                  </a>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Mail className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
                  <h3 className="text-white font-medium mb-2">Email</h3>
                  <a href="mailto:contacto@your-webs.com" className="text-gray-400 hover:text-white transition-colors">
                    contacto@your-webs.com
                  </a>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <MapPin className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
                  <h3 className="text-white font-medium mb-2">Ubicación</h3>
                  <p className="text-gray-400">Aranjuez, Madrid</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Servicios de Marketing Digital en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Soluciones completas de marketing digital diseñadas específicamente para empresas de Aranjuez
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all"
                >
                  <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Nuestro Proceso de Trabajo en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Metodología probada para conseguir resultados en marketing digital para empresas de Aranjuez
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Análisis", desc: "Analizamos tu negocio y competencia en Aranjuez" },
                  { step: "02", title: "Estrategia", desc: "Creamos una estrategia personalizada para Aranjuez" },
                  { step: "03", title: "Ejecución", desc: "Implementamos las acciones de marketing digital" },
                  { step: "04", title: "Optimización", desc: "Medimos, analizamos y optimizamos continuamente" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-light">
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

        {/* Benefits Detailed */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                ¿Por Qué Contratar Marketing Digital en Aranjuez?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: TrendingUp, title: "Aumento de Visibilidad", desc: "Aparece en los primeros resultados cuando buscan tus servicios en Aranjuez. Más visibilidad significa más clientes potenciales." },
                { icon: Target, title: "Audiencia Local", desc: "Llegamos a tu audiencia específica en Aranjuez. Campañas dirigidas a personas que realmente necesitan tus servicios." },
                { icon: Users, title: "Más Clientes", desc: "Estrategias probadas que generan leads y conversiones. Aumenta tus ventas con marketing digital efectivo en Aranjuez." },
                { icon: Clock, title: "Ahorro de Tiempo", desc: "Déjanos gestionar tu marketing digital mientras te enfocas en tu negocio en Aranjuez. Ahorra tiempo y recursos." },
                { icon: Award, title: "ROI Medible", desc: "Resultados medibles y reportes claros. Sabrás exactamente qué funciona y qué no en tu estrategia de marketing." },
                { icon: CheckCircle, title: "Experiencia Local", desc: "Conocemos el mercado de Aranjuez. Estrategias adaptadas a las necesidades específicas de empresas locales." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-light text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Casos de Uso: Marketing Digital para Empresas de Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Ejemplos reales de cómo ayudamos a empresas de Aranjuez a crecer
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              {[
                {
                  title: "Restaurantes y Bares en Aranjuez",
                  desc: "Aumentamos la visibilidad de restaurantes en Aranjuez con estrategias de SEO local, gestión de Google My Business y contenido en redes sociales. Resultados: +180% en reservas online."
                },
                {
                  title: "Tiendas Locales de Aranjuez",
                  desc: "Ayudamos a tiendas físicas de Aranjuez a vender online con e-commerce, publicidad local y estrategias de captación de clientes. Resultados: +250% en ventas online."
                },
                {
                  title: "Servicios Profesionales",
                  desc: "Posicionamos abogados, consultores y profesionales de Aranjuez en los primeros resultados de búsqueda. Resultados: +300% en consultas recibidas."
                },
                {
                  title: "Hoteles y Alojamientos",
                  desc: "Estrategias de marketing digital para hoteles y alojamientos en Aranjuez. Reservas directas, contenido visual y presencia en plataformas de reservas."
                }
              ].map((case_, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-light text-white mb-4">{case_.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{case_.desc}</p>
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
                Preguntas Frecuentes sobre Marketing Digital en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Cuánto cuesta el marketing digital en Aranjuez?",
                  a: "Los precios varían según las necesidades de cada empresa en Aranjuez. Ofrecemos presupuestos personalizados sin compromiso. Contacta con nosotros para una consulta gratuita y te explicaremos las opciones disponibles para tu negocio en Aranjuez."
                },
                {
                  q: "¿Cuánto tiempo tarda en verse resultados?",
                  a: "Los resultados dependen de la estrategia. El SEO local en Aranjuez puede tardar 3-6 meses en mostrar resultados significativos, mientras que la publicidad en Google Ads puede generar resultados desde el primer día. Te proporcionamos un plan de tiempos realista para tu caso específico en Aranjuez."
                },
                {
                  q: "¿Funciona el marketing digital para empresas pequeñas en Aranjuez?",
                  a: "Absolutamente. El marketing digital es especialmente efectivo para empresas pequeñas de Aranjuez porque permite competir con empresas más grandes a un coste asequible. Las estrategias locales son perfectas para negocios de Aranjuez que buscan clientes en su zona."
                },
                {
                  q: "¿Qué incluye un servicio de marketing digital en Aranjuez?",
                  a: "Nuestros servicios incluyen: análisis de mercado en Aranjuez, estrategia personalizada, gestión de redes sociales, SEO local, publicidad online, creación de contenido, análisis y reportes mensuales. Todo adaptado específicamente para empresas de Aranjuez."
                },
                {
                  q: "¿Puedo ver resultados antes de contratar?",
                  a: "Sí, ofrecemos una consulta gratuita donde analizamos tu situación actual y te mostramos casos de éxito de empresas similares en Aranjuez. También podemos hacer un análisis inicial de tu presencia online en Aranjuez sin compromiso."
                },
                {
                  q: "¿Trabajáis solo con empresas de Aranjuez?",
                  a: "Aunque estamos especializados en empresas de Aranjuez y conocemos bien el mercado local, trabajamos con empresas de toda España. Sin embargo, nuestra especialización en Aranjuez nos permite ofrecer estrategias más efectivas para negocios locales."
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                ¿Listo para Crecer en Aranjuez?
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta con nosotros y descubre cómo podemos ayudar a tu empresa a destacar en el mercado digital de Aranjuez. Consulta gratuita sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+34680548144"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Llamar Ya
                  <Phone className="w-5 h-5" />
                </a>
                <Link
                  href="/#proyectos"
                  className="border border-white/30 hover:border-white text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Proyectos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
