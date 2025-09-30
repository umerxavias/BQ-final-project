import { Button } from '@/components/ui/button';
import { Brain, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const SiteNavbar = ({ onStartQuiz, hideActions = false, centerBrand = false }: { onStartQuiz?: () => void; hideActions?: boolean; centerBrand?: boolean }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className={`mx-auto flex h-14 max-w-6xl items-center ${centerBrand || hideActions ? 'justify-center' : 'justify-between'} px-4`}>
        <div className="flex items-center gap-3 font-semibold group cursor-pointer select-none" onClick={() => navigate('/')}> 
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold text-foreground">Brain Brew</span>
        </div>
        {!hideActions && (
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={toggleTheme} className="hover:bg-primary/10 hover:text-primary transition-colors duration-200" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" onClick={() => navigate('/contact')} className="hidden md:inline-flex hover:bg-primary/10 hover:text-primary transition-colors duration-200">Contact</Button>
            <Button variant="ghost" onClick={() => navigate('/login')} className="hidden md:inline-flex hover:bg-primary/10 hover:text-primary transition-colors duration-200">Log in</Button>
            <Button variant="hero" onClick={onStartQuiz} className="shadow-md hover:shadow-lg transition-shadow duration-200">Start Test</Button>
          </div>
        )}
      </div>
    </header>
  );
};