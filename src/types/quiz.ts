export type TestType = 'iq' | 'personality' | 'love';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number; // in seconds
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  startTime: number;
  endTime?: number;
  score: number; // For IQ: correct count; For Personality: cumulative points
  iqScore: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  iqScore: number;
  timeTaken: number;
  accuracy: number;
  level: string;
}