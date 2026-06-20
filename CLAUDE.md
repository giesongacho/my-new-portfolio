# CLAUDE.md — Developer Portfolio

Personal developer portfolio: single-page, animated, modern, dark-themed, high-resolution ("4K-crisp") UI.

## Tech Stack

- **Build tool:** Vite
- **Framework:** React.js (JavaScript, not TypeScript)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll reveals, parallax, hero motion) + Tailwind transitions
- **Icons:** `react-icons` (brand/skill logos) + `lucide-react` (UI icons)
- **Design language:** "Claude design" — modern, clean, glassmorphism, gradient accents, generous spacing, smooth micro-interactions. Dark mode first.

## Goals

- Showcase: **Hero**, **Skills**, **Projects**, **Work Experience**.
- Feel premium and modern: smooth animations, responsive down to mobile, crisp on high-DPI / 4K displays.
- Fast (Vite), accessible, deployable as a static site.

## Page Sections

1. **Navbar** — sticky, blurred glass, smooth-scroll anchors, active-section highlight (full nav at `lg`+, hamburger below).
2. **Hero** — name, role/title, short tagline, CTA buttons (View Work, Contact), animated gradient/particle background, subtle entrance motion.
3. **Skills** — three groups (Frontend, Backend, Tools), animated logo grid, hover effects.
4. **Projects** — feature cards with screenshots, descriptions, tech-stack chips, links; image lightbox (portaled to body).
5. **Work Experience** — vertical animated timeline.
6. **Certificates** — credential cards; image thumbnail for the Telpro COE, branded card for the React PDF. Files in `public/certificates/`.
7. **Contact / Footer** — email, socials, copyright.

## Certificates

- **Web Development with React.js** — The Coding School × The Alvarez Foundation (Direcho Trabaho Program), Jun 2025. File: `public/certificates/react-certificate.pdf`.
- **Certificate of Employment** — Telpro, Full-Stack Developer (May 2024 – May 2026), May 2026. File: `public/certificates/telpro-coe.jpg`.

## Skills Data

- **Frontend:** HTML, CSS, Tailwind, Bootstrap, Ant Design, Shadcn, JavaScript, React.js
- **Backend:** Node.js, Express.js, Sequelize ORM
- **Tools & DevOps:** GitHub, RESTful API, Postman, Docker, VPS, Linux (Ubuntu), PostgreSQL, MySQL, Playwright, n8n, Claude Code, OpenAI, MCPs

## Projects Data

> Note: both projects below are **personal projects** (built independently, not Telpro work).

### 1. Sinking Fund System
Financial management dashboard for a community/cooperative sinking fund.
- **Features:** Sidebar dashboard with KPI cards (Active Members, Current Heads, Contributions, Available Funds, Interest Earnings, Balances, Interest Yield, Total Income); loan management (Requested Loans, Balance Loans); member management; interest tracking.
- **Stack:** JavaScript, Tailwind, Ant Design, Axios, React.js, Node.js, Sequelize ORM, MySQL, Express.js
- **Screenshot:** `Screenshot 2026-06-20 130454.png` (dashboard with colorful KPI cards)

### 2. G-WiFi — PisoWiFi Ecosystem
Live: **https://g-wi-fi.com**

A full coin-operated PisoWiFi "business-in-a-box" with a cyberpunk/neon aesthetic. Three integrated parts:

- **a) Landing Page** — markets and sells device licenses (₱500), showcases supported boards (Orange Pi One, Orange Pi PC, Orange Pi Zero 3, Mini PC), license CTA + sign-up.
  - Stack: React.js, JavaScript, Tailwind, Vite
- **b) Management Platform** — Admin / Distributor / User roles for distributing & activating licenses bound to a specific board/device.
  - Stack: Next.js, JavaScript, Tailwind, Express.js, Prisma, PostgreSQL
- **c) Custom Operating System** — bootable OS images per board (Orange Pi One/PC/Zero 3, PC/Mini PC), Linux Debian-based, architectures armhf / arm64 / x86_64. Includes coin-operated captive portal (timer, Extend / Insert Coin, vouchers, rates).
  - Build tooling: Docker, qemu (ARM chroot), Python (tkinter), bash
- **Screenshots:** `Screenshot 2026-06-20 132422.png` (neon landing hero), `Screenshot 2026-06-20 132453.png` (board download page), `photo_2026-06-18_22-01-53 (2).jpg` (captive portal)

## Work Experience

Reverse-chronological (newest first), in `src/data/experience.js`:

1. **Telpro** — Full-Stack Web Developer (May 2024 – May 2026). Started Frontend, became Full-Stack after a few months. Work: n8n/Airtable automation, WordPress UI customization, "Turbo Admin" internal call-center system, and other client/internal projects.
2. **ON Semiconductor (Onsemi)** — Product Specialist (Jun 2018 – May 2024).
3. **Monde Nissin Corp** — Operator (Jun 2017 – Dec 2017).
4. **Mang Inasal** — Service Crew (dates TBD).
5. **Mandaue City Hall** — Encoder / OJT (dates TBD).

## Owner / Branding

- **Name:** Gieson Gacho
- **Role:** Full-Stack Developer
- **Email:** giesongacho1@gmail.com
- **TODO:** confirm GitHub / LinkedIn URLs (placeholders in `src/data/site.js`).

## Assets

Source screenshots live in `C:\Users\SCAMMER\Pictures\Screenshots\`. Copy the chosen ones into `src/assets/projects/` during the build.

## Conventions

- JavaScript + JSX (`.jsx`), no TypeScript.
- Functional components + hooks.
- Section components under `src/components/sections/`, shared UI under `src/components/ui/`.
- Data (skills, projects, experience) lives in `src/data/*.js` so content is editable without touching layout.
- Tailwind for all styling; centralize theme tokens (colors, fonts) in `tailwind.config.js`.
- Respect `prefers-reduced-motion`.
- **Responsive / fluid on every device** (small old phones → 4K desktop): mobile-first Tailwind, no fixed pixel widths that can overflow, `overflow-x: hidden` at the root, media capped at `max-width: 100%`. Breakpoints: base = phones, `sm` 640 = large phones, `md` 768 = tablets, `lg` 1024 = laptops, `xl`+ = desktop. Content is centered with `max-w-*` so it never stretches awkwardly on ultrawide/4K. Overlays (lightbox) are rendered via `createPortal` to `document.body` so they escape section stacking contexts and stay above the fixed navbar.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
