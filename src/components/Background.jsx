// Fixed, full-viewport animated cyberpunk backdrop.
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* Animated neon grid */}
      <div className="absolute inset-0 bg-grid-neon bg-grid animate-gridFlow [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Top radial glow */}
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-radial-glow" />

      {/* Floating color blobs */}
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyber-teal/20 blur-[120px] animate-float" />
      <div
        className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-cyber-violet/20 blur-[140px] animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyber-cyan/15 blur-[120px] animate-float"
        style={{ animationDelay: '4s' }}
      />

      {/* Vignette + scanline tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
    </div>
  )
}
