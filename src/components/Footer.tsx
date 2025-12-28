'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ChevronUp, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-black text-white border-t border-white/10"
      id="contacto"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo_your_webs.svg"
                    alt="Your Webs Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-light text-white tracking-wide">
                  Your Webs
                </h3>
              </div>
              
              <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                Agentes digitales especializados en transformar tu visión en realidad audiovisual y web.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-light text-white">
                Contacto
              </h4>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/34680548144" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-light">+34 680 548 144</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="font-light">contacto@your-webs.com</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-4 border-t border-white/10">
                <h5 className="text-sm font-light text-white mb-4">
                  Síguenos
                </h5>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/yourwebs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@YourWebs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/your-webs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/34680548144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-light text-white">
                Servicios
              </h4>
              <div className="space-y-3">
                <Link href="#proyectos" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Producción Audiovisual
                </Link>
                <Link href="#servicios" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Desarrollo Web
                </Link>
                <Link href="#servicios" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Automatización IA
                </Link>
                <Link href="#servicios" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Business Intelligence
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm font-light">
              © 2026 Your Webs — Agentes Digitales
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors font-light"
            >
              <span>Volver arriba</span>
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
