import { Progress } from '@/components/ui/progress';

interface QuizProgressProps {
  current: number;
  total: number;
  timeLeft: number;
  initialTime: number;
}

export const QuizProgress = ({ current, total, timeLeft, initialTime }: QuizProgressProps) => {
  const percent = Math.min(100, Math.max(0, ((current) / total) * 100));
  const timePercent = Math.min(100, Math.max(0, (timeLeft / initialTime) * 100));

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-medium">{Math.round(percent)}% completed</span>
        </div>
        <span className={`font-mono ${timeLeft <= 10 ? 'text-destructive animate-pulse' : ''}`}>
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </span>
      </div>
      <div className="relative">
        <Progress value={percent} className="h-2" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-[2px] bg-accent/20" style={{ left: `${percent}%`, position: 'absolute', transform: 'translateX(-1px)', transition: 'left 300ms ease' }} />
        </div>
        <div className="mt-2">
          <Progress value={timePercent} className={`h-1 ${timeLeft <= 10 ? 'animate-pulse' : ''}`} />
        </div>
      </div>
      <div className="mt-2 text-xs text-muted-foreground">Question {current + 1} of {total}</div>
    </div>
  );
};