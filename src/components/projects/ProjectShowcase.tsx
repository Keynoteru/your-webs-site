'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: 'Restaurante Auga',
      category: 'Gastronomía Premium',
      description: 'Video cinematográfico que captura la esencia de la cocina gallega con 1 Estrella Michelin',
      video: '/auga-web.mp4',
      results: {
        views: '2.3M',
        engagement: '12.5%',
        reservations: '+180%'
      },
      duration: '25s',
      year: '2024'
    },
    {
      id: 2,
      title: 'Restaurante Yume',
      category: 'Cocina Japonesa',
      description: 'Narrativa visual que transporta a Tokio a través de técnicas culinarias tradicionales',
      video: '/yume-web.mp4',
      results: {
        views: '1.8M',
        engagement: '15.2%',
        reservations: '+250%'
      },
      duration: '15s',
      year: '2024'
    },
    {
      id: 3,
      title: 'Huerta Orgánica',
      category: 'Sostenibilidad',
      description: 'Documental sobre agricultura sostenible que conecta con valores ecológicos',
      video: '/huerta-web.mp4',
      results: {
        views: '950K',
        engagement: '18.7%',
        reservations: '+320%'
      },
      duration: '18s',
      year: '2024'
    },
    {
      id: 4,
      title: 'Extramar',
      category: 'Mariscos Premium',
      description: 'Campaña que celebra la frescura del mar y la tradición pesquera',
      video: '/extramar-web.mp4',
      results: {
        views: '1.2M',
        engagement: '14.1%',
        reservations: '+200%'
      },
      duration: '22s',
      year: '2024'
    },
    {
      id: 5,
      title: 'Schweppes',
      category: 'Bebidas Premium',
      description: 'Campaña publicitaria que posiciona la marca como símbolo de sofisticación',
      video: '/schweppes-web.mp4',
      results: {
        views: '3.1M',
        engagement: '9.8%',
        sales: '+45%'
      },
      duration: '20s',
      year: '2024'
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white tracking-tight mb-6">
            Casos de Éxito
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Proyectos reales con resultados medibles. Cada video cuenta una historia única y genera impacto tangible.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Video Container */}
              <div className="relative h-64 overflow-hidden">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500/20 backdrop-blur-md text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-light text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.year}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>

                <p className="text-gray-300 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.results).map(([key, value], i) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-light text-purple-400 mb-1">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Stats Icons */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Proyecto completo</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>ROI positivo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-3xl p-12 border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-white mb-4">
              ¿Listo para tu Próximo Proyecto?
            </h3>
            <p className="text-lg text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              Únete a las marcas que ya están transformando su presencia digital con contenido que realmente funciona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative inline-flex items-center space-x-3 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:border-white transition-all duration-300 overflow-hidden">
                <Play className="w-5 h-5" />
                <span>Ver Más Proyectos</span>
              </button>
              <button className="group relative inline-flex items-center space-x-3 bg-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-purple-700 transition-all duration-300">
                <span>Empezar Mi Proyecto</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;




