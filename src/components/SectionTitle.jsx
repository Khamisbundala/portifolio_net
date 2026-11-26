import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, description, align = 'center', as: Tag = 'h2' }) {
  const centered = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}
    >
      {eyebrow && (
        <p className="mono-label mb-3 inline-flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-cyan-glow/60" aria-hidden="true" />
          {eyebrow}
          {centered && <span className="inline-block h-px w-6 bg-cyan-glow/60" aria-hidden="true" />}
        </p>
      )}
      <Tag className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </Tag>
      {description && (
        <p className={`mt-4 text-base leading-relaxed text-slate-400 md:text-lg ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
