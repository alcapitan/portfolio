import React from 'react';

export default function LavaBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-base-300 text-base-content">
      {/* Conteneur des lueurs d'arrière-plan */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* 1. Haut Gauche - Primary */}
        <div className="absolute -top-24 -left-20 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[120px] will-change-transform animate-blob-1" />

        {/* 2. Bas Droite - Secondary */}
        <div className="absolute -bottom-28 -right-24 h-[550px] w-[550px] rounded-full bg-secondary/20 blur-[130px] will-change-transform animate-blob-2" />

        {/* 3. Centre Haut - Accent */}
        <div className="absolute top-1/4 left-1/2 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] will-change-transform animate-blob-3" />

        {/* 4. Milieu Gauche - Info */}
        <div className="absolute top-1/2 -left-28 h-[460px] w-[460px] rounded-full bg-info/20 blur-[130px] will-change-transform animate-blob-4" />

        {/* 5. Haut Droite - Warning */}
        <div className="absolute -top-20 right-10 h-[480px] w-[480px] rounded-full bg-warning/15 blur-[140px] will-change-transform animate-blob-5" />

        {/* 6. Centre Bas - Primary */}
        <div className="absolute bottom-1/4 left-1/2 h-[440px] w-[440px] rounded-full bg-primary/20 blur-[120px] will-change-transform animate-blob-6" />

        {/* Léger voile pour uniformiser */}
        <div className="absolute inset-0 bg-base-300/30 backdrop-blur-[1px]" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-[1126px] max-w-full">
        {children}
      </div>
    </div>
  );
}