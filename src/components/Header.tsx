'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      // Update active item based on scroll position
      const sections = ['inicio', 'proyectos', 'servicios', 'contacto'];
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]) as HTMLElement;
        if (element && scrollPosition >= element.offsetTop) {
          if (activeItem !== i) {
            setActiveItem(i);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem]);

  const handleNavClick = (href: string, index: number) => {
    setActiveItem(index);
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:font-medium"
      >
        Saltar al contenido principal
      </a>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isMenuOpen || isScrolled 
            ? 'bg-black' 
            : 'bg-transparent'
        }`}
      >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Filled Letters */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <div className="relative w-8 h-8 md:w-12 md:h-12">
                <Image
                  src="/logo_your_webs.svg"
                  alt="Your Webs Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                  sizes="48px"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl font-bold text-white tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                  Your Webs
                </h1>
              </div>
            </Link>
          </motion.div>

          {/* Beautiful Navigation Slider */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center p-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <button
                    onClick={() => handleNavClick(item.href, index)}
                    className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full z-10 ${
                      activeItem === index
                        ? 'text-black'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {activeItem === index && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white rounded-full shadow-md"
                        style={{ zIndex: -1 }}
                        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                    {/* Hover effect */}
                    {activeItem !== index && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Modern CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://wa.me/34680548144"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden border border-white/30 text-white px-6 py-3 rounded-full font-medium text-sm hover:border-white transition-all duration-300"
            >
              {/* Shimmer fill effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/80 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out"></div>
              
              {/* Background fill after shimmer */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
              
              <span className="relative z-10 group-hover:text-black transition-colors duration-200 delay-300">Empezar Proyecto</span>
            </motion.a>
          </div>

          {/* Futuristic Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Futuristic Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10 rounded-b-3xl"
            >
              <div className="p-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white text-xl font-light py-2 border-b border-white/10 last:border-b-0 hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <a 
                    href="https://wa.me/34680548144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-black px-6 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors block text-center"
                  >
                    Empezar Proyecto
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
    </>
  );
};

export default Header;
