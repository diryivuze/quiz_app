// src/components/quiz/Timer.jsx
import React, { useEffect } from 'react';

export default function Timer({ initialTime, onTimeUp, setTimeRemaining }) {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(initialTime / 60);
  const seconds = initialTime % 60;

  return (
    <div className="text-lg font-semibold">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
}