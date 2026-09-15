import { motion } from "motion/react";
import { ArrowDown, MessageCircle, Zap } from "lucide-react";

interface HeroProps {
  onContact: () => void;
}

export function Hero({ onContact }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-28 sm:pt-36">
      <div className="bg-grid-blue absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -20%, rgba(59,130,246,0.22), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="animate-float absolute -left-24 top-40 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" aria-hidden="true" />
      <div className="animate-float-delayed absolute -right-24 top-24 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            ИИ + разработка · запуск до 7 дней
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Сайты и приложения для бизнеса{" "}
            <span className="text-blue-600">за одну неделю</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg"
          >
            Создаю лендинги и веб-приложения под ключ. Искусственный интеллект
            ускоряет производство в разы — я контролирую качество каждой детали,
            чтобы вы получили инструмент, который продаёт.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-contact-button"
              onClick={onContact}
              className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/40"
            >
              <MessageCircle size={19} className="transition-transform duration-300 group-hover:rotate-12" />
              Связаться со мной
            </button>
            <a
              href="#services"
              data-testid="hero-services-link"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-700 hover:shadow-lg hover:shadow-blue-600/10"
            >
              <Zap size={17} />
              Что я делаю
              <ArrowDown size={15} className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
