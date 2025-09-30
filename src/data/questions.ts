import { Question } from '@/types/quiz';

export const questions: Question[] = [
  // Easy Questions (IQ 80-100)
  {
    id: 1,
    question: "What comes next in the sequence: 2, 4, 6, 8, ?",
    options: ["9", "10", "12", "14"],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30
  },
  {
    id: 2,
    question: "Which word doesn't belong: Dog, Cat, Fish, Car",
    options: ["Dog", "Cat", "Fish", "Car"],
    correctAnswer: 3,
    difficulty: 'easy',
    timeLimit: 25
  },
  {
    id: 3,
    question: "If all roses are flowers and some flowers are red, then:",
    options: ["All roses are red", "Some roses might be red", "No roses are red", "All flowers are roses"],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 35
  },
  {
    id: 4,
    question: "Which number is the odd one out: 3, 5, 7, 9?",
    options: ["3", "5", "7", "9"],
    correctAnswer: 3,
    difficulty: 'easy',
    timeLimit: 25
  },
  {
    id: 5,
    question: "Which is heavier: 1kg of iron or 1kg of cotton?",
    options: ["Iron", "Cotton", "Both are same", "Cannot be compared"],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 20
  },
  {
    id: 6,
    question: "What comes next: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 30
  },
  {
    id: 7,
    question: "Which shape has three sides?",
    options: ["Triangle", "Square", "Circle", "Rectangle"],
    correctAnswer: 0,
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: 8,
    question: "If today is Monday, what day will it be after 3 days?",
    options: ["Thursday", "Friday", "Wednesday", "Sunday"],
    correctAnswer: 0,
    difficulty: 'easy',
    timeLimit: 25
  },

  // Medium Questions (IQ 100-120)
  {
    id: 9,
    question: "What number should replace the question mark: 3, 7, 15, 31, ?",
    options: ["47", "63", "55", "59"],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 45
  },
  {
    id: 10,
    question: "Mirror is to reflection as echo is to:",
    options: ["Sound", "Silence", "Music", "Noise"],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 40
  },
  {
    id: 11,
    question: "If CODE is written as DPEF, how is QUIZ written?",
    options: ["RVJA", "RVJB", "RVJZ", "QVJA"],
    correctAnswer: 2,
    difficulty: 'medium',
    timeLimit: 50
  },
  {
    id: 12,
    question: "What comes next: 2, 6, 12, 20, ?",
    options: ["28", "30", "32", "36"],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 40
  },
  {
    id: 13,
    question: "Find the missing letter: A, C, F, J, O, ?",
    options: ["S", "T", "U", "V"],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 50
  },
  {
    id: 14,
    question: "Which number is 25% of 200?",
    options: ["25", "50", "75", "100"],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 30
  },
  {
    id: 15,
    question: "Which pair is related: Bird → Nest, Dog → ?",
    options: ["Kennel", "Bone", "Leash", "Cage"],
    correctAnswer: 0,
    difficulty: 'medium',
    timeLimit: 40
  },
  {
    id: 16,
    question: "What is the next number in: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "30"],
    correctAnswer: 2,
    difficulty: 'medium',
    timeLimit: 45
  },
  {
    id: 17,
    question: "Which word can be formed from the letters: T, A, C?",
    options: ["Cat", "Act", "Tac", "All of these"],
    correctAnswer: 3,
    difficulty: 'medium',
    timeLimit: 35
  },

  // Hard Questions (IQ 120+)
  {
    id: 18,
    question: "What comes next: △□○△□?, ?, △□○",
    options: ["○△□", "□○△", "○", "△"],
    correctAnswer: 2,
    difficulty: 'hard',
    timeLimit: 60
  },
  {
    id: 19,
    question: "In a group of 100 people, 70 like coffee, 80 like tea. How many like both?",
    options: ["30", "50", "70", "Cannot determine"],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 75
  },
  {
    id: 20,
    question: "If you rearrange the letters 'CIFAIPC' you get the name of a:",
    options: ["Country", "Animal", "Ocean", "Planet"],
    correctAnswer: 2,
    difficulty: 'hard',
    timeLimit: 90
  },
  {
    id: 21,
    question: "What is the missing number in the pattern: 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "13", "15", "16"],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 60
  },
  {
    id: 22,
    question: "Find the odd one out: 2, 3, 5, 7, 11, 13, 15",
    options: ["11", "13", "15", "7"],
    correctAnswer: 2,
    difficulty: 'hard',
    timeLimit: 50
  },
  {
    id: 23,
    question: "If 5 machines make 5 items in 5 minutes, how long will 100 machines take to make 100 items?",
    options: ["5 minutes", "10 minutes", "50 minutes", "100 minutes"],
    correctAnswer: 0,
    difficulty: 'hard',
    timeLimit: 70
  },
  {
    id: 24,
    question: "What comes next: 2, 4, 12, 48, ?",
    options: ["96", "192", "240", "144"],
    correctAnswer: 1,
    difficulty: 'hard',
    timeLimit: 80
  },
  {
    id: 25,
    question: "Which figure logically completes the series: ▲, ▼, ▲, ▼, ?",
    options: ["▲", "▼", "○", "□"],
    correctAnswer: 0,
    difficulty: 'hard',
    timeLimit: 40
  }
];

export const calculateIQ = (correctAnswers: number, totalQuestions: number, averageTime: number): number => {
  // Base IQ calculation
  const accuracy = correctAnswers / totalQuestions;
  let baseIQ = 70 + (accuracy * 60); // Range from 70-130 based on accuracy
  
  // Time bonus/penalty (faster = higher IQ, with diminishing returns)
  const optimalTime = 45; // seconds per question
  const timeFactor = Math.max(0.8, Math.min(1.2, optimalTime / averageTime));
  
  // Apply time factor with diminishing returns
  baseIQ = baseIQ * (0.8 + 0.2 * timeFactor);
  
  // Round to nearest whole number and cap between 70-160
  return Math.round(Math.max(70, Math.min(160, baseIQ)));
};

export const getIQLevel = (iq: number): string => {
  if (iq >= 140) return "Genius";
  if (iq >= 130) return "Very Superior";
  if (iq >= 120) return "Superior";
  if (iq >= 110) return "High Average";
  if (iq >= 90) return "Average";
  if (iq >= 80) return "Low Average";
  return "Below Average";
};
