import { createFileRoute } from '@tanstack/react-router'
import { ProjectList } from './index'

export const Route = createFileRoute('/work/')({
  component: Work,
  head: () => ({ meta: [{ title: 'Work | Habeeb Oyedele' }] }),
})
function Work() {
  return (
    <main id="main-content" className="shell interior">
      <header className="page-intro">
        <p className="eyebrow">Selected work / 01 to 06</p>
        <h1>Products, systems, and the decisions behind them.</h1>
        <p>
          Six public products across web and mobile, reviewed through the
          decisions, constraints, and engineering that shaped what shipped.
        </p>
      </header>
      <ProjectList />
    </main>
  )
}
