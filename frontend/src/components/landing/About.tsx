import { KeyRound, MapPin, User } from "lucide-react";
import { Reveal } from "./Reveal";

const CHIPS = [
  { icon: User, label: "18 лет" },
  { icon: MapPin, label: "г. Самара" },
  { icon: KeyRound, label: "Разработка под ключ" },
];

export function About() {
  return (
    <section id="about" data-testid="about-me-section" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Обо мне</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Кто делает ваш проект
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-10">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-blue-600/20 via-sky-400/20 to-blue-600/20 blur-xl" aria-hidden="true" />
            <img
              src="/platon.jpg"
              alt="Платон — разработчик лендингов и веб-приложений"
              data-testid="about-me-photo"
              loading="lazy"
              className="relative aspect-[16/9] w-full rounded-[1.75rem] border border-slate-200 object-cover object-top shadow-2xl shadow-blue-900/20"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap gap-3">
            {CHIPS.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                <c.icon size={15} />
                {c.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div data-testid="about-me-bio" className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              Привет! Меня зовут Платон. Я занимаюсь разработкой лендингов и
              простых веб-приложений под ключ.
            </p>
            <p>
              Мне 18 лет, я живу в Самаре и уже имею большой практический опыт в
              создании сайтов и цифровых продуктов. Я не просто собираю страницу
              из готовых блоков — моя задача заключается в том, чтобы в результате
              клиент получил готовый инструмент для своего бизнеса, который
              выглядит профессионально, понятно доносит ценность продукта и
              помогает получать заявки.
            </p>
            <p>
              Я беру проект под ключ: от идеи и структуры до разработки, адаптации
              под мобильные устройства и финальной настройки. При этом стараюсь
              говорить с клиентом простым языком, без лишнего технического жаргона —
              вы понимаете, что именно мы делаем и за что платите.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
