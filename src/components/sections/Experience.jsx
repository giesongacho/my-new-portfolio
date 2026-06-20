import { motion } from 'framer-motion'
import { Briefcase, MapPin, Check } from 'lucide-react'
import { experience } from '../../data/experience'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          subtitle="The roles and milestones that shaped how I build."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon/60 via-neon/20 to-transparent md:left-1/2" />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right md:self-start' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Node */}
                <span
                  className={`absolute top-1.5 grid h-8 w-8 place-items-center rounded-full border border-neon/40 bg-ink-900 text-neon shadow-neon-sm left-0 ${
                    i % 2 === 0 ? 'md:left-auto md:-right-4' : 'md:-left-4'
                  }`}
                >
                  <Briefcase size={15} />
                </span>

                <div className="glass neon-border rounded-2xl p-5 text-left">
                  {job.period && <span className="chip mb-2">{job.period}</span>}
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <p className="text-sm text-neon-300">{job.company}</p>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                    <span>{job.type}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-400">{job.summary}</p>

                  <ul className="mt-3 space-y-1.5">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check size={15} className="mt-0.5 shrink-0 text-neon" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-neon/[0.06] px-2 py-0.5 text-[11px] font-mono text-neon-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
