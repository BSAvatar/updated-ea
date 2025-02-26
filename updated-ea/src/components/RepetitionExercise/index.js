import React, { useState } from 'react';

const RepetitionExercise = ({ name }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Repetitions: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default RepetitionExercise;
