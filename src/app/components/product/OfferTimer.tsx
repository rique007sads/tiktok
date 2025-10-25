
'use client';

import { useState, useEffect } from 'react';

interface OfferTimerProps {
  timeString: string;
}

export function OfferTimer({ timeString }: OfferTimerProps) {
  const parseTimeString = (time: string) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const [remainingTime, setRemainingTime] = useState(() => parseTimeString(timeString));

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const formatTime = (totalSeconds: number) => {
    if (totalSeconds <= 0) return '00:00:00';
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return <span className="font-mono font-semibold">{formatTime(remainingTime)}</span>;
}
