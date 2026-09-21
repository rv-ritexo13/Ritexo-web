import { Link } from 'react-router-dom'
import { Briefcase, Clock, Sparkles } from 'lucide-react'
import { careers, coreValues } from '../data/websiteContent'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTASection from '../components/CTASection'

export default function Careers() {
  return (
    <>
      <PageHeader
        title={careers.heading}
        subtitle={careers.text}
        crumbs={[{ label: 'Careers' }]}
      />

      {/* Why join */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow mb-3">Life at Ritexo</span>
            <h2 className="h-display">Grow with a team that values excellence</h2>
            <p className="mt-4 text-navy-600">
              We are building a team of skilled professionals who believe in innovation,
              excellence, collaboration, and continuous learning.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90}>
                <div className="card card-hover flex h-full flex-col">
                  <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" className="section bg-navy-50/60">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="mb-6 inline-grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lg">
              <Briefcase className="h-8 w-8" />
            </span>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Open Positions</h2>
            <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700">
              <Clock className="h-4 w-4" />
              {careers.placeholder}
            </div>
            <p className="mt-6 text-navy-600">
              We are always interested in connecting with talented professionals. Reach out and
              tell us how you can contribute.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                <Sparkles className="h-4 w-4" />
                {careers.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
