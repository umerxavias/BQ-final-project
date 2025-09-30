import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, ShieldCheck, LineChart, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero with on-brand gradient background */}
      <section className="relative overflow-hidden py-28 md:py-32">
        {/* gradient bg */}
        <div className="absolute inset-0 bg-quiz-gradient" />
        {/* decorative overlays */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(ellipse at top left, rgba(255,255,255,0.15), transparent 40%), radial-gradient(ellipse at bottom right, rgba(0,0,0,0.25), transparent 45%)' }} />

        <div className="relative max-w-5xl mx-auto text-center px-4 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium mb-4 ring-1 ring-white/20">
            <Brain className="h-3.5 w-3.5" />
            About Brain Brew
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Assess. Understand. Improve.</h1>
          <p className="text-white/95 text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Boost your brain in ~10 minutes with science‑backed, human‑friendly tests.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* <Button variant="hero" size="lg" className="px-8 font-semibold">Start Your First Test</Button> */}
            <Button size="lg" className="px-8 bg-white/20 text-white backdrop-blur ring-1 ring-white/40 hover:bg-white/30 hover:text-white">Learn More</Button>
          </div>
        </div>

        {/* floating highlight stats */}
        <div className="relative max-w-5xl mx-auto mt-10 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-xl bg-white/10 text-white/90 px-4 py-3 ring-1 ring-white/15 text-center backdrop-blur-sm">
              <div className="text-xl md:text-2xl font-semibold">10–15m</div>
              <div className="text-[11px] md:text-xs opacity-80">Avg. test time</div>
            </div>
            <div className="rounded-xl bg-white/10 text-white/90 px-4 py-3 ring-1 ring-white/15 text-center backdrop-blur-sm">
              <div className="text-xl md:text-2xl font-semibold">3+</div>
              <div className="text-[11px] md:text-xs opacity-80">Assessment types</div>
            </div>
            <div className="rounded-xl bg-white/10 text-white/90 px-4 py-3 ring-1 ring-white/15 text-center backdrop-blur-sm">
              <div className="text-xl md:text-2xl font-semibold">100%</div>
              <div className="text-[11px] md:text-xs opacity-80">Mobile friendly</div>
            </div>
            <div className="rounded-xl bg-white/10 text-white/90 px-4 py-3 ring-1 ring-white/15 text-center backdrop-blur-sm">
              <div className="text-xl md:text-2xl font-semibold">Fast</div>
              <div className="text-[11px] md:text-xs opacity-80">Clear results</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Science‑informed */}
          <Card className="group shadow-soft border border-border/60 hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5">
            <CardHeader className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 px-2.5 py-1.5">
                <ShieldCheck className="h-6 w-6 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium">Science‑informed</span>
              </div>
              <CardTitle className="text-lg">Proven methods, continuously refined</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Built on established assessment principles and improved over time with data‑driven iteration.
            </CardContent>
          </Card>

          {/* Actionable insights */}
          <Card className="group shadow-soft border border-border/60 hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5">
            <CardHeader className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100 px-2.5 py-1.5">
                <LineChart className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium">Actionable insights</span>
              </div>
              <CardTitle className="text-lg">Practical, jargon‑free feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Clear, step‑by‑step guidance that turns your results into next actions you can actually take.
            </CardContent>
          </Card>

          {/* Human‑centered */}
          <Card className="group shadow-soft border border-border/60 hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5">
            <CardHeader className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-lg bg-rose-50 text-rose-700 ring-1 ring-rose-100 px-2.5 py-1.5">
                <Users className="h-6 w-6 text-rose-600 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium">Human‑centered</span>
              </div>
              <CardTitle className="text-lg">Inclusive, fast, and friendly</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Designed to be welcoming and accessible, with tests you can finish in minutes on any device.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* removed duplicate stats section to avoid repetition */}
    </Layout>
  );
};

export default About;


