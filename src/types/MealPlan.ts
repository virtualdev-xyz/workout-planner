export interface MealPlan {
  morning: Meal;
  midMorning: Meal;
  lunch: Meal;
  preWorkout: Meal;
  dinner: Meal;
  supplements: Supplement[];
}

export interface Meal {
  starch?: number; // grams
  protein?: number; // grams
  fat?: number; // grams
  vegetables?: number; // grams
  specificItems?: string[];
}

export interface Supplement {
  name: string;
  amount: string;
  timing: string;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  exercises: Exercise[];
  duration: number; // minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number | string;
  weight?: number;
  duration?: number; // for cardio
  restTime: number; // seconds
  instructions?: string;
}

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: 'protein' | 'starch' | 'vegetables' | 'fat' | 'supplements' | 'other';
  bought: boolean;
}

export interface DailyPlan {
  date: string;
  meals: MealPlan;
  workout?: WorkoutPlan;
  notes?: string;
}