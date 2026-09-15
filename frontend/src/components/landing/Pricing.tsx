import { Globe, MessageCircle, RefreshCw, Smartphone, UploadCloud } from "lucide-react";
import { Reveal } from "./Reveal";

interface PricingProps {
  onContact: () => void;
}

const PLANS = [
  {
    testId: "pricing-card-site",
    icon: Globe,
    title: "Сайт",
    price: "от 3 000 ₽",
    desc: "Лендинг или сайт для бизнеса под ключ: дизайн, разработка, адаптация под телефоны и запуск.",
    note: "Точная цена зависит от уровня сложности — называю её после короткого обсуждения задачи.",
  },
  {
    testId: "pricing-card-app",
    icon: Smartphone,
    title: "Приложение",
    price: "от 5 000 ₽",
    desc: "Веб-приложение или сервис с личными кабинетами, формами и интеграциями под ваши процессы.",
    note: "Точная цена зависит от уровня сложности — называю её после короткого обсуждения задачи.",
  },
];

const EXTRAS = [
  {
    icon: UploadCloud,
    title: "Публикация на платформы",
    desc: "Помогу разместить приложение в App Store или настроить хостинг и домен для сайта — за дополнительную разовую плату.",
  },
  {
    icon: RefreshCw,
    title: "Поддержка и обновления",
    desc: "За ежемесячную плату могу вести ваш проект: обновлять информацию, следить за работой и вносить изменения.",
  },
];

export function Pricing({ onContact }: PricingProps) {
  return (
    <section id="pricing" data-testid="pricing-section" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Цены</p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Честные цены без сюрпризов
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
            Стоимость фиксирую до начала работ — вы сразу понимаете, за что платите,
            и никаких доплат в процессе.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.testId} delay={0.15 * i}>
              <article
                data-testid={plan.testId}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/15"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 p-3.5 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <plan.icon size={24} />
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700">
                    под ключ
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-extrabold tracking-tight text-slate-900">
                  {plan.title}
                </h3>
                <p className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-blue-600">
                  {plan.price}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500">{plan.desc}</p>
                <p className="mt-4 rounded-2xl bg-slate-50 px-5 py-3.5 text-xs leading-relaxed text-slate-500">
                  {plan.note}
                </p>
                <button
                  data-testid={`${plan.testId}-cta`}
                  onClick={onContact}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  <MessageCircle size={16} />
                  Обсудить проект
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {EXTRAS.map((extra, i) => (
            <Reveal key={extra.title} delay={0.15 * i}>
              <div className="flex h-full items-start gap-5 rounded-3xl border border-blue-100 bg-blue-50/60 p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                  <extra.icon size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">{extra.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{extra.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
