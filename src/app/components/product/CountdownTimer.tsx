'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  timeString: string;
}

export function CountdownTimer({ timeString }: CountdownTimerProps) {
  const parseTime = (time: string) => {
    const parts = time.split(':').map(Number);
    if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
      return 0;
    }
    return parts[0] * 60 + parts[1];
  };

  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    setRemainingSeconds(parseTime(timeString));
  }, [timeString]);

  useEffect(() => {
    if (remainingSeconds <= 0) return;

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingSeconds]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-lg font-bold font-mono bg-primary text-primary-foreground rounded-md px-3 py-1">
      {formatTime(remainingSeconds)}
    </div>
  );
}
