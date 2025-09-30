import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, Sector } from 'recharts';

type CountryDatum = { name: string; value: number; fill?: string };

interface CountryIQDonutProps {
  title?: string;
  subtitle?: string;
  data?: CountryDatum[];
  variant?: 'card' | 'bare';
}

// Refined rose-to-coral palette aligned to theme
const DEFAULT_DATA: CountryDatum[] = [
  { name: 'Asia', value: 104, fill: 'hsl(346 85% 46%)' },
  { name: 'Europe', value: 102, fill: 'hsl(347 82% 56%)' },
  { name: 'North America', value: 100, fill: 'hsl(348 88% 68%)' },
  { name: 'South America', value: 96, fill: 'hsl(348 92% 78%)' },
  { name: 'Africa', value: 84, fill: 'hsl(345 64% 60%)' },
  { name: 'Oceania', value: 99, fill: 'hsl(345 72% 65%)' },
];

export function CountryIQDonut({ title = 'Global IQ snapshot', subtitle = 'Average IQ by country (reference)', data = DEFAULT_DATA, variant = 'card' }: CountryIQDonutProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const avg = Math.round(total / data.length);

  const config = Object.fromEntries(
    data.map((d) => [d.name, { label: d.name, color: d.fill }])
  );

  const Chart = (
    <div className="relative">
      {/* soft glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(60%_60%_at_50%_45%,hsl(346_85%_54%_/0.18),transparent),radial-gradient(40%_40%_at_80%_70%,hsl(193_85%_40%_/0.12),transparent)] blur-xl" />
      <ChartContainer className="aspect-[1/1]" config={config}>
        <PieChart>
          {/* defs for subtle ring shadow */}
          <defs>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
            </filter>
          </defs>
          <ChartTooltip cursor={false} content={<ChartTooltipContent nameKey="name" />} />
          {/* Background track ring */}
          <Pie
            data={[{ name: 'track', value: 1 }]}
            dataKey="value"
            innerRadius={78}
            outerRadius={124}
            startAngle={90}
            endAngle={-270}
            isAnimationActive={false}
            stroke="none"
          >
            <Cell fill="hsl(0 0% 96% / 0.9)" />
          </Pie>
          {/* Actual data slices */}
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={80}
            outerRadius={122}
            startAngle={90}
            endAngle={-270}
            paddingAngle={1.2}
            cornerRadius={5}
            stroke="#fff"
            strokeWidth={1}
            onMouseLeave={() => setActiveIndex(null)}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            activeIndex={activeIndex ?? -1}
            activeShape={(p: any) => <Sector {...p} outerRadius={p.outerRadius + 6} />}
            filter="url(#softShadow)"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill}
                opacity={activeIndex === null || activeIndex === index ? 1 : 0.55}
              />
            ))}
          </Pie>
          {variant !== 'bare' ? (
            <ChartLegend verticalAlign="bottom" content={<ChartLegendContent />} />
          ) : null}
        </PieChart>
      </ChartContainer>
      {/* Center counter */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="text-[28px] font-bold leading-none tracking-tight">{activeIndex !== null ? data[activeIndex].value : avg}</div>
          <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[11px] text-muted-foreground ring-1 ring-border/60">
            <span>{activeIndex !== null ? data[activeIndex].name : 'Avg IQ'}</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (variant === 'bare') {
    return (
      <div className="rounded-3xl bg-transparent shadow-none border-0 p-0">
        {Chart}
      </div>
    );
  }

  return (
    <Card className="border border-border/60 shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs text-muted-foreground">{subtitle}</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold leading-none">{avg}</div>
            <div className="text-xs text-muted-foreground">Average</div>
          </div>
        </div>
        {Chart}
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {data.map((d) => (
            <div key={d.name} className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2">
              <span className="font-medium">{d.name}</span>
              <span className="text-xs text-muted-foreground">{d.value} IQ</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CountryIQDonut;


