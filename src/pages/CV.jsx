import { motion } from 'framer-motion'
import { MapPin, Mail, GitFork } from 'lucide-react'
import { profile, cvData } from '../data/content'
import '../styles/pages.css'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export default function CV() {
  const sections = [
    {
      title: 'Work Experience',
      items: cvData.experience.map((item) => ({
        period: item.period,
        title: item.role,
        subtitle: item.company,
        detail: item.location,
        description: item.description,
      })),
    },
    {
      title: 'Research & Teaching',
      items: cvData.research.map((item) => ({
        period: item.period,
        title: item.role,
        subtitle: item.institution,
        detail: item.location,
        description: item.description,
      })),
    },
    {
      title: 'Education',
      items: cvData.education.map((item) => ({
        period: item.period,
        title: item.degree,
        subtitle: item.institution,
        detail: item.location,
        description: item.description,
      })),
    },
    {
      title: 'Civic Engagement',
      items: cvData.civic.map((item) => ({
        period: item.period,
        title: item.role,
        subtitle: item.organisation,
        detail: item.location,
        description: item.description,
      })),
    },
    {
      title: 'Awards & Scholarships',
      items: cvData.awards.map((item) => ({
        period: item.period,
        title: item.title,
        subtitle: item.body,
        description: item.description,
      })),
    },
  ]

  return (
    <motion.div className="cv-page" variants={stagger} initial="hidden" animate="show">
      <motion.div className="cv-hero" variants={fadeUp}>
        <div className="cv-intro">
          <h1>{profile.name}</h1>
          <div className="tagline">{profile.tagline}</div>
          <p className="bio">{profile.bio}</p>
          <div className="cv-contact">
            <span className="location">
              <MapPin size={13} />{profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="location">
              <Mail size={13} />{profile.email}
            </a>
            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className="location">
              <GitFork size={13} />@{profile.github}
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div className="cv-sections-grid" variants={fadeUp}>
        {sections.map((section) => (
          <section className="cv-section" key={section.title}>
            <h2 className="cv-section-title">{section.title}</h2>
            <div className="cv-timeline">
              {section.items.map((item, i) => (
                <article className="cv-timeline-item" key={`${item.title}-${i}`}>
                  <div className="cv-timeline-period">{item.period}</div>
                  <h3>{item.title}</h3>
                  {item.subtitle && <div className="cv-timeline-subtitle">{item.subtitle}</div>}
                  {item.detail && <div className="cv-timeline-detail">{item.detail}</div>}
                  {item.description && <p>{item.description}</p>}
                </article>
              ))}
            </div>
          </section>
        ))}
        <section className="cv-section cv-skills-section">
          <h2 className="cv-section-title">Skills & Interests</h2>
          <div className="skills-grid">
            {cvData.skills.map((skill) => (
              <span className="skill-tag" key={skill}>{skill}</span>
            ))}
          </div>
        </section>
      </motion.div>
    </motion.div>
  )
}
