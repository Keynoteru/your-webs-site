'use client';

import { motion } from 'framer-motion';
import { Camera, Drone, Image, Video, TrendingUp, Users, Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Componente para la sección de Eventos con dos columnas
interface SpecialtyType {
  title: string;
  description: string;
  stats: string;
  image: string;
  bgColor: string;
  textColor: string;
  isReversed: boolean;
  isVideoSection?: boolean;
  isDroneSection?: boolean;
  isPhotoSection?: boolean;
  videos?: Array<{ id: number; src: string; title: string; description: string }>;
  gallery?: string[];
}

const EventsSection = ({ specialty, isReversed }: { specialty: SpecialtyType, isReversed: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${specialty.bgColor} ${specialty.textColor} py-24`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Eventos Corporativos - Columna Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-6 text-black">
              Eventos Corporativos
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 mb-8">
              Cobertura profesional de eventos y presentaciones que capturan cada momento importante de tu empresa.
            </p>
            <div className="text-2xl font-light text-gray-600">
              40+ Eventos
            </div>
          </motion.div>

          {/* Bodas - Columna Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-6 text-black">
              Bodas
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 mb-8">
              Ceremonias, recepciones y momentos especiales que capturan la magia de tu día perfecto.
            </p>
            <div className="text-2xl font-light text-gray-600">
              +30 Bodas
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Componente para la sección de Videos con SVG de cámara
const VideoSection = ({ specialty, isReversed }: { specialty: SpecialtyType, isReversed: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${specialty.bgColor} ${specialty.textColor} py-24`}
    >
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`${isReversed ? 'lg:col-start-2' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-6">
                {specialty.title}
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-8 opacity-80">
                {specialty.description}
              </p>
              
              <div className="text-2xl font-light opacity-60 mb-8">
                {specialty.stats}
              </div>

              {/* Button */}
              <button className="group relative inline-flex items-center space-x-3 border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                <Camera className="w-5 h-5" />
                <span>Ver Todos los Videos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Camera SVG */}
          <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <svg
                width="300"
                height="200"
                viewBox="0 0 300 200"
                className="w-full h-auto max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simple Camera Body */}
                <rect x="50" y="80" width="200" height="80" rx="15" fill="white" stroke="#374151" strokeWidth="2" />
                
                {/* Simple Lens */}
                <circle cx="150" cy="120" r="30" fill="white" stroke="#374151" strokeWidth="3" />
                <circle cx="150" cy="120" r="20" fill="#1f2937" />
                <circle cx="150" cy="120" r="10" fill="#000000" />
                
                {/* Viewfinder */}
                <rect x="100" y="50" width="100" height="30" rx="5" fill="white" stroke="#374151" strokeWidth="2" />
                <rect x="110" y="55" width="80" height="20" rx="3" fill="#1f2937" />
                
                {/* Flash */}
                <rect x="120" y="30" width="15" height="20" rx="3" fill="white" stroke="#374151" strokeWidth="1" />
                <rect x="125" y="35" width="5" height="5" rx="1" fill="#fbbf24" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Componente para la sección de Fotografía con carrusel animado
const PhotoSection = ({ specialty, isReversed }: { specialty: SpecialtyType, isReversed: boolean }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${specialty.bgColor} ${specialty.textColor} py-24`}
    >
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`${isReversed ? 'lg:col-start-2' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-6">
                {specialty.title}
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-8 opacity-80">
                {specialty.description}
              </p>
              
              <div className="text-2xl font-light opacity-60">
                {specialty.stats}
              </div>
            </motion.div>
          </div>

          {/* Animated Photo Carousel - Full Width */}
          <div className={`${isReversed ? 'lg:col-start-1' : ''} w-full`}>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-96 overflow-hidden rounded-lg w-full"
            >
              {/* Carousel Container */}
              <div 
                className="flex h-full gap-4 w-full"
                style={{
                  width: `${specialty.gallery?.length ? specialty.gallery.length * 280 : 0}px`,
                  animation: 'scroll 25s linear infinite'
                }}
              >
                {/* Duplicate images for seamless loop */}
                {specialty.gallery && [...specialty.gallery, ...specialty.gallery].map((photo, index) => (
                  <div
                    key={index}
                    className="relative w-64 h-full flex-shrink-0 group cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={photo}
                      alt={`Fotografía ${index + 1}`}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredIndex === index 
                          ? 'brightness-100 grayscale-0' 
                          : 'brightness-75 grayscale md:grayscale'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-0' : 'opacity-100 md:opacity-100'
                    }`} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.div>
  );
};

// Componente para la sección de Drone con SVG y descripción
const DroneSection = ({ specialty, isReversed }: { specialty: SpecialtyType, isReversed: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${specialty.bgColor} ${specialty.textColor} py-24`}
    >
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`${isReversed ? 'lg:col-start-2' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-6">
                {specialty.title}
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-8 opacity-80">
                {specialty.description}
              </p>
              
              <div className="text-2xl font-light opacity-60 mb-8">
                {specialty.stats}
              </div>


              {/* Button */}
              <button className="group relative inline-flex items-center space-x-3 border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                <Drone className="w-5 h-5" />
                <span>Ver Trabajos de Dron</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Drone SVG */}
          <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <svg
                width="400"
                height="300"
                viewBox="0 0 400 300"
                className="w-full h-auto max-w-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Drone Body */}
                <ellipse cx="200" cy="150" rx="40" ry="20" fill="white" />
                <rect x="180" y="140" width="40" height="20" rx="10" fill="#f3f4f6" />
                
                {/* Propellers */}
                <circle cx="120" cy="100" r="25" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="280" cy="100" r="25" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="120" cy="200" r="25" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="280" cy="200" r="25" fill="none" stroke="white" strokeWidth="2" />
                
                {/* Propeller Arms */}
                <line x1="200" y1="150" x2="120" y2="100" stroke="white" strokeWidth="3" />
                <line x1="200" y1="150" x2="280" y2="100" stroke="white" strokeWidth="3" />
                <line x1="200" y1="150" x2="120" y2="200" stroke="white" strokeWidth="3" />
                <line x1="200" y1="150" x2="280" y2="200" stroke="white" strokeWidth="3" />
                
                {/* Camera */}
                <rect x="195" y="160" width="10" height="15" rx="2" fill="white" />
                <circle cx="200" cy="170" r="3" fill="#374151" />
                
                {/* Landing Gear */}
                <line x1="190" y1="170" x2="190" y2="190" stroke="white" strokeWidth="2" />
                <line x1="210" y1="170" x2="210" y2="190" stroke="white" strokeWidth="2" />
                <line x1="185" y1="190" x2="195" y2="190" stroke="white" strokeWidth="2" />
                <line x1="205" y1="190" x2="215" y2="190" stroke="white" strokeWidth="2" />
                
                {/* Motion Lines */}
                <path d="M50 150 Q100 120 150 150" stroke="white" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" />
                </path>
                <path d="M250 150 Q300 120 350 150" stroke="white" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoCategories = () => {
  const specialties = [
    {
      title: 'Videos Gastronómicos',
      description: 'Capturamos la esencia de cada plato con técnicas cinematográficas profesionales que hacen que cada bocado se sienta irresistible.',
      stats: '50+ Proyectos',
      image: '/fotos/caviar.jpeg',
      bgColor: 'bg-black',
      textColor: 'text-white',
      isReversed: false,
      isVideoSection: true
    },
    {
      title: 'Aerial & Drone',
      description: 'Perspectivas únicas desde el cielo que elevan tu marca y muestran tu negocio desde ángulos imposibles de alcanzar.',
      stats: '30+ Proyectos',
      image: '/fotos/ropa01.jpeg',
      bgColor: 'bg-black',
      textColor: 'text-white',
      isReversed: true,
      isDroneSection: true
    },
    {
      title: 'Fotografía Premium',
      description: 'Imágenes que cuentan historias y conectan emocionalmente con tu audiencia, creando una identidad visual memorable.',
      stats: '200+ Sesiones',
      image: '/fotos/tapa01.jpeg',
      bgColor: 'bg-black',
      textColor: 'text-white',
      isReversed: false,
      isPhotoSection: true,
      gallery: [
        '/fotos/caviar.jpeg',
        '/fotos/caviar02.jpeg',
        '/fotos/coctel01.jpeg',
        '/fotos/ropa01.jpeg',
        '/fotos/tapa01.jpeg',
        '/fotos/santi01.jpeg'
      ]
    },
    {
      title: 'Eventos Corporativos',
      description: 'Cobertura profesional de eventos y presentaciones que capturan cada momento importante de tu empresa.',
      stats: '40+ Eventos',
      image: '/fotos/ropa01.jpeg',
      bgColor: 'bg-white',
      textColor: 'text-black',
      isReversed: true,
      isEventsSection: true
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {specialties.map((specialty, index) => {
        // Si es la sección de Videos, usar el componente especial
        if (specialty.title === 'Videos Gastronómicos') {
          return (
            <VideoSection 
              key={specialty.title} 
              specialty={specialty} 
              isReversed={specialty.isReversed} 
            />
          );
        }

        // Si es la sección de Drone, usar el componente especial
        if (specialty.title === 'Aerial & Drone') {
          return (
            <DroneSection 
              key={specialty.title} 
              specialty={specialty} 
              isReversed={specialty.isReversed} 
            />
          );
        }

        // Si es la sección de Fotografía, usar el componente especial
        if (specialty.title === 'Fotografía Premium') {
          return (
            <PhotoSection 
              key={specialty.title} 
              specialty={specialty} 
              isReversed={specialty.isReversed} 
            />
          );
        }

        // Si es la sección de Eventos, usar el componente especial
        if (specialty.title === 'Eventos Corporativos') {
          return (
            <EventsSection 
              key={specialty.title} 
              specialty={specialty} 
              isReversed={specialty.isReversed} 
            />
          );
        }

        // Para las demás secciones, usar el renderizado normal
        return (
          <motion.div
            key={specialty.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${specialty.bgColor} ${specialty.textColor} py-24`}
          >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${specialty.isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`${specialty.isReversed ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: specialty.isReversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-6">
                    {specialty.title}
                  </h2>
                  <p className="text-lg md:text-xl font-light leading-relaxed mb-8 opacity-80">
                    {specialty.description}
                  </p>
                  
                  <div className="text-2xl font-light opacity-60">
                    {specialty.stats}
                  </div>
                </motion.div>
              </div>

              {/* Media Column */}
              <div className={`${specialty.isReversed ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: specialty.isReversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >

                  {/* Default image for other categories */}
                  {!(specialty as SpecialtyType).videos && (
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={specialty.image}
                          alt={specialty.title}
                          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        );
      })}
    </section>
  );
};

export default VideoCategories;
