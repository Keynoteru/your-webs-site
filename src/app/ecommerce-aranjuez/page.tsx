import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, CreditCard, Package, TrendingUp, CheckCircle, ArrowRight, Phone, Clock, Shield, Users, Award, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-commerce en Aranjuez | Tiendas Online | Desarrollo E-commerce | Your Webs',
  description: 'Desarrollo de tiendas online y e-commerce en Aranjuez. Creación de tiendas virtuales, pasarelas de pago, gestión de inventario y plataformas e-commerce para empresas de Aranjuez, Madrid.',
  keywords: 'ecommerce aranjuez, tienda online aranjuez, crear tienda online aranjuez, desarrollo ecommerce aranjuez, tienda virtual aranjuez, venta online aranjuez, pasarela pago aranjuez, shopify aranjuez, woocommerce aranjuez',
  openGraph: {
    title: 'E-commerce y Tiendas Online en Aranjuez | Your Webs',
    description: 'Especialistas en desarrollo de tiendas online y e-commerce para empresas de Aranjuez. Plataformas completas de venta online.',
    url: 'https://your-webs.com/ecommerce-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/ecommerce-aranjuez',
  },
};

export default function EcommerceAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - E-commerce Aranjuez",
    "description": "Desarrollo de tiendas online y plataformas e-commerce para empresas de Aranjuez. Especialistas en tiendas virtuales y venta online.",
    "url": "https://your-webs.com/ecommerce-aranjuez",
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
    "serviceType": "E-commerce Development"
  };

  const services = [
    {
      icon: ShoppingCart,
      title: "Tiendas Online Completas",
      description: "Desarrollo de tiendas online profesionales para empresas de Aranjuez. Plataformas e-commerce completas con todas las funcionalidades.",
      features: ["Catálogo de Productos", "Carrito de Compras", "Gestión de Pedidos", "Panel Administrativo"]
    },
    {
      icon: CreditCard,
      title: "Pasarelas de Pago",
      description: "Integración de sistemas de pago seguros para tu tienda online en Aranjuez. Múltiples métodos de pago.",
      features: ["Tarjeta de Crédito", "PayPal", "Bizum", "Transferencia Bancaria"]
    },
    {
      icon: Package,
      title: "Gestión de Inventario",
      description: "Sistemas avanzados de gestión de stock para tu e-commerce en Aranjuez. Control total de inventario.",
      features: ["Control de Stock", "Alertas de Inventario", "Gestión de Variantes", "Sincronización"]
    },
    {
      icon: TrendingUp,
      title: "Marketing E-commerce",
      description: "Estrategias de marketing digital específicas para aumentar las ventas de tu tienda online en Aranjuez.",
      features: ["SEO E-commerce", "Email Marketing", "Redes Sociales", "Análisis de Conversión"]
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
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-green-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                E-commerce y Tiendas Online en{' '}
                <span className="text-green-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Desarrollo de tiendas online profesionales para empresas de Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Plataformas e-commerce completas con pasarelas de pago, gestión de inventario y marketing integrado
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
                Servicios de E-commerce en Aranjuez
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                Soluciones completas de tiendas online para empresas de Aranjuez
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all"
                >
                  <service.icon className="w-12 h-12 text-green-400 mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="font-light">{feature}</span>
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
                Beneficios de Tener una Tienda Online en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Clock, title: "Disponible 24/7", desc: "Tu tienda online en Aranjuez está abierta las 24 horas. Los clientes pueden comprar en cualquier momento, incluso fuera del horario comercial en Aranjuez." },
                { icon: TrendingUp, title: "Más Ventas", desc: "Aumenta tus ventas llegando a clientes de Aranjuez y toda España. Una tienda online multiplica tu alcance y oportunidades de venta." },
                { icon: Users, title: "Más Clientes", desc: "Llega a más clientes en Aranjuez y alrededores. Tu tienda online funciona como un vendedor que nunca duerme." },
                { icon: Shield, title: "Seguridad", desc: "Pasarelas de pago seguras y certificadas. Tus clientes en Aranjuez pueden comprar con total confianza y seguridad." },
                { icon: Zap, title: "Automatización", desc: "Gestión automática de pedidos, inventario y envíos. Ahorra tiempo y recursos en tu negocio de Aranjuez." },
                { icon: Award, title: "Profesional", desc: "Imagen profesional y moderna. Una tienda online bien diseñada aumenta la confianza de los clientes en Aranjuez." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-green-400 mb-4" />
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
                Preguntas Frecuentes sobre E-commerce en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Cuánto cuesta crear una tienda online en Aranjuez?",
                  a: "El precio depende del número de productos, funcionalidades y complejidad. Ofrecemos tiendas online desde presupuestos básicos hasta plataformas complejas con miles de productos. Contacta con nosotros para un presupuesto personalizado para tu negocio en Aranjuez."
                },
                {
                  q: "¿Cuánto tiempo tarda en crearse una tienda online?",
                  a: "Una tienda online básica puede estar lista en 3-4 semanas. Tiendas más complejas con muchos productos pueden tardar 6-8 semanas. Te proporcionamos un calendario detallado desde el inicio del proyecto en Aranjuez."
                },
                {
                  q: "¿Puedo gestionar la tienda yo mismo?",
                  a: "Sí, todas nuestras tiendas online incluyen un panel de administración intuitivo donde puedes gestionar productos, pedidos, clientes y más. También ofrecemos formación para tu equipo en Aranjuez."
                },
                {
                  q: "¿Qué métodos de pago puedo aceptar?",
                  a: "Integramos múltiples métodos de pago: tarjeta de crédito, PayPal, Bizum, transferencia bancaria y más. Configuramos las pasarelas de pago más adecuadas para tu negocio en Aranjuez."
                },
                {
                  q: "¿La tienda funcionará en móviles?",
                  a: "Absolutamente. Todas nuestras tiendas online son responsive y se adaptan perfectamente a móviles, tablets y ordenadores. Es fundamental ya que la mayoría de compras online se realizan desde móviles en Aranjuez."
                },
                {
                  q: "¿Incluye SEO para aparecer en Google?",
                  a: "Sí, optimizamos todas nuestras tiendas online para SEO local en Aranjuez. Incluimos optimización técnica, contenido optimizado y estrategias para aparecer cuando buscan tus productos en Aranjuez."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-green-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-green-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-900/20 to-green-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                ¿Listo para Vender Online en Aranjuez?
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Crea tu tienda online y comienza a vender en Aranjuez y toda España. Consulta gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
