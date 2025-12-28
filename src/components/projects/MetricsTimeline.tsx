'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Eye, Users, DollarSign, Calendar, Trophy } from 'lucide-react';

const MetricsTimeline = () => {
  const metrics = [
    { month: 1, views: 15000, engagement: 8, revenue: 12 },
    { month: 2, views: 28000, engagement: 12, revenue: 18 },
    { month: 3, views: 45000, engagement: 18, revenue: 25 },
    { month: 6, views: 78000, engagement: 28, revenue: 42 },
    { month: 9, views: 120000, engagement: 35, revenue: 58 },
    { month: 12, views: 180000, engagement: 45, revenue: 75 }
  ];

  const maxViews = Math.max(...metrics.map(m => m.views));
  const maxEngagement = Math.max(...metrics.map(m => m.engagement));
  const maxRevenue = Math.max(...metrics.map(m => m.revenue));

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white tracking-tight mb-6">
            Resultados Reales
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Promedio de crecimiento de nuestros clientes en 12 meses. 
            <span className="text-purple-400"> Datos reales, resultados comprobables.</span>
          </p>
        </motion.div>

        {/* Timeline with visible data */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline Header */}
          <div className="relative flex justify-between items-center mb-20 px-4">
            {/* Timeline Line */}
            <div className="absolute top-6 left-8 right-8 h-0.5 bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300"></div>
            
            {metrics.map((metric, index) => {
              // Mostrar métricas en meses específicos (1, 3, 6, 9, 12 en desktop, 1, 6, 12 en mobile)
              const showMetrics = [1, 3, 6, 9, 12].includes(metric.month);
              const showMobileMetrics = [1, 6, 12].includes(metric.month);
              
              // Degradado cronológico de colores (morado oscuro a más llamativo)
               const getColorClass = (month: number) => {
                switch(month) {
                  case 1: return 'bg-purple-800 text-white group-hover:bg-purple-700';
                  case 2: return 'bg-purple-700 text-white group-hover:bg-purple-600';
                  case 3: return 'bg-purple-600 text-white group-hover:bg-purple-500';
                  case 6: return 'bg-purple-500 text-white group-hover:bg-purple-400';
                  case 9: return 'bg-purple-400 text-white group-hover:bg-purple-300';
                  case 12: return 'bg-purple-300 text-purple-800 group-hover:bg-purple-200';
                  default: return 'bg-purple-500 text-white group-hover:bg-purple-400';
                }
              };
              
              return (
                <motion.div
                  key={metric.month}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group ${showMobileMetrics ? 'block' : 'hidden md:block'}`}
                >
                  <div className={`w-12 h-12 ${getColorClass(metric.month)} rounded-full flex items-center justify-center font-medium mb-2 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                    {metric.month}
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                    {metric.month === 1 ? '1 mes' : `${metric.month} meses`}
                  </span>
                  
                  {/* Metrics above specific months - Desktop: all metrics, Mobile: only views */}
                  {showMetrics && (
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap min-w-max border border-white/20">
                        {/* Desktop: All metrics */}
                        <div className="hidden md:flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-purple-400 font-medium">{metric.views.toLocaleString()}</div>
                            <div className="text-xs text-gray-300">vistas</div>
                          </div>
                          <div className="text-center">
                            <div className="text-green-400 font-medium">{metric.engagement}%</div>
                            <div className="text-xs text-gray-300">engagement</div>
                          </div>
                          <div className="text-center">
                            <div className="text-yellow-400 font-medium">+{metric.revenue}%</div>
                            <div className="text-xs text-gray-300">ventas</div>
                          </div>
                        </div>
                        {/* Mobile: Only views */}
                        <div className="md:hidden text-center">
                          <div className="text-purple-400 font-medium">{metric.views.toLocaleString()}</div>
                          <div className="text-xs text-gray-300">vistas</div>
                        </div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>


          {/* Bottom Stats - No background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-purple-400 mb-1">95%</div>
                <div className="text-sm text-gray-400">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-green-400 mb-1">12</div>
                <div className="text-sm text-gray-400">Meses promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-yellow-400 mb-1">3x</div>
                <div className="text-sm text-gray-400">ROI promedio</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <div className="text-2xl md:text-3xl font-light text-blue-400">x4</div>
                  <Trophy className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-400">+9000% vistas</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricsTimeline;
