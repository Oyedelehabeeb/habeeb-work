import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () => ({ meta: [{ title: 'Contact | Habeeb Oyedele' }] }),
})
function Contact() {
  return (
    <main id="main-content" className="shell interior">
      <header className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about what you’re building.</h1>
        <p>
          For product work, engineering roles, or thoughtful collaborations,
          share a little about the context and what you need.
        </p>
      </header>
      <section className="contact-details">
        <h2>Contact details</h2>
        <ul>
          <li>
            <span>Email</span>
            <a href="mailto:oyedelehabeeb2001@gmail.com">
              oyedelehabeeb2001@gmail.com ↗
            </a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/habeeb-oyedele-6907582b4"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a
              href="https://github.com/oyedelehabeeb"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub profile ↗
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
