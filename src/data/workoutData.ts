import { WorkoutPlan } from '../types/MealPlan';

export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'upper-body-1',
    name: 'Upper Body Strength',
    duration: 60,
    difficulty: 'intermediate',
    exercises: [
      {
        id: 'bench-press',
        name: 'Bench Press',
        sets: 4,
        reps: '8-10',
        restTime: 120,
        instructions: 'Control the weight, full range of motion'
      },
      {
        id: 'lat-pulldown',
        name: 'Lat Pulldown',
        sets: 4,
        reps: '10-12',
        restTime: 90,
        instructions: 'Pull to chest, squeeze shoulder blades'
      },
      {
        id: 'shoulder-press',
        name: 'Shoulder Press',
        sets: 3,
        reps: '10-12',
        restTime: 90,
        instructions: 'Press overhead, keep core tight'
      },
      {
        id: 'dumbbell-rows',
        name: 'Dumbbell Rows',
        sets: 3,
        reps: '12-15',
        restTime: 60,
        instructions: 'Pull elbow back, squeeze back muscles'
      },
      {
        id: 'tricep-dips',
        name: 'Tricep Dips',
        sets: 3,
        reps: '10-15',
        restTime: 60,
        instructions: 'Lower body, push up with triceps'
      }
    ]
  },
  {
    id: 'lower-body-1',
    name: 'Lower Body Power',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      {
        id: 'squats',
        name: 'Squats',
        sets: 4,
        reps: '12-15',
        restTime: 120,
        instructions: 'Go down to 90 degrees, push through heels'
      },
      {
        id: 'deadlifts',
        name: 'Romanian Deadlifts',
        sets: 4,
        reps: '10-12',
        restTime: 120,
        instructions: 'Keep back straight, hinge at hips'
      },
      {
        id: 'lunges',
        name: 'Walking Lunges',
        sets: 3,
        reps: '12 each leg',
        restTime: 90,
        instructions: 'Step forward, lower back knee to ground'
      },
      {
        id: 'leg-press',
        name: 'Leg Press',
        sets: 3,
        reps: '15-20',
        restTime: 90,
        instructions: 'Full range of motion, controlled movement'
      },
      {
        id: 'calf-raises',
        name: 'Calf Raises',
        sets: 4,
        reps: '20-25',
        restTime: 45,
        instructions: 'Rise up on toes, hold briefly'
      }
    ]
  },
  {
    id: 'cardio-hiit',
    name: 'HIIT Cardio',
    duration: 30,
    difficulty: 'beginner',
    exercises: [
      {
        id: 'jump-rope',
        name: 'Jump Rope',
        sets: 5,
        reps: '30 seconds',
        restTime: 30,
        instructions: 'Maintain steady rhythm'
      },
      {
        id: 'burpees',
        name: 'Burpees',
        sets: 4,
        reps: '10-15',
        restTime: 45,
        instructions: 'Jump down, push up, jump up'
      },
      {
        id: 'mountain-climbers',
        name: 'Mountain Climbers',
        sets: 4,
        reps: '30 seconds',
        restTime: 30,
        instructions: 'Alternate knees to chest quickly'
      },
      {
        id: 'high-knees',
        name: 'High Knees',
        sets: 4,
        reps: '30 seconds',
        restTime: 30,
        instructions: 'Run in place, bring knees up high'
      }
    ]
  },
  {
    id: 'full-body-1',
    name: 'Full Body Circuit',
    duration: 45,
    difficulty: 'beginner',
    exercises: [
      {
        id: 'push-ups',
        name: 'Push-ups',
        sets: 3,
        reps: '10-15',
        restTime: 60,
        instructions: 'Keep body straight, lower to chest'
      },
      {
        id: 'squats-bodyweight',
        name: 'Bodyweight Squats',
        sets: 3,
        reps: '15-20',
        restTime: 60,
        instructions: 'Sit back, keep chest up'
      },
      {
        id: 'plank',
        name: 'Plank',
        sets: 3,
        reps: '30-60 seconds',
        restTime: 60,
        instructions: 'Hold straight line from head to heels'
      },
      {
        id: 'jumping-jacks',
        name: 'Jumping Jacks',
        sets: 3,
        reps: '30 seconds',
        restTime: 60,
        instructions: 'Jump feet out while raising arms'
      },
      {
        id: 'sit-ups',
        name: 'Sit-ups',
        sets: 3,
        reps: '15-20',
        restTime: 60,
        instructions: 'Lift shoulders off ground, engage core'
      }
    ]
  }
];

export const weeklyWorkoutSchedule = [
  { day: 'Monday', workoutId: 'upper-body-1' },
  { day: 'Tuesday', workoutId: 'cardio-hiit' },
  { day: 'Wednesday', workoutId: 'lower-body-1' },
  { day: 'Thursday', workoutId: 'full-body-1' },
  { day: 'Friday', workoutId: 'upper-body-1' },
  { day: 'Saturday', workoutId: 'cardio-hiit' },
  { day: 'Sunday', workoutId: null } // Rest day
];