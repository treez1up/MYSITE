import { MessageCircle } from "lucide-react";

interface HeaderProps {
  onContact: () => void;
}

const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "Как это работает", href: "#process" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Обо мне", href: "#about" },
  { label: "Вопросы", href: "#faq" },
];

export function Header({ onContact }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" data-testid="header-logo" className="font-heading text-lg font-extrabold tracking-tight text-slate-900">
          Платон<span className="text-blue-600">.dev</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-${item.href.slice(1)}`}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          data-testid="navbar-contact-button"
          onClick={onContact}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
        >
          <MessageCircle size={16} />
          Связаться со мной
        </button>
      </div>
    </header>
  );
}
