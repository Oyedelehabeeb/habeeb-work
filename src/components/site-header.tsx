import { Link } from '@tanstack/react-router'

const navigation = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="wordmark" to="/" aria-label="Habeeb Oyedele, home">
          Habeeb <span>Oyedele</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} activeProps={{ 'aria-current': 'page' }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
