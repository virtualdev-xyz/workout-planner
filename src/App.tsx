import React, { useState } from 'react';
import './App.css';
import DailyDashboard from './components/DailyDashboard';
import ShoppingList from './components/ShoppingList';
import { DailyPlan, ShoppingItem } from './types/MealPlan';
import { defaultMealPlan } from './data/mealPlanData';
import { workoutPlans, weeklyWorkoutSchedule } from './data/workoutData';
import { generateWeeklyShoppingList } from './utils/shoppingListGenerator';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'shopping'>('dashboard');
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>(generateWeeklyShoppingList());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const selectedDateString = selectedDate.toISOString().split('T')[0];
  const selectedDay = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
  
  const selectedSchedule = weeklyWorkoutSchedule.find(s => s.day === selectedDay);
  const selectedWorkout = selectedSchedule?.workoutId ? workoutPlans.find(w => w.id === selectedSchedule.workoutId) : undefined;

  const selectedPlan: DailyPlan = {
    date: selectedDateString,
    meals: defaultMealPlan,
    workout: selectedWorkout
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    setSelectedDate(newDate);
  };

  const handleShoppingItemUpdate = (id: string, bought: boolean) => {
    setShoppingItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, bought } : item
      )
    );
  };

  return (
    <div className="App">
      <nav className="app-nav">
        <h1>🏋️ Workout Planner</h1>
        <div className="nav-buttons">
          <button 
            className={currentView === 'dashboard' ? 'active' : ''}
            onClick={() => setCurrentView('dashboard')}
          >
            Daily Plan
          </button>
          <button 
            className={currentView === 'shopping' ? 'active' : ''}
            onClick={() => setCurrentView('shopping')}
          >
            Shopping List
          </button>
        </div>
      </nav>

      {currentView === 'dashboard' && (
        <div className="date-navigation">
          <button 
            className="nav-btn prev"
            onClick={() => navigateDate('prev')}
            title="Previous day"
          >
            ← Previous
          </button>
          <h2 className="current-date">
            {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h2>
          <button 
            className="nav-btn next"
            onClick={() => navigateDate('next')}
            title="Next day"
          >
            Next →
          </button>
        </div>
      )}

      <main className="app-main">
        {currentView === 'dashboard' ? (
          <DailyDashboard plan={selectedPlan} />
        ) : (
          <ShoppingList 
            items={shoppingItems}
            onUpdateItem={handleShoppingItemUpdate}
          />
        )}
      </main>
    </div>
  );
}

export default App;
