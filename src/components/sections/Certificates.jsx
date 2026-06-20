import { motion } from 'framer-motion'
import { Award, ExternalLink, BadgeCheck, FileText } from 'lucide-react'
import { certificates } from '../../data/certificates'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Certificates() {
  return (
    <section id="certificates" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certificates"
          subtitle="Verified proof of training and professional experience."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <motion.a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl glass neon-border"
              >
                {/* Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06]">
                  {c.kind === 'image' ? (
                    <img
                      src={c.thumb}
                      alt={`${c.title} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    // Branded preview for the PDF certificate
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#1f4fd1] via-[#1746b8] to-[#0c2a73] p-6 text-center">
                      <Award className="mb-3 h-10 w-10 text-white/90" />
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
                        Certificate of Completion
                      </p>
                      <p className="mt-2 text-lg font-bold leading-tight text-white">
                        {c.title}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0c2a73]">
                        <BadgeCheck size={13} /> Completed
                      </span>
                    </div>
                  )}

                  {/* Open overlay */}
                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink-950/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-ink-950/80 px-3 py-1.5 text-xs font-mono text-neon-300 backdrop-blur">
                      {c.kind === 'pdf' ? <FileText size={13} /> : <ExternalLink size={13} />}
                      Open
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-1 flex items-center gap-2">
                    <BadgeCheck size={16} className="shrink-0 text-neon" />
                    <h3 className="font-semibold text-white">{c.title}</h3>
                  </div>
                  <p className="text-sm text-neon-300">{c.issuer}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                    {c.program && <span>{c.program}</span>}
                    {c.program && <span className="text-slate-700">•</span>}
                    <span>{c.date}</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-neon/[0.06] px-2 py-0.5 text-[11px] font-mono text-neon-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neon transition-colors group-hover:text-neon-300">
                    {c.fileLabel}
                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
