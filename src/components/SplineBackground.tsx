import React from 'react';

export const SplineBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <iframe 
        src='https://my.spline.design/rocket-07177cc99841504934e7c640f257a32e/' 
        className="w-full h-full"
        style={{ 
          border: 'none',
          background: 'transparent',
          pointerEvents: 'none',
          position: 'relative',
          zIndex: -1,
          overflow: 'hidden'
        }}
        title="Rocket 3D Animation"
        loading="lazy"
      />
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50px',
          background: '#000',
          zIndex: 1
        }}
      />
    </div>
  );
};