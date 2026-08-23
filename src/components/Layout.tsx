import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
}
