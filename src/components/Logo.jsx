import { useState } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../data/websiteContent'

/**
 * Header/footer logo: official R mark + wordmark.
 *   Mark asset:  public/assets/ritexo-mark.png  (transparent R, from official logo)
 *   Full lockup: public/assets/ritexo-logo.png  (used on the hero)
 * If the mark asset is missing, a branded "R" monogram is shown instead —
 * so nothing ever breaks.
 */
export default function Logo({ variant = 'dark' }) {
  const [imgOk, setImgOk] = useState(true)
  const light = variant === 'light'
  const textColor = light ? 'text-white' : 'text-navy-900'

  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${brand.name} home`}>
      {imgOk ? (
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
            light ? 'bg-white p-1.5 shadow-sm' : ''
          }`}
        >
          <img
            src="/assets/ritexo-mark.png"
            alt={`${brand.name} logo`}
            onError={() => setImgOk(false)}
            className="h-full w-full object-contain"
          />
        </span>
      ) : (
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-lg font-extrabold text-white shadow-md">
          R
        </span>
      )}
      <span className={`text-lg font-extrabold leading-none tracking-tight ${textColor}`}>
        Ritexo<span className="text-brand-500"> Technologies</span>
      </span>
    </Link>
  )
}
