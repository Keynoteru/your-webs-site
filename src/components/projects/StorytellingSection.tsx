'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const StorytellingSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight mb-4">
            El Poder del
            <span className="text-purple-400"> Storytelling</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Las marcas más exitosas no venden productos, venden emociones.
          </p>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
            <Quote className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <blockquote className="text-xl font-light text-white leading-relaxed">
              &quot;Red Bull no vende bebidas, vende emociones&quot;
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorytellingSection;
