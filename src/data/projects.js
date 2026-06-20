import sinkingFund from '../assets/projects/sinking-fund-dashboard.png'
import gwifiLanding from '../assets/projects/gwifi-landing.png'
import gwifiOs from '../assets/projects/gwifi-os.png'
import gwifiPortal from '../assets/projects/gwifi-portal.jpg'

export const projects = [
  {
    id: 'sinking-fund',
    name: 'Sinking Fund System',
    tagline: 'Financial management dashboard for a community sinking fund.',
    description:
      'A full-stack dashboard for managing member contributions, loans, and interest. Real-time KPI cards surface active members, contributions, available funds, interest earnings, balances, and total income. Includes loan request and balance tracking plus member management.',
    highlights: [
      'KPI dashboard: contributions, funds, interest, income',
      'Loan management — requested loans & balance loans',
      'Member management and interest tracking',
    ],
    cover: sinkingFund,
    images: [sinkingFund],
    accent: 'teal',
    year: '2026',
    stack: [
      'React.js',
      'JavaScript',
      'Tailwind',
      'Ant Design',
      'Axios',
      'Node.js',
      'Express.js',
      'Sequelize ORM',
      'MySQL',
    ],
    links: [
      // { label: 'Live', href: '#' },
      // { label: 'Code', href: '#' },
    ],
  },
  {
    id: 'gwifi',
    name: 'G-WiFi — PisoWiFi Ecosystem',
    tagline:
      'A coin-operated PisoWiFi "business-in-a-box": landing, management platform, and a custom Linux OS.',
    description:
      'An end-to-end, cyberpunk-themed PisoWiFi platform. A marketing landing page sells device licenses; a role-based management platform (Admin / Distributor / User) distributes and binds licenses to specific boards; and a custom Debian-based OS boots on each board with a coin-operated captive portal (timer, Insert Coin / Extend, vouchers, and rates).',
    highlights: [
      'Landing page selling per-device licenses (₱500)',
      'Admin / Distributor / User license distribution platform',
      'Custom bootable OS for Orange Pi & Mini PC (armhf / arm64 / x86_64)',
      'Coin-operated captive portal with timer, vouchers & rates',
    ],
    cover: gwifiLanding,
    images: [gwifiLanding, gwifiOs, gwifiPortal],
    accent: 'green',
    year: '2026',
    // Sub-systems with their own stacks
    parts: [
      {
        name: 'Landing Page',
        stack: ['React.js', 'JavaScript', 'Tailwind', 'Vite'],
      },
      {
        name: 'Management Platform (Admin / Distributor / User)',
        stack: ['Next.js', 'JavaScript', 'Tailwind', 'Express.js', 'Prisma', 'PostgreSQL'],
      },
      {
        name: 'Custom OS & Build Pipeline',
        stack: [
          'Linux (Debian)',
          'Docker',
          'QEMU (ARM chroot)',
          'Python (tkinter)',
          'Bash',
          'armhf / arm64 / x86_64',
        ],
      },
    ],
    // Flattened for the chip row
    stack: [
      'React.js',
      'Next.js',
      'JavaScript',
      'Tailwind',
      'Vite',
      'Express.js',
      'Prisma',
      'PostgreSQL',
      'Docker',
      'QEMU',
      'Python',
      'Bash',
      'Linux',
    ],
    links: [{ label: 'Live', href: 'https://g-wi-fi.com' }],
  },
]
