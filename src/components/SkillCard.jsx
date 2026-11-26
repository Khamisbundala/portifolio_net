import { motion } from 'framer-motion'
import { Network, Route, Server, ShieldCheck, TerminalSquare } from 'lucide-react'

const icons = { Network, Route, Server, ShieldCheck, TerminalSquare }

const accentMap = {
  sky: 'border-sky-400/20 hover:border-sky-400/45 text-sky-400 bg-sky-400/10',
  blue: 'border-blue-400/20 hover:border-blue-400/45 text-blue-400 bg-blue-400/10',
  cyan: 'border-cyan-400/20 hover:border-cyan-400/45 text-cyan-400 bg-cyan-400/10',
  indigo: 'border-indigo-400/20 hover:border-indigo-400/45 text-indigo-400 bg-indigo-400/10',
  teal: 'border-teal-400/20 hover:border-teal-400/45 text-teal-400 bg-teal-400/10',
}

export default function SkillCard({ category, index }) {
  const Icon = icons[category.icon] || Network
  const accent = accentMap[category.accent] || accentMap.sky
  const [borderHover, , iconColor, iconBg] = accent.split(' ')

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`panel card-shine group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 ${borderHover}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
          <Icon size={24} aria-hidden="true" />
        </div>
        <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{category.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-slate-700/60 bg-slate-800/35 px-2.5 py-1.5 font-mono text-[11px] text-slate-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
