import { Compass, Target, CheckCircle2 } from 'lucide-react'
import { company, coreValues, brand } from '../data/websiteContent'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTASection from '../components/CTASection'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Ritexo Technologies"
        subtitle={brand.tagline}
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Company Overview */}
      <section id="overview" className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-3">Company Overview</span>
            <h2 className="h-display">Technology. Talent. Excellence.</h2>
            <p className="mt-5 leading-relaxed text-navy-600">{company.overview}</p>
            <p className="mt-4 leading-relaxed text-navy-600">{company.positioning}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-navy-100 bg-navy-50/60 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                What RITEXO stands for
              </h3>
              <p className="mt-3 text-lg font-bold text-navy-900">{brand.meaning}</p>
              <p className="mt-2 text-sm text-navy-600">{brand.meaningAlt}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {brand.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full bg-brand-gradient px-4 py-1.5 text-sm font-semibold text-white"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-navy-50/60">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal id="vision">
            <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
              <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
                <Compass className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-bold text-navy-900">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-navy-600">{company.vision}</p>
            </div>
          </Reveal>
          <Reveal id="mission" delay={120}>
            <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
              <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-navy-600">{company.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles that guide us"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90}>
                <div className="card card-hover flex h-full flex-col">
                  <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <CheckCircle2 className="h-5 w-5 text-brand-500" />
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
