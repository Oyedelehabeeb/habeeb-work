import { Link } from '@tanstack/react-router'
import { FolderOpen, Mail, UserRound } from 'lucide-react'

const navigation = [
  { label: 'Work', to: '/work', icon: FolderOpen },
  { label: 'About', to: '/about', icon: UserRound },
  { label: 'Contact', to: '/contact', icon: Mail },
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link
          resetScroll={false}
          className="wordmark"
          to="/"
          aria-label="Habeeb Oyedele, home"
        >
          <span className="brand-mark" aria-hidden="true">
            h.
          </span>{' '}
          Habeeb Oyedele
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  resetScroll={false}
                  to={item.to}
                  activeProps={{ 'aria-current': 'page' }}
                >
                  <item.icon size={15} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link resetScroll={false} className="toolbar-cta" to="/contact">
          Let’s talk ↗
        </Link>
      </div>
    </header>
  )
}
