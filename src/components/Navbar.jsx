import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navigation } from '../data/websiteContent'
import Logo from './Logo'
import Icon from './Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null) // label of open desktop dropdown
  const [mobileSub, setMobileSub] = useState(null) // label of open mobile accordion
  const navRef = useRef(null)
  const location = useLocation()

  // Sticky style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileSub(null)
  }, [location.pathname, location.hash])

  // Close desktop dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/80'
          : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-20">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const hasDropdown = !!item.dropdown
            const isOpen = openMenu === item.label
            if (!hasDropdown) {
              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-brand-600'
                          : 'text-navy-700 hover:text-brand-600'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            }
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isOpen ? 'text-brand-600' : 'text-navy-700 hover:text-brand-600'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                    isOpen
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible -translate-y-1 opacity-0'
                  } ${item.mega ? 'w-[34rem]' : 'w-64'}`}
                >
                  <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-xl">
                    {item.mega ? (
                      <div className="grid grid-cols-2 gap-1">
                        {item.dropdown.map((d) => (
                          <DropdownLink key={d.to} d={d} withIcon />
                        ))}
                        <Link
                          to={item.to}
                          className="col-span-2 mt-1 rounded-xl bg-navy-50 px-3 py-2.5 text-center text-sm font-semibold text-brand-600 hover:bg-navy-100"
                        >
                          View all services →
                        </Link>
                      </div>
                    ) : (
                      <ul>
                        {item.dropdown.map((d) => (
                          <li key={d.to}>
                            <DropdownLink d={d} withIcon={!!d.icon} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary hidden lg:inline-flex">
            Let&apos;s Talk
          </Link>
          {/* Mobile toggle */}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl text-navy-800 hover:bg-navy-50 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-navy-100 bg-white transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? 'max-h-[calc(100vh-4rem)] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <ul className="container-px space-y-1 py-4">
          {navigation.map((item) => {
            const hasDropdown = !!item.dropdown
            const isSubOpen = mobileSub === item.label
            if (!hasDropdown) {
              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-navy-800 hover:bg-navy-50"
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            }
            return (
              <li key={item.label} className="rounded-xl">
                <button
                  type="button"
                  aria-expanded={isSubOpen}
                  onClick={() => setMobileSub(isSubOpen ? null : item.label)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-navy-800 hover:bg-navy-50"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ${
                    isSubOpen ? 'max-h-[40rem]' : 'max-h-0'
                  }`}
                >
                  <ul className="ml-3 border-l border-navy-100 pl-3">
                    <li>
                      <Link
                        to={item.to}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-600 hover:bg-navy-50"
                      >
                        View {item.label} →
                      </Link>
                    </li>
                    {item.dropdown.map((d) => (
                      <li key={d.to}>
                        <Link
                          to={d.to}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-navy-600 hover:bg-navy-50 hover:text-brand-600"
                        >
                          {d.icon && <Icon name={d.icon} className="h-4 w-4 text-brand-500" />}
                          {d.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
          <li className="pt-2">
            <Link to="/contact" className="btn-primary w-full">
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

function DropdownLink({ d, withIcon }) {
  return (
    <Link
      to={d.to}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-700 transition-colors hover:bg-navy-50 hover:text-brand-600"
    >
      {withIcon && d.icon && (
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-600">
          <Icon name={d.icon} className="h-4 w-4" />
        </span>
      )}
      <span className="font-medium">{d.label}</span>
    </Link>
  )
}
