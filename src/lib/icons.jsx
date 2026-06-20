import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiShadcnui,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiGithub,
  SiPostman,
  SiDocker,
  SiUbuntu,
  SiPostgresql,
  SiMysql,
  SiN8N,
  SiAnthropic,
  SiOpenai,
} from 'react-icons/si'
import {
  Server,
  Plug,
  Webhook,
  Code2,
  Drama,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'

// Map skill `icon` keys -> [Component, brandColor]
const SKILL_MAP = {
  html: [SiHtml5, '#e34f26'],
  css: [SiCss, '#1572b6'],
  tailwind: [SiTailwindcss, '#38bdf8'],
  bootstrap: [SiBootstrap, '#7952b3'],
  antd: [SiAntdesign, '#1677ff'],
  shadcn: [SiShadcnui, '#ffffff'],
  javascript: [SiJavascript, '#f7df1e'],
  react: [SiReact, '#61dafb'],
  node: [SiNodedotjs, '#5fa04e'],
  express: [SiExpress, '#ffffff'],
  sequelize: [SiSequelize, '#52b0e7'],
  github: [SiGithub, '#ffffff'],
  api: [Webhook, '#2ff3c4'],
  postman: [SiPostman, '#ff6c37'],
  docker: [SiDocker, '#2496ed'],
  server: [Server, '#9ca3af'],
  ubuntu: [SiUbuntu, '#e95420'],
  postgres: [SiPostgresql, '#4169e1'],
  mysql: [SiMysql, '#4479a1'],
  playwright: [Drama, '#45ba4b'],
  n8n: [SiN8N, '#ea4b71'],
  claude: [SiAnthropic, '#d97757'],
  openai: [SiOpenai, '#ffffff'],
  mcp: [Plug, '#a855f7'],
}

export function SkillIcon({ name, className = '' }) {
  const [Icon, color] = SKILL_MAP[name] || [Code2, '#2ff3c4']
  return <Icon className={className} style={{ color }} />
}

const SOCIAL_MAP = { github: Github, linkedin: Linkedin, mail: Mail }
export function SocialIcon({ name, className = '' }) {
  const Icon = SOCIAL_MAP[name] || Mail
  return <Icon className={className} />
}
