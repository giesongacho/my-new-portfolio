/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Cyberpunk neon palette
        ink: {
          950: '#03060a',
          900: '#060b12',
          850: '#080f18',
          800: '#0b1320',
          700: '#101a2b',
        },
        neon: {
          DEFAULT: '#2ff3c4',
          300: '#7bffe2',
          400: '#2ff3c4',
          500: '#13d9a8',
          600: '#0bb78d',
        },
        cyber: {
          green: '#39ff14',
          teal: '#2ff3c4',
          cyan: '#22d3ee',
          violet: '#a855f7',
          magenta: '#ff2fb9',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(47, 243, 196, 0.35), 0 0 40px rgba(47, 243, 196, 0.15)',
        'neon-sm': '0 0 12px rgba(47, 243, 196, 0.3)',
        'neon-violet': '0 0 24px rgba(168, 85, 247, 0.35)',
        card: '0 8px 40px -12px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'grid-neon':
          'linear-gradient(rgba(47,243,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,243,196,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(47,243,196,0.18), transparent 60%)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        gridFlow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '44px 44px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        scan: 'scan 4s linear infinite',
        gridFlow: 'gridFlow 8s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
