import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Cpu, FolderGit2, Briefcase, Award, Mail } from 'lucide-react'
import { site } from '../data/site'
import { SocialIcon } from '../lib/icons'

const links = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'skills', label: 'Skills', Icon: Cpu },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'experience', label: 'Experience', Icon: Briefcase },
  { id: 'certificates', label: 'Certificates', Icon: Award },
  { id: 'contact', label: 'Contact', Icon: Mail },
]

// Sidebar + item animation variants
const sidebar = {
  closed: { x: '100%', transition: { type: 'tween', duration: 0.25, ease: 'easeIn' } },
  open: {
    x: 0,
    transition: { type: 'spring', damping: 26, stiffness: 240, when: 'beforeChildren', staggerChildren: 0.06, delayChildren: 0.08 },
  },
}
const navItem = {
  closed: { opacity: 0, x: 28 },
  open: { opacity: 1, x: 0 },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock scroll + close on Escape while the mobile sidebar is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass shadow-card' : 'border border-transparent'
        }`}
      >
        <a href="#home" className="group flex items-center gap-2 font-mono text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-neon/10 text-neon shadow-neon-sm">
            &lt;/&gt;
          </span>
          <span className="font-semibold tracking-tight text-white">
            {site.initials}
            <span className="text-neon">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === l.id ? 'text-neon' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-neon shadow-neon-sm"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-neon px-4 py-2 text-sm font-medium text-ink-950 shadow-neon-sm transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Let&apos;s talk
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-200 transition-colors hover:text-neon lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile sidebar — portaled to body so it sits above everything */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 z-[80] lg:hidden">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
              />

              {/* Panel */}
              <motion.aside
                variants={sidebar}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute right-0 top-0 flex h-[100dvh] w-[80%] max-w-xs flex-col border-l border-white/10 bg-ink-900/95 p-6 shadow-[0_0_60px_rgba(47,243,196,0.12)] backdrop-blur-xl"
              >
                {/* Neon edge */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neon/60 to-transparent" />

                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-mono text-sm">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-neon/10 text-neon shadow-neon-sm">
                      &lt;/&gt;
                    </span>
                    <span className="font-semibold text-white">
                      {site.initials}
                      <span className="text-neon">.dev</span>
                    </span>
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="grid h-10 w-10 place-items-center rounded-lg glass text-slate-200 transition-colors hover:text-neon"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-1.5">
                  {links.map((l) => {
                    const isActive = active === l.id
                    return (
                      <motion.a
                        key={l.id}
                        variants={navItem}
                        href={`#${l.id}`}
                        onClick={() => setOpen(false)}
                        className={`group relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-[15px] transition-colors ${
                          isActive
                            ? 'bg-neon/10 text-neon'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-neon shadow-neon-sm" />
                        )}
                        <l.Icon
                          size={18}
                          className={isActive ? 'text-neon' : 'text-slate-500 group-hover:text-neon'}
                        />
                        {l.label}
                      </motion.a>
                    )
                  })}
                </nav>

                {/* Footer: CTA + socials */}
                <motion.div variants={navItem} className="mt-auto pt-6">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-neon px-4 py-3 text-sm font-medium text-ink-950 shadow-neon-sm transition-transform hover:-translate-y-0.5"
                  >
                    <Mail size={16} /> Let&apos;s talk
                  </a>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    {site.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="grid h-11 w-11 place-items-center rounded-xl glass text-slate-300 transition-all hover:-translate-y-0.5 hover:border-neon/40 hover:text-neon"
                      >
                        <SocialIcon name={s.icon} className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.aside>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>
  )
}
