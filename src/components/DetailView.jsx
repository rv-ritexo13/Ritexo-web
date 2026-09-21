import { Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import Icon from './Icon'
import PageHeader from './PageHeader'
import Reveal from './Reveal'

/**
 * Generic detail page for services / solutions / industries / resources.
 * Renders a header, the placeholder body, and "related" cards.
 * If the slug is not found, redirects to the category overview.
 */
export default function DetailView({ item, category, basePath, overviewLabel, related = [] }) {
  if (!item) return <Navigate to={basePath} replace />

  const others = related.filter((r) => r.slug !== item.slug).slice(0, 3)

  return (
    <>
      <PageHeader
        title={item.title}
        subtitle={item.description}
        crumbs={[
          { label: overviewLabel, to: basePath },
          { label: item.title },
        ]}
      />

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <span className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lg">
              <Icon name={item.icon} className="h-7 w-7" />
            </span>
            <h2 className="text-2xl font-bold text-navy-900">Overview</h2>
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700">
              <Clock className="h-4 w-4" />
              {item.description}
            </div>
            <p className="mt-6 leading-relaxed text-navy-600">
              This section is ready for future content. Detailed information about{' '}
              <span className="font-semibold text-navy-800">{item.title}</span> under our{' '}
              {overviewLabel.toLowerCase()} will be added here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Talk to Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to={basePath} className="btn-outline">
                <ArrowLeft className="h-4 w-4" /> Back to {overviewLabel}
              </Link>
            </div>
          </Reveal>

          {/* Related */}
          {others.length > 0 && (
            <Reveal delay={120} className="lg:col-span-1">
              <div className="rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-500">
                  More {overviewLabel}
                </h3>
                <ul className="space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        to={`${basePath}/${o.slug}`}
                        className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 text-sm font-medium text-navy-700 shadow-sm transition-colors hover:text-brand-600"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-600">
                          <Icon name={o.icon} className="h-4 w-4" />
                        </span>
                        {o.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
