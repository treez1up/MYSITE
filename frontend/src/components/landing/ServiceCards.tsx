import { Check, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    testId: "service-card-sites",
    image:
      "https://images.unsplash.com/photo-1678690832324-67961a27ca92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwb24lMjBsYXB0b3AlMjBzY3JlZW58ZW58MHx8fHwxNzg5NDY5MzY4fDA&ixlib=rb-4.1.0&q=85",
    alt: "Современный сайт для бизнеса на ноутбуке",
    title: "Сайты для бизнеса",
    desc: "Лендинги и корпоративные сайты, которые выглядят дорого и приводят заявки.",
    features: ["Лендинги и многостраничники", "SEO и адаптивность", "Анимации и скорость загрузки"],
    time: "от 3 до 5 дней",
  },
  {
    testId: "service-card-apps",
    image:
      "https://images.unsplash.com/photo-1558655146-6c222b05fce4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwwfHx8fDE3ODk0NjkzOTR8MA&ixlib=rb-4.1.0&q=85",
    alt: "Интерфейс мобильного приложения на смартфоне",
    title: "Приложения для бизнеса",
    desc: "Веб-приложения и сервисы, которые автоматизируют процессы вашей компании.",
    features: ["Веб-приложения и сервисы", "Личные кабинеты и формы", "Интеграции и AI-функции"],
    time: "от 5 до 7 дней",
  },
];

export function ServiceCards() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Что я могу сделать</p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Выберите, что нужно вашему бизнесу
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.testId} delay={0.15 * i}>
              <article
                data-testid={s.testId}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/15"
              >
                <div className="relative h-60 overflow-hidden sm:h-72">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/50 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-blue-700 backdrop-blur">
                    <Clock size={13} />
                    {s.time}
                  </span>
                </div>
                <div className="p-7 sm:p-8">
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
