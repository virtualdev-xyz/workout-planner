import React from 'react';
import { WorkoutPlan } from '../types/MealPlan';

interface WorkoutCardProps {
  workout: WorkoutPlan;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  return (
    <div className="workout-card">
      <div className="workout-header">
        <h3>{workout.name}</h3>
        <div className="workout-meta">
          <span className="duration">{workout.duration} min</span>
          <span className={`difficulty ${workout.difficulty}`}>
            {workout.difficulty}
          </span>
        </div>
      </div>
      
      <div className="exercises">
        {workout.exercises.map((exercise, index) => (
          <div key={exercise.id} className="exercise-item">
            <div className="exercise-header">
              <span className="exercise-number">{index + 1}.</span>
              <span className="exercise-name">{exercise.name}</span>
            </div>
            <div className="exercise-details">
              <span className="sets-reps">
                {exercise.sets} sets × {exercise.reps} reps
              </span>
              <span className="rest-time">
                Rest: {exercise.restTime}s
              </span>
            </div>
            {exercise.instructions && (
              <div className="exercise-instructions">
                <small>{exercise.instructions}</small>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCard;