import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { getIQLevel } from '@/data/questions';
import { Trophy, Brain, Clock, Target, RotateCcw, Share2 } from 'lucide-react';

interface QuizResultsProps {
  result: {
    score: number;
    totalQuestions: number;
    iqScore: number;
    timeTaken: number;
    accuracy: number;
  };
  onRestart: () => void;
  onHome: () => void;
  testType?: 'iq' | 'personality';
}

export const QuizResults = ({ result, onRestart, onHome, testType = 'iq' }: QuizResultsProps) => {
  const { score, totalQuestions, iqScore, timeTaken, accuracy } = result;
  const level = testType === 'personality' ? '' : getIQLevel(iqScore);
  const minutes = Math.floor(timeTaken / 60);
  const seconds = Math.floor(timeTaken % 60);
  
  const getIQColor = (iq: number) => {
    if (iq >= 140) return 'text-purple-600';
    if (iq >= 130) return 'text-blue-600';
    if (iq >= 120) return 'text-green-600';
    if (iq >= 110) return 'text-yellow-600';
    if (iq >= 90) return 'text-orange-600';
    return 'text-red-600';
  };

  const getIQBadgeColor = (iq: number) => {
    if (iq >= 140) return 'bg-purple-100 text-purple-800';
    if (iq >= 130) return 'bg-blue-100 text-blue-800';
    if (iq >= 120) return 'bg-green-100 text-green-800';
    if (iq >= 110) return 'bg-yellow-100 text-yellow-800';
    if (iq >= 90) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center animate-slide-in">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Quiz Complete!</h1>
          <p className="text-xl text-muted-foreground">Here are your results</p>
        </div>

        {/* Main Score Card */}
        <Card className="shadow-glow animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{testType === 'personality' ? 'Your Personality Score' : 'Your IQ Score'}</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div>
              {testType === 'personality' ? (
                <>
                  <div className="text-6xl font-bold mb-2">
                    {Math.round(accuracy)}%
                  </div>
                  <Badge className="text-lg px-4 py-2">
                    Overall Alignment
                  </Badge>
                </>
              ) : (
                <>
                  <div className={`text-6xl font-bold ${getIQColor(iqScore)} mb-2`}>
                    {iqScore}
                  </div>
                  <Badge className={`text-lg px-4 py-2 ${getIQBadgeColor(iqScore)}`}>
                    {level}
                  </Badge>
                </>
              )}
            </div>
            
            {testType !== 'personality' && (
              <div className="max-w-md mx-auto">
                <Progress value={(iqScore - 70) / 90 * 100} className="h-3 mb-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>70</span>
                  <span>Average (100)</span>
                  <span>160</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Detailed Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Target className="h-5 w-5 text-primary mr-2" />
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{accuracy.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                {score} out of {totalQuestions} correct
              </p>
              <Progress value={accuracy} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <CardTitle className="text-sm font-medium">Time Taken</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {minutes}:{seconds.toString().padStart(2, '0')}
              </div>
              <p className="text-xs text-muted-foreground">
                {(timeTaken / totalQuestions).toFixed(1)}s per question
              </p>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Brain className="h-5 w-5 text-primary mr-2" />
              <CardTitle className="text-sm font-medium">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {testType === 'personality' 
                  ? (accuracy >= 70 ? 'High Alignment' : accuracy >= 55 ? 'Moderate Alignment' : 'Low Alignment')
                  : iqScore >= 120 ? 'Excellent' : 
                    iqScore >= 110 ? 'Good' : 
                    iqScore >= 90 ? 'Average' : 'Below Average'}
              </div>
              <p className="text-xs text-muted-foreground">
                {testType === 'personality' ? 'Based on your responses' : 'Based on cognitive assessment'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interpretation */}
        <Card className="animate-slide-in" style={{ animationDelay: '0.6s' }}>
          <CardHeader>
            <CardTitle>What Your Score Means</CardTitle>
          </CardHeader>
          <CardContent>
            {testType === 'personality' ? (
              <p className="text-muted-foreground leading-relaxed">
                Your responses indicate an overall alignment of {Math.round(accuracy)}% with the measured traits. This is not a right-or-wrong test; it reflects preferences like sociability, planning, adaptability, and resilience.
              </p>
            ) : (
              <p className="text-muted-foreground leading-relaxed">
                {iqScore >= 140 && "Your score indicates exceptional intellectual ability. You demonstrate superior problem-solving skills and abstract thinking capabilities."}
                {iqScore >= 130 && iqScore < 140 && "Your score shows very superior intelligence. You excel at complex reasoning and have strong analytical capabilities."}
                {iqScore >= 120 && iqScore < 130 && "Your score indicates superior intelligence with excellent problem-solving and reasoning abilities."}
                {iqScore >= 110 && iqScore < 120 && "Your score shows high average intelligence with good analytical and reasoning skills."}
                {iqScore >= 90 && iqScore < 110 && "Your score falls within the average range, indicating normal intellectual functioning and problem-solving abilities."}
                {iqScore >= 80 && iqScore < 90 && "Your score is in the low average range. Consider practicing more cognitive exercises to improve your skills."}
                {iqScore < 80 && "Your score suggests areas for improvement. Regular mental exercises and learning can help enhance cognitive abilities."}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in" style={{ animationDelay: '0.7s' }}>
          <Button variant="hero" size="lg" onClick={onRestart}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Take Another Test
          </Button>
          <Button variant="outline" size="lg" onClick={onHome}>
            Back to Home
          </Button>
          <Button variant="secondary" size="lg">
            <Share2 className="mr-2 h-4 w-4" />
            Share Results
          </Button>
        </div>
      </div>
    </div>
  );
};