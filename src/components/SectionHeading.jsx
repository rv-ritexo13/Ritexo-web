import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <Reveal className={`mb-12 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className={`h-display ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-navy-200' : 'text-navy-600'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
