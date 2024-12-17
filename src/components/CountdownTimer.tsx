import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("December 20, 2024 20:00:00 GMT+0100").getTime();

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
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-black/30 backdrop-blur-lg rounded-xl p-8 shadow-[0_0_20px_rgba(0,243,255,0.3)] animate-pulse-glow">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange bg-clip-text text-transparent">
          Phase 2 Begins In
        </h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-neon-blue">
                {value.toString().padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base text-gray-400 capitalize">
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