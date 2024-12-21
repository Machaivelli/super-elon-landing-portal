import React from 'react';

export const SplineBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern animate-gradient-flow">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[100px]"></div>
      </div>
      {/* Animated stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 7}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      {/* Animated rockets */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="rocket absolute"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 10}s`
          }}
        >
          🚀
        </div>
      ))}
    </div>
  );
};