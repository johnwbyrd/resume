import { ClientThemeSwitcher } from './ClientThemeSwitcher';

interface HeaderProps {
  initialName?: string;
  initialLabel?: string;
}

export function Header({ initialName, initialLabel }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-info">
            <h1 className="name">{initialName}</h1>
            <p className="label">{initialLabel}</p>
          </div>
          
          <ClientThemeSwitcher />
        </div>
      </div>
    </header>
  );
} 