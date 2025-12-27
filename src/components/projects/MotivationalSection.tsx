'use client';

import { motion } from 'framer-motion';

const MotivationalSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight mb-8">
              El Éxito No Es Casualidad
            </h2>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-8 border border-purple-500/20">
              <blockquote className="text-xl font-light text-white leading-relaxed">
                &quot;Así como en el gimnasio necesitas constancia y dedicación para transformar tu cuerpo, 
                <span className="text-purple-400"> en el marketing necesitas consistencia y estrategia para transformar tu marca.</span>&quot;
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MotivationalSection;
