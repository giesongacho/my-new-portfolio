import { motion } from 'framer-motion'
import { skillGroups } from '../../data/skills'
import { SkillIcon } from '../../lib/icons'
import SectionHeading from '../ui/SectionHeading'
import { stagger, item } from '../ui/Reveal'

const accentRing = {
  teal: 'group-hover:border-cyber-teal/50 group-hover:shadow-[0_0_22px_rgba(47,243,196,0.25)]',
  violet: 'group-hover:border-cyber-violet/50 group-hover:shadow-[0_0_22px_rgba(168,85,247,0.25)]',
  cyan: 'group-hover:border-cyber-cyan/50 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.25)]',
}
const accentText = {
  teal: 'text-cyber-teal',
  violet: 'text-cyber-violet',
  cyan: 'text-cyber-cyan',
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & Tools"
          subtitle="The technologies I use to design, build, ship, and run modern web applications and devices."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-6"
            >
              <div className="mb-1 flex items-baseline justify-between">
                <h3 className={`text-lg font-semibold ${accentText[group.accent]}`}>
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-slate-500">
                  {String(group.skills.length).padStart(2, '0')}
                </span>
              </div>
              <p className="mb-5 text-sm text-slate-400">{group.blurb}</p>

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2"
              >
                {group.skills.map((skill) => (
                  <motion.li key={skill.name} variants={item}>
                    <div
                      className={`group flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 ${accentRing[group.accent]}`}
                    >
                      <SkillIcon
                        name={skill.icon}
                        className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="truncate text-sm text-slate-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
