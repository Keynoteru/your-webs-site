'use client';

const FilmDivider = () => {
  return (
    <div className="relative h-32 bg-transparent overflow-hidden" style={{ zIndex: 10, marginTop: '-8rem' }}>
      {/* Overlay que se extiende desde el Hero hacia abajo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
      
      {/* Gradiente de transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default FilmDivider;
