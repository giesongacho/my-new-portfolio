import telproCoe from '../assets/certificates/telpro-coe.jpg'

// `kind: 'image'` renders the real thumbnail; `kind: 'pdf'` renders a
// branded preview card and links to the PDF in /public/certificates.
export const certificates = [
  {
    id: 'react-cert',
    title: 'Web Development with React.js',
    issuer: 'The Coding School × The Alvarez Foundation',
    program: 'Direcho Trabaho Program',
    date: 'June 2025',
    kind: 'pdf',
    href: '/certificates/react-certificate.pdf',
    fileLabel: 'View Certificate (PDF)',
    description:
      'Completed a comprehensive React.js course — JSX, props & state, components & hooks, custom hooks, side effects, refs, React Router, querying APIs, component libraries, and performance optimization.',
    tags: ['React.js', 'Hooks', 'React Router', 'APIs', 'Performance'],
  },
  {
    id: 'telpro-coe',
    title: 'Certificate of Employment',
    issuer: 'Telpro',
    date: 'May 2026',
    kind: 'image',
    thumb: telproCoe,
    href: telproCoe,
    fileLabel: 'View Certificate',
    description:
      'Certifies employment as a Full-Stack Developer (May 2024 – May 2026): AI-assisted and traditional development, frontend & backend support, database management, troubleshooting, testing, and VPS administration via SSH.',
    tags: ['Full-Stack Developer', 'AI-assisted Dev', 'Claude Code', 'VPS / SSH', 'Database Management'],
  },
]
