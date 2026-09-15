import { Link, createFileRoute } from '@tanstack/react-router'
import { projects } from '../lib/projects'
import { WorkbenchIllustration } from '../components/workbench-illustration'
import { ArrowUpRight, FolderOpen } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      { title: 'Habeeb Oyedele | Web & Mobile Product Engineer' },
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
        <div className="hero__copy">
          <p className="workspace-label">
            <span aria-hidden="true">✳</span> The personal workspace of Habeeb
            Oyedele
          </p>
          <p className="eyebrow typewriter">Web & Mobile Product Engineer</p>
          <h1>
            Thoughtful products.
            <br />
            Built with <em>clarity and care.</em>
          </h1>
          <p className="hero__description">
            I’m Habeeb. I build web and mobile products with equal care for the
            interface, the experience, and the systems behind it.
          </p>
          <div className="hero__actions">
            <a className="button-link" href="#selected-work">
              Open selected work <FolderOpen size={16} aria-hidden="true" />
            </a>
            <Link className="text-link" to="/contact">
              Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero__art">
          <WorkbenchIllustration />
          <p className="handwritten">
            From the big picture
            <br />
            to the little details.
          </p>
          <span className="desk-sticker">Ideas → interfaces → products</span>
        </div>
        <div className="hero__footer">
          <p>
            Six public builds. Real products. A few good engineering stories.
          </p>
          <span>
            Take a look around <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>
      <section id="selected-work" className="shell section">
        <header className="section-heading">
          <p className="eyebrow">Selected work / 01 to 06</p>
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
              Responsive applications, dashboards, data rich interfaces, and
              consumer product experiences.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Mobile applications</h3>
            <p>
              Cross platform mobile products designed for smaller screens and
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
              <dd>React Native · Expo · Touch first product interfaces</dd>
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
        <p className="eyebrow">A product minded approach</p>
        <div>
          <h2>
            Good engineering begins with understanding what the product needs to
            do, and who it needs to work for.
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
            <div className="project-card__bar">
              <span>
                <FolderOpen size={14} aria-hidden="true" /> {project.title}
              </span>
              <span className="project-card__status">
                Live product <span aria-hidden="true">↗</span>
              </span>
            </div>
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
