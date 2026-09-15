# PRD — Лендинг Платона (сайты и приложения для бизнеса)

## Original problem statement
Лендинг в современном стиле о быстрой разработке приложений/лендингов на заказ. Сверху — выбор услуг (сайты и приложения для бизнеса) с красивыми картинками. Ниже — блок о том, что производство занимает до недели благодаря ИИ. На видном месте кнопка «Связаться со мной», открывающая иконки Max, Telegram, ВКонтакте со ссылками:
- Telegram: https://t.me/kyivmeansvodka
- ВКонтакте: https://vk.ru/morfin105
- Max: https://max.ru/u/f9LHodD0cOI2JkTvwaaxWpAF-3cahSJur6Jyv_T7WaLrKTHhGrgc9TL5tBA

Внизу — блок «Обо мне» с фото (приложено пользователем) и текстом биографии (Платон, 18 лет, Самара, разработка под ключ). Стиль: бело-синие цвета, приятные анимации движения блоков.

## Architecture
- Frontend-only landing: React 19 + Vite + Tailwind v4 + motion/react. Backend (FastAPI + Mongo) untouched, only health endpoint used for smoke check.
- `src/pages/Home.tsx` — page assembly + contact dialog state.
- `src/components/landing/`: Header, Hero, ServiceCards, Process, About, Footer, ContactDialog, Reveal (scroll-animation wrapper).
- Photo: `/public/platon.jpg` (user-provided attachment).
- Fonts: Manrope Variable (headings) + IBM Plex Sans (body), both with Cyrillic subsets.
- Design guidelines: `/app/design_guidelines.json`.

## User personas
- Small business owner who needs a landing/app fast and wants to contact Platon via messenger.

## Core requirements (static)
1. Hero with service choice cards (Сайты / Приложения) with images.
2. Section explaining AI-powered production in up to a week.
3. Prominent «Связаться со мной» button → popup with Telegram/VK/Max links.
4. About section with photo above the exact bio text.
5. White-blue style, smooth block animations.

## Implemented (2026-09-15)
- Full landing page: glass header, animated hero, two service cards with Unsplash imagery and timeline badges, dark AI-process section (4 day-by-day steps), About with user photo + exact bio, dark footer with CTA.
- ContactDialog: custom motion modal with branded cards for Telegram / VK / Max, correct links, Escape/overlay close.
- White-blue theme tokens, grid background, floating blobs, scroll-reveal animations (motion/react).
- All interactive elements carry data-testid attributes.
- Verified: `yarn typecheck` clean; API 200 via public URL; browser pass (dialog links, photo load) green.
- Portfolio section (`Portfolio.tsx`): user's exact intro text, 3 App Store app cards (Расходы — личный бюджет, Кредиты: кредитный калькулятор, Открой свою Самару) with real app icons fetched via iTunes Lookup API (stored in `/public/apps/`), links to the given App Store URLs, note that apps are Apple-only.
- FAQ accordion (`Faq.tsx`): 5 questions (pricing, 7-day guarantee, start inputs, post-launch support, code ownership), custom animated accordion.
- Header nav extended with Портфолио and Вопросы anchors.

## Backlog / next tasks
- P1: Project cost calculator widget (from design guidelines).
- P2: Lead form that sends enquiries to Telegram bot.
- P2: OG/meta preview image for sharing in messengers.
