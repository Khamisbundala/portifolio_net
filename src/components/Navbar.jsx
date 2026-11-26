import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0.1, 0.3, 0.6] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-slate-700/40 bg-navy-950/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between gap-4" aria-label="Primary navigation">
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="group flex items-center gap-3 rounded-md"
          aria-label={`${site.name} home`}
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-glow/30 bg-cyan-glow/10 font-mono text-sm font-semibold text-cyan-glow transition group-hover:border-cyan-glow/60 group-hover:bg-cyan-glow/15">
            <span className="absolute inset-0 rounded-xl bg-cyan-glow/20 blur-lg opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
            <span className="relative">{site.initials}</span>
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-wide text-white">{site.name}</span>
            <span className="block font-mono text-[10px] tracking-[0.22em] text-slate-400 uppercase">{site.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'text-cyan-glow' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-cyan-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        <div className="hidden lg:block">
          <a
            href={site.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-glow/40 bg-cyan-glow/10 px-4 py-2.5 text-sm font-semibold text-cyan-glow transition hover:-translate-y-0.5 hover:border-cyan-glow/70 hover:bg-cyan-glow/15"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700/60 text-slate-200 transition hover:border-slate-500 hover:text-white lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-700/40 bg-navy-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const id = link.href.slice(1)
                const isActive = active === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-cyan-glow/10 text-cyan-glow'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
              <a
                href={site.cvUrl}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-glow px-4 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
