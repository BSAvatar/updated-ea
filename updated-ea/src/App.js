import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import RunningExercise from './components/RunningExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: 'Push Ups', type: 'repetition' },
    { name: 'Jogging', type: 'duration' },
    { name: 'Sit Ups', type: 'repetition' },
    { name: 'Swimming', type: 'duration' },
    { name: 'Running', type: 'running' }
  ];

  // Render the appropriate exercise component based on the exercise type
  const renderExerciseScreen = () => {
    if (!selectedExercise) return null;
    if (selectedExercise.type === 'repetition') {
      return <RepetitionExercise name={selectedExercise.name} />;
    }
    if (selectedExercise.type === 'duration') {
      return <DurationExercise name={selectedExercise.name} />;
    }
    if (selectedExercise.type === 'running') {
      return <RunningExercise name={selectedExercise.name} />;
    }
    return null;
  };

  return (
    <div>
      {selectedExercise ? (
        <div>
          <button onClick={() => setSelectedExercise(null)}>
            Back to Menu
          </button>
          {renderExerciseScreen()}
        </div>
      ) : (
        <div>
          <h1>Select an Exercise</h1>
          {exercises.map((ex, index) => (
            <button key={index} onClick={() => setSelectedExercise(ex)}>
              {ex.name} ({ex.type})
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
