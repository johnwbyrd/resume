'use client';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useResume } from '@/data/ResumeContext';

export function Header() {
  const { resume } = useResume();
  const name = resume?.basics?.name || 'John Byrd';
  const label = resume?.basics?.label || 'Software Development Executive';

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-info">
            <h1 className="name">{name}</h1>
            <p className="label">{label}</p>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
} 