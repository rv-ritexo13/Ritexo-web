import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-14 text-center text-white sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="h-display">Let&apos;s Build What&apos;s Next.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
              Connect with Ritexo Technologies to explore technology, talent, and
              transformation opportunities.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn bg-white text-navy-900 hover:-translate-y-0.5 hover:shadow-xl">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
