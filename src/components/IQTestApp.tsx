import { useEffect, useState } from 'react';
import { QuizLanding } from './QuizLanding';
import { Quiz } from './Quiz';
import { QuizResults } from './QuizResults';
import { Layout } from '@/components/Layout';

type AppState = 'landing' | 'quiz' | 'results';
type TestType = 'iq' | 'personality' | 'love';

interface QuizResult {
  score: number;
  totalQuestions: number;
  iqScore: number;
  timeTaken: number;
  accuracy: number;
}

export const IQTestApp = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [testType, setTestType] = useState<TestType>('iq');

  const handleStartQuiz = (type: TestType = 'iq') => {
    setTestType(type);
    setAppState('quiz');
    // push hash so browser Back returns to landing
    try { window.history.pushState(null, '', '#quiz'); } catch {}
  };

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
    setAppState('results');
    // reflect results in URL for history navigation
    try { window.history.pushState(null, '', '#results'); } catch {}
  };

  const handleBackToLanding = () => {
    setAppState('landing');
    setQuizResult(null);
    // ensure back from quiz goes to landing in history
    try { window.history.replaceState(null, '', '/'); } catch {}
  };

  // Sync internal state with browser history (hash-based)
  useEffect(() => {
    const syncFromLocation = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      if (hash === '#quiz') {
        setAppState('quiz');
      } else if (hash === '#results') {
        setAppState('results');
      } else {
        setAppState('landing');
        setQuizResult(null);
      }
    };

    // Initial sync on mount
    syncFromLocation();

    // Listen to back/forward and hash changes
    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  const handleRestartQuiz = () => {
    setQuizResult(null);
    setAppState('quiz');
  };

  switch (appState) {
    case 'landing':
      return (
        <Layout onStartQuiz={handleStartQuiz}>
          <QuizLanding onStartQuiz={handleStartQuiz} />
        </Layout>
      );

    case 'quiz':
      return (
        <Layout onStartQuiz={handleStartQuiz} hideFooter hideNavActions>
          <Quiz 
            onComplete={handleQuizComplete} 
            onBack={handleBackToLanding} 
            testType={testType}
          />
        </Layout>
      );

    case 'results':
      return quizResult ? (
        <Layout onStartQuiz={handleStartQuiz} hideFooter hideNavActions>
          <QuizResults 
            result={quizResult}
            onRestart={handleRestartQuiz}
            onHome={() => {
              handleBackToLanding();
              try { window.history.replaceState(null, '', '/'); } catch {}
            }}
            testType={testType}
          />
        </Layout>
      ) : null;

    default:
      return (
        <Layout onStartQuiz={handleStartQuiz}>
          <QuizLanding onStartQuiz={handleStartQuiz} />
        </Layout>
      );
  }
};