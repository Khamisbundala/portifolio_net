import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Layers, X } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectDiagram from '../components/ProjectDiagram.jsx'
import { projects } from '../data/projects.js'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="panel max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-700/40 bg-navy-900/95 px-6 py-5 backdrop-blur">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mono-label">{project.category}</span>
              {project.demo && (
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-amber-300 uppercase">
                  Demonstration project
                </span>
              )}
            </div>
            <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700/60 text-slate-400 transition hover:text-white"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-cyan-glow uppercase">Problem statement</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-cyan-glow uppercase">Technical solution</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.solution}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-cyan-glow uppercase">Key highlights</p>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-cyan-glow uppercase">Technologies used</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md border border-slate-700/60 bg-slate-800/35 px-2.5 py-1.5 font-mono text-[11px] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-cyan-glow uppercase">Topology / diagram</p>
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-700/50">
              <ProjectDiagram type={project.diagram} />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Diagram is illustrative. Replace with your own Packet Tracer, GNS3, Visio or lab screenshots when publishing real work.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Network projects and lab work"
          description="Practical examples that demonstrate how I approach design, configuration, security and troubleshooting. Demonstration projects are clearly labelled and can be replaced with your real work."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="panel group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-glow/25"
            >
              <div className="relative overflow-hidden border-b border-slate-700/40">
                <div className="aspect-[16/7]">
                  <ProjectDiagram type={project.diagram} />
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-md bg-navy-950/80 px-2.5 py-1 font-mono text-[10px] tracking-wider text-cyan-glow backdrop-blur">
                    {project.number}
                  </span>
                  {project.demo && (
                    <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-amber-300 backdrop-blur">
                      DEMO
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <p className="mono-label mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-md border border-slate-700/60 bg-slate-800/30 px-2 py-1 font-mono text-[10px] text-slate-400">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-md border border-slate-700/60 bg-slate-800/30 px-2 py-1 font-mono text-[10px] text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-700/40 pt-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Layers size={14} aria-hidden="true" />
                    <span>{project.demo ? 'Demonstration / lab project' : 'Real-world project'}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-glow transition hover:text-cyan-300"
                  >
                    View Project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
