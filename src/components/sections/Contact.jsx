import { Mail, ArrowUpRight } from 'lucide-react'
import { site } from '../../data/site'
import GlowButton from '../ui/GlowButton'
import Reveal from '../ui/Reveal'
import { SocialIcon } from '../../lib/icons'

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass p-8 text-center sm:p-14">
            {/* glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-neon/20 blur-[100px]" />

            <span className="chip mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulseGlow" />
              Let&apos;s build something
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Got a project in <span className="gradient-text neon-text">mind?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              I&apos;m open to freelance, contract, and full-time opportunities. Drop me a line and
              let&apos;s talk about what you&apos;re building.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <GlowButton href={`mailto:${site.email}`}>
                <Mail size={16} /> {site.email}
              </GlowButton>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
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
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-sm text-slate-500">
            <span className="text-neon">{site.initials}</span>.dev — © 2026 {site.name}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-600">
            Built with React, Vite & Tailwind
            <ArrowUpRight size={13} />
          </p>
        </footer>
      </div>
    </section>
  )
}
