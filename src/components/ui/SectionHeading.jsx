import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <Reveal>
      <div className={`flex flex-col ${alignment} gap-3`}>
        {eyebrow && (
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulseGlow" />
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-base text-slate-400 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </Reveal>
  )
}
