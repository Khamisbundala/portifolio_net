import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { site } from '../data/site.js'

const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const hasEmailJS = Boolean(EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC)

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Full name is required.'
  if (!values.email.trim()) errors.email = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.'
  if (!values.subject.trim()) errors.subject = 'Subject is required.'
  if (!values.message.trim()) errors.message = 'Message is required.'
  else if (values.message.trim().length < 20) errors.message = 'Message should be at least 20 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields before sending.' })
      return
    }

    if (!hasEmailJS) {
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      )}`
      window.location.href = mailto
      setStatus({
        type: 'info',
        message: 'EmailJS is not configured. Your email client was opened as a fallback. Add EmailJS keys to .env.local to enable direct form submission.',
      })
      return
    }

    setStatus({ type: 'loading', message: 'Sending your message...' })
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: site.name,
        },
        { publicKey: EMAILJS_PUBLIC },
      )
      setForm(initialForm)
      setErrors({})
      setStatus({ type: 'success', message: 'Message sent successfully. Thank you for reaching out.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'The message could not be sent right now. Please try again or email me directly.',
      })
    }
  }

  const contactCards = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, '')}` },
    { icon: MapPin, label: 'Location', value: site.location },
    { icon: Linkedin, label: 'LinkedIn', value: 'View profile', href: site.linkedin, external: true },
    { icon: Github, label: 'GitHub', value: 'View repositories', href: site.github, external: true },
  ]

  const inputClass = (hasError) =>
    `w-full rounded-xl border bg-navy-950/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-glow/50 focus:outline-none focus:ring-2 focus:ring-cyan-glow/15 ${
      hasError ? 'border-red-400/50' : 'border-slate-700/60'
    }`

  return (
    <section id="contact" className="section-pad relative bg-navy-900/25">
      <div className="container-x">
        <SectionTitle
          eyebrow="Contact"
          title="Let's connect"
          description="Whether you have a role, a project, or a technical challenge to discuss, I'm open to a professional conversation."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            <div className="panel rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">Contact information</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Replace the placeholder details in <code className="text-slate-300">src/data/site.js</code> with your real contact information.
              </p>
              <div className="mt-6 space-y-4">
                {contactCards.map(({ icon: Icon, label, value, href, external }) => {
                  const Wrapper = href ? 'a' : 'div'
                  return (
                    <Wrapper
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-4 rounded-xl border border-slate-700/40 bg-slate-800/20 p-4 ${
                        href ? 'transition hover:border-cyan-glow/25 hover:bg-slate-800/35' : ''
                      }`}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-glow">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">{label}</p>
                        <p className="text-sm text-slate-200">{value}</p>
                      </div>
                    </Wrapper>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <form onSubmit={onSubmit} className="panel rounded-2xl p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">Full name</label>
                  <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={onChange} className={inputClass(errors.name)} placeholder="Your full name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
                  {errors.name && <p id="name-error" className="mt-2 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} className={inputClass(errors.email)} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
                  {errors.email && <p id="email-error" className="mt-2 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">Subject</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={onChange} className={inputClass(errors.subject)} placeholder="How can I help?" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />
                {errors.subject && <p id="subject-error" className="mt-2 text-xs text-red-400">{errors.subject}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message</label>
                <textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} className={`${inputClass(errors.message)} resize-y`} placeholder="Tell me about the role, project, or network challenge..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
                {errors.message && <p id="message-error" className="mt-2 text-xs text-red-400">{errors.message}</p>}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-glow px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status.type === 'loading' ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {!hasEmailJS && (
                  <p className="text-xs text-slate-500">EmailJS not configured — mail client fallback enabled.</p>
                )}
              </div>

              {status.message && (
                <div
                  className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                      : status.type === 'error'
                        ? 'border-red-400/30 bg-red-400/10 text-red-300'
                        : status.type === 'loading'
                          ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200'
                          : 'border-slate-600/40 bg-slate-700/20 text-slate-300'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
