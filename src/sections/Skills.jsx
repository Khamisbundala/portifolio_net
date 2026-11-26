import SectionTitle from '../components/SectionTitle.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { skillCategories } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-x">
        <SectionTitle
          eyebrow="Technical Skills"
          title="A practical networking toolkit"
          description="Core competencies across networking fundamentals, routing and switching, security, infrastructure, and the tools used to build and troubleshoot real networks."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Skills are listed by domain. Proficiency ratings are intentionally omitted unless they can be honestly assessed.
        </p>
      </div>
    </section>
  )
}
