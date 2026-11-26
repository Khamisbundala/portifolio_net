import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-navy-900/25">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" aria-hidden="true" />
      <div className="container-x">
        <SectionTitle
          eyebrow="Professional Services"
          title="How I can support your infrastructure"
          description="From initial network design to ongoing troubleshooting and security hardening, these are the areas where I deliver practical value."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
