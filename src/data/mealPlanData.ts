import { MealPlan, Supplement } from '../types/MealPlan';

export const dailySupplements: Supplement[] = [
  {
    name: 'Lemon juice',
    amount: '50ml',
    timing: 'Split after meals daily (not on empty stomach)'
  },
  {
    name: 'Kefir yogurt',
    amount: '150ml',
    timing: 'Before or after meals daily'
  },
  {
    name: 'Fermented kimchi',
    amount: '50g',
    timing: 'Daily'
  }
];

export const defaultMealPlan: MealPlan = {
  morning: {
    starch: 70,
    protein: 150,
    vegetables: 150,
    specificItems: ['rice/noodles/pho', 'beef/fish/shrimp/squid/chicken', 'leafy greens/bok choy/mixed vegetables']
  },
  midMorning: {
    protein: 100,
    fat: 30,
    vegetables: 150,
    specificItems: ['beef/fish/shrimp/squid/chicken', 'peanuts/cashews (unsalted)', 'leafy greens/bok choy/mixed vegetables']
  },
  lunch: {
    starch: 70,
    protein: 100,
    vegetables: 150,
    specificItems: ['rice/noodles/pho', '100g salmon (required)', 'leafy greens/bok choy/mixed vegetables']
  },
  preWorkout: {
    starch: 100,
    protein: 100,
    vegetables: 150,
    specificItems: ['sweet potato (required)', 'chicken breast or 7 egg whites (required)', 'leafy greens/bok choy/mixed vegetables']
  },
  dinner: {
    starch: 100,
    protein: 100,
    vegetables: 150,
    specificItems: ['sweet potato or 30g oats', 'chicken breast or 7 egg whites (required)', 'leafy greens/bok choy/mixed vegetables']
  },
  supplements: dailySupplements
};

export const foodConversions = {
  rice: {
    toSweetPotato: 1.55,
    name: 'Rice'
  },
  oats: {
    toRice: 2.1,
    toSweetPotato: 3.3,
    name: 'Oats'
  },
  bread: {
    toRice: 1.8,
    name: 'Bread'
  },
  wheyProtein: {
    toMeat: 1,
    name: 'Whey Protein (1 serving = 100g meat)'
  },
  eggWhites: {
    toMeat: 0.5,
    name: 'Egg whites (7 whites = 100g meat)'
  }
};

export const seasoningLimits = {
  total: '3 teaspoons per day',
  options: ['fish sauce', 'salt', 'seasoning powder', 'MSG', 'chili sauce'],
  saltLimit: '0.5 teaspoon (if using salt, no other seasonings)',
  notes: 'Reduce seasoning by half for better results'
};

export const guidelines = [
  'Eat exact portions - no more, no less',
  'Eat every 2 hours on average',
  'Weigh raw meat, cooked starches/fats, raw vegetables',
  'Drink 4-6 liters of water daily',
  'Weekly cheat meal: 300-400g carbs + 300-400g protein',
  'Weekly ice bath or sauna (15-20 minutes)',
  'Weekly massage/muscle therapy recommended'
];