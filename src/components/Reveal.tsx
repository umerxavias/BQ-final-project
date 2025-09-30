import { ReactNode, useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
}

export const Reveal = ({ children, delayMs = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const show = () => setVisible(true);
            if (delayMs > 0) {
              const id = window.setTimeout(show, delayMs);
              return () => window.clearTimeout(id);
            }
            setVisible(true);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={
        `transition-all duration-700 ease-out will-change-transform ` +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')
      }
    >
      {children}
    </div>
  );
};


