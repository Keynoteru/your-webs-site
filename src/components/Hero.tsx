'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';



const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax completamente removido para mejor performance

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      id="inicio"
      style={{ zIndex: 1 }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-85"
          aria-label="Video de fondo de producción audiovisual"
        >
          <source src="/hero_webs.mp4" type="video/mp4" />
        </video>
        
        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20"></div>
      </div>
      

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Text Split Animation Title */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight text-white mb-6 md:mb-8 tracking-tight leading-tight md:leading-none overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              Producción Audiovisual
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="font-extralight"
            >
              <span className="text-white/40 font-light">
                Desarrollo Web
              </span>
            </motion.div>
          </div>

          {/* Optimized Subtitle for Mobile */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 font-light max-w-2xl md:max-w-3xl mx-auto px-6 sm:px-4 leading-relaxed sm:leading-relaxed"
          >
            <span className="block sm:inline">Creamos videos cinematográficos</span>
            <span className="block sm:inline"> y sitios web que elevan tu marca</span>
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-20"
          >
            <a 
              href="https://www.instagram.com/yourwebs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center border border-white/30 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-medium text-base sm:text-lg hover:border-white transition-all duration-300 overflow-hidden touch-manipulation min-h-[44px]"
              aria-label="Ver nuestro trabajo en Instagram"
            >
              {/* Background fill - transparent by default, white on hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"></div>
              
              {/* Shimmer effect - only visible on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute inset-y-0 bg-gradient-to-r from-transparent via-white/60 via-white/60 to-transparent w-[200%] transform -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              </div>
              
              {/* Content - text stays white (on transparent bg), changes to black on hover (on white bg) */}
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-200">Ver Nuestro Trabajo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 text-white group-hover:text-black transition-all duration-200 relative z-10 ml-2 sm:ml-3" />
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Enhanced scroll indicator - Outside main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 sm:space-y-3 z-20"
      >
        <span className="text-white/60 text-xs sm:text-sm font-light tracking-wide">Scroll para explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2 hover:border-white/70 transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/70 rounded-full"
          />
        </motion.div>
        {/* Animated arrow */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l3 3 3-3"/>
            <path d="M7 6l3 3 3-3"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
