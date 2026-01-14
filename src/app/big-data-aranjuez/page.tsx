import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Database, BarChart3, TrendingUp, CheckCircle, ArrowRight, Phone, Clock, Shield, Users, Award, Zap, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Big Data en Aranjuez | Análisis de Datos y Business Intelligence | Your Webs',
  description: 'Servicios de Big Data y Business Intelligence en Aranjuez. Análisis de datos, dashboards, reporting y soluciones de inteligencia de negocio para empresas de Aranjuez, Madrid.',
  keywords: 'big data aranjuez, análisis datos aranjuez, business intelligence aranjuez, dashboards aranjuez, reporting aranjuez, analytics aranjuez, inteligencia negocio aranjuez, data science aranjuez',
  openGraph: {
    title: 'Big Data y Business Intelligence en Aranjuez | Your Webs',
    description: 'Especialistas en Big Data y análisis de datos para empresas de Aranjuez.',
    url: 'https://your-webs.com/big-data-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/big-data-aranjuez',
  },
};

export default function BigDataAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Big Data Aranjuez",
    "description": "Servicios de Big Data y Business Intelligence para empresas de Aranjuez. Análisis de datos y dashboards.",
    "url": "https://your-webs.com/big-data-aranjuez",
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
      icon: Database,
      title: "Análisis de Big Data",
      description: "Análisis de grandes volúmenes de datos para empresas de Aranjuez. Extracción de insights valiosos.",
      features: ["Procesamiento de datos", "Análisis predictivo", "Data mining", "Visualización"]
    },
    {
      icon: BarChart3,
      title: "Dashboards y Reporting",
      description: "Creación de dashboards interactivos y reportes automatizados para empresas de Aranjuez.",
      features: ["Dashboards personalizados", "Reportes automáticos", "Visualización de KPIs", "Tiempo real"]
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Soluciones de inteligencia de negocio para empresas de Aranjuez. Toma de decisiones basada en datos.",
      features: ["Análisis estratégico", "KPIs personalizados", "Forecasting", "Optimización"]
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
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-cyan-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <Database className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Big Data en{' '}
                <span className="text-cyan-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Análisis de datos y Business Intelligence para empresas de Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Soluciones de Big Data, dashboards, reporting y análisis de datos para empresas de Aranjuez
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
                Servicios de Big Data en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                >
                  <service.icon className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
                Beneficios del Big Data para Empresas de Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Target, title: "Decisiones Informadas", desc: "Toma decisiones basadas en datos reales. El Big Data proporciona insights valiosos para tu empresa en Aranjuez." },
                { icon: TrendingUp, title: "Ventaja Competitiva", desc: "Adelántate a la competencia en Aranjuez. Las empresas que usan Big Data tienen mejor comprensión del mercado." },
                { icon: Users, title: "Conoce a tus Clientes", desc: "Entiende mejor a tus clientes en Aranjuez. El análisis de datos revela patrones y preferencias de consumo." },
                { icon: Zap, title: "Optimización", desc: "Optimiza procesos y operaciones en Aranjuez. El Big Data identifica ineficiencias y áreas de mejora." },
                { icon: Award, title: "Predicción", desc: "Predice tendencias y comportamientos. El análisis predictivo ayuda a anticipar necesidades en Aranjuez." },
                { icon: Shield, title: "Reducción de Riesgos", desc: "Reduce riesgos en tu negocio de Aranjuez. El análisis de datos ayuda a identificar problemas antes de que ocurran." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-cyan-400 mb-4" />
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
                Preguntas Frecuentes sobre Big Data en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Qué es Big Data y cómo puede ayudar a mi empresa en Aranjuez?",
                  a: "Big Data es el análisis de grandes volúmenes de datos para extraer información valiosa. Para empresas de Aranjuez, puede ayudar a entender mejor a los clientes, optimizar operaciones, predecir tendencias y tomar decisiones más informadas basadas en datos reales."
                },
                {
                  q: "¿Qué tipo de datos se pueden analizar?",
                  a: "Analizamos datos de ventas, clientes, operaciones, marketing, redes sociales, web analytics y más. Cualquier dato relevante para tu negocio en Aranjuez puede ser analizado para obtener insights valiosos."
                },
                {
                  q: "¿Cuánto cuesta implementar Big Data en mi empresa?",
                  a: "El coste depende del volumen de datos, complejidad del análisis y tipo de dashboards necesarios. Ofrecemos soluciones desde básicas hasta avanzadas. Contacta con nosotros para un presupuesto personalizado para tu empresa en Aranjuez."
                },
                {
                  q: "¿Necesito tener muchos datos para usar Big Data?",
                  a: "No necesariamente. Incluso empresas pequeñas de Aranjuez pueden beneficiarse del análisis de datos. Empezamos con los datos que ya tienes y te ayudamos a recopilar más información relevante."
                },
                {
                  q: "¿Qué tipo de reportes recibiré?",
                  a: "Recibirás dashboards interactivos con KPIs, gráficos, análisis de tendencias, reportes personalizados y alertas automáticas. Todo adaptado a las necesidades de tu empresa en Aranjuez."
                },
                {
                  q: "¿Cuánto tiempo tarda en verse resultados?",
                  a: "Los primeros insights pueden verse en semanas. Sin embargo, el valor del Big Data aumenta con el tiempo a medida que se recopila más información. Te proporcionamos análisis continuos para tu empresa en Aranjuez."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-cyan-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-cyan-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-cyan-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                Big Data para Empresas de Aranjuez
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta para implementar soluciones de Big Data en tu empresa de Aranjuez. Consulta gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
