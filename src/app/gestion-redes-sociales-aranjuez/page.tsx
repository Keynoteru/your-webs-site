import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import CardCarousel from '@/components/CardCarousel';
import { Instagram, Facebook, Linkedin, Youtube, Twitter, MessageCircle, TrendingUp, Users, Target, Award, Clock, Zap, BarChart3, Heart, Share2, Camera, Video, CheckCircle, ArrowRight, Phone, Mail, MapPin, Sparkles, Megaphone, Calendar, Image as ImageIcon, PenTool } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gestión de Redes Sociales en Aranjuez | Community Management Profesional | Your Webs',
  description: 'Servicios profesionales de gestión de redes sociales en Aranjuez. Community management, creación de contenido, estrategias de engagement y crecimiento para empresas de Aranjuez, Madrid. Especialistas en Instagram, Facebook, LinkedIn y más.',
  keywords: 'gestión redes sociales aranjuez, community management aranjuez, redes sociales aranjuez, gestión instagram aranjuez, gestión facebook aranjuez, social media aranjuez, community manager aranjuez, marketing redes sociales aranjuez, contenido redes sociales aranjuez, estrategia redes sociales aranjuez, crecimiento redes sociales aranjuez, engagement redes sociales aranjuez',
  openGraph: {
    title: 'Gestión de Redes Sociales en Aranjuez | Your Webs',
    description: 'Especialistas en gestión de redes sociales y community management para empresas de Aranjuez. Crecimiento, engagement y resultados medibles.',
    url: 'https://your-webs.com/gestion-redes-sociales-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/gestion-redes-sociales-aranjuez',
  },
};

export default function GestionRedesSocialesAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "Your Webs - Gestión de Redes Sociales Aranjuez",
    "image": "https://your-webs.com/logo_your_webs.svg",
    "description": "Servicios profesionales de gestión de redes sociales y community management en Aranjuez. Especialistas en Instagram, Facebook, LinkedIn, YouTube y más para empresas locales.",
    "url": "https://your-webs.com/gestion-redes-sociales-aranjuez",
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
      "Gestión de Redes Sociales",
      "Community Management",
      "Creación de Contenido",
      "Estrategia de Redes Sociales",
      "Publicidad en Redes Sociales"
    ]
  };

  const platforms = [
    {
      icon: Instagram,
      name: "Instagram",
      description: "Gestión completa de Instagram para empresas de Aranjuez. Stories, Reels, posts, IGTV y estrategias de crecimiento.",
      features: ["Contenido constante", "Stories interactivos", "Reels virales", "IGTV", "Análisis de métricas"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Facebook,
      name: "Facebook",
      description: "Gestión de páginas y perfiles de Facebook para empresas de Aranjuez. Publicidad, engagement y comunidad activa.",
      features: ["Publicaciones optimizadas", "Facebook Ads", "Gestión de comentarios", "Eventos", "Grupos"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      description: "Estrategia profesional en LinkedIn para empresas B2B de Aranjuez. Contenido corporativo y networking.",
      features: ["Artículos profesionales", "Publicaciones B2B", "LinkedIn Ads", "Networking", "Thought leadership"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Youtube,
      name: "YouTube",
      description: "Gestión de canales de YouTube para empresas de Aranjuez. Videos, SEO de YouTube y crecimiento de suscriptores.",
      features: ["Optimización SEO", "Thumbnails atractivos", "Títulos optimizados", "Análisis de audiencia", "Estrategia de contenido"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Twitter,
      name: "Twitter/X",
      description: "Gestión de Twitter/X para empresas de Aranjuez. Tweets estratégicos, engagement y tendencias.",
      features: ["Tweets diarios", "Hilos virales", "Interacción en tiempo real", "Trending topics", "Community building"],
      color: "from-sky-400 to-sky-500"
    }
  ];

  const services = [
    {
      icon: Calendar,
      title: "Planificación de Contenido",
      description: "Calendario editorial mensual personalizado para tu empresa en Aranjuez. Contenido estratégico que conecta con tu audiencia.",
      details: [
        "Calendario editorial mensual",
        "Temas y hashtags estratégicos",
        "Mejores horarios de publicación",
        "Contenido adaptado a cada plataforma",
        "Planificación de campañas especiales"
      ]
    },
    {
      icon: Camera,
      title: "Creación de Contenido Visual",
      description: "Fotografía profesional, diseño gráfico y creación de contenido visual para redes sociales de empresas en Aranjuez.",
      details: [
        "Fotografía profesional de productos/servicios",
        "Diseño gráfico para posts",
        "Videos cortos y Reels",
        "Stories creativos",
        "Branding visual consistente"
      ]
    },
    {
      icon: MessageCircle,
      title: "Community Management",
      description: "Gestión activa de tu comunidad en redes sociales. Respondemos comentarios, mensajes y creamos engagement en Aranjuez.",
      details: [
        "Respuesta rápida a comentarios",
        "Gestión de mensajes directos",
        "Moderación de comunidad",
        "Interacción proactiva",
        "Construcción de relaciones"
      ]
    },
    {
      icon: Megaphone,
      title: "Publicidad en Redes Sociales",
      description: "Campañas publicitarias en Instagram, Facebook, LinkedIn y más. Anuncios dirigidos a tu audiencia en Aranjuez y alrededores.",
      details: [
        "Facebook Ads e Instagram Ads",
        "LinkedIn Ads para B2B",
        "Anuncios de YouTube",
        "Segmentación local de Aranjuez",
        "Optimización de ROI"
      ]
    },
    {
      icon: BarChart3,
      title: "Análisis y Reportes",
      description: "Reportes mensuales detallados con métricas de crecimiento, engagement y ROI para tu estrategia en Aranjuez.",
      details: [
        "Reportes mensuales completos",
        "Análisis de crecimiento",
        "Métricas de engagement",
        "ROI de campañas publicitarias",
        "Recomendaciones estratégicas"
      ]
    },
    {
      icon: Target,
      title: "Estrategia Personalizada",
      description: "Estrategias de redes sociales diseñadas específicamente para tu empresa en Aranjuez. Objetivos claros y resultados medibles.",
      details: [
        "Análisis de competencia en Aranjuez",
        "Definición de objetivos",
        "Estrategia de marca",
        "Plan de crecimiento",
        "KPIs personalizados"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Crecimiento Constante",
      desc: "Aumentamos tus seguidores de forma orgánica y sostenible. Empresas de Aranjuez que trabajan con nosotros ven un crecimiento promedio del 200% en 6 meses."
    },
    {
      icon: Users,
      title: "Mayor Engagement",
      desc: "Aumentamos el engagement y la interacción con tu audiencia en Aranjuez. Más likes, comentarios, compartidos y mensajes directos."
    },
    {
      icon: Target,
      title: "Audiencia Local",
      desc: "Llegamos a tu audiencia específica en Aranjuez y alrededores. Estrategias locales que conectan con clientes potenciales de tu zona."
    },
    {
      icon: Award,
      title: "Ahorro de Tiempo",
      desc: "Ahorra horas diarias gestionando redes sociales. Nosotros nos encargamos de todo mientras tú te enfocas en tu negocio en Aranjuez."
    },
    {
      icon: Zap,
      title: "Contenido Profesional",
      desc: "Contenido de alta calidad que representa tu marca. Fotografía profesional, diseño gráfico y copywriting que convierte."
    },
    {
      icon: BarChart3,
      title: "Resultados Medibles",
      desc: "Reportes claros con métricas reales. Sabrás exactamente qué funciona y qué no en tu estrategia de redes sociales en Aranjuez."
    },
    {
      icon: Heart,
      title: "Construcción de Marca",
      desc: "Construimos una identidad de marca sólida en redes sociales. Presencia consistente que genera confianza y reconocimiento en Aranjuez."
    },
    {
      icon: Share2,
      title: "Mayor Visibilidad",
      desc: "Aumenta tu visibilidad online en Aranjuez. Aparece en búsquedas, hashtags locales y recomendaciones de redes sociales."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análisis Inicial",
      desc: "Analizamos tu situación actual, competencia en Aranjuez y objetivos. Auditoría completa de tus redes sociales."
    },
    {
      step: "02",
      title: "Estrategia Personalizada",
      desc: "Creamos una estrategia de redes sociales específica para tu empresa en Aranjuez. Plan de contenido y calendario editorial."
    },
    {
      step: "03",
      title: "Creación de Contenido",
      desc: "Creamos contenido visual profesional y copywriting optimizado. Fotografía, diseño y textos que conectan con tu audiencia."
    },
    {
      step: "04",
      title: "Publicación y Gestión",
      desc: "Publicamos contenido en los mejores horarios y gestionamos tu comunidad. Respuestas rápidas y engagement activo."
    },
    {
      step: "05",
      title: "Publicidad y Crecimiento",
      desc: "Ejecutamos campañas publicitarias dirigidas a tu audiencia en Aranjuez. Aumentamos seguidores y alcance de forma estratégica."
    },
    {
      step: "06",
      title: "Análisis y Optimización",
      desc: "Analizamos resultados mensualmente y optimizamos la estrategia. Mejora continua basada en datos reales."
    }
  ];

  const useCases = [
    {
      title: "Restaurantes y Bares en Aranjuez",
      desc: "Gestión completa de Instagram y Facebook para restaurantes de Aranjuez. Fotos de platos, Stories diarios, promociones y reservas online. Resultados: +350% en seguidores y +280% en reservas online en 4 meses.",
      metrics: ["+350% seguidores", "+280% reservas", "+420% engagement"]
    },
    {
      title: "Tiendas y Retail en Aranjuez",
      desc: "Estrategia de Instagram Shopping y Facebook Shop para tiendas físicas de Aranjuez. Catálogo online, promociones y ventas directas desde redes sociales. Resultados: +450% en ventas online y +320% en tráfico a tienda.",
      metrics: ["+450% ventas online", "+320% tráfico", "+380% seguidores"]
    },
    {
      title: "Servicios Profesionales",
      desc: "Gestión de LinkedIn y Facebook para abogados, consultores y profesionales de Aranjuez. Contenido de valor, thought leadership y generación de leads. Resultados: +500% en consultas recibidas y +400% en conexiones profesionales.",
      metrics: ["+500% consultas", "+400% conexiones", "+350% engagement"]
    },
    {
      title: "Hoteles y Turismo",
      desc: "Estrategia multi-plataforma para hoteles y alojamientos en Aranjuez. Instagram, Facebook, Booking y más. Contenido visual, reviews y reservas directas. Resultados: +380% en reservas directas y +420% en engagement.",
      metrics: ["+380% reservas", "+420% engagement", "+350% seguidores"]
    },
    {
      title: "Gimnasios y Wellness",
      desc: "Gestión de Instagram y TikTok para gimnasios y centros de wellness en Aranjuez. Contenido motivacional, transformaciones y clases en vivo. Resultados: +550% en nuevos miembros y +480% en engagement.",
      metrics: ["+550% nuevos miembros", "+480% engagement", "+400% seguidores"]
    },
    {
      title: "Clínicas y Salud",
      desc: "Gestión profesional de redes sociales para clínicas y centros de salud en Aranjuez. Contenido educativo, testimonios y citas online. Resultados: +320% en citas online y +280% en confianza de marca.",
      metrics: ["+320% citas online", "+280% confianza", "+350% engagement"]
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
        <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/30 to-black">
          <div className="container mx-auto px-4 py-10 md:py-12 lg:py-20 xl:py-24">
            <div className="max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extralight text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 tracking-tight">
                Gestión de Redes Sociales en{' '}
                <span className="text-purple-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-base md:text-xl lg:text-3xl xl:text-4xl text-gray-300 mb-4 md:mb-6 lg:mb-8 xl:mb-10 font-light leading-relaxed max-w-4xl lg:max-w-5xl mx-auto">
                Especialistas en community management y estrategia de redes sociales para empresas de Aranjuez
              </p>
              <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-400 mb-10 md:mb-12 lg:mb-16 xl:mb-20 font-light max-w-3xl lg:max-w-4xl mx-auto">
                Instagram, Facebook, LinkedIn, YouTube y más. Crecimiento, engagement y resultados medibles para tu negocio en Aranjuez
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

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                ¿Por Qué Elegirnos para Gestionar tus Redes Sociales en Aranjuez?
              </h2>
              <p className="text-sm md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
                Somos especialistas en gestión de redes sociales con experiencia probada en empresas de Aranjuez
              </p>
            </div>
            <div className="max-w-7xl mx-auto">
              <CardCarousel
                items={benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-3xl p-5 md:p-8 border border-white/10 hover:border-white/20 transition-all h-full"
                  >
                    <benefit.icon className="w-8 h-8 md:w-12 md:h-12 text-purple-400 mb-3 md:mb-6" />
                    <h3 className="text-lg md:text-xl font-normal text-white mb-3 md:mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">{benefit.desc}</p>
                  </div>
                ))}
                itemsPerView={4}
              />
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                Plataformas que Gestionamos en Aranjuez
              </h2>
              <p className="text-sm md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
                Gestión profesional de todas las principales redes sociales para empresas de Aranjuez
              </p>
            </div>
            <div className="max-w-[95%] lg:max-w-[98%] mx-auto">
              <CardCarousel
                items={platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-3xl px-5 py-4 md:px-6 md:py-5 lg:px-14 lg:py-6 xl:px-16 xl:py-7 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col"
                  >
                    <div className={`w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-xl md:rounded-2xl bg-gradient-to-r ${platform.color} p-2 md:p-3 lg:p-3.5 xl:p-4 mb-3 md:mb-3 lg:mb-4 xl:mb-4 flex items-center justify-center flex-shrink-0`}>
                      <platform.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-normal text-white mb-2 md:mb-2 lg:mb-3">{platform.name}</h3>
                    <p className="text-gray-300 font-light mb-2 md:mb-3 lg:mb-3 leading-relaxed text-sm md:text-sm lg:text-sm xl:text-base flex-grow line-clamp-3">{platform.description}</p>
                    <ul className="space-y-1 md:space-y-1.5 lg:space-y-1.5 xl:space-y-2 mt-auto">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 md:gap-2 lg:gap-2.5 text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-purple-400 flex-shrink-0" />
                          <span className="font-light text-xs md:text-xs lg:text-xs xl:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                itemsPerView={4}
              />
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-12 md:py-16 lg:py-24 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                Servicios de Gestión de Redes Sociales en Aranjuez
              </h2>
              <p className="text-sm md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
                Soluciones completas de community management y estrategia de redes sociales para empresas de Aranjuez
              </p>
            </div>
            <div className="max-w-7xl mx-auto">
              <CardCarousel
                items={services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-3xl p-5 md:p-8 border border-white/10 hover:border-white/20 transition-all h-full"
                  >
                    <service.icon className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mb-4 md:mb-6" />
                    <h3 className="text-lg md:text-2xl font-normal text-white mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-gray-300 font-light mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
                    <ul className="space-y-2 md:space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3 text-gray-300">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="font-light text-sm md:text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                itemsPerView={3}
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-black/95 via-black/95 to-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                Nuestro Proceso de Trabajo en Aranjuez
              </h2>
              <p className="text-sm md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
                Metodología probada para conseguir resultados en gestión de redes sociales
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <CardCarousel
                items={process.map((item, idx) => (
                  <div key={idx} className="text-center h-full">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-lg md:text-2xl font-light">
                      {item.step}
                    </div>
                    <h3 className="text-base md:text-xl font-normal text-white mb-2 md:mb-2">{item.title}</h3>
                    <p className="text-gray-300 font-light text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
                itemsPerView={6}
              />
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 md:py-16 lg:py-24 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                Casos de Éxito: Redes Sociales para Empresas de Aranjuez
              </h2>
              <p className="text-sm md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
                Resultados reales de empresas de Aranjuez que confían en nosotros
              </p>
            </div>
            <div className="max-w-7xl mx-auto">
              <CardCarousel
                items={useCases.map((case_, idx) => (
                  <div key={idx} className="bg-white/5 p-5 md:p-8 rounded-xl md:rounded-2xl border border-white/10 h-full">
                    <h3 className="text-lg md:text-2xl font-normal text-white mb-3 md:mb-4">{case_.title}</h3>
                    <p className="text-gray-300 font-light leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{case_.desc}</p>
                    <div className="flex flex-wrap gap-2 md:gap-2">
                      {case_.metrics.map((metric, mIdx) => (
                        <span key={mIdx} className="bg-purple-500/20 text-purple-300 px-3 py-1 md:px-3 md:py-1 rounded-full text-sm font-light">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                itemsPerView={3}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                Preguntas Frecuentes sobre Gestión de Redes Sociales en Aranjuez
              </h2>
            </div>
            <FAQAccordion
              items={[
                {
                  q: "¿Qué incluye un servicio de gestión de redes sociales en Aranjuez?",
                  a: "Nuestro servicio incluye: planificación de contenido mensual, creación de posts y diseño gráfico, gestión de Instagram, Facebook, LinkedIn y más, community management (respuesta a comentarios y mensajes), publicidad en redes sociales, reportes mensuales con métricas y estrategia personalizada para tu empresa en Aranjuez."
                },
                {
                  q: "¿Cuánto cuesta gestionar mis redes sociales en Aranjuez?",
                  a: "El precio depende del número de plataformas, frecuencia de publicaciones y servicios incluidos. Ofrecemos planes desde básicos hasta completos. Contacta con nosotros para un presupuesto personalizado adaptado a las necesidades de tu empresa en Aranjuez."
                },
                {
                  q: "¿Cuánto tiempo tarda en verse resultados?",
                  a: "Los primeros resultados se ven en 2-4 semanas. El crecimiento sostenible y engagement significativo suele aparecer en 2-3 meses. Empresas de Aranjuez que trabajan con nosotros ven un crecimiento promedio del 200% en seguidores en 6 meses."
                },
                {
                  q: "¿Necesito dar acceso a mis cuentas de redes sociales?",
                  a: "Sí, necesitamos acceso a tus cuentas de redes sociales para gestionarlas profesionalmente. Puedes darnos acceso como administrador o colaborador. Mantenemos total confidencialidad y seguimos todas las políticas de privacidad."
                },
                {
                  q: "¿Qué plataformas de redes sociales gestionáis?",
                  a: "Gestionamos Instagram, Facebook, LinkedIn, YouTube, Twitter/X, TikTok y más. Adaptamos la estrategia a las plataformas más relevantes para tu negocio en Aranjuez. No todas las empresas necesitan estar en todas las plataformas."
                },
                {
                  q: "¿Creáis el contenido visual o necesito proporcionarlo?",
                  a: "Podemos hacer ambas cosas. Si tienes fotos y material, lo utilizamos. Si no, creamos contenido visual profesional: fotografía de productos/servicios, diseño gráfico, videos cortos y más. Todo adaptado a tu marca y empresa en Aranjuez."
                },
                {
                  q: "¿Con qué frecuencia publicaréis en mis redes sociales?",
                  a: "Depende de la plataforma y estrategia. Típicamente: Instagram 1-2 posts diarios + Stories, Facebook 3-5 posts semanales, LinkedIn 2-3 posts semanales. Ajustamos la frecuencia según tus objetivos y audiencia en Aranjuez."
                },
                {
                  q: "¿Incluís publicidad en redes sociales?",
                  a: "Sí, ofrecemos gestión de publicidad en Instagram Ads, Facebook Ads, LinkedIn Ads y más. Incluimos creación de anuncios, segmentación de audiencia (especialmente en Aranjuez), gestión de presupuesto y optimización de campañas. Los costes de publicidad son aparte del servicio de gestión."
                },
                {
                  q: "¿Recibiré reportes de resultados?",
                  a: "Sí, proporcionamos reportes mensuales detallados con métricas de crecimiento, engagement, alcance, clicks, conversiones y más. Todo adaptado a los objetivos de tu empresa en Aranjuez. También hacemos reuniones trimestrales para revisar estrategia."
                },
                {
                  q: "¿Trabajáis solo con empresas de Aranjuez?",
                  a: "Aunque estamos especializados en empresas de Aranjuez y conocemos bien el mercado local, trabajamos con empresas de toda España. Sin embargo, nuestra especialización en Aranjuez nos permite crear estrategias más efectivas para negocios locales."
                }
              ]}
            />
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 md:mb-6 tracking-tight">
                ¿Listo para Crecer en Redes Sociales en Aranjuez?
              </h2>
              <p className="text-base md:text-xl text-gray-300 font-light mb-6 md:mb-8">
                Contacta con los mejores especialistas en gestión de redes sociales de Aranjuez. Consulta gratuita sin compromiso.
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
