import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Clock, Trophy, Users, Award, LineChart, Puzzle, Gamepad2, BookOpen, ShieldCheck, Star, StarHalf, Quote, Instagram, Facebook, Twitter, Check, BadgeCheck } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import heroImage from '@/assets/hero-bg.jpg';
import { Reveal } from '@/components/Reveal';
import { CountryIQDonut } from '@/components/CountryIQDonut';

interface QuizLandingProps {
  onStartQuiz: (type?: 'iq' | 'personality' | 'love') => void;
}

export const QuizLanding = ({ onStartQuiz }: QuizLandingProps) => {
  // Hero sample question modal state
  const [sampleOpen, setSampleOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    if (!sampleOpen) return;
    setTimeLeft(10);
    setAnswered(null);
    const id = window.setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [sampleOpen]);

  const progress = useMemo(() => (1 - timeLeft / 10) * 100, [timeLeft]);

  const onAnswer = () => {
    setAnswered(true);
    window.setTimeout(() => setSampleOpen(false), 700);
  };

  const ProgressRing = ({ value }: { value: number }) => {
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;
    return (
      <svg width="72" height="72" viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r={radius} stroke="hsl(var(--muted-foreground)/0.2)" strokeWidth="6" fill="none" />
        <circle cx="40" cy="40" r={radius} stroke="hsl(var(--accent-teal))" strokeWidth="6" fill="none" strokeLinecap="round" style={{ strokeDasharray: circumference, strokeDashoffset: offset, transition: 'stroke-dashoffset 0.3s ease' }} />
      </svg>
    );
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - light, spacious, teal/coral identity */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* soft gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_10%_10%,hsl(193_85%_40%_/0.08),transparent),radial-gradient(80%_50%_at_90%_10%,hsl(14_90%_55%_/0.08),transparent)]" />
          </div>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
            {/* Content */}
            <div className="space-y-7">
                <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white px-3 py-1.5 text-xs text-foreground shadow-soft">
                  <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  <span>Trusted by 50,000+ minds</span>
                  </div>
                </Reveal>
              <Reveal delayMs={60}>
                <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight font-display">
                  Next‑gen intelligence assessment
                </h1>
              </Reveal>
              <Reveal delayMs={90}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Futuristic design. Clean insights. A premium experience that feels nothing like competitors.
                </p>
                </Reveal>
              <Reveal delayMs={120}>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={() => onStartQuiz('iq')}
                    className="group h-auto rounded-xl px-7 py-4 text-base shadow-glow hover:shadow-medium"
                    >
                    <Brain className="mr-2 h-5 w-5" /> Start IQ Test
                    </Button>
                    <Button
                      onClick={() => setSampleOpen(true)}
                      variant="outline"
                      size="lg"
                    className="h-auto rounded-xl px-7 py-4 text-base"
                    >
                    Try 1 sample question
                    </Button>
                  </div>
                </Reveal>
              {/* Segmented test picker for a unique flow */}
              <Reveal delayMs={140}>
                <div className="mt-2 inline-flex items-center gap-1 rounded-2xl border border-border/70 bg-white p-1 shadow-soft">
                  <button
                    onClick={() => onStartQuiz('iq')}
                    className="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90"
                  >IQ</button>
                  <button
                    onClick={() => onStartQuiz('personality')}
                    className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-muted"
                  >Personality</button>
                  <button
                    onClick={() => onStartQuiz('love')}
                    className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-muted"
                  >Love</button>
                </div>
              </Reveal>
              {/* IQ cognitive domains chips */}
              <Reveal delayMs={170}>
                <div className="pt-4 flex flex-wrap items-center gap-2 text-xs">
                  {['Logical reasoning', 'Pattern recognition', 'Spatial', 'Memory', 'Processing speed'].map((d) => (
                    <span key={d} className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-secondary px-3 py-1 text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {d}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delayMs={150}>
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[
                        'https://randomuser.me/api/portraits/men/32.jpg',
                        'https://randomuser.me/api/portraits/women/65.jpg',
                        'https://randomuser.me/api/portraits/men/12.jpg'
                      ].map((src, idx) => (
                      <img key={idx} src={src} alt="User" loading="lazy" decoding="async" className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm object-cover" />
                      ))}
                    </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-white px-2.5 py-1 font-medium text-foreground">
                      <BadgeCheck className="h-4 w-4 text-success" /> Rated Excellent
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-1 font-semibold">
                      NPS 72
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted text-muted-foreground px-2.5 py-1">
                      <ShieldCheck className="h-4 w-4" /> Privacy‑first
                    </span>
                    </div>
                  </div>
                </Reveal>
              </div>
            {/* Visual */}
            <Reveal delayMs={90}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/10 via-primary/0 to-accent/10 blur-xl" />
                <div className="relative rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-md p-4 shadow-soft ring-1 ring-border/60">
                  {/* Graph smaller */}
                  <div className="mb-2 w-full max-w-[220px] md:max-w-[260px] mx-auto">
                    <CountryIQDonut variant="bare" />
                  </div>
                  {/* Compact continent chips below graph */}
                  <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                    {[
                      { k: 'Asia', v: 104 },
                      { k: 'Europe', v: 102 },
                      { k: 'North America', v: 100 },
                      { k: 'South America', v: 96 },
                      { k: 'Africa', v: 84 },
                      { k: 'Oceania', v: 99 },
                    ].map((x) => (
                      <div key={x.k} className="flex items-center justify-between rounded-lg border border-border/60 bg-card/80 px-2.5 py-1.5">
                        <span className="font-medium">{x.k}</span>
                        <span className="text-xs text-muted-foreground">{x.v} IQ</span>
                      </div>
                    ))}
                  </div>
                  {/* Start Assessment panel compact */}
                  <div className="rounded-2xl border border-border/60 bg-secondary/70 dark:bg-white/5 backdrop-blur-md p-3">
                    <div className="grid gap-3">
                      <div className="rounded-lg border border-border/60 bg-white p-3">
                        <div className="text-[13px] font-semibold mb-0.5">Time</div>
                        <div className="text-[11px] text-muted-foreground">~ 12 minutes • 25 questions</div>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-white p-3">
                        <div className="text-[13px] font-semibold mb-1">What you’ll get</div>
                        <div className="flex flex-wrap gap-1.5 text-[11px]">
                          {['Score & certificate','Percentile','Timing & accuracy','Domain insights'].map((d)=> (
                            <span key={d} className="rounded-full border border-border/60 bg-secondary px-2.5 py-0.5">{d}</span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-white p-3">
                        <div className="text-[13px] font-semibold mb-2">Benefits</div>
                        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px] text-muted-foreground">
                          <li>• Clear, actionable report</li>
                          <li>• Privacy‑first</li>
                          <li>• Mobile friendly</li>
                          <li>• Retry anytime</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-[11px] text-muted-foreground">No account required</div>
                      <Button size="sm" className="rounded-xl px-4" onClick={() => onStartQuiz('iq')}>Begin now</Button>
                    </div>
                  </div>
                </div>
                </div>
              </Reveal>
            </div>
          </div>
        
      </section>

      {/* Why Choose Our IQ Test? (commented out on request) */}
      {/**
       * Section hidden per request. Uncomment to restore:
       * <Reveal>
       *   <section className="py-20 px-4"> ... </section>
       * </Reveal>
       */}

      

      

      {/* Available Tests - horizontal carousel */}
      <Reveal>
        <section id="tests" className="py-20 bg-muted/40 px-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">Explore tests</h2>
            <p className="text-center text-muted-foreground mb-10">Start with IQ. Personality and Love styles are available too.</p>
            <Carousel className="[&_[data-carousel-content]]:gap-6" opts={{ align: 'start' }} aria-label="Available tests carousel">
              <CarouselContent>
                {/* IQ */}
                <CarouselItem className="basis-11/12 sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-white to-card/80 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium ring-1 ring-primary/10">
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-[linear-gradient(145deg,hsl(346_85%_96%),hsl(346_85%_92%))] text-primary grid place-items-center ring-1 ring-primary/20">
                      <Brain className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">IQ / Intelligence</h3>
                      <p className="text-[12px] text-muted-foreground">Core reasoning across logic, pattern and speed.</p>
                      <div className="mt-1 flex items-center gap-2 text-[12px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5"><Clock className="h-3.5 w-3.5" /> 15 min</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5"><Check className="h-3.5 w-3.5" /> 25 Qs</span>
                      </div>
                    </div>
                    <span className="ml-auto inline-flex items-center h-6 rounded-full bg-primary/10 text-primary px-2 text-[11px] font-semibold ring-1 ring-primary/20">Most popular</span>
                  </div>
                      <div className="mt-auto grid grid-cols-2 gap-2">
                        <Button id="start-iq" variant="hero" size="lg" className="w-full rounded-lg" onClick={() => onStartQuiz('iq')}>Start test</Button>
                        <Button variant="outline" size="lg" className="w-full rounded-lg">Preview</Button>
                      </div>
                </div>
              </div>
                </CarouselItem>
                {/* Personality */}
                <CarouselItem className="basis-11/12 sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-white to-card/80 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-[linear-gradient(145deg,hsl(346_85%_96%),hsl(346_85%_92%))] text-primary grid place-items-center overflow-hidden ring-1 ring-primary/20">
                          <img src="/personality-hero.svg" alt="Personality" className="h-6 w-6 opacity-90" onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            if (img.src.indexOf('personality-hero.png') === -1) { img.src = '/personality-hero.png'; } else { img.style.display = 'none'; }
                          }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">Personality Type</h3>
                      <p className="text-[12px] text-muted-foreground">Discover traits and working style insights.</p>
                      <div className="mt-1 flex items-center gap-2 text-[12px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5"><Clock className="h-3.5 w-3.5" /> 30 min</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5"><Check className="h-3.5 w-3.5" /> 90 Qs</span>
                    </div>
                  </div>
                  </div>
                      <div className="mt-auto grid grid-cols-2 gap-2">
                        <Button variant="hero" size="lg" className="w-full rounded-lg" onClick={() => onStartQuiz('personality')}>Start test</Button>
                        <Button variant="outline" size="lg" className="w-full rounded-lg">Preview</Button>
                      </div>
                </div>
              </div>
                </CarouselItem>
                {/* Love */}
                <CarouselItem className="basis-11/12 sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-white to-card/80 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-[linear-gradient(145deg,hsl(346_85%_96%),hsl(346_85%_92%))] text-[#f28aa5] grid place-items-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-current"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">Love Style</h3>
                      <p className="text-[12px] text-muted-foreground">Understand attachment and relationship patterns.</p>
                      <div className="mt-1 flex items-center gap-2 text-[12px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5"><Clock className="h-3.5 w-3.5" /> 35 min</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5"><Check className="h-3.5 w-3.5" /> 120 Qs</span>
                      </div>
                        </div>
                      </div>
                      <div className="mt-auto grid grid-cols-2 gap-2">
                        <Button variant="hero" size="lg" className="w-full rounded-lg" onClick={() => onStartQuiz('love')}>Start test</Button>
                        <Button variant="outline" size="lg" className="w-full rounded-lg">Preview</Button>
                      </div>
                </div>
              </div>
                </CarouselItem>
                {/* Coming soon */}
                <CarouselItem className="basis-11/12 sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
              <div className="group relative overflow-hidden rounded-xl border border-dashed border-border/70 bg-card/50 shadow-soft">
                <div className="relative p-6 h-full flex flex-col opacity-80">
                  <div className="flex items-start gap-4 mb-5">
                        <div className="h-12 w-12 rounded-lg bg-muted text-muted-foreground grid place-items-center"><Brain className="h-6 w-6" /></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-muted-foreground">Career (soon)</h3>
                      <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> 25 min</span>
                        <span className="inline-flex items-center gap-1"><Check className="h-4 w-4" /> 35 Qs</span>
                        </div>
                        </div>
                      </div>
                      <Button variant="outline" size="lg" className="mt-auto w-full rounded-lg opacity-60 cursor-not-allowed" disabled>Coming soon</Button>
                </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious aria-label="Previous tests" />
              <CarouselNext aria-label="Next tests" />
            </Carousel>
          </div>
        </section>
      </Reveal>

      {/* Sample Question Modal - redesigned IQ-inspired UI */}
      <Dialog open={sampleOpen} onOpenChange={setSampleOpen}>
        <DialogContent className="w-[min(92vw,940px)] p-0 overflow-hidden rounded-[20px] border-0 shadow-2xl">
          {/* Header: step/progress + timer ring */}
          <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
            <div className="px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="grid grid-cols-[auto,1fr] items-center gap-x-3 gap-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground col-span-2">Sample • Cognitive Trial</span>
                  <div className="h-8 w-8 rounded-md bg-primary/10 text-primary grid place-items-center ring-1 ring-primary/20">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold leading-tight">Question 1 of 1</div>
                    <div className="mt-1 h-1.5 w-44 bg-muted rounded-full overflow-hidden">
                      <div className="h-1.5 bg-accent" style={{ width: `${progress}%`, transition: 'width .3s ease' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative grid place-items-center">
                  <div className="absolute inset-0 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-accent/10" />
                  <ProgressRing value={progress} />
                </div>
                <div className="text-xs text-muted-foreground w-12">{timeLeft}s</div>
              </div>
            </div>
          </div>

          {/* Body: question + grid answers */}
          <div className="px-6 py-5 md:px-8 md:py-7">
            <div className="grid gap-5 md:gap-6">
              <div className="text-lg md:text-xl font-semibold tracking-tight">
                Which shape has three sides?
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { k: 'Triangle', icon: '▲' },
                  { k: 'Square', icon: '■' },
                  { k: 'Circle', icon: '●' },
                  { k: 'Rectangle', icon: '▭' },
                ].map((opt, idx) => (
                  <button
                    key={opt.k}
                    onClick={onAnswer}
                    className={`group relative overflow-hidden rounded-xl border bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[.99]
                      ${answered === null ? 'cursor-pointer' : 'pointer-events-none opacity-90'}
                    `}
                    style={{ borderColor: 'hsl(var(--border)/0.6)' }}
                    aria-label={`Answer: ${opt.k}`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(60%_60%_at_30%_0%,hsl(var(--accent-teal)/.12),transparent)] transition-opacity" />
                    <div className="relative z-[1] flex items-center gap-3">
                      <div className="h-10 w-10 rounded-md bg-muted grid place-items-center text-lg">
                        <span aria-hidden>{opt.icon}</span>
                      </div>
                      <div>
                        <div className="font-medium">{opt.k}</div>
                        <div className="text-xs text-muted-foreground">Option {idx + 1}</div>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <Check className="h-5 w-5 text-accent-teal" />
                      </div>
                    </div>
                    {/* selection flash */}
                    {answered && (
                      <div className="absolute inset-0 bg-accent/10 animate-[fadeout_.6s_ease_forwards]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="px-6 py-4 md:px-8 md:py-5 border-t bg-card/60 backdrop-blur">
            <div className="flex items-center justify-between">
              <button
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setSampleOpen(false)}
              >
                Skip
              </button>
              <Button
                variant="hero"
                size="lg"
                onClick={() => setSampleOpen(false)}
                className="rounded-xl"
              >
                Next
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* How it Works - vertical timeline */}
      <Reveal>
        <section id="how" className="py-20 px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
              <p className="text-muted-foreground mt-2">Three clear steps to your IQ and insights</p>
            </div>
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-2 top-0 h-full w-px bg-border md:left-3" />
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-0.5 md:-left-1 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/15" />
                  <div className="rounded-xl border border-border/60 bg-card/90 p-5 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                        <Brain className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Take the quick test</div>
                        <div className="text-sm text-muted-foreground">Answer 25 questions across reasoning areas.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-0.5 md:-left-1 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/15" />
                  <div className="rounded-xl border border-border/60 bg-card/90 p-5 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                        <LineChart className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Get a clean report</div>
                        <div className="text-sm text-muted-foreground">See your score, accuracy and timing insights.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-0.5 md:-left-1 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/15" />
                  <div className="rounded-xl border border-border/60 bg-card/90 p-5 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Improve what matters</div>
                        <div className="text-sm text-muted-foreground">Targeted practice and courses to grow faster.</div>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA moved up */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Discover Your IQ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take the first step towards understanding your cognitive abilities
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => onStartQuiz('iq')}
            className="text-lg px-12 py-4 h-auto"
          >
            <Brain className="mr-2 h-5 w-5" />
            Begin Your Journey
          </Button>
        </div>
      </section>

      {/* Credibility & outcomes - more useful, data-driven trust */}
      <Reveal>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">Credibility & outcomes</h2>
            <p className="text-center text-muted-foreground mb-10">Clear signals your instructor will care about — measurable quality, completion and privacy.</p>
            {/* Key metrics */}
            <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {[
                { k: 'Average rating', v: '4.8', sub: 'out of 5', icon: Star },
                { k: 'NPS', v: '72', sub: 'last 90 days', icon: LineChart },
                { k: 'Completion', v: '94%', sub: 'finish rate', icon: Trophy },
                { k: 'Median time', v: '12m', sub: 'to complete', icon: Clock },
                { k: 'Certificates', v: '12k+', sub: 'issued', icon: Award },
                { k: 'Countries', v: '70+', sub: 'learner locations', icon: Users },
              ].map((m, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-white p-4 text-center shadow-soft">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    {m.icon && <m.icon className="h-4 w-4 text-primary" />}
                    <span>{m.k}</span>
                  </div>
                  <div className="mt-1 text-2xl font-bold">{m.v}</div>
                  <div className="text-xs text-muted-foreground">{m.sub}</div>
                </div>
              ))}
            </div>
            {/* Region completion breakdown */}
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <Card className="rounded-2xl border border-border/60 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold mb-3">Region completion rate (sample)</div>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: 'Europe', v: 96 },
                      { label: 'North America', v: 95 },
                      { label: 'Oceania', v: 94 },
                      { label: 'Asia', v: 92 },
                      { label: 'South America', v: 90 },
                    ].map((d, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between"><span>{d.label}</span><span className="text-xs text-muted-foreground">{d.v}%</span></div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden"><div className="h-1.5 bg-accent" style={{ width: `${d.v}%` }} /></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border border-border/60 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold mb-3">Why instructors approve</div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /> Certificate verification with unique ID</li>
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /> Privacy‑first (no ads tracking, export on request)</li>
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /> Transparent timing and accuracy in report</li>
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /> Clear methodology summary available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonials - Star slider */}
      <Reveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">What learners say</h2>
            {(() => {
              const reviews = [
                { name: 'James Mitchell', rating: 4.5, verified: true, text: "Surprised by the clarity of my IQ report.", location: 'Sydney, Australia', time: 'recent' },
                { name: 'Emma S.', rating: 5, verified: true, text: 'Clean UI and practical tips after the result.', location: 'London, UK', time: 'recent' },
                { name: 'Thomas R.', rating: 3.5, verified: true, text: 'Challenging questions, smooth flow.', location: 'Manchester, UK', time: 'recent' },
                { name: 'Aisha Khan', rating: 4, verified: true, text: 'Report is professional and easy to share.', location: 'Dubai, UAE', time: 'recent' },
                { name: 'Diego Morales', rating: 4.5, verified: false, text: 'Great experience overall.', location: 'Mexico City, MX', time: 'this week' },
                { name: 'Hiro Tanaka', rating: 5, verified: true, text: 'Accurate and fast. Highly recommend.', location: 'Tokyo, JP', time: 'this week' },
              ];

              const renderStars = (value: number) => {
                const full = Math.floor(value);
                const half = value % 1 >= 0.5;
                const empty = 5 - full - (half ? 1 : 0);
                return (
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: full }).map((_, i) => <Star key={`f-${i}`} className="h-4 w-4 fill-current" />)}
                    {half && (
                      <div className="relative h-4 w-4">
                        <Star className="absolute inset-0 h-4 w-4 text-amber-400/40" />
                        <Star className="absolute inset-0 h-4 w-4 fill-current clip-half" />
                      </div>
                    )}
                    {Array.from({ length: empty }).map((_, i) => <Star key={`e-${i}`} className="h-4 w-4 text-amber-400/40" />)}
                  </div>
                );
              };

              return (
                <Carousel
                  className="[&_.clip-half]:[clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]"
                  opts={{ loop: true, align: 'start' }}
                >
                  <CarouselContent>
                    {reviews.map((r, idx) => (
                      <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="shadow-soft hover:shadow-medium transition-shadow rounded-xl">
                          <CardContent className="p-6 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="font-semibold">{r.name}</div>
                              {renderStars(r.rating)}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              {r.verified && <BadgeCheck className="h-4 w-4 text-success" />}
                              <span>{r.verified ? 'Verified customer' : 'Customer'}</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{r.text}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Quote className="h-4 w-4 text-primary" />
                              <span>{r.location}</span>
                              <span>•</span>
                              <span>{r.time}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious
                    variant="ghost"
                    className="-left-4 md:-left-8 h-auto w-auto p-0 bg-transparent hover:bg-transparent border-0 shadow-none rounded-none text-primary"
                  >
                    <span className="text-3xl leading-none">&#8249;</span>
                  </CarouselPrevious>
                  <CarouselNext
                    variant="ghost"
                    className="-right-4 md:-right-8 h-auto w-auto p-0 bg-transparent hover:bg-transparent border-0 shadow-none rounded-none text-primary"
                  >
                    <span className="text-3xl leading-none">&#8250;</span>
                  </CarouselNext>
                </Carousel>
              );
            })()}
          </div>
        </section>
      </Reveal>

      {/* Pricing Plans - Free trial + Monthly/Annual with comparison */}
      <Reveal>
        <section id="pricing" className="py-20 px-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Plans that fit</h2>
            <p className="text-center text-muted-foreground mb-6">Try free, then pick monthly or annual.</p>
            <div className="mx-auto mb-8 inline-flex items-center gap-1 rounded-2xl border border-border/60 bg-white p-1 shadow-soft" role="tablist" aria-label="Billing period">
              <button role="tab" aria-selected={billing === 'monthly'} onClick={() => setBilling('monthly')} className={`px-4 py-2 rounded-xl text-sm font-semibold ${billing==='monthly' ? 'bg-accent-soft' : 'hover:bg-muted'}`}>Monthly</button>
              <button role="tab" aria-selected={billing === 'annual'} onClick={() => setBilling('annual')} className={`px-4 py-2 rounded-xl text-sm font-semibold ${billing==='annual' ? 'bg-accent-soft' : 'hover:bg-muted'}`}>Annual <span className="ml-1 text-[11px] font-semibold text-accent-teal">Save 20%</span></button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Free trial */}
              <Card className="rounded-[18px] shadow-soft border border-border/60 bg-card/90">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl tracking-tight">Free trial</CardTitle>
                  <div className="flex items-baseline gap-2"><span className="text-3xl font-bold tracking-tight">£0</span><span className="text-sm text-muted-foreground">/start</span></div>
                  <p className="text-sm text-muted-foreground">First 3 questions + sample report.</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Sample IQ question set</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Mini report preview</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> No card required</li>
                  </ul>
                  <Button variant="outline" className="w-full rounded-xl" size="lg" onClick={() => setSampleOpen(true)}>Try free</Button>
                </CardContent>
              </Card>
              {/* Starter */}
              <Card className="rounded-[18px] shadow-soft border border-border/60 bg-card/90">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl tracking-tight">Starter</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold tracking-tight">£9.99</span>
                    <span className="text-sm text-muted-foreground">/month*</span>
                  </div>
                  <p className="text-sm text-muted-foreground">IQ test + basic report and certificate.</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Complete IQ assessment</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Shareable certificate</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Core insights</li>
                  </ul>
                  <Button variant="hero" className="w-full rounded-xl" size="lg">Get started</Button>
                </CardContent>
              </Card>

              {/* Pro */}
              <Card className="rounded-[18px] shadow-soft border border-primary/30 ring-1 ring-primary/20 bg-card/90">
                <CardHeader className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary/90">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 ring-1 ring-primary/20">Popular</span>
                  </div>
                  <CardTitle className="text-2xl tracking-tight">Pro</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold tracking-tight">£24.99</span>
                    <span className="text-sm text-muted-foreground">/month*</span>
                  </div>
                  <p className="text-sm text-muted-foreground">All tests + deep analytics + training library.</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Full assessment suite</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Timing/accuracy breakdown</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> 20+ hours expert lessons</li>
                  </ul>
                  <Button variant="hero" className="w-full rounded-xl" size="lg">Choose Pro</Button>
                </CardContent>
              </Card>
            </div>
            {/* Comparison table */}
            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-muted-foreground">
                  <tr>
                    <th className="py-3">Features</th>
                    <th className="py-3">Free trial</th>
                    <th className="py-3">Starter</th>
                    <th className="py-3">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    ['Complete IQ test', false, true, true],
                    ['Full report + certificate', false, true, true],
                    ['Benchmarks & percentiles', false, true, true],
                    ['Training games', false, false, true],
                    ['History & trends', false, false, true],
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-3">{row[0] as string}</td>
                      {[1,2,3].map((col) => (
                        <td key={col} className="py-3">{row[col] ? <Check className="h-4 w-4 text-accent-teal" aria-label="included" /> : <span className="text-muted-foreground">—</span>}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">* For illustration only.</p>
          </div>
        </section>
      </Reveal>

      {/* Boost Your Abilities - split feature list */}
      <Reveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-3">Build skills that stick</h2>
              <p className="text-base md:text-lg text-muted-foreground">Short, focused practice and expert guidance designed to improve reasoning, speed and accuracy.</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-soft">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5" /> Guided video micro‑lessons (20+ hours)</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5" /> Brain training sets with adaptive difficulty</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5" /> 150+ puzzle drills for pattern and logic</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5" /> Track accuracy, timing and streaks</li>
                  </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section id="faq" className="py-24 bg-muted/40 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-2">Quick answers to the most common questions</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Column 1 */}
              <div className="space-y-3">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q1" className="rounded-xl border border-border/60 bg-white/80 px-6">
                    <AccordionTrigger className="text-left py-5 font-medium">
                      What if I’m not satisfied with the program?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">We offer support and guidance to ensure you get value from your assessment and learning path.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2" className="rounded-xl border border-border/60 bg-white/80 px-6">
                    <AccordionTrigger className="text-left py-5 font-medium">
                      How do I cancel my subscription?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">You can manage or cancel anytime from your account settings. Your access remains active until the end of the billing period.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3" className="rounded-xl border border-border/60 bg-white/80 px-6">
                    <AccordionTrigger className="text-left py-5 font-medium">
                      How long does the IQ test take?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">Typically 10–15 minutes depending on your pace. Each question has a short timer to keep the flow smooth.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* Column 2 */}
              <div className="space-y-3">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q4" className="rounded-xl border border-border/60 bg-white/80 px-6">
                    <AccordionTrigger className="text-left py-5 font-medium">
                      Can I retake tests?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">Yes. You can retake non-IQ tests anytime. IQ tests are best taken fresh for accuracy, so we recommend spacing attempts.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q5" className="rounded-xl border border-border/60 bg-white/80 px-6">
                    <AccordionTrigger className="text-left py-5 font-medium">
                      Can I access myIQ on multiple devices?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">Absolutely. Your progress syncs across devices as long as you’re signed in.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q6" className="rounded-xl border border-border/60 bg-white/80 px-6">
                    <AccordionTrigger className="text-left py-5 font-medium">
                      Is my data secure?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">Yes. We use industry-standard encryption and follow best practices to protect your data and privacy.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* IQ insights - spectrum + domains + milestones */}
      <Reveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">IQ insights</h2>
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {/* Spectrum */}
              <Card className="md:col-span-2 border border-border/60 shadow-soft">
                <CardContent className="p-6 space-y-5">
                  <div className="text-sm font-semibold">Population spectrum (reference)</div>
                  <div className="space-y-3">
                    <div className="h-3 w-full rounded-full bg-muted relative overflow-hidden">
                      {/* segmented spectrum */}
                      <div className="absolute inset-y-0 left-0 w-1/6 bg-muted" />
                      <div className="absolute inset-y-0 left-1/6 w-1/6 bg-primary/20" />
                      <div className="absolute inset-y-0 left-2/6 w-2/6 bg-primary/35" />
                      <div className="absolute inset-y-0 right-0 w-1/6 bg-primary/20" />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      {['70', '85', '100', '115', '130'].map((t) => (<span key={t}>{t}</span>))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-block h-2 w-2 rounded-full bg-accent" /> Reference markers only
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Domains */}
              <Card className="border border-border/60 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold mb-3">Core domains</div>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: 'Logic', v: 78 },
                      { label: 'Pattern', v: 72 },
                      { label: 'Spatial', v: 64 },
                      { label: 'Memory', v: 70 },
                      { label: 'Speed', v: 66 },
                    ].map((d, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between"><span>{d.label}</span><span className="text-xs text-muted-foreground">{d.v}%</span></div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden"><div className="h-1.5 bg-accent" style={{ width: `${d.v}%` }} /></div>
                      </div>
                    ))}
                      </div>
                </CardContent>
              </Card>
                    </div>
            {/* Milestones */}
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                { title: 'Certified score', desc: 'Shareable certificate with verification ID' },
                { title: 'Timing & accuracy', desc: 'See where you were fast and precise' },
                { title: 'Practice roadmap', desc: 'Targeted plan to raise weak domains' },
              ].map((m, i) => (
                <Card key={i} className="border border-border/60 shadow-soft">
                  <CardContent className="p-5">
                    <div className="font-semibold">{m.title}</div>
                    <div className="text-sm text-muted-foreground">{m.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

    </div>
  );
};