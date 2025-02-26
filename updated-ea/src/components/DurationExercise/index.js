import React, { useState, useEffect } from 'react';

const DurationExercise = ({ name }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopResetTimer = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Time: {formatTime(time)}</p>
      {!running ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={stopResetTimer}>
          Stop &amp; Reset
        </button>
      )}
    </div>
  );
};

export default DurationExercise;
