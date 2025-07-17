import React from 'react';
import { Meal } from '../types/MealPlan';

interface MealPlanCardProps {
  mealName: string;
  meal: Meal;
  time?: string;
}

const MealPlanCard: React.FC<MealPlanCardProps> = ({ mealName, meal, time }) => {
  return (
    <div className="meal-card">
      <div className="meal-header">
        <h3>{mealName}</h3>
        {time && <span className="meal-time">{time}</span>}
      </div>
      
      <div className="meal-content">
        <div className="macros">
          {meal.starch && (
            <div className="macro-item">
              <span className="macro-label">Starch:</span>
              <span className="macro-value">{meal.starch}g</span>
            </div>
          )}
          {meal.protein && (
            <div className="macro-item">
              <span className="macro-label">Protein:</span>
              <span className="macro-value">{meal.protein}g</span>
            </div>
          )}
          {meal.fat && (
            <div className="macro-item">
              <span className="macro-label">Fat:</span>
              <span className="macro-value">{meal.fat}g</span>
            </div>
          )}
          {meal.vegetables && (
            <div className="macro-item">
              <span className="macro-label">Vegetables:</span>
              <span className="macro-value">{meal.vegetables}g</span>
            </div>
          )}
        </div>
        
        {meal.specificItems && (
          <div className="food-items">
            <h4>Food Options:</h4>
            <ul>
              {meal.specificItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealPlanCard;