import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { navLinks, site } from '../data/site.js'

const iconMap = { Github, Linkedin, Mail }

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (e, href) => {
    e.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', href)
  }

  return (
    <footer className="relative border-t border-slate-800/80 bg-navy-900/40">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#home" onClick={(e) => handleNav(e, '#home')} className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-glow/30 bg-cyan-glow/10 font-mono text-sm font-semibold text-cyan-glow">
                {site.initials}
              </span>
              <div>
                <p className="font-semibold text-white">{site.name}</p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">{site.role}</p>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Designing, securing and maintaining reliable network infrastructures that help modern businesses stay connected.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { label: 'LinkedIn', href: site.linkedin, icon: 'Linkedin' },
                { label: 'GitHub', href: site.github, icon: 'Github' },
                { label: 'Email', href: `mailto:${site.email}`, icon: 'Mail' },
              ].map((s) => {
                const Icon = iconMap[s.icon]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/60 text-slate-400 transition hover:border-cyan-glow/40 hover:text-cyan-glow"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNav(e, link.href)} className="text-sm text-slate-400 transition hover:text-cyan-glow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase">More</p>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNav(e, link.href)} className="text-sm text-slate-400 transition hover:text-cyan-glow">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.cvUrl} download className="text-sm text-slate-400 transition hover:text-cyan-glow">
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href={`mailto:${site.email}`} className="transition hover:text-cyan-glow">{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="transition hover:text-cyan-glow">{site.phone}</a></li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {year} {site.name}. Built with React &amp; Tailwind CSS.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 px-3 py-2 text-sm text-slate-400 transition hover:border-cyan-glow/40 hover:text-cyan-glow"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
