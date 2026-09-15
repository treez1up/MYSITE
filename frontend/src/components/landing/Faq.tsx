import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQ = [
  {
    q: "Сколько стоит проект?",
    a: "Стоимость зависит от задач: лендинг дешевле, приложение со сложной логикой дороже. После короткого обсуждения я называю точную цену и фиксирую её до старта работ — никаких доплат в процессе.",
  },
  {
    q: "Правда, что проект будет готов за 7 дней?",
    a: "Да. Основную часть работы выполняет искусственный интеллект под моим контролем, поэтому производство идёт в разы быстрее, чем в классической студии. Срок фиксируем до старта — и я его соблюдаю.",
  },
  {
    q: "Что нужно от меня для старта?",
    a: "Достаточно описать ваш бизнес и задачу своими словами. Если есть логотип, тексты или примеры сайтов, которые нравятся, — пришлите. Всё остальное я беру на себя: структуру, дизайн, тексты и настройку.",
  },
  {
    q: "Что будет после запуска? Есть ли поддержка?",
    a: "После запуска я не исчезаю: первые две недели бесплатно вношу небольшие правки и помогаю с любыми вопросами по сайту. Дальнейшая поддержка и развитие проекта — по договорённости.",
  },
  {
    q: "Кому принадлежит сайт и код?",
    a: "Полностью вам. После сдачи проекта я передаю все доступы: домен, хостинг, исходный код. Вы никак от меня не зависите.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" data-testid="faq-section" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Частые вопросы</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Остались вопросы? Вот ответы
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {FAQ.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={0.08 * i}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                    open ? "border-blue-300 shadow-lg shadow-blue-600/10" : "border-slate-200"
                  }`}
                >
                  <button
                    data-testid={`faq-question-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-bold text-slate-900 sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        open ? "rotate-180 bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p data-testid={`faq-answer-${i}`} className="px-6 pb-6 text-sm leading-relaxed text-slate-500 sm:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
