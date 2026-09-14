import { Link } from '@tanstack/react-router'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <p className="eyebrow">Web & Mobile Product Engineer</p>
          <p className="site-footer__name">Habeeb Oyedele</p>
        </div>
        <div>
          <p>Have a product, role, or collaboration in mind?</p>
          <Link className="text-link" to="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <small>© {new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}
