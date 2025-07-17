import React from 'react';
import { DailyPlan } from '../types/MealPlan';
import { workoutPlans } from '../data/workoutData';
import MealPlanCard from './MealPlanCard';
import WorkoutCard from './WorkoutCard';

interface DailyDashboardProps {
  plan: DailyPlan;
}

const DailyDashboard: React.FC<DailyDashboardProps> = ({ plan }) => {
  const todayWorkout = plan.workout ? workoutPlans.find(w => w.id === plan.workout?.id) : null;
  
  const mealTimes = {
    morning: '7:00 AM',
    midMorning: '9:30 AM',
    lunch: '12:00 PM',
    preWorkout: '4:00 PM',
    dinner: '7:00 PM'
  };

  return (
    <div className="daily-dashboard">
      <div className="dashboard-header">
        <h1>Today's Plan</h1>
        <p className="date">{new Date(plan.date).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>

      <div className="dashboard-content">
        <div className="meals-section">
          <h2>Meals</h2>
          <div className="meals-grid">
            <MealPlanCard 
              mealName="Morning" 
              meal={plan.meals.morning} 
              time={mealTimes.morning}
            />
            <MealPlanCard 
              mealName="Mid-Morning" 
              meal={plan.meals.midMorning} 
              time={mealTimes.midMorning}
            />
            <MealPlanCard 
              mealName="Lunch" 
              meal={plan.meals.lunch} 
              time={mealTimes.lunch}
            />
            <MealPlanCard 
              mealName="Pre-Workout" 
              meal={plan.meals.preWorkout} 
              time={mealTimes.preWorkout}
            />
            <MealPlanCard 
              mealName="Dinner" 
              meal={plan.meals.dinner} 
              time={mealTimes.dinner}
            />
          </div>
        </div>

        <div className="supplements-section">
          <h2>Daily Supplements</h2>
          <div className="supplements-list">
            {plan.meals.supplements.map((supplement, index) => (
              <div key={index} className="supplement-item">
                <h4>{supplement.name}</h4>
                <p><strong>Amount:</strong> {supplement.amount}</p>
                <p><strong>Timing:</strong> {supplement.timing}</p>
              </div>
            ))}
          </div>
        </div>

        {todayWorkout && (
          <div className="workout-section">
            <h2>Today's Workout</h2>
            <WorkoutCard workout={todayWorkout} />
          </div>
        )}

        <div className="guidelines-section">
          <h2>Daily Reminders</h2>
          <ul className="guidelines-list">
            <li>Drink 4-6 liters of water throughout the day</li>
            <li>Eat slowly and chew thoroughly</li>
            <li>Rest and think after eating</li>
            <li>Weigh ingredients: raw meat, cooked starches, raw vegetables</li>
            <li>Take progress photos weekly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DailyDashboard;