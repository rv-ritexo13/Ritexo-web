import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { brand, footer } from '../data/websiteContent'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-px py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-navy-300">
              {brand.tagline}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-navy-200 hover:text-white">
                <Mail className="h-4 w-4 text-brand-400" /> {brand.email}
              </a>
              {brand.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`} className="flex items-center gap-2 text-navy-200 hover:text-white">
                  <Phone className="h-4 w-4 text-brand-400" /> +91 {p}
                </a>
              ))}
              <p className="flex items-center gap-2 text-navy-200">
                <MapPin className="h-4 w-4 text-brand-400" /> {brand.location}
              </p>
              <p className="flex items-center gap-2 text-navy-200">
                <Globe className="h-4 w-4 text-brand-400" /> {brand.website}
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-navy-300 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h4>
              <ul className="space-y-2.5 text-sm text-navy-300">
                <li>
                  <a href={`mailto:${brand.email}`} className="hover:text-white">
                    {brand.email}
                  </a>
                </li>
                {brand.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:+91${p}`} className="hover:text-white">
                      +91 {p}
                    </a>
                  </li>
                ))}
                <li>{brand.location}</li>
                <li>
                  <Link to="/contact" className="font-semibold text-brand-400 hover:text-brand-300">
                    Get in touch →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-navy-400">
          {brand.copyright}
        </div>
      </div>
    </footer>
  )
}
