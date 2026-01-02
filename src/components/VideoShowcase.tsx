'use client';

import { motion } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const VideoShowcase = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Removed parallax scroll effects for better performance

  const videos = [
    {
      id: 1,
      src: '/auga-web.mp4',
      title: 'Restaurante Auga',
      description: 'Asturias, Gijón',
      category: 'Gastronomía',
      duration: '25s'
    },
    {
      id: 2,
      src: '/yume-web.mp4',
      title: 'Restaurante Yume',
      description: 'Avilés, Torre Niemeyer',
      category: 'Asiática',
      duration: '15s'
    },
    {
      id: 3,
      src: '/huerta-web.mp4',
      title: 'Huerta',
      description: 'Experiencia gastronómica natural',
      category: 'Orgánico',
      duration: '18s'
    },
    {
      id: 4,
      src: '/extramar-web.mp4',
      title: 'Extramar',
      description: 'Cocina marina de alta calidad',
      category: 'Mariscos',
      duration: '22s'
    },
    {
      id: 5,
      src: '/schweppes-web.mp4',
      title: 'Schweppes',
      description: 'Campaña publicitaria premium',
      category: 'Bebidas',
      duration: '20s'
    }
  ];

  const handleVideoPlay = (videoId: number) => {
    // Stop any currently playing video
    if (playingVideo && playingVideo !== videoId) {
      const currentPlayingElement = document.getElementById(`video-${playingVideo}`) as HTMLVideoElement;
      if (currentPlayingElement) {
        currentPlayingElement.pause();
        currentPlayingElement.currentTime = 0; // Reset to beginning
      }
    }
    
    setPlayingVideo(videoId);
    const videoElement = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    }
  };

  const handleVideoPause = (videoId: number) => {
    setPlayingVideo(null);
    const videoElement = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.pause();
    }
  };

  // Pause all videos when component unmounts or user leaves
  useEffect(() => {
    return () => {
      videos.forEach(video => {
        const videoElement = document.getElementById(`video-${video.id}`) as HTMLVideoElement;
        if (videoElement) {
          videoElement.pause();
        }
      });
    };
  }, []);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Forzar carga del primer frame en el video actual (para iOS/Safari)
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentVideoId = videos[currentVideo].id;
      const videoElement = document.getElementById(`video-${currentVideoId}`) as HTMLVideoElement;
      if (videoElement && videoElement.readyState >= 1) {
        // Forzar mostrar primer frame
        videoElement.currentTime = 0;
        if (playingVideo !== currentVideoId) {
          videoElement.pause();
        }
      }
    }, 100); // Pequeño delay para asegurar que el DOM esté actualizado

    return () => clearTimeout(timer);
  }, [currentVideo, videos, playingVideo]);

  // Auto-advance videos when not playing and not hovered
  useEffect(() => {
    if (playingVideo || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000); // Increased to 5 seconds for better UX
    return () => clearInterval(interval);
  }, [playingVideo, isHovered, videos.length]);

  // Pause current video when changing slides
  useEffect(() => {
    if (playingVideo) {
      const videoElement = document.getElementById(`video-${playingVideo}`) as HTMLVideoElement;
      if (videoElement) {
        videoElement.pause();
        setPlayingVideo(null);
      }
    }
  }, [currentVideo]);




  // Helper function to convert duration from "25s" to ISO 8601 format "PT25S"
  const convertDurationToISO8601 = (duration: string): string => {
    const seconds = parseInt(duration.replace('s', ''));
    return `PT${seconds}S`;
  };

  // Structured data for videos
  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": videos.map((video, index) => ({
      "@type": "VideoObject",
      "position": index + 1,
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": `https://your-webs.com${video.src.replace('.mp4', '-thumb.jpg')}`,
      "uploadDate": "2024-01-01T00:00:00+00:00",
      "duration": convertDurationToISO8601(video.duration),
      "contentUrl": `https://your-webs.com${video.src}`,
      "embedUrl": `https://your-webs.com${video.src}`,
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoStructuredData)
        }}
      />
      <section 
        ref={sectionRef} 
        id="proyectos"
        className="py-20 bg-black relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-labelledby="proyectos-heading"
      >
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with SEO Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 id="proyectos-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight text-white tracking-tight mb-6">
            Nuestros Proyectos
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Videos cinematográficos para restaurantes Michelin, Soles de Repsol y marcas premium. 
            Cada proyecto cuenta una historia única que conecta con la audiencia.
          </p>
        </motion.div>

        {/* Single Column Layout - Video + Carousel */}
        <div className="max-w-6xl mx-auto">
          
          {/* Video Carousel with Side Previews */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
              {/* Video Carousel Container */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl md:rounded-none">
              <motion.div 
                className="flex h-full transition-transform duration-700 ease-out"
                animate={{ x: `${-currentVideo * 100}%` }}
              >
                {videos.map((video, index) => {
                  const isCurrent = index === currentVideo;
                  const isLeft = index === currentVideo - 1 || (currentVideo === 0 && index === videos.length - 1);
                  const isRight = index === currentVideo + 1 || (currentVideo === videos.length - 1 && index === 0);
                  const isVisible = isCurrent || isLeft || isRight;
                  
                  return (
                    <div
                      key={video.id}
                      className={`w-full h-full flex-shrink-0 relative transition-all duration-700 ${
                        isCurrent ? 'z-20' : isVisible ? 'z-10' : 'z-0'
                      }`}
                    >
                     <video
                       id={`video-${video.id}`}
                        className={`w-full h-full object-cover transition-all duration-700 rounded-lg md:rounded-none ${
                          isCurrent 
                            ? 'scale-100' 
                            : isVisible 
                            ? 'scale-95 opacity-60' 
                            : 'scale-90 opacity-30'
                       }`}
                       muted
                       loop
                       playsInline
                       preload={isVisible ? "metadata" : "none"}
                       aria-label={`Video de ${video.title}: ${video.description}`}
                       onLoadedData={(e) => {
                         const videoEl = e.target as HTMLVideoElement;
                         // Mostrar primer frame para thumbnail (compatible con iOS)
                         if (playingVideo !== video.id && !videoEl.paused === false) {
                           videoEl.currentTime = 0;
                           videoEl.pause();
                         }
                       }}
                       onPlay={() => setPlayingVideo(video.id)}
                       onPause={() => {
                         if (playingVideo === video.id) {
                           setPlayingVideo(null);
                         }
                       }}
                       onEnded={() => {
                         if (playingVideo === video.id) {
                           setPlayingVideo(null);
                         }
                       }}
                     >
                       <source src={video.src} type="video/mp4" />
                     </video>
                     
                      {/* Overlay for non-current videos */}
                      {!isCurrent && (
                        <div className="absolute inset-0 bg-black/50" />
                      )}
                      
                      {/* Play/Pause Button - Only for current video */}
                     {isCurrent && (
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                          playingVideo === video.id 
                            ? 'opacity-30 md:opacity-20 md:hover:opacity-100' 
                            : 'opacity-100 md:opacity-0 md:hover:opacity-100'
                        }`}>
                          <button 
                           onClick={() => playingVideo === video.id ? handleVideoPause(video.id) : handleVideoPlay(video.id)}
                            className="w-20 h-20 md:w-16 md:h-16 bg-black/60 md:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/70 md:hover:bg-black/60 hover:scale-110 active:scale-95 transition-all duration-300 group border-2 md:border border-white/30 md:border-white/20 min-h-[44px] min-w-[44px]"
                            aria-label={playingVideo === video.id ? "Pausar video" : "Reproducir video"}
                          >
                            {playingVideo === video.id ? (
                              <Pause className="w-8 h-8 md:w-6 md:h-6 text-white" fill="currentColor" />
                            ) : (
                              <Play className="w-8 h-8 md:w-6 md:h-6 text-white ml-1 md:ml-0.5" fill="currentColor" />
                            )}
                          </button>
                       </div>
                     )}
                   </div>
                   );
                 })}
              </motion.div>
               
              {/* Navigation Arrows */}
               <button
                 onClick={prevVideo}
                className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-14 h-14 md:w-12 md:h-12 bg-black/70 md:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 md:hover:bg-black/70 hover:scale-110 active:scale-95 transition-all duration-300 z-30 border-2 md:border border-white/40 md:border-white/20 group min-h-[44px] min-w-[44px] ${
                  playingVideo !== null ? 'opacity-40 md:opacity-30 hover:opacity-100' : 'opacity-100'
                }`}
                aria-label="Video anterior"
               >
                <ChevronLeft className="w-7 h-7 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
               </button>
               
               <button
                 onClick={nextVideo}
                className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-14 h-14 md:w-12 md:h-12 bg-black/70 md:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 md:hover:bg-black/70 hover:scale-110 active:scale-95 transition-all duration-300 z-30 border-2 md:border border-white/40 md:border-white/20 group min-h-[44px] min-w-[44px] ${
                  playingVideo !== null ? 'opacity-40 md:opacity-30 hover:opacity-100' : 'opacity-100'
                }`}
                aria-label="Siguiente video"
               >
                <ChevronRight className="w-7 h-7 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
               </button>
            </div>
          </motion.div>

          {/* Horizontal Carousel Titles */}
          <motion.div
            className="relative"
          >
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-700 ease-out"
                animate={{ x: `${-currentVideo * 100}%` }}
              >
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="w-full flex-shrink-0 px-8"
                  >
                           <motion.div 
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-center space-y-4"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg md:text-lg font-light max-w-xl mx-auto px-4">
                        {video.description}
                      </p>
                      {/* Awards/Badges */}
                      {video.id === 1 && (
                        <div className="flex items-center justify-center gap-4 mt-4">
                          <img
                            src="/fotos/etoile-michelin-155x169.webp"
                            alt="1 Estrella Michelin"
                            title="1 Estrella Michelin - Reconocimiento de excelencia gastronómica"
                            width="155"
                            height="169"
                            className="h-12 w-auto object-contain cursor-help"
                            loading="lazy"
                          />
                          <img
                            src="/fotos/icon-rp-sol-2.webp"
                            alt="2 Soles Repsol"
                            title="2 Soles Repsol - Máximo reconocimiento de la Guía Repsol"
                            width="155"
                            height="169"
                            className="h-12 w-auto object-contain cursor-help"
                            loading="lazy"
                          />
                        </div>
                      )}
                      {video.id === 2 && (
                        <div className="flex items-center justify-center gap-4 mt-4">
                          <img
                            src="/fotos/icon-rp-sol-1.webp"
                            alt="1 Sol Repsol"
                            title="1 Sol Repsol - Reconocimiento de la Guía Repsol"
                            width="155"
                            height="169"
                            className="h-12 w-auto object-contain cursor-help"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </motion.div>
                  </div>
                             ))}
                           </motion.div>
               </div>
               
            {/* Modern Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {videos.map((_, index) => (
                   <button
                     key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`rounded-full transition-all duration-300 group ${
                    index === currentVideo 
                      ? 'w-8 h-2 bg-white shadow-lg' 
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70 hover:scale-125'
                     }`}
                  aria-label={`Ir al video ${index + 1}`}
                   />
                 ))}
               </div>
          </motion.div>
          </div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <a 
            href="https://www.instagram.com/yourwebs/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-3 border border-white/20 text-white px-8 py-4 rounded-full font-light text-lg hover:border-white/40 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out"></div>
            
            <span className="relative z-10">Explorar todos los proyectos</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </a>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default VideoShowcase;
