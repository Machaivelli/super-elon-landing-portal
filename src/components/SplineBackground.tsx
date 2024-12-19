import React from 'react';

export const SplineBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <iframe 
        src='https://my.spline.design/cubic-76ef6408f55630487e0b06633beb4c89/' 
        className="w-full h-full"
        style={{ border: 'none' }}
        title="Cubic 3D Animation"
        loading="lazy"
      />
    </div>
  );
};