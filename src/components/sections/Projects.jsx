import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, X, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const accentGlow = {
  teal: 'from-cyber-teal/25',
  green: 'from-cyber-green/25',
}
const accentDot = {
  teal: 'bg-cyber-teal',
  green: 'bg-cyber-green',
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null) // { images, index }

  const openLightbox = (images, index) => setLightbox({ images, index })
  const close = useCallback(() => setLightbox(null), [])
  const step = useCallback(
    (dir) =>
      setLightbox((lb) =>
        lb
          ? { ...lb, index: (lb.index + dir + lb.images.length) % lb.images.length }
          : lb
      ),
    []
  )

  // Keyboard controls + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightbox, close, step])

  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Personal Projects"
          title="Projects"
          subtitle="Systems I've designed and built end-to-end on my own — from concept to deployment."
        />

        <div className="mt-16 flex flex-col gap-20">
          {projects.map((p, i) => (
            <Reveal key={p.id}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Gallery */}
                <div className="relative">
                  <div
                    className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${accentGlow[p.accent]} to-transparent blur-2xl`}
                  />
                  <button
                    onClick={() => openLightbox(p.images, 0)}
                    className="group relative block w-full overflow-hidden rounded-2xl glass neon-border text-left"
                  >
                    <img
                      src={p.cover}
                      alt={`${p.name} screenshot`}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 right-3 rounded-lg bg-ink-950/70 px-3 py-1 text-xs font-mono text-neon-300 backdrop-blur">
                      View gallery →
                    </span>
                  </button>

                  {/* Thumbnails */}
                  {p.images.length > 1 && (
                    <div className="mt-3 flex gap-2 sm:gap-3">
                      {p.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => openLightbox(p.images, idx)}
                          className="aspect-video min-w-0 flex-1 overflow-hidden rounded-lg border border-white/10 transition-all hover:border-neon/50"
                        >
                          <img
                            src={img}
                            alt={`${p.name} thumbnail ${idx + 1}`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${accentDot[p.accent]} animate-pulseGlow`} />
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                      {p.year} · Personal Project
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">{p.name}</h3>
                  <p className="mt-2 text-neon-300">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.description}</p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check size={16} className="mt-0.5 shrink-0 text-neon" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Sub-systems (G-WiFi) */}
                  {p.parts && (
                    <div className="mt-5 space-y-3">
                      {p.parts.map((part) => (
                        <div
                          key={part.name}
                          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                        >
                          <p className="text-xs font-semibold text-slate-200">{part.name}</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {part.stack.map((t) => (
                              <span
                                key={t}
                                className="rounded-md bg-neon/[0.06] px-2 py-0.5 text-[11px] font-mono text-neon-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stack chips (single-stack projects) */}
                  {!p.parts && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  {p.links?.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg glass px-4 py-2 text-sm text-slate-200 transition-colors hover:text-neon"
                        >
                          {l.label === 'Code' ? <Github size={15} /> : <ArrowUpRight size={15} />}
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox — portaled to <body> so it escapes <main>'s z-10 stacking
          context and renders above the fixed navbar (otherwise the navbar
          intercepts clicks on the close button). */}
      {createPortal(
        <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] grid place-items-center bg-ink-950/90 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); close() }}
              className="absolute right-5 top-5 z-[110] grid h-11 w-11 place-items-center rounded-lg glass text-slate-200 transition-colors hover:text-neon"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>

            {lightbox.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); step(-1) }}
                  className="absolute left-2 top-1/2 z-[105] grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full glass text-slate-200 hover:text-neon sm:left-4 sm:h-11 sm:w-11"
                  aria-label="Previous"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); step(1) }}
                  className="absolute right-2 top-1/2 z-[105] grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full glass text-slate-200 hover:text-neon sm:right-4 sm:h-11 sm:w-11"
                  aria-label="Next"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              src={lightbox.images[lightbox.index]}
              alt="Project preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-xl border border-white/10 object-contain shadow-2xl"
            />
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
