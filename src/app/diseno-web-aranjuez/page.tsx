import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, Smartphone, ShoppingCart, Search, CheckCircle, ArrowRight, Clock, Users, Award, TrendingUp, Zap, Shield, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diseño de Páginas Web en Aranjuez | Desarrollo Web Profesional | Your Webs',
  description: 'Diseño y desarrollo de páginas web profesionales en Aranjuez. Creación de sitios web responsive, e-commerce, landing pages y aplicaciones web para empresas de Aranjuez, Madrid.',
  keywords: 'diseño web aranjuez, desarrollo web aranjuez, páginas web aranjuez, crear página web aranjuez, diseño páginas web aranjuez, desarrollo web profesional aranjuez, sitios web aranjuez, diseño responsive aranjuez, web design aranjuez',
  openGraph: {
    title: 'Diseño de Páginas Web en Aranjuez | Your Webs',
    description: 'Especialistas en diseño y desarrollo web para empresas de Aranjuez. Sitios web profesionales, responsive y optimizados para SEO.',
    url: 'https://your-webs.com/diseno-web-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/diseno-web-aranjuez',
  },
};

export default function DisenoWebAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Diseño Web Aranjuez",
    "image": "https://your-webs.com/logo_your_webs.svg",
    "description": "Diseño y desarrollo de páginas web profesionales en Aranjuez. Especialistas en sitios web responsive, e-commerce y aplicaciones web para empresas locales.",
    "url": "https://your-webs.com/diseno-web-aranjuez",
    "telephone": "+34-680-548-144",
    "address": {
      "@type": "PostalAddress",
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
      "Diseño Web",
      "Desarrollo Web",
      "E-commerce",
      "Landing Pages",
      "Aplicaciones Web"
    ]
  };

  const services = [
    {
      icon: Globe,
      title: "Diseño Web Profesional en Aranjuez",
      description: "Diseñamos páginas web modernas y atractivas para empresas de Aranjuez. Sitios web responsive que se adaptan a todos los dispositivos.",
      features: ["Diseño Responsive", "UI/UX Optimizado", "Velocidad de Carga", "Diseño Personalizado"],
      keywords: ["diseño web aranjuez", "páginas web aranjuez", "sitios web aranjuez"]
    },
    {
      icon: ShoppingCart,
      title: "Tiendas Online (E-commerce)",
      description: "Desarrollo de tiendas online completas para negocios de Aranjuez. Plataformas e-commerce optimizadas para ventas.",
      features: ["Carrito de Compras", "Pasarelas de Pago", "Gestión de Inventario", "Panel de Administración"],
      keywords: ["ecommerce aranjuez", "tienda online aranjuez", "venta online aranjuez"]
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Web Responsive",
      description: "Páginas web que funcionan perfectamente en móviles, tablets y ordenadores. Diseño adaptativo para empresas de Aranjuez.",
      features: ["Mobile First", "Tablet Optimizado", "Desktop Completo", "Cross-browser"],
      keywords: ["web responsive aranjuez", "diseño móvil aranjuez", "páginas móviles aranjuez"]
    },
    {
      icon: Search,
      title: "SEO y Optimización",
      description: "Sitios web optimizados para buscadores. Aparece en los primeros resultados cuando buscan tus servicios en Aranjuez.",
      features: ["SEO Local", "Optimización Técnica", "Velocidad", "Indexación"],
      keywords: ["seo web aranjuez", "posicionamiento web aranjuez", "optimización web aranjuez"]
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
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-blue-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Diseño de Páginas Web en{' '}
                <span className="text-blue-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Diseño y desarrollo web profesional para empresas de Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Páginas web modernas, responsive y optimizadas para SEO. Especialistas en diseño web en Aranjuez, Madrid.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Servicios de Diseño Web en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Soluciones completas de diseño y desarrollo web para empresas de Aranjuez
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all"
                >
                  <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-light"
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

        {/* Why Choose Us */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 text-center">
                ¿Por Qué Elegirnos para tu Página Web en Aranjuez?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3">Experiencia Local</h3>
                  <p className="text-gray-400 font-light">
                    Conocemos el mercado de Aranjuez y diseñamos páginas web que conectan con tu audiencia local.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3">Diseño Moderno</h3>
                  <p className="text-gray-400 font-light">
                    Páginas web con las últimas tendencias de diseño, responsive y optimizadas para conversiones.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3">SEO Optimizado</h3>
                  <p className="text-gray-400 font-light">
                    Tu página web aparecerá en los primeros resultados cuando busquen tus servicios en Aranjuez.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3">Soporte Continuo</h3>
                  <p className="text-gray-400 font-light">
                    Mantenimiento y actualizaciones para que tu página web en Aranjuez siempre funcione perfectamente.
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
                Proceso de Diseño Web en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Cómo creamos tu página web profesional paso a paso
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: "1", title: "Consulta", desc: "Analizamos tus necesidades en Aranjuez" },
                  { step: "2", title: "Diseño", desc: "Creamos el diseño de tu página web" },
                  { step: "3", title: "Desarrollo", desc: "Programamos tu sitio web responsive" },
                  { step: "4", title: "SEO", desc: "Optimizamos para buscadores en Aranjuez" },
                  { step: "5", title: "Lanzamiento", desc: "Publicamos y mantenemos tu web" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
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

        {/* Benefits Detailed */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Beneficios de Tener una Página Web en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Globe, title: "Presencia 24/7", desc: "Tu negocio de Aranjuez está disponible las 24 horas del día, los 7 días de la semana. Los clientes pueden encontrarte y contactarte en cualquier momento." },
                { icon: TrendingUp, title: "Más Clientes", desc: "Una página web profesional en Aranjuez atrae nuevos clientes y genera más ventas. Aumenta tu visibilidad en el mercado local de Aranjuez." },
                { icon: Shield, title: "Credibilidad", desc: "Las empresas con página web en Aranjuez generan más confianza. Los clientes buscan información online antes de contratar servicios." },
                { icon: Zap, title: "Velocidad", desc: "Páginas web rápidas y optimizadas. Los usuarios de Aranjuez valoran la velocidad de carga y la experiencia de usuario fluida." },
                { icon: Search, title: "SEO Local", desc: "Aparece en Google cuando buscan tus servicios en Aranjuez. Optimización SEO específica para empresas locales de Aranjuez." },
                { icon: Users, title: "Alcance Ampliado", desc: "Llega a más clientes en Aranjuez y alrededores. Tu página web funciona como tu mejor vendedor, disponible siempre." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-light text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                Preguntas Frecuentes sobre Diseño Web en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Cuánto cuesta crear una página web en Aranjuez?",
                  a: "El precio depende de las funcionalidades que necesites. Ofrecemos páginas web desde presupuestos básicos hasta proyectos complejos con e-commerce. Contacta con nosotros para un presupuesto personalizado para tu empresa en Aranjuez."
                },
                {
                  q: "¿Cuánto tiempo tarda en crearse una página web?",
                  a: "Una página web básica puede estar lista en 2-3 semanas. Proyectos más complejos como e-commerce pueden tardar 4-8 semanas. Te proporcionamos un calendario detallado desde el inicio del proyecto en Aranjuez."
                },
                {
                  q: "¿Incluye mantenimiento la página web?",
                  a: "Ofrecemos planes de mantenimiento opcionales que incluyen actualizaciones, backups, seguridad y soporte técnico. Tu página web en Aranjuez estará siempre actualizada y funcionando correctamente."
                },
                {
                  q: "¿La página web funcionará en móviles?",
                  a: "Sí, todas nuestras páginas web son responsive y se adaptan perfectamente a móviles, tablets y ordenadores. Es fundamental para el SEO en Aranjuez y la experiencia de usuario."
                },
                {
                  q: "¿Puedo actualizar el contenido yo mismo?",
                  a: "Sí, podemos incluir un panel de administración fácil de usar donde puedes actualizar textos, imágenes y contenido sin conocimientos técnicos. También ofrecemos formación para tu equipo en Aranjuez."
                },
                {
                  q: "¿Aparecerá mi página web en Google?",
                  a: "Sí, optimizamos todas nuestras páginas web para SEO local en Aranjuez. Incluimos optimización técnica, contenido optimizado y estrategias para aparecer en los primeros resultados cuando buscan tus servicios en Aranjuez."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-blue-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-blue-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-blue-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                ¿Necesitas una Página Web en Aranjuez?
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta con nosotros y obtén un presupuesto gratuito para tu diseño web en Aranjuez. Sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
