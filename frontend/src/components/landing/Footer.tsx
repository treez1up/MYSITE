import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

interface FooterProps {
  onContact: () => void;
}

export function Footer({ onContact }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-[#0B132B] py-20">
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(59,130,246,0.22), transparent)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Давайте создадим ваш проект
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
            Напишите в удобный мессенджер — обсудим задачу и уже через неделю
            ваш сайт или приложение будет работать на бизнес.
          </p>
          <button
            data-testid="footer-contact-button"
            onClick={onContact}
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <MessageCircle size={19} />
            Связаться со мной
          </button>
        </Reveal>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row">
          <span className="font-heading font-bold text-slate-300">
            Платон<span className="text-blue-500">.dev</span>
          </span>
          <span>г. Самара · работаю по всей России</span>
          <span>© 2026 · Все права защищены</span>
        </div>
      </div>
    </footer>
  );
}
