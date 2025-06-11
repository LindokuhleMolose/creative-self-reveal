
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
      {children}
    </div>
  );
};

export default PageTransition;
