import { useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
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

    // Create rockets
    const createRocket = () => {
      const rocketDiv = document.createElement('div');
      rocketDiv.className = 'rocket';
      rocketDiv.style.left = `${Math.random() * 100}vw`;
      rocketDiv.style.animationDuration = `${Math.random() * 4 + 3}s`;
      
      const rocketSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      rocketSvg.setAttribute("viewBox", "0 0 24 24");
      rocketSvg.innerHTML = `<path d="M12 2L8 6H11V13H13V6H16L12 2Z" fill="currentColor"/>`;
      
      rocketDiv.appendChild(rocketSvg);
      container.appendChild(rocketDiv);

      setTimeout(() => {
        rocketDiv.remove();
      }, 7000);
    };

    // Initialize animations
    const starInterval = setInterval(createStar, 200);
    const rocketInterval = setInterval(createRocket, 2000);

    return () => {
      clearInterval(starInterval);
      clearInterval(rocketInterval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};