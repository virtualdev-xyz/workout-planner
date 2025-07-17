import { ShoppingItem } from '../types/MealPlan';

export const generateWeeklyShoppingList = (): ShoppingItem[] => {
  const baseItems: Omit<ShoppingItem, 'id' | 'bought'>[] = [
    // Proteins
    { name: 'Chicken breast', quantity: 2, unit: 'kg', category: 'protein' },
    { name: 'Salmon fillet', quantity: 700, unit: 'g', category: 'protein' },
    { name: 'Eggs (large)', quantity: 24, unit: 'pieces', category: 'protein' },
    { name: 'Beef/other protein', quantity: 1, unit: 'kg', category: 'protein' },
    
    // Starches
    { name: 'Sweet potatoes', quantity: 3, unit: 'kg', category: 'starch' },
    { name: 'Rice', quantity: 2, unit: 'kg', category: 'starch' },
    { name: 'Oats', quantity: 500, unit: 'g', category: 'starch' },
    { name: 'Rice noodles/Pho noodles', quantity: 1, unit: 'package', category: 'starch' },
    
    // Vegetables
    { name: 'Leafy greens (bok choy, spinach)', quantity: 2, unit: 'kg', category: 'vegetables' },
    { name: 'Mixed vegetables', quantity: 1.5, unit: 'kg', category: 'vegetables' },
    { name: 'Broccoli', quantity: 500, unit: 'g', category: 'vegetables' },
    { name: 'Bell peppers', quantity: 6, unit: 'pieces', category: 'vegetables' },
    
    // Fats
    { name: 'Unsalted peanuts', quantity: 300, unit: 'g', category: 'fat' },
    { name: 'Unsalted cashews', quantity: 200, unit: 'g', category: 'fat' },
    { name: 'Olive oil', quantity: 1, unit: 'bottle', category: 'fat' },
    
    // Supplements
    { name: 'Fresh lemons', quantity: 10, unit: 'pieces', category: 'supplements' },
    { name: 'Kefir yogurt', quantity: 1, unit: 'liter', category: 'supplements' },
    { name: 'Fermented kimchi', quantity: 1, unit: 'jar', category: 'supplements' },
    
    // Other essentials
    { name: 'Fish sauce', quantity: 1, unit: 'bottle', category: 'other' },
    { name: 'Sea salt', quantity: 1, unit: 'container', category: 'other' },
    { name: 'Garlic', quantity: 1, unit: 'head', category: 'other' },
    { name: 'Ginger', quantity: 200, unit: 'g', category: 'other' },
    { name: 'Chili peppers', quantity: 100, unit: 'g', category: 'other' },
    { name: 'Green onions', quantity: 1, unit: 'bunch', category: 'other' }
  ];

  return baseItems.map((item, index) => ({
    ...item,
    id: `item-${index + 1}`,
    bought: false
  }));
};

export const calculateMealPrepQuantities = (servings: number = 7) => {
  const dailyProtein = 450; // Total protein per day in grams
  const dailyStarch = 240; // Total starch per day in grams
  const dailyVegetables = 750; // Total vegetables per day in grams
  const dailyFat = 30; // Total fat per day in grams

  return {
    weeklyProtein: dailyProtein * servings,
    weeklyStarch: dailyStarch * servings,
    weeklyVegetables: dailyVegetables * servings,
    weeklyFat: dailyFat * servings,
    servings
  };
};