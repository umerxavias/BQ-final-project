import { ReactNode } from 'react';
import { SiteNavbar } from '@/components/SiteNavbar';
import { SiteFooter } from '@/components/SiteFooter';

interface LayoutProps {
  children: ReactNode;
  onStartQuiz?: () => void;
  hideFooter?: boolean;
  hideNavActions?: boolean;
}

export const Layout = ({ children, onStartQuiz, hideFooter = false, hideNavActions = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNavbar onStartQuiz={onStartQuiz} hideActions={hideNavActions} centerBrand={hideNavActions} />
      <main className="flex-1 min-h-0">
        {children}
      </main>
      {!hideFooter && <SiteFooter />}
    </div>
  );
};


