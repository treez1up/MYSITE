import { Bot, Lightbulb, Palette, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: Lightbulb,
    day: "День 1",
    title: "Анализ и концепт",
    desc: "Разбираем вашу задачу, ИИ помогает собрать структуру и референсы за часы, а не дни.",
  },
  {
    icon: Palette,
    day: "День 2–3",
    title: "Дизайн и прототип",
    desc: "Генерируем дизайн-концепты, выбираем лучший и доводим его до pixel-perfect вручную.",
  },
  {
    icon: Bot,
    day: "День 4–5",
    title: "AI-разработка",
    desc: "Нейросети пишут основу кода, я контролирую архитектуру, чистоту и каждую интеграцию.",
  },
  {
    icon: Rocket,
    day: "День 6–7",
    title: "Тестирование и запуск",
    desc: "Проверяем на всех устройствах, подключаем домен и запускаем проект в работу.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#0B132B] py-20 sm:py-28">
      <div
        className="absolute inset-x-0 top-0 h-64"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.25), transparent)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">Как это работает</p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Почему производство занимает до недели
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Основную часть работы выполняет искусственный интеллект: он генерирует
            структуру, дизайн-концепты и код. Я направляю его, собираю всё воедино
            и довожу до идеала вручную — поэтому проект, на который у студии уходит
            месяц, здесь готов за 7 дней.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={0.12 * i}>
              <div className="group h-full rounded-3xl border border-slate-800 bg-white/[0.04] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <step.icon size={22} />
                  </span>
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">
                    {step.day}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-slate-800 pt-8">
            {["До 7 дней на проект", "В 5 раз быстрее студий", "Полностью под ключ"].map((t) => (
              <span key={t} className="flex items-center gap-2.5 text-sm font-semibold text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
