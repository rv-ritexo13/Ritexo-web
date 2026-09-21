import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Icon from './Icon'
import Reveal from './Reveal'

/**
 * Reusable card grid.
 * items: [{ title, description, icon, slug }]
 * basePath: when set, each card links to `${basePath}/${slug}` with a Learn More CTA.
 * cols: tailwind grid template for large screens.
 */
export default function CardGrid({ items, basePath, ctaLabel = 'Learn More', cols = 'lg:grid-cols-3' }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${cols}`}>
      {items.map((item, i) => {
        const inner = (
          <>
            <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.description}</p>
            {basePath && (
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                {ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </>
        )
        return (
          <Reveal key={item.slug || item.title} delay={(i % 3) * 90}>
            {basePath ? (
              <Link to={`${basePath}/${item.slug}`} className="card card-hover group flex h-full flex-col">
                {inner}
              </Link>
            ) : (
              <div className="card card-hover group flex h-full flex-col">{inner}</div>
            )}
          </Reveal>
        )
      })}
    </div>
  )
}
