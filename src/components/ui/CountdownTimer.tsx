import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const getNextFridayMorning = () => {
    const target = new Date('2026-07-24T09:30:00');
    // Ensure if target has passed, compute next Friday 9:30 AM dynamically
    if (target.getTime() <= Date.now()) {
      const now = new Date();
      const dayOfWeek = now.getDay();
      let daysUntilFriday = (5 - dayOfWeek + 7) % 7;
      if (daysUntilFriday === 0 && (now.getHours() > 9 || (now.getHours() === 9 && now.getMinutes() >= 30))) {
        daysUntilFriday = 7;
      }
      target.setDate(now.getDate() + daysUntilFriday);
      target.setHours(9, 30, 0, 0);
    }
    return target;
  };

  const targetDate = getNextFridayMorning();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-4 md:gap-6 max-w-full overflow-x-auto px-1">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
      ].map((item, index) => (
        <React.Fragment key={item.label}>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 glass-card rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/60 shadow-lg ambient-glow">
              <span className="text-base sm:text-2xl md:text-3xl font-extrabold text-[#004ac6]">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-500 mt-1.5 uppercase tracking-wider">
              {item.label}
            </span>
          </div>
          {index < 3 && (
            <span className="text-lg sm:text-3xl md:text-4xl font-extrabold text-[#712ae2] mb-5 sm:mb-6 animate-pulse">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
