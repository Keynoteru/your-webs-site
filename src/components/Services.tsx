'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Globe, 
  Brain, 
  BarChart3, 
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  const services = [
    {
      icon: Video,
      title: "Producción Audiovisual",
      description: "Creamos contenido cinematográfico que conecta con tu audiencia",
      details: [
        "Grabación profesional 4K/8K",
        "Edición y post-producción",
        "Motion graphics avanzados",
        "Contenido para redes sociales"
      ],
      metric: "500+ Producciones",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios web y plataformas digitales que impulsan tu crecimiento",
      details: [
        "Sitios web corporativos",
        "Tiendas online (E-commerce)",
        "Plataformas personalizadas",
        "Optimización SEO avanzada"
      ],
      metric: "200+ Sitios Web",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Automatización Inteligente",
      description: "Sistemas de IA que optimizan operaciones empresariales",
      details: [
        "Asistentes virtuales corporativos",
        "Análisis predictivo avanzado",
        "Automatización de procesos",
        "Integración de Machine Learning"
      ],
      metric: "150+ Implementaciones",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Analytics estratégicos para la toma de decisiones ejecutivas",
      details: [
        "Dashboards ejecutivos",
        "Análisis de mercado",
        "KPIs empresariales",
        "Reportería automatizada"
      ],
      metric: "1M+ Datos Procesados",
      color: "from-emerald-500 to-teal-500"
    },
  ];

  return (
    <section
      ref={containerRef}
      id="servicios"
      className="relative bg-black overflow-hidden"
      aria-labelledby="servicios-heading"
    >

      {/* Header Section */}
      <div className="container mx-auto px-4 py-4 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-3 md:mb-16"
        >
          <h2 id="servicios-heading" className="text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-extralight text-white tracking-tight mb-1 md:mb-8">
            Nuestros Servicios
          </h2>
        </motion.div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg md:rounded-2xl border border-white/10 p-2.5 md:p-6 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-lg md:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 space-y-1.5 md:space-y-4">
                {/* Icon & Metric */}
                <div className="flex items-center justify-between mb-1 md:mb-0">
                  <div className={`w-7 h-7 md:w-12 md:h-12 rounded-md md:rounded-xl bg-gradient-to-r ${service.color} p-1 md:p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-[8px] md:text-xs text-gray-400 font-medium leading-tight">
                    {service.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-xl font-light text-white tracking-tight leading-tight group-hover:text-gray-100 transition-colors line-clamp-2">
                  {service.title}
                </h3>

                {/* Description - hidden on mobile, shown on desktop */}
                <p className="hidden md:block text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Key Features - hidden on mobile, shown on desktop */}
                <div className="hidden md:block space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-300 rounded-full flex-shrink-0" />
                      <span className="font-light text-xs">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - hidden on mobile, shown on desktop */}
                <div className="hidden md:block pt-2">
                  <a
                    href="https://wa.me/34680548144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white/70 hover:text-white text-base font-medium group-hover:translate-x-1 transition-all duration-300 min-h-[44px] px-3 py-2 -ml-3 -mr-3"
                    aria-label={`Ver más sobre ${service.title}`}
                  >
                    <span>Ver más</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-4 md:mt-32 pt-4 md:pt-20 border-t border-white/10"
        >
          <h3 className="text-base sm:text-lg md:text-3xl lg:text-4xl font-light text-white mb-2 md:mb-6 lg:mb-8 tracking-tight px-4">
            ¿Listo para transformar tu negocio?
          </h3>
          <a 
            href="https://wa.me/34680548144"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 md:space-x-3 bg-white text-black px-5 py-2.5 md:px-8 md:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 text-xs md:text-base"
          >
            <span>Empezar proyecto</span>
            <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
