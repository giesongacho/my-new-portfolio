// Reusable neon button. variant: 'solid' | 'ghost'
export default function GlowButton({
  as = 'a',
  variant = 'solid',
  className = '',
  children,
  ...props
}) {
  const Tag = as
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon/70'
  const styles =
    variant === 'solid'
      ? 'bg-neon text-ink-950 shadow-neon hover:shadow-[0_0_28px_rgba(47,243,196,0.6)] hover:-translate-y-0.5'
      : 'glass text-neon-300 hover:border-neon/40 hover:text-neon hover:-translate-y-0.5'

  return (
    <Tag className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
