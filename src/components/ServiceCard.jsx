import { motion } from 'framer-motion'
import { Activity, LifeBuoy, Network, Route, Settings2, ShieldCheck, Wifi, Wrench } from 'lucide-react'

const icons = { Activity, LifeBuoy, Network, Route, Settings2, ShieldCheck, Wifi, Wrench }

export default function ServiceCard({ service, index }) {
  const Icon = icons[service.icon] || Network
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-glow/25"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-glow/10 text-cyan-glow ring-1 ring-cyan-glow/20 transition group-hover:bg-cyan-glow/15">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
    </motion.article>
  )
}
