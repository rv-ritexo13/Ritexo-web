import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Target, Compass, CheckCircle2 } from 'lucide-react'
import {
  brand,
  company,
  services,
  whatWeDo,
  whyRitexo,
  coreValues,
} from '../data/websiteContent'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CardGrid from '../components/CardGrid'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'

export default function Home() {
  const whatWeDoItems = whatWeDo
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 pb-20 text-white lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl" />
        </div>

        <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                {brand.keywords.join(' · ')}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Connecting Talent.
                <br />
                <span className="bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text text-transparent">
                  Delivering Technology.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
                Ritexo Technologies delivers reliable technology solutions, innovative
                services, operational excellence, and skilled talent to help organizations
                transform and grow.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/services" className="btn-primary">
                  Explore Our Services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-ghost-light">
                  Talk to Us
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Logo showcase card */}
          <Reveal delay={200} className="hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="animate-float rounded-3xl border border-white/15 bg-white/95 p-8 shadow-2xl backdrop-blur">
                <LogoShowcase />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {brand.keywords.map((k) => (
                    <div
                      key={k}
                      className="rounded-xl border border-navy-100 bg-navy-50 px-3 py-4 text-center"
                    >
                      <p className="text-sm font-semibold text-navy-800">{k}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-xs text-navy-500">{brand.meaning}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT RITEXO */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-3">About Ritexo</span>
            <h2 className="h-display">Technology. Talent. Excellence.</h2>
            <p className="mt-5 leading-relaxed text-navy-600">{company.positioning}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="btn-outline">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {whyRitexo.slice(0, 4).map((w) => (
                <div key={w.title} className="card card-hover">
                  <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-bold text-navy-900">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-600">{w.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section bg-navy-50/60">
        <div className="container-px">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end technology & talent services"
            subtitle="From consulting to managed services and digital transformation, we cover the full spectrum of enterprise technology needs."
          />
          <CardGrid items={whatWeDoItems} basePath="/services" />
          <Reveal className="mt-10 text-center">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY RITEXO */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Why Ritexo"
            title="What the name stands for"
            subtitle={brand.meaning}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyRitexo.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 90}>
                <div className="card card-hover flex h-full items-start gap-4">
                  <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{w.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section bg-navy-50/60">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
              <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
                <Compass className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-navy-600">{company.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
              <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-navy-600">{company.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles behind everything we do"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:border-brand-200 hover:shadow-card-hover">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <div>
                    <h3 className="font-bold text-navy-900">{v.title}</h3>
                    <p className="mt-1 text-sm text-navy-600">{v.description}</p>
                  </div>
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

function LogoShowcase() {
  const [ok, setOk] = useState(true)
  return (
    <div className="flex flex-col items-center">
      {ok ? (
        <img
          src="/assets/ritexo-mark.png"
          alt="Ritexo Technologies"
          onError={() => setOk(false)}
          className="h-28 w-auto"
        />
      ) : (
        <div className="grid h-24 w-24 place-items-center rounded-2xl bg-brand-gradient text-3xl font-extrabold text-white shadow-xl">
          R
        </div>
      )}
      <p className="mt-4 text-2xl font-extrabold text-navy-900">
        Ritexo <span className="text-brand-600">Technologies</span>
      </p>
      <p className="text-sm text-navy-500">{brand.tagline}</p>
    </div>
  )
}
