import { motion } from 'framer-motion'
import { CheckCircle2, MapPin, Target } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { site } from '../data/site.js'

const focusAreas = [
  'Network infrastructure design & implementation',
  'LAN/WAN administration',
  'Routing and switching',
  'Network security & segmentation',
  'Wireless networking',
  'Monitoring & performance optimization',
]

export default function About() {
  return (
    <section id="about" className="section-pad relative bg-navy-900/25">
      <div className="container-x">
        <SectionTitle
          eyebrow="About Me"
          title="Building networks that businesses can rely on"
          description="A professional profile grounded in practical infrastructure, careful configuration, and secure connectivity."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-cyan-glow/10" aria-hidden="true" />
            <div className="panel relative overflow-hidden rounded-[2rem] p-3">
              {/*
                Replace this placeholder with your own photo:
                1. Add your image to src/assets/ (e.g. profile.jpg)
                2. Import it: import profileImg from '../assets/profile.jpg'
                3. Replace the <div> below with:
                   <img src={profileImg} alt="Portrait of Your Name" className="aspect-[4/4.5] w-full rounded-[1.4rem] object-cover" />
              */}
              <div
                className="flex aspect-[4/4.5] w-full flex-col items-center justify-center rounded-[1.4rem] border border-dashed border-slate-600/70 bg-gradient-to-b from-slate-800/50 to-navy-950/80 p-8 text-center"
                role="img"
                aria-label="Professional photograph placeholder"
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-glow/25 bg-cyan-glow/10 font-mono text-3xl font-semibold text-cyan-glow">
                  {site.initials}
                </div>
                <p className="text-sm font-medium text-slate-300">Professional Photo</p>
                <p className="mt-2 max-w-[14rem] text-xs leading-relaxed text-slate-500">
                  Replace this placeholder with your portrait in <code className="text-slate-400">src/sections/About.jsx</code>.
                </p>
              </div>
            </div>
            <div className="absolute -right-3 -bottom-3 rounded-2xl border border-cyan-glow/20 bg-navy-900/95 px-5 py-4 shadow-xl backdrop-blur">
              <p className="font-mono text-[10px] tracking-[0.2em] text-cyan-glow uppercase">Based in</p>
              <p className="mt-1 flex items-center gap-2 font-semibold text-white">
                <MapPin size={16} className="text-cyan-glow" aria-hidden="true" />
                {site.location}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mono-label mb-4">Network Engineer</p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Focused on reliable, secure, and well-documented infrastructure
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-400">
              <p>
                I am a Network Engineer focused on designing, implementing, and maintaining network infrastructures that keep people and systems connected. My work centres on practical networking fundamentals — from structured addressing and switching to routing, wireless access and security controls.
              </p>
              <p>
                I approach every environment with a troubleshooting mindset: understand the topology, verify configurations, analyse traffic when needed, and document changes clearly. The goal is always the same — a network that is stable, secure, and ready to support business growth.
              </p>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-glow" aria-hidden="true" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-cyan-glow/15 bg-cyan-glow/[0.04] p-5">
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-cyan-glow uppercase">
                <Target size={14} aria-hidden="true" />
                Career Objective
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                To contribute as a Network Engineer by designing dependable network solutions, strengthening security posture, and resolving infrastructure challenges with precision and professionalism.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
