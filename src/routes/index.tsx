import { Link, createFileRoute } from '@tanstack/react-router'
import { projects } from '../lib/projects'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      { title: 'Habeeb Oyedele — Web & Mobile Product Engineer' },
      {
        name: 'description',
        content:
          'The selected work of Habeeb Oyedele, a product engineer building thoughtful web and mobile products.',
      },
    ],
  }),
})

function Home() {
  return (
    <main id="main-content">
      <section className="shell hero">
        <p className="eyebrow typewriter">Web & Mobile Product Engineer</p>
        <h1>
          I engineer digital products with <em>clarity and care</em>, and a
          sharp eye for the experience.
        </h1>
        <div className="hero__footer">
          <p>
            I’m Habeeb Oyedele. I build thoughtful web and mobile products—from
            polished interfaces to the systems that make them work.
          </p>
          <a href="#selected-work">
            Selected work <span>↓</span>
          </a>
        </div>
      </section>
      <section id="selected-work" className="shell section">
        <header className="section-heading">
          <p className="eyebrow">Selected work / 01—06</p>
          <h2>Products shaped from idea to interface.</h2>
        </header>
        <ProjectList />
        <Link className="button-link" to="/work">
          Explore all work <span>→</span>
        </Link>
      </section>
      <section className="shell section">
        <header className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Engineering the product, not just the screen.</h2>
        </header>
        <div className="capability-grid">
          <article>
            <span>01</span>
            <h3>Product frontends</h3>
            <p>
              Responsive applications, dashboards, data-rich interfaces, and
              consumer product experiences.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Mobile applications</h3>
            <p>
              Cross-platform mobile products designed for smaller screens and
              touch interaction.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Product engineering</h3>
            <p>
              The APIs, integrations, data, and architecture needed to turn an
              interface into a working product.
            </p>
          </article>
        </div>
        <div className="stack" aria-labelledby="stack-title">
          <div>
            <p className="eyebrow typewriter" id="stack-title">
              Tools I work with
            </p>
            <h3>Across the interface and the systems behind it.</h3>
          </div>
          <dl>
            <div>
              <dt>Frontend</dt>
              <dd>
                JavaScript · TypeScript · React · TanStack · Tailwind CSS ·
                Responsive UI
              </dd>
            </div>
            <div>
              <dt>Mobile</dt>
              <dd>React Native · Expo · Touch-first product interfaces</dd>
            </div>
            <div>
              <dt>Backend & systems</dt>
              <dd>
                APIs · Authentication · Databases · Payments · Integrations ·
                Realtime systems
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="shell section home-about">
        <p className="eyebrow">A product-minded approach</p>
        <div>
          <h2>
            Good engineering begins with understanding what the product needs to
            do—and who it needs to work for.
          </h2>
          <Link className="text-link" to="/about">
            More about my approach <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export function ProjectList() {
  return (
    <ol className="project-showcase">
      {projects.map((project, index) => (
        <li
          className={`project-card project-card--${(index % 3) + 1}`}
          key={project.slug}
        >
          <Link
            className="project-card__link"
            to="/work/$slug"
            params={{ slug: project.slug }}
          >
            <div className="project-card__media">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            </div>
            <div className="project-card__copy">
              <p className="eyebrow">
                {String(index + 1).padStart(2, '0')} / {project.discipline}
              </p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <span aria-hidden="true">View case study ↗</span>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  )
}
