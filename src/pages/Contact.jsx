import { useState } from 'react'
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react'
import { brand, serviceOptions } from '../data/websiteContent'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (form.phone && !/^[+()\d\s-]{7,20}$/.test(form.phone)) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (!form.message.trim()) {
      next.message = 'Please enter a message.'
    } else if (form.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.'
    }
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // -----------------------------------------------------------------------
    // BACKEND HOOK: no backend is implemented (per spec).
    // Connect an email service / API here, e.g.:
    //   await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    // The `form` object holds all validated field values.
    // -----------------------------------------------------------------------
    console.log('Contact form submission (connect a backend here):', form)

    setSubmitted(true)
    setForm(EMPTY)
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Connect with Ritexo Technologies to explore technology, talent, and transformation opportunities."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy-900">Let&apos;s talk</h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              Tell us about your requirements and our team will get back to you.
            </p>
            <ul className="mt-8 space-y-4">
              <ContactItem icon={Mail} label="Email">
                <a href={`mailto:${brand.email}`} className="hover:text-brand-600">
                  {brand.email}
                </a>
              </ContactItem>
              <ContactItem icon={Phone} label="Phone">
                <span className="flex flex-wrap gap-x-3 gap-y-1">
                  {brand.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="hover:text-brand-600">
                      +91 {p}
                    </a>
                  ))}
                </span>
              </ContactItem>
              <ContactItem icon={MapPin} label="Location">
                {brand.location}
              </ContactItem>
              <ContactItem icon={Globe} label="Website">
                {brand.website}
              </ContactItem>
            </ul>
            <div className="mt-8 rounded-2xl bg-navy-900 p-6 text-white">
              <p className="text-lg font-bold">{brand.name}</p>
              <p className="mt-1 text-sm text-navy-300">{brand.tagline}</p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle2 className="h-14 w-14 text-brand-500" />
                  <h3 className="mt-4 text-xl font-bold text-navy-900">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-navy-600">
                    Your message has been captured. Connect a backend/email service to
                    receive submissions.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" required error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your full name"
                        className={inputCls(errors.name)}
                      />
                    </Field>
                    <Field label="Email" required error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@company.com"
                        className={inputCls(errors.email)}
                      />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91 00000 00000"
                        className={inputCls(errors.phone)}
                      />
                    </Field>
                    <Field label="Company" error={errors.company}>
                      <input
                        type="text"
                        value={form.company}
                        onChange={update('company')}
                        placeholder="Company name"
                        className={inputCls(errors.company)}
                      />
                    </Field>
                    <Field label="Service Interested In" className="sm:col-span-2">
                      <select
                        value={form.service}
                        onChange={update('service')}
                        className={inputCls()}
                      >
                        <option value="">Select a service (optional)</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Message" required error={errors.message} className="sm:col-span-2">
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="How can we help?"
                        className={inputCls(errors.message)}
                      />
                    </Field>
                  </div>
                  <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                    Submit <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function inputCls(error) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-400 focus:ring-2 ${
    error
      ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
      : 'border-navy-200 focus:border-brand-500 focus:ring-brand-200'
  }`
}

function Field({ label, required, error, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-navy-800">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  )
}

function ContactItem({ icon: IconCmp, label, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
        <IconCmp className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">{label}</p>
        <p className="text-navy-800">{children}</p>
      </div>
    </li>
  )
}
