import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Brain, Bot, Sparkles, CheckCircle, ArrowRight, Phone, Clock, Shield, Users, Award, TrendingUp, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inteligencia Artificial en Aranjuez | IA y Automatización | Your Webs',
  description: 'Servicios de inteligencia artificial y automatización en Aranjuez. Desarrollo de sistemas de IA, chatbots, automatización de procesos y soluciones inteligentes para empresas de Aranjuez, Madrid.',
  keywords: 'inteligencia artificial aranjuez, ia aranjuez, automatización aranjuez, chatbots aranjuez, machine learning aranjuez, sistemas ia aranjuez, inteligencia artificial empresas aranjuez, automatización procesos aranjuez',
  openGraph: {
    title: 'Inteligencia Artificial y Automatización en Aranjuez | Your Webs',
    description: 'Especialistas en inteligencia artificial y automatización para empresas de Aranjuez.',
    url: 'https://your-webs.com/inteligencia-artificial-aranjuez',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://your-webs.com/inteligencia-artificial-aranjuez',
  },
};

export default function InteligenciaArtificialAranjuezPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Webs - Inteligencia Artificial Aranjuez",
    "description": "Servicios de inteligencia artificial y automatización para empresas de Aranjuez. Sistemas de IA y automatización de procesos.",
    "url": "https://your-webs.com/inteligencia-artificial-aranjuez",
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
      icon: Bot,
      title: "Chatbots y Asistentes Virtuales",
      description: "Desarrollo de chatbots inteligentes para empresas de Aranjuez. Atención al cliente automatizada 24/7.",
      features: ["Chatbots personalizados", "Integración multiplataforma", "Aprendizaje continuo", "Análisis de conversaciones"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Sistemas de machine learning personalizados para empresas de Aranjuez. Predicción y análisis inteligente.",
      features: ["Modelos predictivos", "Análisis de datos", "Recomendaciones inteligentes", "Optimización automática"]
    },
    {
      icon: Sparkles,
      title: "Automatización de Procesos",
      description: "Automatización inteligente de procesos empresariales para empresas de Aranjuez. Aumenta la eficiencia.",
      features: ["RPA (Robotic Process Automation)", "Workflows inteligentes", "Integración de sistemas", "Reducción de errores"]
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
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-pink-900/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <Brain className="w-20 h-20 text-pink-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Inteligencia Artificial en{' '}
                <span className="text-pink-400 font-normal">Aranjuez</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
                Soluciones de IA y automatización para empresas de Aranjuez
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
                Chatbots, machine learning, automatización de procesos y sistemas inteligentes para empresas de Aranjuez
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
                Servicios de IA en Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                >
                  <service.icon className="w-12 h-12 text-pink-400 mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
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
                Beneficios de la Inteligencia Artificial para Empresas de Aranjuez
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "Automatización", desc: "Automatiza procesos repetitivos en tu empresa de Aranjuez. Ahorra tiempo y recursos con sistemas de IA que trabajan 24/7." },
                { icon: TrendingUp, title: "Mayor Eficiencia", desc: "Aumenta la productividad de tu empresa en Aranjuez. Los sistemas de IA optimizan operaciones y reducen errores." },
                { icon: Users, title: "Mejor Atención", desc: "Mejora la atención al cliente en Aranjuez con chatbots inteligentes que responden instantáneamente a cualquier hora." },
                { icon: Award, title: "Ventaja Competitiva", desc: "Adelántate a la competencia en Aranjuez. Las empresas que adoptan IA tienen ventajas significativas en el mercado." },
                { icon: Shield, title: "Decisiones Informadas", desc: "Toma decisiones basadas en datos. La IA analiza información compleja y proporciona insights valiosos para tu negocio en Aranjuez." },
                { icon: Clock, title: "Ahorro de Costes", desc: "Reduce costes operativos en Aranjuez. La automatización con IA disminuye la necesidad de personal para tareas repetitivas." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <benefit.icon className="w-10 h-10 text-pink-400 mb-4" />
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
                Preguntas Frecuentes sobre IA en Aranjuez
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "¿Qué tipo de soluciones de IA ofrecéis para empresas de Aranjuez?",
                  a: "Ofrecemos chatbots inteligentes, sistemas de automatización de procesos (RPA), análisis predictivo, sistemas de recomendación, procesamiento de lenguaje natural y más. Adaptamos las soluciones de IA a las necesidades específicas de tu empresa en Aranjuez."
                },
                {
                  q: "¿Cuánto cuesta implementar IA en mi empresa de Aranjuez?",
                  a: "El coste depende del tipo de solución y complejidad. Desde chatbots básicos hasta sistemas complejos de automatización. Ofrecemos presupuestos personalizados para empresas de Aranjuez. Contacta con nosotros para una consulta gratuita."
                },
                {
                  q: "¿Necesito conocimientos técnicos para usar sistemas de IA?",
                  a: "No necesariamente. Diseñamos interfaces intuitivas para que tu equipo en Aranjuez pueda usar los sistemas de IA sin conocimientos técnicos avanzados. También ofrecemos formación completa."
                },
                {
                  q: "¿Cuánto tiempo tarda en implementarse una solución de IA?",
                  a: "Depende de la complejidad. Un chatbot básico puede estar funcionando en 2-3 semanas, mientras que sistemas más complejos pueden requerir 2-3 meses. Te proporcionamos un calendario detallado desde el inicio."
                },
                {
                  q: "¿La IA reemplazará a mis empleados en Aranjuez?",
                  a: "No, la IA complementa el trabajo humano. Automatiza tareas repetitivas para que tu equipo en Aranjuez se enfoque en tareas de mayor valor. Aumenta la productividad sin reducir personal."
                },
                {
                  q: "¿Qué garantías ofrecéis con las soluciones de IA?",
                  a: "Ofrecemos soporte continuo, actualizaciones, mantenimiento y optimización de los sistemas de IA. Garantizamos que las soluciones funcionen correctamente y se adapten a las necesidades cambiantes de tu empresa en Aranjuez."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                    <span className="text-pink-400">Q:</span> {faq.q}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed pl-8">
                    <span className="text-pink-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-pink-900/20 to-pink-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                Inteligencia Artificial para Empresas de Aranjuez
              </h2>
              <p className="text-xl text-gray-300 font-light mb-8">
                Contacta para implementar soluciones de IA en tu empresa de Aranjuez. Consulta gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34680548144"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-full font-medium text-lg transition-colors inline-flex items-center justify-center"
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
