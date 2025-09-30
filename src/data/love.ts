import { Question } from '@/types/quiz';

// First batch (1-40) provided by user
const loveProvided40: Question[] = [
  { id: 1, question: 'I feel most loved when my partner', options: ['hugs me', 'kisses me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 2, question: 'I feel most loved when my partner', options: ['holds my hand', 'puts an arm around me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 3, question: 'I feel most loved when my partner', options: ['smiles at me', 'laughs with me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 4, question: 'I feel most loved when my partner', options: ['calls me by a sweet name', 'says I love you'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 5, question: 'I feel most loved when my partner', options: ['sends me a sweet text', 'writes me a note'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 6, question: 'I feel most loved when my partner', options: ['listens carefully', 'remembers what I said'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 7, question: 'I feel most loved when my partner', options: ['makes me laugh', 'comforts me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 8, question: 'I feel most loved when my partner', options: ['brings me food', 'makes me a drink'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 9, question: 'I feel most loved when my partner', options: ['plans a date', 'surprises me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 10, question: 'I feel most loved when my partner', options: ['shares secrets with me', 'asks about mine'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },

  { id: 11, question: 'I feel most loved when my partner', options: ['sits close to me', 'leans on me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 12, question: 'I feel most loved when my partner', options: ['helps me with tasks', 'does something for me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 13, question: 'I feel most loved when my partner', options: ["tells me I'm handsome/beautiful", 'says I look nice'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 14, question: 'I feel most loved when my partner', options: ['winks at me', 'teases me playfully'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 15, question: 'I feel most loved when my partner', options: ['walks beside me', 'walks holding my hand'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 16, question: 'I feel most loved when my partner', options: ['touches my hair', 'touches my face'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 17, question: 'I feel most loved when my partner', options: ['makes me breakfast', 'makes me coffee'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 18, question: 'I feel most loved when my partner', options: ['notices my efforts', 'thanks me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 19, question: 'I feel most loved when my partner', options: ['gives me a gift', 'writes me a card'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 20, question: 'I feel most loved when my partner', options: ['sends me a song', 'shares a playlist'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },

  { id: 21, question: 'I feel most loved when my partner', options: ['sends me a good morning text', 'calls me at night'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 22, question: 'I feel most loved when my partner', options: ['asks about my day', 'shares about hers/his'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 23, question: 'I feel most loved when my partner', options: ['praises me in public', 'supports me in private'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 24, question: 'I feel most loved when my partner', options: ['sits quietly with me', 'talks openly with me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 25, question: 'I feel most loved when my partner', options: ['plays with my hair', 'touches my back'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 26, question: 'I feel most loved when my partner', options: ['makes eye contact', 'smiles warmly'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 27, question: 'I feel most loved when my partner', options: ["takes care of me when I'm sick", 'checks on me often'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 28, question: 'I feel most loved when my partner', options: ['gives me space', 'stays close'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 29, question: 'I feel most loved when my partner', options: ['plans a future with me', 'dreams with me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 30, question: 'I feel most loved when my partner', options: ['defends me', 'trusts me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },

  { id: 31, question: 'I feel most loved when my partner', options: ['takes photos with me', 'shares memories with me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 32, question: 'I feel most loved when my partner', options: ['gives me attention', 'gives me affection'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 33, question: 'I feel most loved when my partner', options: ['dances with me', 'sings with me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 34, question: 'I feel most loved when my partner', options: ['shares silence', 'shares laughter'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 35, question: 'I feel most loved when my partner', options: ['remembers my birthday', 'remembers our special days'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 36, question: 'I feel most loved when my partner', options: ['makes me feel safe', 'makes me feel valued'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 37, question: 'I feel most loved when my partner', options: ['walks with me in the rain', 'sits with me under the stars'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 38, question: 'I feel most loved when my partner', options: ['listens to my problems', 'gives me solutions'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 39, question: 'I feel most loved when my partner', options: ['texts me randomly', 'calls me randomly'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
  { id: 40, question: 'I feel most loved when my partner', options: ['shares her/his food', 'cooks for me'], correctAnswer: -1, difficulty: 'easy', timeLimit: 25 },
];

// Fill the remainder (41-120) with placeholders until provided
const placeholderRest: Question[] = Array.from({ length: 120 - loveProvided40.length }).map((_, i) => {
  const id = loveProvided40.length + i + 1;
  return {
    id,
    question: `Love preference question ${id}?`,
    options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
    correctAnswer: -1,
    difficulty: id <= 80 ? 'medium' : 'hard',
    timeLimit: id <= 80 ? 40 : 60,
  };
});

// Next batches (41–120) provided by user – exactly two options per question
const loveProvidedRestRaw = [
  { id: 41,  question: `I feel most loved when my partner`, options: [`kisses my forehead`, `kisses my cheek`] },
  { id: 42,  question: `I feel most loved when my partner`, options: [`sends me funny memes`, `shares jokes`] },
  { id: 43,  question: `I feel most loved when my partner`, options: [`helps me with work`, `motivates me to do better`] },
  { id: 44,  question: `I feel most loved when my partner`, options: [`apologizes first`, `forgives me easily`] },
  { id: 45,  question: `I feel most loved when my partner`, options: [`prays with me`, `supports my faith`] },
  { id: 46,  question: `I feel most loved when my partner`, options: [`notices my new haircut`, `compliments my style`] },
  { id: 47,  question: `I feel most loved when my partner`, options: [`stays up late with me`, `wakes up early with me`] },
  { id: 48,  question: `I feel most loved when my partner`, options: [`surprises me with snacks`, `buys me coffee`] },
  { id: 49,  question: `I feel most loved when my partner`, options: [`shares her/his fears`, `shares her/his dreams`] },
  { id: 50,  question: `I feel most loved when my partner`, options: [`lets me rest`, `takes care of chores for me`] },

  { id: 51,  question: `I feel most loved when my partner`, options: [`waits for me`, `understands my delays`] },
  { id: 52,  question: `I feel most loved when my partner`, options: [`sends me surprises`, `plans little adventures`] },
  { id: 53,  question: `I feel most loved when my partner`, options: [`makes me laugh at myself`, `makes me laugh at jokes`] },
  { id: 54,  question: `I feel most loved when my partner`, options: [`trusts my decisions`, `asks for my input`] },
  { id: 55,  question: `I feel most loved when my partner`, options: [`shares good news first with me`, `shares bad news first with me`] },
  { id: 56,  question: `I feel most loved when my partner`, options: [`treats me with kindness`, `treats others with kindness`] },
  { id: 57,  question: `I feel most loved when my partner`, options: [`keeps promises`, `makes new promises`] },
  { id: 58,  question: `I feel most loved when my partner`, options: [`shares inside jokes`, `shares deep talks`] },
  { id: 59,  question: `I feel most loved when my partner`, options: [`says she/he missed me`, `shows she/he missed me`] },
  { id: 60,  question: `I feel most loved when my partner`, options: [`lets me lead`, `leads confidently`] },

  { id: 61,  question: `I feel most loved when my partner`, options: [`sends selfies`, `asks for mine`] },
  { id: 62,  question: `I feel most loved when my partner`, options: [`reminds me to eat`, `brings me food`] },
  { id: 63,  question: `I feel most loved when my partner`, options: [`stays calm in fights`, `makes peace quickly`] },
  { id: 64,  question: `I feel most loved when my partner`, options: [`touches my hand`, `touches my back`] },
  { id: 65,  question: `I feel most loved when my partner`, options: [`saves memories of us`, `talks about our future`] },
  { id: 66,  question: `I feel most loved when my partner`, options: [`takes photos of me`, `takes photos with me`] },
  { id: 67,  question: `I feel most loved when my partner`, options: [`shares her/his playlist`, `asks about mine`] },
  { id: 68,  question: `I feel most loved when my partner`, options: [`laughs at my jokes`, `makes me laugh with jokes`] },
  { id: 69,  question: `I feel most loved when my partner`, options: [`invites me out`, `stays in with me`] },
  { id: 70,  question: `I feel most loved when my partner`, options: [`sits by me quietly`, `sings to me softly`] },

  { id: 71,  question: `I feel most loved when my partner`, options: [`remembers my favorites`, `learns new things with me`] },
  { id: 72,  question: `I feel most loved when my partner`, options: [`shares her/his happiness`, `shares her/his sadness`] },
  { id: 73,  question: `I feel most loved when my partner`, options: [`cooks with me`, `eats with me`] },
  { id: 74,  question: `I feel most loved when my partner`, options: [`teaches me something`, `learns from me`] },
  { id: 75,  question: `I feel most loved when my partner`, options: [`sings with me`, `dances with me`] },
  { id: 76,  question: `I feel most loved when my partner`, options: [`says I'm special`, `shows I'm special`] },
  { id: 77,  question: `I feel most loved when my partner`, options: [`shares funny stories`, `shares deep feelings`] },
  { id: 78,  question: `I feel most loved when my partner`, options: [`touches my face`, `touches my arm`] },
  { id: 79,  question: `I feel most loved when my partner`, options: [`waits up for me`, `wakes up early with me`] },
  { id: 80,  question: `I feel most loved when my partner`, options: [`sends me love emojis`, `sends me voice notes`] },

  { id: 81,  question: `I feel most loved when my partner`, options: [`sits on the couch with me`, `goes on walks with me`] },
  { id: 82,  question: `I feel most loved when my partner`, options: [`shares her/his dreams`, `asks about mine`] },
  { id: 83,  question: `I feel most loved when my partner`, options: [`kisses my lips`, `kisses my hand`] },
  { id: 84,  question: `I feel most loved when my partner`, options: [`asks my opinion`, `values my opinion`] },
  { id: 85,  question: `I feel most loved when my partner`, options: [`laughs at old memories`, `creates new memories`] },
  { id: 86,  question: `I feel most loved when my partner`, options: [`calls me by nickname`, `calls me sweetheart`] },
  { id: 87,  question: `I feel most loved when my partner`, options: [`takes care of me`, `lets me take care of her/him`] },
  { id: 88,  question: `I feel most loved when my partner`, options: [`shows me off`, `keeps me private`] },
  { id: 89,  question: `I feel most loved when my partner`, options: [`gives me attention in public`, `gives me attention in private`] },
  { id: 90,  question: `I feel most loved when my partner`, options: [`lets me rest on her/his shoulder`, `holds my waist`] },

  { id: 91,  question: `I feel most loved when my partner`, options: [`shares silly moments`, `shares serious talks`] },
  { id: 92,  question: `I feel most loved when my partner`, options: [`helps me relax`, `helps me focus`] },
  { id: 93,  question: `I feel most loved when my partner`, options: [`lets me choose`, `chooses for me`] },
  { id: 94,  question: `I feel most loved when my partner`, options: [`shows patience`, `shows excitement`] },
  { id: 95,  question: `I feel most loved when my partner`, options: [`supports my goals`, `shares my goals`] },
  { id: 96,  question: `I feel most loved when my partner`, options: [`sings me a song`, `writes me a poem`] },
  { id: 97,  question: `I feel most loved when my partner`, options: [`sends me flowers`, `gives me chocolate`] },
  { id: 98,  question: `I feel most loved when my partner`, options: [`says 'I'm proud of you'`, `says 'I'm lucky to have you'`] },
  { id: 99,  question: `I feel most loved when my partner`, options: [`walks in step with me`, `dances with me`] },
  { id: 100, question: `I feel most loved when my partner`, options: [`watches movies with me`, `watches series with me`] },

  { id: 101, question: `I feel most loved when my partner`, options: [`lets me vent`, `gives me advice`] },
  { id: 102, question: `I feel most loved when my partner`, options: [`touches my cheek`, `touches my back`] },
  { id: 103, question: `I feel most loved when my partner`, options: [`sends random gifts`, `sends random texts`] },
  { id: 104, question: `I feel most loved when my partner`, options: [`sings along with me`, `dances along with me`] },
  { id: 105, question: `I feel most loved when my partner`, options: [`shares silence`, `shares laughter`] },
  { id: 106, question: `I feel most loved when my partner`, options: [`takes my photo`, `smiles at me`] },
  { id: 107, question: `I feel most loved when my partner`, options: [`buys me something small`, `makes me something small`] },
  { id: 108, question: `I feel most loved when my partner`, options: [`touches my hand`, `touches my shoulder`] },
  { id: 109, question: `I feel most loved when my partner`, options: [`listens without judging`, `encourages me kindly`] },
  { id: 110, question: `I feel most loved when my partner`, options: [`lets me sleep`, `stays up with me`] },

  { id: 111, question: `I feel most loved when my partner`, options: [`shares her/his food`, `lets me eat first`] },
  { id: 112, question: `I feel most loved when my partner`, options: [`waits for me patiently`, `hurries to see me`] },
  { id: 113, question: `I feel most loved when my partner`, options: [`walks with me`, `runs with me`] },
  { id: 114, question: `I feel most loved when my partner`, options: [`sends me love notes`, `sends me love texts`] },
  { id: 115, question: `I feel most loved when my partner`, options: [`shares inside jokes`, `shares secret looks`] },
  { id: 116, question: `I feel most loved when my partner`, options: [`remembers my likes`, `remembers my dislikes`] },
  { id: 117, question: `I feel most loved when my partner`, options: [`touches my knee`, `touches my hair`] },
  { id: 118, question: `I feel most loved when my partner`, options: [`lets me speak`, `speaks for me when needed`] },
  { id: 119, question: `I feel most loved when my partner`, options: [`sits close on the couch`, `sleeps close at night`] },
  { id: 120, question: `I feel most loved when my partner`, options: [`kisses me softly`, `kisses me passionately`] },
];

const loveProvidedRest: Question[] = loveProvidedRestRaw.map(({ id, question, options }) => ({
  id,
  question,
  options,
  correctAnswer: -1,
  difficulty: id <= 80 ? 'medium' : 'hard',
  timeLimit: id <= 80 ? 40 : 60,
}));

export const loveQuestions: Question[] = [...loveProvided40, ...loveProvidedRest];

// Simple aggregate similar to personality (percent out of 100)
const OPTION_POINTS: Record<string, number> = {
  'strongly agree': 5,
  'agree': 4,
  'neutral': 3,
  'disagree': 2,
  'strongly disagree': 1,
};

export const scoreLoveAnswer = (question: Question, optionIndex: number): number => {
  const label = (question.options[optionIndex] || '').toLowerCase();
  if (label in OPTION_POINTS) return OPTION_POINTS[label];
  const count = question.options.length;
  const ratio = (count - optionIndex) / count;
  return Math.max(1, Math.min(5, Math.round(ratio * 5)));
};

export const aggregateLoveScore = (answers: number[], qs: Question[] = loveQuestions) => {
  let total = 0;
  let max = 0;
  for (let i = 0; i < answers.length; i++) {
    const q = qs[i];
    if (!q) continue;
    total += scoreLoveAnswer(q, answers[i]);
    max += 5;
  }
  const percent = max > 0 ? Math.round((total / max) * 100) : 0;
  return { total, max, percent };
};


