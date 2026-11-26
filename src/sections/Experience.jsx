import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-x">
        <SectionTitle
          eyebrow="Professional Experience"
          title="Where I've applied my skills"
          description="A timeline of professional roles and responsibilities. Replace the placeholder entries below with your real experience before publishing."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-cyan-glow/50 via-slate-700/60 to-transparent sm:left-6" aria-hidden="true" />

          <div className="space-y-8">
            {experience.map((role, index) => (
              <motion.article
                key={role.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="relative pl-12 sm:pl-16"
              >
                <div className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-glow/30 bg-navy-950 text-cyan-glow sm:h-12 sm:w-12">
                  <Briefcase size={16} className="sm:hidden" aria-hidden="true" />
                  <Briefcase size={20} className="hidden sm:block" aria-hidden="true" />
                </div>

                <div className="panel rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      {role.placeholder && (
                        <span className="mb-3 inline-block rounded-full border border-slate-600/50 bg-slate-700/20 px-2.5 py-1 font-mono text-[10px] tracking-wide text-slate-400 uppercase">
                          Placeholder — replace with real role
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                      <p className="mt-1 text-base text-cyan-glow/90">{role.organization}</p>
                    </div>
                    <div className="space-y-1 text-sm text-slate-400">
                      <p className="flex items-center gap-2">
                        <Calendar size={14} className="text-slate-500" aria-hidden="true" />
                        {role.period}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={14} className="text-slate-500" aria-hidden="true" />
                        {role.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] text-slate-500 uppercase">Key responsibilities</p>
                      <ul className="mt-3 space-y-2">
                        {role.responsibilities.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] text-slate-500 uppercase">Technical achievements</p>
                      <ul className="mt-3 space-y-2">
                        {role.achievements.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-700/40 pt-5">
                    {role.technologies.map((tech) => (
                      <span key={tech} className="rounded-md border border-slate-700/60 bg-slate-800/30 px-2.5 py-1.5 font-mono text-[11px] text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
