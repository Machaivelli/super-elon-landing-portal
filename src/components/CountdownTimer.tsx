import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Add 31 days to the target date (26 previous + 5 new)
    const targetDate = new Date("January 20, 2025 20:00:00 GMT+0100").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8 w-full max-w-4xl mx-auto px-4">
      <div className="w-full rounded-xl p-8 md:p-12 bg-black/40 backdrop-blur-sm animate-float shadow-2xl border border-white/5">
        <h3 className="text-3xl md:text-5xl font-bold mb-8 text-white font-['Orbitron'] animate-pulse-glow">
          Phase 2 Begins In
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col space-y-4 p-4 rounded-lg bg-black/20">
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-pulse-glow">
                {value.toString().padStart(2, '0')}
              </span>
              <span className="text-base md:text-xl text-gray-300 capitalize font-['Orbitron']">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;