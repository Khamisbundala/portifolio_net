import { motion } from 'framer-motion'
import { Award, BadgeCheck, BookOpen, Calendar, ExternalLink, GraduationCap } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { certifications, statusStyles } from '../data/certifications.js'

const typeIcon = {
  certification: Award,
  education: GraduationCap,
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative bg-navy-900/25">
      <div className="container-x">
        <SectionTitle
          eyebrow="Certifications & Education"
          title="Credentials and learning path"
          description="Professional certifications and academic qualifications. Items below are placeholders until real credentials, dates and verification links are added."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = typeIcon[cert.type] || Award
            const statusClass = statusStyles[cert.status] || statusStyles.planned
            const hasCredential = Boolean(cert.credentialUrl)
            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="panel rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-glow/10 text-cyan-glow ring-1 ring-cyan-glow/20">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide uppercase ${statusClass}`}>
                    {cert.status}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">{cert.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>

                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Calendar size={15} className="shrink-0 text-slate-500" aria-hidden="true" />
                    <div>
                      <dt className="sr-only">Completion date</dt>
                      <dd>{cert.date}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <BadgeCheck size={15} className="shrink-0 text-slate-500" aria-hidden="true" />
                    <div>
                      <dt className="sr-only">Credential</dt>
                      <dd>
                        {hasCredential ? (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-cyan-glow transition hover:text-cyan-300"
                          >
                            Verify credential
                            <ExternalLink size={14} aria-hidden="true" />
                          </a>
                        ) : (
                          <span className="text-slate-500">Credential link to be added</span>
                        )}
                      </dd>
                    </div>
                  </div>
                </dl>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-800/20 p-4 text-sm text-slate-400">
          <BookOpen size={18} className="mt-0.5 shrink-0 text-cyan-glow" aria-hidden="true" />
          <p>
            <span className="font-medium text-slate-300">Transparency note:</span> Only mark a certification as <span className="text-emerald-300">earned</span> once you have completed it and can provide a verification link. Update statuses in <code className="text-slate-300">src/data/certifications.js</code>.
          </p>
        </div>
      </div>
    </section>
  )
}
