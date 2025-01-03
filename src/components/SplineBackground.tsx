import React from 'react';

export const SplineBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none flex items-center justify-center overflow-hidden">
      <iframe 
        src="https://my.spline.design/rocket-07177cc99841504934e7c640f257a32e/"
        className="w-full h-full scale-[1.25] translate-y-[-10%] md:scale-150 lg:scale-[1.75]"
        style={{ 
          border: 'none',
          background: 'transparent',
          pointerEvents: 'none',
          position: 'relative',
          zIndex: -1,
          overflow: 'hidden',
          clipPath: 'inset(0 0 60px 0)',
          transform: 'translate3d(0, -10%, 0) scale(1.25)',
        }}
        title="Rocket 3D Animation"
        loading="lazy"
        allow="autoplay"
      />
    </div>
  );
};