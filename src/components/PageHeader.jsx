import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * Inner-page hero banner with breadcrumb.
 * crumbs: [{ label, to }] — last item rendered as current (no link).
 */
export default function PageHeader({ title, subtitle, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-28 pb-16 text-white lg:pt-36 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="container-px relative">
        <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-navy-300">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4" />
              {i === crumbs.length - 1 || !c.to ? (
                <span className="text-white">{c.label}</span>
              ) : (
                <Link to={c.to} className="hover:text-white">{c.label}</Link>
              )}
            </span>
          ))}
        </nav>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
