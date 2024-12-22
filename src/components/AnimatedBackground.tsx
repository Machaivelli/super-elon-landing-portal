import { useEffect, useRef } from 'react';

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

    // Create small background rockets
    const createSmallRocket = () => {
      const rocketDiv = document.createElement('div');
      rocketDiv.className = 'small-rocket flex items-center justify-center';
      // Random position across the entire width
      rocketDiv.style.left = `${Math.random() * 100}vw`;
      rocketDiv.style.animationDuration = `${Math.random() * 4 + 3}s`;
      
      const rocketIcon = document.createElement('div');
      rocketIcon.innerHTML = '🚀';
      rocketIcon.style.fontSize = '16px';
      rocketIcon.style.transform = 'rotate(-45deg)';
      
      rocketDiv.appendChild(rocketIcon);
      container.appendChild(rocketDiv);

      setTimeout(() => {
        rocketDiv.remove();
      }, 7000);
    };

    // Create the large centered rocket
    const createLargeRocket = () => {
      const largeRocketDiv = document.createElement('div');
      largeRocketDiv.className = 'large-rocket flex items-center justify-center';
      largeRocketDiv.style.left = '50%';
      largeRocketDiv.style.transform = 'translateX(-50%)';
      
      const largeRocketIcon = document.createElement('div');
      largeRocketIcon.innerHTML = '🚀';
      largeRocketIcon.style.fontSize = '48px';
      largeRocketIcon.style.transform = 'rotate(-45deg)';
      
      largeRocketDiv.appendChild(largeRocketIcon);
      container.appendChild(largeRocketDiv);

      setTimeout(() => {
        largeRocketDiv.remove();
      }, 10000);
    };

    // Initialize animations
    const starInterval = setInterval(createStar, 200);
    const smallRocketInterval = setInterval(createSmallRocket, 3000);
    const largeRocketInterval = setInterval(createLargeRocket, 10000);

    return () => {
      clearInterval(starInterval);
      clearInterval(smallRocketInterval);
      clearInterval(largeRocketInterval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};