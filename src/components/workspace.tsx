import { Link, useLocation } from '@tanstack/react-router'
import {
  FolderOpen,
  House,
  Mail,
  UserRound,
  Github,
  Linkedin,
  Sparkles,
} from 'lucide-react'

const shortcuts = [
  { to: '/', label: 'Home', icon: House },
  { to: '/work', label: 'Work', icon: FolderOpen },
  { to: '/about', label: 'About me', icon: UserRound },
  { to: '/contact', label: 'Contact', icon: Mail },
] as const

export function Workspace({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const page = pathname.startsWith('/work/')
    ? 'Work / Case study'
    : (shortcuts.find((item) => item.to === pathname)?.label ?? 'Portfolio')

  return (
    <div className="desktop">
      <nav className="desktop-shortcuts" aria-label="Workspace shortcuts">
        {shortcuts.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === '/' }}
            activeProps={{ 'aria-current': 'page' }}
          >
            <span className="shortcut-icon">
              <Icon aria-hidden="true" />
            </span>
            <span>{label}</span>
          </Link>
        ))}
        <a
          href="https://github.com/oyedelehabeeb"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shortcut-icon">
            <Github aria-hidden="true" />
          </span>
          <span>GitHub ↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/habeeb-oyedele-6907582b4"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shortcut-icon">
            <Linkedin aria-hidden="true" />
          </span>
          <span>LinkedIn ↗</span>
        </a>
      </nav>
      <div className="workspace-window">
        <div className="window-titlebar">
          <div>
            <Sparkles size={14} aria-hidden="true" />
            <span>Habeeb’s workspace</span>
            <span className="window-path">/ {page}</span>
          </div>
          <span className="window-lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
        {children}
      </div>
      <p className="desktop-caption">
        A little workspace for things I’ve built.
      </p>
    </div>
  )
}
