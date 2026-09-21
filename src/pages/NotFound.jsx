import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-hero-gradient px-6 text-center text-white">
      <div>
        <p className="bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text text-7xl font-extrabold text-transparent sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-navy-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn bg-white text-navy-900 hover:-translate-y-0.5">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link to="/contact" className="btn-ghost-light">
            <ArrowLeft className="h-4 w-4" /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
