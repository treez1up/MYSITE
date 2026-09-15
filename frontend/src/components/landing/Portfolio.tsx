import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const APPS = [
  {
    testId: "portfolio-app-rashody",
    icon: "/apps/rashody.jpg",
    name: "Расходы — личный бюджет",
    desc: "Калькулятор расходов для удобного контроля личных финансов.",
    link: "https://apps.apple.com/ru/app/%D1%80%D0%B0%D1%81%D1%85%D0%BE%D0%B4%D1%8B-%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82/id1383365251",
  },
  {
    testId: "portfolio-app-kredity",
    icon: "/apps/kredity.jpg",
    name: "Кредиты: кредитный калькулятор",
    desc: "Быстрый расчёт платежей и переплат по кредитам.",
    link: "https://apps.apple.com/ru/app/%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D1%8B-%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80/id1522711172",
  },
  {
    testId: "portfolio-app-samara",
    icon: "/apps/samara.jpg",
    name: "Открой свою Самару",
    desc: "Аудиогид по Самаре — помогает узнавать больше о городе и его достопримечательностях.",
    link: "https://apps.apple.com/ru/app/%D0%BE%D1%82%D0%BA%D1%80%D0%BE%D0%B9-%D1%81%D0%B2%D0%BE%D1%8E-%D1%81%D0%B0%D0%BC%D0%B0%D1%80%D1%83/id6476664934",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" data-testid="portfolio-section" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Портфолио</p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Проекты, которыми я горжусь
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-slate-500 md:text-lg">
            <p>
              За время работы я успел поучаствовать в создании множества различных
              проектов. Ниже я собрал три проекта, которыми особенно горжусь — это
              приложения, опубликованные в App Store.
            </p>
            <p>
              Среди них есть аудиогид по Самаре, который помогает пользователям
              узнавать больше о городе и его достопримечательностях, а также
              калькулятор расходов для удобного контроля личных финансов.
            </p>
            <p>
              Это лишь небольшая часть моих работ, но именно эти три проекта
              хорошо демонстрируют мой опыт и подход к созданию удобных и
              функциональных приложений.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {APPS.map((app, i) => (
            <Reveal key={app.testId} delay={0.12 * i}>
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={app.testId}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/15"
              >
                <img
                  src={app.icon}
                  alt={`Иконка приложения «${app.name}»`}
                  loading="lazy"
                  className="h-20 w-20 rounded-[1.4rem] border border-slate-200 shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <h3 className="mt-5 font-heading text-xl font-extrabold tracking-tight text-slate-900">
                  {app.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{app.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors group-hover:text-blue-700">
                  Смотреть в App Store
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p
            data-testid="portfolio-appstore-note"
            className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-4 text-sm leading-relaxed text-blue-800"
          >
            Примечание: приложения опубликованы только в App Store — открыть и
            установить их можно только с устройств Apple (iPhone или iPad).
          </p>
        </Reveal>
      </div>
    </section>
  );
}
