import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { site } from '../../data/site'
import GlowButton from '../ui/GlowButton'
import { SocialIcon } from '../../lib/icons'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Scanline sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-neon/[0.07] to-transparent animate-scan" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {site.available && (
          <motion.span variants={fade} className="chip mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Available for work
          </motion.span>
        )}

        <motion.p
          variants={fade}
          className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-neon-300"
        >
          {`>`} Hi, I&apos;m {site.name}
        </motion.p>

        <motion.h1
          variants={fade}
          className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          I build <span className="gradient-text neon-text">full systems</span>,
          <br className="hidden sm:block" /> from <span className="gradient-text">pixels to devices</span>.
        </motion.h1>

        <motion.p
          variants={fade}
          className="mt-6 max-w-2xl text-pretty text-base text-slate-400 sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div variants={fade} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <GlowButton href="#projects">
            <Sparkles size={16} /> View My Work
          </GlowButton>
          <GlowButton href="#contact" variant="ghost">
            Get in touch
          </GlowButton>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fade} className="mt-8 flex items-center gap-2">
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
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fade}
          className="mt-14 grid w-full max-w-xl grid-cols-3 gap-4"
        >
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass neon-border rounded-2xl px-4 py-5 text-center"
            >
              <div className="gradient-text text-2xl font-bold sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#skills"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-neon"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
