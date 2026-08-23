import { loadResumeData } from '@/utils/loadResumeData';

export function Header() {
  const { basics } = loadResumeData();
  if (!basics) return null;

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-info">
            <h1 className="name">{basics.name}</h1>
            <p className="label">{basics.label}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
