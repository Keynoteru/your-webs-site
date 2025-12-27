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
      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 id="servicios-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extralight text-white tracking-tight mb-4 md:mb-8">
            Nuestros Servicios
          </h2>
        </motion.div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 space-y-3 md:space-y-4">
                {/* Icon & Metric */}
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r ${service.color} p-2 md:p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 font-medium">
                    {service.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-light text-white tracking-tight leading-tight group-hover:text-gray-100 transition-colors">
                  {service.title}
                </h3>

                {/* Description - hidden on mobile, shown on desktop */}
                <p className="hidden md:block text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Key Features - only show 1 on mobile, 2 on desktop */}
                <div className="space-y-1.5 md:space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className={`flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition-colors ${detailIndex >= 1 ? 'hidden md:flex' : ''}`}
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-300 rounded-full flex-shrink-0" />
                      <span className="font-light text-[11px] md:text-xs">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/34680548144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white/70 hover:text-white text-sm md:text-base font-medium group-hover:translate-x-1 transition-all duration-300 min-h-[44px] px-3 py-2 -ml-3 -mr-3"
                    aria-label={`Ver más sobre ${service.title}`}
                  >
                    <span>Ver más</span>
                    <ArrowRight className="w-4 h-4 md:w-3 md:h-3" />
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-32 pt-12 md:pt-20 border-t border-white/10"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 md:mb-6 lg:mb-8 tracking-tight px-4">
            ¿Listo para transformar tu negocio?
          </h3>
          <a 
            href="https://wa.me/34680548144"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            <span>Empezar proyecto</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
