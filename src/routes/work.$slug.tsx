import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { getProject, projects } from '../lib/projects'

export const Route = createFileRoute('/work/$slug')({
  loader: ({ params }) => {
    const project = getProject(params.slug)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} case study | Habeeb Oyedele` },
          { name: 'description', content: loaderData.summary },
        ]
      : [],
  }),
  component: ProjectPage,
})

function ProjectPage() {
  const project = Route.useLoaderData()
  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <main id="main-content" className="case-study">
      <div className="shell case-study__topbar">
        <Link className="back-link" to="/work">
          ← All work
        </Link>
        <p className="eyebrow">
          Case study / {String(index + 1).padStart(2, '0')}
        </p>
      </div>

      <header className="shell case-hero">
        <div className="case-hero__title">
          <p className="eyebrow typewriter">{project.discipline}</p>
          <h1>{project.title}</h1>
        </div>
        <div className="case-hero__intro">
          <p>{project.summary}</p>
          <dl>
            <div>
              <dt>Surface</dt>
              <dd>{project.platform}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Live in production</dd>
            </div>
          </dl>
          <div className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {project.liveLabel ?? 'Visit live product'} ↗
              </a>
            )}
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              View source ↗
            </a>
          </div>
        </div>
      </header>

      <figure className="case-media">
        <img src={project.image} alt={project.imageAlt} />
        <figcaption className="shell">
          <span>Production product</span>
          <span>Reviewed September 2026</span>
        </figcaption>
      </figure>

      <article className="shell case-body">
        <section className="case-lead">
          <p className="eyebrow">Product thesis</p>
          <h2>{project.thesis}</h2>
        </section>

        <section className="case-section case-section--context">
          <div>
            <p className="eyebrow">01 / Context</p>
            <h2>The product problem</h2>
          </div>
          <p>{project.context}</p>
        </section>

        <section className="case-section case-section--decisions">
          <div>
            <p className="eyebrow">02 / Product</p>
            <h2>Decisions that shape the experience</h2>
          </div>
          <ol className="decision-list">
            {project.productDecisions.map((decision, decisionIndex) => (
              <li key={decision}>
                <span>{String(decisionIndex + 1).padStart(2, '0')}</span>
                <p>{decision}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-section case-section--engineering">
          <div>
            <p className="eyebrow">03 / Engineering</p>
            <h2>How the product is held together</h2>
          </div>
          <div>
            <ul className="engineering-list">
              {project.engineeringDecisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
            <div className="case-stack" aria-label="Technology used">
              {project.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="case-result">
          <p className="eyebrow">04 / Current state</p>
          <p>{project.result}</p>
          {project.liveUrl && (
            <a
              className="button-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.liveLabel ?? 'Experience the product'} <span>↗</span>
            </a>
          )}
        </section>

        <nav className="next-project" aria-label="Next project">
          <p className="eyebrow">Next project</p>
          <Link to="/work/$slug" params={{ slug: next.slug }}>
            {next.title} <span>→</span>
          </Link>
        </nav>
      </article>
    </main>
  )
}
