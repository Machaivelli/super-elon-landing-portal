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
      <div className="rounded-xl p-8 bg-[#1A1F2C]/80 backdrop-blur-sm animate-float">
        <div className="grid grid-cols-4 gap-6 text-center mb-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col">
              <span className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-neon-blue to-neon-purple bg-clip-text text-transparent animate-pulse-glow">
                {value.toString().padStart(2, '0')}
              </span>
              <span className="text-base md:text-xl text-gray-400 capitalize mt-2">
                {unit}
              </span>
            </div>
          ))}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mt-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange bg-clip-text text-transparent animate-pulse-glow">
          Phase 2 Begins In
        </h3>
      </div>
    </div>
  );
};

export default CountdownTimer;