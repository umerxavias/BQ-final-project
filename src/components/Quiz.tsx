import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QuizProgress } from './QuizProgress';
import { questions as iqQuestions, calculateIQ } from '@/data/questions';
import { personalityQuestions, aggregatePersonalityScore } from '@/data/personality';
import { loveQuestions, aggregateLoveScore } from '@/data/love';
import { QuizState, Question } from '@/types/quiz';
import { Brain, CheckCircle, XCircle, Timer as TimerIcon, Check, SkipForward } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface QuizProps {
  onComplete: (result: any) => void;
  onBack: () => void;
  testType?: 'iq' | 'personality' | 'love';
}

export const Quiz = ({ onComplete, onBack, testType = 'iq' }: QuizProps) => {
  const dataset = testType === 'personality' ? personalityQuestions : testType === 'love' ? loveQuestions : iqQuestions;
  const TIME_PER_QUESTION = 30; // seconds for all tests
  const TEST_TOTAL_TIME: Record<'iq' | 'personality' | 'love', number> = {
    iq: 15 * 60,
    personality: 30 * 60,
    love: 35 * 60,
  };
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: Array((dataset?.length ?? 0)).fill(-1),
    startTime: Date.now(),
    score: 0,
    iqScore: 0,
  });
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [showIntro, setShowIntro] = useState(true);
  const [loveGender, setLoveGender] = useState<string | null>(null);
  const [totalTimeLeft, setTotalTimeLeft] = useState(TEST_TOTAL_TIME[testType]);
  const [confetti, setConfetti] = useState(false);

  const currentQuestion = dataset[quizState.currentQuestion];

  // Circular progress ring for per-question timer
  const ProgressRing = ({ value }: { value: number }) => {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;
    return (
      <svg width="48" height="48" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r={radius} stroke="hsl(var(--muted-foreground)/0.2)" strokeWidth="6" fill="none" />
        <circle cx="30" cy="30" r={radius} stroke="hsl(var(--accent-teal))" strokeWidth="6" fill="none" strokeLinecap="round" style={{ strokeDasharray: circumference, strokeDashoffset: offset, transition: 'stroke-dashoffset 0.3s ease' }} />
      </svg>
    );
  };

  // Timer effect
  useEffect(() => {
    if (showFeedback || showIntro) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // show timeout toast
          toast(
            <div className="flex items-center gap-2">
              <TimerIcon className="h-4 w-4 text-warning" />
              <div>
                <div className="text-sm font-semibold">Time up</div>
                <div className="text-xs text-muted-foreground">Question skipped</div>
              </div>
            </div>
          );
          // brief vibration if supported
          if (typeof window !== 'undefined' && 'vibrate' in navigator) {
            try { (navigator as any).vibrate?.(60); } catch {}
          }
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState.currentQuestion, showFeedback, showIntro]);

  // Non-blocking overall test timer
  useEffect(() => {
    if (showIntro) return;
    const id = setInterval(() => {
      setTotalTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [showIntro]);

  // Reset timer when question changes
  useEffect(() => {
    if (quizState.currentQuestion < dataset.length) {
      setTimeLeft(TIME_PER_QUESTION);
      setQuestionStartTime(Date.now());
      const prevAns = quizState.answers[quizState.currentQuestion];
      setSelectedAnswer(prevAns !== -1 ? prevAns : null);
      setShowFeedback(false);
    }
  }, [quizState.currentQuestion]);

  const handleStartPersonality = () => {
    if (testType === 'love' && !loveGender) return;
    // Begin the quiz from intro screen
    setShowIntro(false);
    setQuizState(prev => ({ ...prev, startTime: Date.now() }));
    setTimeLeft(TIME_PER_QUESTION);
    setQuestionStartTime(Date.now());
    setTotalTimeLeft(TEST_TOTAL_TIME[testType]);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
    // Auto-record on all tests (including IQ) without extra submit button
    setTimeout(() => handleSubmitAnswer(), 10);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isIQ = testType === 'iq';
    const isCorrect = !isIQ ? true : (selectedAnswer === currentQuestion.correctAnswer);
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = selectedAnswer;
    const increment = !isIQ ? 0 : (isCorrect ? 1 : 0);
    const newScore = quizState.score + increment;
    
    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      score: newScore,
    }));
    
    setShowFeedback(true);
    if (isIQ && isCorrect) {
      setConfetti(true);
      window.setTimeout(() => setConfetti(false), 700);
    }
    // Auto advance after showing feedback (faster for non-IQ tests)
    const advanceDelay = testType === 'iq' ? 800 : 400;
    setTimeout(() => {
      handleNextQuestion();
    }, advanceDelay);
  };

  // Keyboard shortcuts: 1–4 selects options
  useEffect(() => {
    if (showIntro) return;
    const onKey = (e: KeyboardEvent) => {
      if (showFeedback) return;
      const key = e.key;
      if (key >= '1' && key <= '4') {
        const idx = Number(key) - 1;
        if (idx < currentQuestion.options.length) {
          e.preventDefault();
          handleAnswerSelect(idx);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showIntro, showFeedback, currentQuestion]);

  const handleSkipQuestion = () => {
    if (showIntro || showFeedback) return;
    // keep answer as -1 and advance
    toast(
      <div className="flex items-center gap-2">
        <SkipForward className="h-4 w-4 text-muted-foreground" />
        <div>
          <div className="text-sm font-semibold">Skipped</div>
          <div className="text-xs text-muted-foreground">You can answer it later</div>
        </div>
      </div>
    );
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion + 1 >= dataset.length) {
      // Quiz complete
      const endTime = Date.now();
      const totalTime = (endTime - quizState.startTime) / 1000;
      const averageTime = totalTime / dataset.length;
      const iqScore = testType === 'personality' || testType === 'love' ? 0 : calculateIQ(quizState.score, dataset.length, averageTime);
      let accuracy = (quizState.score / dataset.length) * 100;
      let level = '';
      let scoreOut = quizState.score;
      if (testType === 'personality') {
        const agg = aggregatePersonalityScore(quizState.answers, dataset);
        level = `${agg.percent}%`;
        scoreOut = agg.total;
        accuracy = agg.percent;
      } else if (testType === 'love') {
        const agg = aggregateLoveScore(quizState.answers, dataset);
        level = `${agg.percent}%`;
        scoreOut = agg.total;
        accuracy = agg.percent;
      }
      
      const result = {
        score: scoreOut,
        totalQuestions: dataset.length,
        iqScore,
        timeTaken: totalTime,
        accuracy,
        level,
      };
      
      onComplete(result);
    } else {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
    }
  };

  // Navigator helpers
  const canNavigateTo = (index: number) => {
    if (testType !== 'iq') return true;
    return quizState.answers[index] === -1; // IQ: cannot return to answered
  };

  const goToQuestion = (index: number) => {
    if (index < 0 || index >= dataset.length) return;
    if (!canNavigateTo(index)) return;
    setQuizState(prev => ({ ...prev, currentQuestion: index }));
  };

  const renderNavigator = () => {
    const total = dataset.length;
    const current = quizState.currentQuestion;
    const items: (number | string)[] = [];
    const push = (v: number | string) => items.push(v);
    const pushNum = (n: number) => {
      const last = items.length ? items[items.length - 1] : undefined;
      if (typeof last === 'number' && last === n) return;
      items.push(n);
    };

    if (total <= 12) {
      for (let i = 0; i < total; i++) pushNum(i);
    } else {
      if (current <= 6) {
        // show first 10 fixed, then ellipsis and last
        for (let i = 0; i < 10; i++) pushNum(i);
        push('right-ellipsis');
        pushNum(total - 1);
      } else if (current >= total - 7) {
        // show first, ellipsis, last 10 fixed
        pushNum(0);
        push('left-ellipsis');
        for (let i = total - 10; i < total; i++) pushNum(i);
      } else {
        // center window around current (9 numbers), with fixed first/last
        pushNum(0);
        push('left-ellipsis');
        const start = Math.max(1, current - 4);
        const end = Math.min(total - 2, current + 4);
        for (let i = start; i <= end; i++) pushNum(i);
        push('right-ellipsis');
        pushNum(total - 1);
      }
    }

    return (
      <div className="mt-4 flex items-center justify-center gap-1.5 flex-nowrap overflow-x-auto no-scrollbar px-2 py-1">
        <button
          type="button"
          onClick={() => goToQuestion(current - 1)}
          disabled={!canNavigateTo(current - 1)}
          className={`h-9 min-w-9 px-2 rounded-full text-sm flex items-center justify-center border-2 transition-all ${canNavigateTo(current - 1) ? 'bg-white hover:bg-primary/5 hover:border-primary/40 border-border' : 'bg-muted/60 text-muted-foreground cursor-not-allowed border-transparent'}`}
          aria-label="Previous question"
        >
          ‹
        </button>
        {items.map((it, idx) => {
          if (typeof it === 'string') {
            return <span key={idx} className="px-2 text-muted-foreground select-none">…</span>;
          }
          const i = it as number;
          const isCurrent = i === current;
          const answered = quizState.answers[i] !== -1;
          const clickable = testType !== 'iq' || !answered || isCurrent;
          return (
            <button
              key={i}
              type="button"
              onClick={() => goToQuestion(i)}
              disabled={!clickable}
              className={`h-9 min-w-12 px-3 rounded-full text-sm font-semibold transition-all will-change-transform ${
                isCurrent
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : answered && testType !== 'iq'
                    ? 'bg-success/10 text-success hover:bg-success/15'
                    : 'bg-muted/70 text-foreground hover:bg-white'
              } ${!clickable ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5'} ring-1 ring-border/50`}
            >
              {i + 1}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => goToQuestion(current + 1)}
          disabled={!canNavigateTo(current + 1)}
          className={`h-9 min-w-9 px-2 rounded-full text-sm flex items-center justify-center border-2 transition-all ${canNavigateTo(current + 1) ? 'bg-white hover:bg-primary/5 hover:border-primary/40 border-border' : 'bg-muted/60 text-muted-foreground cursor-not-allowed border-transparent'}`}
          aria-label="Next question"
        >
          ›
        </button>
      </div>
    );
  };

  const getOptionButtonVariant = (index: number) => {
    if (!showFeedback) return 'quiz';
    if (testType === 'personality' || testType === 'love') {
      // Avoid green/red states for non-IQ tests; style via custom classes
      return 'quiz';
    }
    if (index === currentQuestion.correctAnswer) return 'quiz-correct';
    if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) return 'quiz-incorrect';
    return 'quiz';
  };

  const getOptionIcon = (index: number) => {
    if (!showFeedback) return null;
    if (testType === 'personality' || testType === 'love') {
      return index === selectedAnswer ? <CheckCircle className="h-4 w-4" /> : null;
    }
    if (index === currentQuestion.correctAnswer) return <CheckCircle className="h-4 w-4" />;
    if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) return <XCircle className="h-4 w-4" />;
    return null;
  };

  return (
    <div className="min-h-[calc(100vh-56px)] bg-background flex items-center justify-center px-4 py-4">
      {/* Top-right quiz controls over navbar */}
      {!showIntro && (
        <div className="fixed right-4 top-2 z-40 flex items-center gap-3">
          <div className={`relative inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
            totalTimeLeft <= 60 ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-foreground'
          }`}>
            <TimerIcon className={`h-4 w-4 ${totalTimeLeft <= 60 ? 'text-destructive' : 'text-primary'}`} />
            <span className="tabular-nums">
              {Math.floor(totalTimeLeft / 60)}:{(totalTimeLeft % 60).toString().padStart(2, '0')}
            </span>
            {totalTimeLeft <= 60 && (
              <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-destructive/40 animate-ping" />
            )}
          </div>
          <Button variant="ghost" onClick={onBack} className="h-9 px-3 rounded-lg">
            Exit Quiz
          </Button>
        </div>
      )}

      <div className="w-full max-w-[1100px]">
        {showIntro ? (
          <Card className="w-full rounded-2xl shadow-xl bg-white ring-1 ring-border/60 animate-scale-in">
            <CardHeader className="text-center">
              <div className="mx-auto mb-3">
                {testType === 'personality' && (
                  <img
                    src="/personality-hero.svg"
                    alt="Personality"
                    className="mx-auto h-20 w-auto select-none"
                    draggable={false}
                  />
                )}
                {testType === 'iq' && (
                  <div className="mx-auto h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Brain className="h-10 w-10 text-primary" />
                  </div>
                )}
                {testType === 'love' && (
                  <>
                    <img
                      src="/love-hero.png"
                      alt="Love"
                      className="mx-auto h-20 w-auto select-none"
                      draggable={false}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                    <img
                      src="/love-hero.svg"
                      alt=""
                      className="mx-auto h-20 w-auto select-none"
                      draggable={false}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </>
                )}
              </div>
              <CardTitle className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {testType === 'personality' && (
                  <>Get ready to discover your <span className="text-primary">True Personality</span></>
                )}
                {testType === 'love' && (
                  <>
                    Discover Your <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Love Style!</span>
                  </>
                )}
                {testType === 'iq' && (
                  <>
                    Get ready to start the <span className="text-primary">IQ test!</span>
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 px-6 md:px-8 pb-6">
              {testType === 'personality' && (
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> You will get 90 simple questions to complete</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Estimated time: 30 minutes</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Select the option that best describes you</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Take your time — there are no wrong answers</li>
                </ul>
              )}
              {testType === 'iq' && (
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> You will get 25 questions with growing difficulty.</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> Select the right answer out of the 4 options</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span> You can skip the question and return back later</li>
                </ul>
              )}
              {testType === 'love' && (
                <div className="space-y-6">
                  <div className="text-lg md:text-xl font-semibold text-foreground text-center">Start by selecting your gender</div>
                  <div className="mx-auto flex items-center justify-center gap-6">
                    <button
                      type="button"
                      onClick={() => { setLoveGender('male'); handleStartPersonality(); }}
                      className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 w-[184px] h-[153px] shadow-sm ${
                        loveGender === 'male' ? 'border-primary ring-1 ring-primary shadow-md scale-[1.005]' : 'border-border hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.01]'
                      }`}
                    >
                      <div className="w-full flex-1 flex flex-col items-center justify-center">
                        <span className="text-primary text-[64px] leading-none select-none font-black">♂</span>
                      </div>
                      <div className="py-2 text-center text-sm font-medium text-foreground">Male</div>
                      <div className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ${loveGender === 'male' ? 'ring-primary/60' : 'ring-transparent'}`}></div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setLoveGender('female'); handleStartPersonality(); }}
                      className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 w-[184px] h-[153px] shadow-sm ${
                        loveGender === 'female' ? 'border-primary ring-1 ring-primary shadow-md scale-[1.005]' : 'border-border hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.01]'
                      }`}
                    >
                      <div className="w-full flex-1 flex flex-col items-center justify-center">
                        <span className="text-primary text-[64px] leading-none select-none font-black">♀</span>
                      </div>
                      <div className="py-3 mt-1 text-center text-sm font-medium text-foreground">Female</div>
                      <div className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ${loveGender === 'female' ? 'ring-primary/60' : 'ring-transparent'}`}></div>
                    </button>
                  </div>
                </div>
              )}
              {testType !== 'love' && (
                <div className="flex justify-center pt-2">
                  <Button variant="hero" size="lg" onClick={handleStartPersonality}>Start Test</Button>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
        <>
        <div className="mb-5 flex items-center justify-start">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            {testType === 'personality' ? 'Personality Assessment' : testType === 'love' ? 'Love Style Assessment' : 'IQ Assessment'}
          </h1>
        </div>

        {/* Professional, formal question surface */}
        {/* Proctor-grade narrow layout */}
        <div className="space-y-4">
          {/* Slim top bar */}
          <div className="rounded-md border bg-white px-4 py-2.5 flex items-center justify-between">
            <div className="text-sm font-semibold tracking-tight">Question {quizState.currentQuestion + 1} of {dataset.length}</div>
            <div className="flex items-center gap-3">
              <div className="relative grid place-items-center">
                <ProgressRing value={(1 - timeLeft / TIME_PER_QUESTION) * 100} />
              </div>
              <div className="text-xs text-muted-foreground tabular-nums min-w-[34px] text-right">{timeLeft}s</div>
            </div>
          </div>

          {/* Narrow question card (no ruled background) */}
          <section className="rounded-md border bg-white shadow-sm overflow-hidden">
            <div className="relative">
              <div className="flex-1 relative px-6 py-5 md:px-7 md:py-6">
              <div key={quizState.currentQuestion} className="animate-in fade-in-0 slide-in-from-bottom-1">
              {/* Difficulty chip for IQ only */}
            {testType === 'iq' && (
                <div className="mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  currentQuestion.difficulty === 'easy' ? 'bg-success/10 text-success' :
                  currentQuestion.difficulty === 'medium' ? 'bg-warning/10 text-warning' :
                  'bg-destructive/10 text-destructive'
                }`}>
                  {currentQuestion.difficulty.toUpperCase()}
                </span>
              </div>
            )}
              <div className="mb-4 md:mb-5">
                <div className="text-lg md:text-xl font-semibold tracking-tight leading-snug">
              {currentQuestion.question}
                </div>
              </div>

              {/* OMR-style two-column answer sheet */}
              <div className="mx-auto w-full max-w-[720px]">
                <div className="rounded-md border overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showFeedback}
                        className={`group flex items-center gap-3 px-4 md:px-5 py-3 border-b sm:border-b-0 sm:border-r last:border-b-0 even:sm:border-r-0 text-left transition-colors ${selectedAnswer === index ? 'bg-primary/5' : 'hover:bg-muted/50'}`}
                        aria-label={`Option ${index+1}`}
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border bg-white text-[12px] font-semibold">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1 text-[14px] md:text-[15px] leading-snug">{option}</span>
                        <span className={`inline-flex h-5 w-5 rounded-full border items-center justify-center ${selectedAnswer === index ? 'border-primary' : 'border-border'}`}>
                          <span className={`h-2.5 w-2.5 rounded-full ${selectedAnswer === index ? 'bg-primary' : 'bg-transparent'}`} />
                        </span>
                        {showFeedback && (
                          <span className="ml-2 text-xs font-semibold">
                            {testType !== 'iq' ? (
                              <span className="text-primary">•</span>
                            ) : index === currentQuestion.correctAnswer ? (
                              <span className="text-success">✓</span>
                            ) : index === selectedAnswer ? (
                              <span className="text-destructive">×</span>
                            ) : null}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feedback reserve space */}
              <div className="h-14 md:h-16 flex items-center justify-center">
                {showFeedback && (
                  <div className="text-center">
                    {testType !== 'iq' ? (
                      <p className="text-base md:text-lg font-semibold text-primary">Recorded</p>
                    ) : (
                      <p className={`text-base md:text-lg font-medium ${selectedAnswer === currentQuestion.correctAnswer ? 'text-success' : 'text-destructive'}`}>{selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}</p>
                    )}
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Moving to next question…</p>
              </div>
            )}
              </div>
            </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="px-6 py-4 md:px-8 md:py-5 border-t bg-card/50">
              <div className="flex items-center justify-between">
                <button
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleSkipQuestion}
                  disabled={showFeedback}
                >
                  Skip
                </button>
              <Button
                  variant="hero"
                size="lg"
                onClick={handleSkipQuestion}
                  className="rounded-md"
                disabled={showFeedback}
              >
                  Next
              </Button>
            </div>
            </div>
          </section>
        </div>

            {/* Confetti micro-animation on correct IQ answer */}
            {confetti && testType === 'iq' && (
          <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
                <div className="relative h-0 w-0">
              {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-primary/80 animate-ping"
                      style={{
                    top: `${Math.random()*60-30}px`,
                    left: `${Math.random()*60-30}px`,
                        animationDuration: `${0.6 + Math.random()*0.4}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
        {/* Journey stepper with XP/brainpower meter */}
        <div className="mt-4">
          <div className="relative h-2 w-full bg-muted/70 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-primary" style={{ width: `${((quizState.currentQuestion+1) / dataset.length) * 100}%`, transition: 'width 300ms ease' }} />
            <div className="absolute -top-1.5" style={{ left: `calc(${((quizState.currentQuestion+1) / dataset.length) * 100}% - 10px)` }}>
              <div className="h-5 w-5 rounded-full bg-primary/20 ring-2 ring-primary/50" />
            </div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground flex items-center justify-between">
            <span>Brainpower</span>
            <span className="font-mono">{Math.round(((quizState.currentQuestion+1) / dataset.length) * 100)}%</span>
          </div>
          {renderNavigator()}
        </div>
        </>
        )}
      </div>
    </div>
  );
};