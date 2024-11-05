import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeUp }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [time, onTimeUp]);

  return (
    <div className="text-lg font-bold">
      Time Remaining: {time}s
    </div>
  );
};

export default Timer;
