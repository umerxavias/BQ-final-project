import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // If target is the hidden IQ start button, click it to begin the quiz
        if (id === 'start-iq' && 'click' in el) {
          (el as HTMLButtonElement).click();
        }
      } else if (attempts < 100) {
        attempts += 1;
        setTimeout(tryScroll, 30); // keep trying for ~3s total
      }
    };
    tryScroll();
  }, [hash]);

  return null;
};

export const ScrollToTopOnRouteChange = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // handled by ScrollToHash
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};


