import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({ meta: [{ title: 'About — Habeeb Oyedele' }] }),
})
function About() {
  return (
    <main id="main-content" className="shell interior">
      <header className="page-intro">
        <p className="eyebrow">About</p>
        <h1>
          I build products with equal care for how they work and how they feel.
        </h1>
      </header>
      <div className="editorial-copy">
        <p>
          I’m Habeeb Oyedele, a Web & Mobile Product Engineer. My work sits at
          the intersection of product thinking, interface engineering, and the
          technical systems that support real digital experiences.
        </p>
        <p>
          Some of my professional work is protected by confidentiality
          agreements. The public work on this site focuses on projects I can
          discuss responsibly; additional experience can be shared where
          appropriate without exposing confidential product information.
        </p>
      </div>
      <Link className="button-link" to="/contact">
        Start a conversation <span>→</span>
      </Link>
    </main>
  )
}
