'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Clients = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Clientes reales con logos
  const clients = [
    { name: 'YUME', logo: '/fotos/yume_logo.png', category: 'Restaurante' },
    { name: 'AUGA', logo: '/fotos/logo-auga.png', category: 'Restaurante' },
    { name: 'ALIMIBAR', logo: '/fotos/logo_alimibar.png', category: 'Restaurante' },
    { name: 'AGUATINTA', logo: '/fotos/aguatinta_logo.png', category: 'Restaurante' },
    { name: 'MELOCOTÓN', logo: '/fotos/logo_melocoton.png', category: 'Coctelería' },
    { name: 'BUSHIDO', logo: '/fotos/logo_bushido.png', category: 'Tattoo Studio' },
    { name: 'SCHWEPPES', logo: '/fotos/Schweppes-Logo.png', category: 'Bebidas' },
    { name: 'EXTREMAR', logo: '/fotos/logo_extramar.png', category: 'Proveedor' },
    { name: 'NORTEÑOS', logo: '/fotos/Logo-norteños.svg', category: 'Proveedor' },
    { name: 'LA HUERTA', logo: '/fotos/Logotipo-La-Huerta-de-Aranjuez-01-removebg-preview.png', category: 'Proveedor' },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden" aria-labelledby="clientes-heading">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="clientes-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight text-white mb-4 tracking-tight">
            Confían en
            <br />
            <span className="text-white">
              Nuestro Trabajo
            </span>
          </h2>
          <p className="text-white/60 font-light text-lg px-4">
            Empresas líderes que han transformado su presencia digital
          </p>
        </motion.div>

        {/* Animated Logos Carousel */}
        <div className="relative overflow-hidden touch-pan-y" style={{ touchAction: 'pan-y' }} suppressHydrationWarning>
          {!isMounted ? (
            // Static fallback during SSR
            <>
              <div className="flex space-x-4 md:space-x-16 mb-4 md:mb-6" style={{ width: 'fit-content' }}>
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`row1-${index}`}
                    className="group flex-shrink-0 flex flex-col items-center justify-center space-y-2 md:space-y-3 cursor-pointer min-w-[75px] md:min-w-[200px]"
                  >
                    <div className="relative h-10 md:h-20 flex items-center justify-center">
                      <div className="relative w-16 h-8 md:w-40 md:h-20 flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={`Logo de ${client.name}`}
                          width={160}
                          height={80}
                          className={`object-contain w-full h-full opacity-100 md:${client.name === 'AGUATINTA' ? 'opacity-30 brightness-75' : 'opacity-30'} md:group-hover:opacity-100 transition-all duration-500 filter ${client.name === 'AGUATINTA' ? 'md:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] md:group-hover:brightness-110' : 'md:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'} drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]`}
                          loading="lazy"
                          sizes="(max-width: 768px) 75px, 200px"
                          quality={85}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 font-light tracking-wide opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {client.category}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 md:space-x-16" style={{ width: 'fit-content' }}>
                {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
                  <div
                    key={`row2-${index}`}
                    className="group flex-shrink-0 flex flex-col items-center justify-center space-y-2 md:space-y-3 cursor-pointer min-w-[75px] md:min-w-[200px]"
                  >
                    <div className="relative h-10 md:h-20 flex items-center justify-center">
                      <div className="relative w-16 h-8 md:w-40 md:h-20 flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={`Logo de ${client.name}`}
                          width={160}
                          height={80}
                          className={`object-contain w-full h-full opacity-100 md:${client.name === 'AGUATINTA' ? 'opacity-30 brightness-75' : 'opacity-30'} md:group-hover:opacity-100 transition-all duration-500 filter ${client.name === 'AGUATINTA' ? 'md:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] md:group-hover:brightness-110' : 'md:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'} drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]`}
                          loading="lazy"
                          sizes="(max-width: 768px) 75px, 200px"
                          quality={85}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 font-light tracking-wide opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {client.category}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Animated version after mount
            <>
              {/* First row - moving right */}
              <motion.div
                animate={{ 
                  x: ['0%', '-50%']
                }}
                transition={{ 
                  duration: 100, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex space-x-4 md:space-x-16 mb-4 md:mb-6"
                style={{ width: 'fit-content' }}
              >
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`row1-${index}`}
                    className="group flex-shrink-0 flex flex-col items-center justify-center space-y-2 md:space-y-3 cursor-pointer min-w-[75px] md:min-w-[200px]"
                  >
                    {/* Logo Container */}
                    <div className="relative h-10 md:h-20 flex items-center justify-center">
                      <div className="relative w-16 h-8 md:w-40 md:h-20 flex items-center justify-center">
                        {/* Real company logo */}
                        <Image
                          src={client.logo}
                          alt={`Logo de ${client.name}`}
                          width={160}
                          height={80}
                          className={`object-contain w-full h-full opacity-100 md:${client.name === 'AGUATINTA' ? 'opacity-30 brightness-75' : 'opacity-30'} md:group-hover:opacity-100 transition-all duration-500 filter ${client.name === 'AGUATINTA' ? 'md:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] md:group-hover:brightness-110' : 'md:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'} drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]`}
                          loading="lazy"
                          sizes="(max-width: 768px) 75px, 200px"
                          quality={85}
                        />
                      </div>
                    </div>
                    
                    {/* Category */}
                    <span className="text-xs text-gray-500 font-light tracking-wide opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {client.category}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Second row - moving right (opposite direction) */}
              <motion.div
                animate={{ 
                  x: ['-50%', '0%']
                }}
                transition={{ 
                  duration: 100, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex space-x-4 md:space-x-16"
                style={{ width: 'fit-content' }}
              >
                {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
                  <div
                    key={`row2-${index}`}
                    className="group flex-shrink-0 flex flex-col items-center justify-center space-y-2 md:space-y-3 cursor-pointer min-w-[75px] md:min-w-[200px]"
                  >
                    {/* Logo Container */}
                    <div className="relative h-10 md:h-20 flex items-center justify-center">
                      <div className="relative w-16 h-8 md:w-40 md:h-20 flex items-center justify-center">
                        {/* Real company logo */}
                        <Image
                          src={client.logo}
                          alt={`Logo de ${client.name}`}
                          width={160}
                          height={80}
                          className={`object-contain w-full h-full opacity-100 md:${client.name === 'AGUATINTA' ? 'opacity-30 brightness-75' : 'opacity-30'} md:group-hover:opacity-100 transition-all duration-500 filter ${client.name === 'AGUATINTA' ? 'md:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] md:group-hover:brightness-110' : 'md:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'} drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]`}
                          loading="lazy"
                          sizes="(max-width: 768px) 75px, 200px"
                          quality={85}
                        />
                      </div>
                    </div>
                    
                    {/* Category */}
                    <span className="text-xs text-gray-500 font-light tracking-wide opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {client.category}
                    </span>
                  </div>
                ))}
              </motion.div>
            </>
          )}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 font-light">
            + muchas más empresas que han confiado en nosotros
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
