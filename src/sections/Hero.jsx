import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, MapPin, Radio } from 'lucide-react'
import NetworkIllustration from '../components/NetworkIllustration.jsx'
import { site } from '../data/site.js'

const stats = [
  { value: 'LAN/WAN', label: 'Infrastructure' },
  { value: 'Routing', label: '& Switching' },
  { value: 'Security', label: 'Focused' },
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 blueprint opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {site.availability}
          </div>

          <p className="mono-label mb-4 flex items-center gap-2">
            <Radio size={14} aria-hidden="true" />
            {site.role} &middot; {site.location}
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Engineering{' '}
            <span className="text-gradient">Reliable Networks.</span>
            <br />
            Connecting the Digital World.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {site.introduction}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-cyan-glow" aria-hidden="true" />
              {site.location}
            </span>
            <span className="hidden h-4 w-px bg-slate-700 sm:block" aria-hidden="true" />
            <span>Network Infrastructure &amp; Security</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-glow px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-[0_0_30px_-8px_rgba(34,211,238,0.7)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Explore My Work
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600/70 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white/[0.05]"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8 sm:max-w-md">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-sm font-semibold text-cyan-glow sm:text-base">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 blur-2xl" aria-hidden="true" />
          <div className="panel relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-slate-700/40 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">network-topology.map</span>
            </div>
            <NetworkIllustration className="float-slow w-full" />
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-cyan-glow md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
      </button>
    </section>
  )
}
