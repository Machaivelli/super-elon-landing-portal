import { useEffect, useRef } from 'react';

export const FloatingDecorations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const decorImages = [
      '/lovable-uploads/ce08a1af-6701-484f-bb2a-d03f8b2115fd.png',
      '/lovable-uploads/f1eec065-7456-4d86-8ae2-349f57fdb23d.png',
      '/lovable-uploads/da5f9243-b30b-49f0-bff2-c03a3f58edf0.png'
    ];

    const createFloatingDecor = () => {
      const decor = document.createElement('img');
      decor.className = 'floating-decor';
      decor.src = decorImages[Math.floor(Math.random() * decorImages.length)];
      decor.style.left = `${Math.random() * 100}vw`;
      decor.style.animationDuration = `${Math.random() * 5 + 10}s`;
      container.appendChild(decor);

      setTimeout(() => {
        decor.remove();
      }, 15000);
    };

    // Create floating decorations
    const decorInterval = setInterval(createFloatingDecor, 2000);

    return () => {
      clearInterval(decorInterval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};