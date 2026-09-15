import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { SiTelegram, SiVk } from "@icons-pack/react-simple-icons";

const CHANNELS = [
  {
    name: "Telegram",
    handle: "@kyivmeansvodka",
    link: "https://t.me/kyivmeansvodka",
    bg: "#229ED9",
    testId: "contact-telegram-link",
    icon: <SiTelegram size={26} color="#FFFFFF" />,
  },
  {
    name: "ВКонтакте",
    handle: "vk.ru/morfin105",
    link: "https://vk.ru/morfin105",
    bg: "#0077FF",
    testId: "contact-vk-link",
    icon: <SiVk size={26} color="#FFFFFF" />,
  },
  {
    name: "Max",
    handle: "max.ru — личный чат",
    link: "https://max.ru/u/f9LHodD0cOI2JkTvwaaxWpAF-3cahSJur6Jyv_T7WaLrKTHhGrgc9TL5tBA",
    bg: "#0B132B",
    testId: "contact-max-link",
    icon: (
      <span className="font-heading text-xl font-extrabold text-white leading-none">M</span>
    ),
  },
];

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

export function ContactDialog({ open, onClose }: ContactDialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-[#0B132B]/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            data-testid="social-contact-dialog"
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-blue-900/20"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
          >
            <button
              data-testid="contact-dialog-close"
              onClick={onClose}
              aria-label="Закрыть"
              className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={18} />
            </button>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">
              Связаться со мной
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Выберите удобный мессенджер — обычно отвечаю в течение 15 минут
            </p>
            <div className="mt-6 space-y-3">
              {CHANNELS.map((c) => (
                <a
                  key={c.name}
                  data-testid={c.testId}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/10"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md"
                    style={{ backgroundColor: c.bg }}
                  >
                    {c.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-heading font-bold text-slate-900">{c.name}</span>
                    <span className="block truncate text-sm text-slate-500">{c.handle}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
