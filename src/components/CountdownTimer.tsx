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
      <div className="rounded-xl p-8 bg-black/40 backdrop-blur-sm animate-float shadow-2xl border border-white/5">
        <div className="grid grid-cols-4 gap-8 text-center mb-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col">
              <span className="text-5xl md:text-7xl font-bold text-white animate-pulse-glow">
                {value.toString().padStart(2, '0')}
              </span>
              <span className="text-lg md:text-2xl text-gray-400 capitalize mt-2 font-['Orbitron']">
                {unit}
              </span>
            </div>
          ))}
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mt-6 text-white font-['Orbitron'] animate-pulse-glow">
          Phase 2 Begins In
        </h3>
      </div>
    </div>
  );
};

export default CountdownTimer;