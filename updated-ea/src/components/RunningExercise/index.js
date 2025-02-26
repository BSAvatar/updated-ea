import React, { useState, useEffect } from 'react';

const RunningExercise = ({ name }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

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
  }, [running]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps(prevLaps => [...prevLaps, time]);
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
        <button onClick={stopTimer}>Stop</button>
      )}
      <button onClick={recordLap}>Record Lap</button>
      <button onClick={resetTimer}>Reset</button>
      <div>
        <h2>Laps</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningExercise;
