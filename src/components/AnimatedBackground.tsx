import { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create fewer stars
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 5000);
    };

    // Create rockets less frequently
    const createRocket = () => {
      const rocketDiv = document.createElement('div');
      rocketDiv.className = 'rocket flex items-center justify-center';
      rocketDiv.style.left = `${Math.random() * 100}vw`;
      rocketDiv.style.animationDuration = `${Math.random() * 4 + 3}s`;
      
      const rocketIcon = document.createElement('div');
      rocketIcon.innerHTML = '🚀';
      rocketIcon.style.fontSize = '24px';
      rocketIcon.style.transform = 'rotate(-45deg)';
      
      rocketDiv.appendChild(rocketIcon);
      container.appendChild(rocketDiv);

      setTimeout(() => {
        rocketDiv.remove();
      }, 7000);
    };

    // Reduce animation frequency
    const starInterval = setInterval(createStar, 500); // Increased interval from 200ms to 500ms
    const rocketInterval = setInterval(createRocket, 4000); // Increased interval from 2000ms to 4000ms

    return () => {
      clearInterval(starInterval);
      clearInterval(rocketInterval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};