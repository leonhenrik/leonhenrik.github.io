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
  return (
    <motion.div variants={stagger} initial="hidden" animate="show">
      <motion.div className="cv-hero" variants={fadeUp}>
        <div className="cv-avatar">LT</div>
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

      <motion.div variants={fadeUp}>
        <div className="section-title">Work Experience</div>
        <div className="timeline">
          {cvData.experience.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <div className="company">{item.company} &mdash; <span style={{fontWeight:400, color:'var(--text-tertiary)'}}>{item.location}</span></div>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="section-divider" />

      <motion.div variants={fadeUp}>
        <div className="section-title">Research</div>
        <div className="timeline">
          {cvData.research.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <div className="company">{item.institution} &mdash; <span style={{fontWeight:400, color:'var(--text-tertiary)'}}>{item.location}</span></div>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="section-divider" />

      <motion.div variants={fadeUp}>
        <div className="section-title">Education</div>
        <div className="timeline">
          {cvData.education.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <div className="company">{item.institution} &mdash; <span style={{fontWeight:400, color:'var(--text-tertiary)'}}>{item.location}</span></div>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="section-divider" />

      <motion.div variants={fadeUp}>
        <div className="section-title">Civic Engagement</div>
        <div className="timeline">
          {cvData.civic.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <div className="company">{item.organisation} &mdash; <span style={{fontWeight:400, color:'var(--text-tertiary)'}}>{item.location}</span></div>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="section-divider" />

      <motion.div variants={fadeUp}>
        <div className="section-title">Awards & Scholarships</div>
        <div className="timeline">
          {cvData.awards.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <div className="company">{item.body}</div>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="section-divider" />

      <motion.div variants={fadeUp}>
        <div className="section-title">Skills & Interests</div>
        <div className="skills-grid">
          {cvData.skills.map((skill, i) => (
            <span className="skill-tag" key={i}>{skill}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
