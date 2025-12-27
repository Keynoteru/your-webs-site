'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, Drone, Image as ImageIcon, Video, TrendingUp, Users } from 'lucide-react';

const ProjectsHero = () => {
  const sections = [
    { name: 'Videos Gastronómicos', icon: Camera },
    { name: 'Aerial & Drone', icon: Drone },
    { name: 'Fotografía Premium', icon: ImageIcon },
    { name: 'Eventos Corporativos', icon: Users }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="w-full h-full">
        {/* Mobile: Full background image */}
        <div className="lg:hidden relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="/fotos/santi01.jpeg"
              alt="Fotografía profesional de producción audiovisual"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-md"
            >
              <h1 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight leading-tight mb-6">
                Nuestros
                <span className="block text-purple-400 font-black">Proyectos</span>
              </h1>
              <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                Videos cinematográficos que transforman marcas. 
                <span className="block">Métricas reales, resultados comprobables.</span>
              </p>
              
              {/* Especialidades Mobile */}
              <div className="space-y-3">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                      <section.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                        {section.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop: Two columns */}
        <div className="hidden lg:grid grid-cols-5 h-screen">
          {/* Left Column - Black */}
          <div className="bg-black flex items-center justify-center p-8 lg:p-12 col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight text-white tracking-tight leading-tight mb-8">
                Nuestros
                <span className="block text-purple-400 font-black">Proyectos</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                Videos cinematográficos que transforman marcas. 
                <span className="block">Métricas reales, resultados comprobables.</span>
              </p>
              
              {/* Especialidades Desktop */}
              <div className="space-y-3">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                      <section.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                        {section.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image Only */}
          <div className="relative bg-black flex items-center justify-center p-8 lg:p-12 col-span-2 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/fotos/santi01.jpeg"
                alt="Fotografía profesional de producción audiovisual"
                fill
                className="object-cover"
                priority
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
