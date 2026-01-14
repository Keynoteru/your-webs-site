import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Users, Target, Award, ArrowRight, Phone, Clock, Shield, CheckCircle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Agencia de Marketing en Aranjuez | SEO y Publicidad Digital | Your Webs',
  description: 'Agencia de marketing en Aranjuez especializada en SEO local, publicidad digital, gestión de redes sociales y estrategias de crecimiento para empresas de Aranjuez, Madrid.',
  keywords: 'agencia marketing aranjuez, agencia publicidad aranjuez, marketing aranjuez, publicidad aranjuez, seo aranjuez, redes sociales aranjuez, google ads aranjuez, facebook ads aranjuez',
  openGraph: {
    title: 'Agencia de Marketing en Aranjuez | Your Webs',
    description: 'La mejor agencia de marketing digital en Aranjuez. Especialistas en SEO, publicidad online y crecimiento de negocios locales.',
    url: 'https://your-webs.com/agencia-marketing-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/agencia-marketing-aranjuez',
  },
};

export default function AgenciaMarketingAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "Your Webs - Agencia de Marketing Aranjuez",
    "image": "https://your-webs.com/logo_your_webs.svg",
    "description": "Agencia de marketing digital en Aranjuez especializada en SEO, publicidad online, gestión de redes sociales y estrategias de crecimiento para empresas locales.",
    "url": "https://your-webs.com/agencia-marketing-aranjuez",
    "telephone": "+34-680-548-144",
    "email": "contacto@your-webs.com",
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
    "areaServed": {
      "@type": "City",
      "name": "Aranjuez"
    },
    "serviceType": [
      "Marketing Digital",
      "SEO Local",
      "Publicidad Online",
      "Gestión de Redes Sociales",
      "Desarrollo Web"
    ]
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Crecimiento Medible",
      description: "Resultados reales con métricas claras. Aumentamos tu visibilidad y conversiones en Aranjuez."
    },
    {
      icon: Target,
      title: "Enfoque Local",
      description: "Estrategias específicas para el mercado de Aranjuez. Conocemos tu audiencia local."
    },
    {
      icon: Users,
      title: "Experiencia Comprobada",
      description: "Hemos ayudado a múltiples empresas de Aranjuez a crecer con estrategias digitales efectivas."
    },
    {
      icon: Award,
      title: "Resultados Garantizados",
      description: "Trabajamos con metodologías probadas que generan resultados tangibles para tu negocio."
    }
  ];

  const services = [
    {
      title: "SEO Local para Aranjuez",
      description: "Aparece en los primeros resultados cuando buscan tus servicios en Aranjuez. Optimización específica para búsquedas locales.",
      keywords: ["SEO Aranjuez", "Posicionamiento Local", "Google My Business", "Keywords Locales"]
    },
    {
      title: "Publicidad Digital",
      description: "Campañas de Google Ads y Facebook Ads dirigidas a tu audiencia en Aranjuez y alrededores. Máximo ROI.",
      keywords: ["Google Ads Aranjuez", "Facebook Ads", "Publicidad Online", "PPC"]
    },
    {
      title: "Gestión de Redes Sociales",
      description: "Gestionamos tus redes sociales con contenido estratégico que conecta con clientes de Aranjuez.",
      keywords: ["Instagram Aranjuez", "Facebook", "LinkedIn", "Contenido Social"]
    },
    {
      title: "Estrategia de Marketing",
      description: "Planes de marketing personalizados para empresas de Aranjuez. Análisis, estrategia y ejecución.",
      keywords: ["Marketing Estratégico", "Análisis de Mercado", "Plan de Marketing", "Consultoría"]
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
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-black via-purple-900/30 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Agencia de Marketing en{' '}
                <span className="text-purple-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Especialistas en marketing digital para empresas de Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                SEO local, publicidad online, redes sociales y estrategias que generan resultados reales
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

        {/* Why Choose Us */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                ¿Por Qué Elegirnos en Aranjuez?
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Somos la agencia de marketing digital que entiende el mercado local de Aranjuez
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all text-center"
                >
                  <benefit.icon className="w-12 h-12 text-purple-400 mb-6 mx-auto" />
                  <h3 className="text-xl font-light text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Servicios de Marketing en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Soluciones completas diseñadas para empresas de Aranjuez
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
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-light"
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

        {/* Local SEO Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 text-center">
                Posicionamiento Local en Aranjuez
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
                <p className="text-lg text-gray-300 font-light mb-6 leading-relaxed">
                  Cuando alguien busca "agencia de marketing en Aranjuez" o "marketing digital Aranjuez", 
                  queremos que encuentres tu negocio en los primeros resultados. Nuestras estrategias de SEO local 
                  están diseñadas específicamente para empresas de Aranjuez.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span className="font-light">Optimización de Google My Business para Aranjuez</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span className="font-light">Keywords locales específicas de Aranjuez</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span className="font-light">Citas y menciones locales en directorios de Aranjuez</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span className="font-light">Contenido optimizado para búsquedas locales</span>
                  </li>
                </ul>
                <a
                  href="https://wa.me/34680548144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                >
                  Empezar Ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Cómo Trabajamos en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Metodología probada para conseguir resultados en marketing digital
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Análisis", desc: "Estudiamos tu negocio y competencia en Aranjuez" },
                  { step: "2", title: "Estrategia", desc: "Creamos un plan personalizado para Aranjuez" },
                  { step: "3", title: "Ejecución", desc: "Implementamos las acciones de marketing" },
                  { step: "4", title: "Optimización", desc: "Medimos y mejoramos continuamente" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-light text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-light text-xs">{item.desc}</p>
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
                Preguntas Frecuentes sobre Agencia de Marketing en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Por qué elegir una agencia de marketing en Aranjuez?",
                  a: "Elegir una agencia local en Aranjuez significa que conocemos el mercado, la competencia y las necesidades específicas de empresas locales. Entendemos mejor a tu audiencia en Aranjuez y podemos crear estrategias más efectivas."
                },
                {
                  q: "¿Qué diferencia a vuestra agencia de otras en Aranjuez?",
                  a: "Combinamos marketing digital tradicional con producción audiovisual, desarrollo web y tecnología avanzada. Ofrecemos soluciones integrales que otras agencias de Aranjuez no pueden proporcionar. Además, tenemos experiencia con empresas de diferentes sectores en Aranjuez."
                },
                {
                  q: "¿Trabajáis solo con empresas de Aranjuez?",
                  a: "Aunque estamos especializados en Aranjuez y conocemos bien el mercado local, trabajamos con empresas de toda España. Sin embargo, nuestra especialización en Aranjuez nos permite ofrecer mejores resultados para negocios locales."
                },
                {
                  q: "¿Cómo medís el éxito de las campañas?",
                  a: "Proporcionamos reportes mensuales detallados con métricas claras: visitas web, leads generados, conversiones, ROI, engagement en redes sociales y más. Todo adaptado a los objetivos de tu empresa en Aranjuez."
                },
                {
                  q: "¿Cuánto tiempo tarda en verse resultados?",
                  a: "Depende de la estrategia. La publicidad en Google Ads puede generar resultados desde el primer día, mientras que el SEO local en Aranjuez puede tardar 3-6 meses. Te proporcionamos un plan de tiempos realista."
                },
                {
                  q: "¿Ofrecéis servicios de marketing para todos los sectores en Aranjuez?",
                  a: "Sí, trabajamos con restaurantes, tiendas, servicios profesionales, hoteles, empresas industriales y más en Aranjuez. Adaptamos nuestras estrategias a cada sector y tipo de negocio en Aranjuez."
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

        {/* CTA Final */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                ¿Listo para Crecer en Aranjuez?
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta con la mejor agencia de marketing digital de Aranjuez. Consulta gratuita sin compromiso.
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
