import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Film, Music, Briefcase, Code, Award } from 'lucide-react'
import { links } from '../data/content'
import '../styles/pages.css'

const iconMap = {
  github: Code,
  scholar: Award,
  medium: BookOpen,
  youtube: Film,
  spotify: Music,
  linkedin: Briefcase,
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export default function Links() {
  return (
    <div>
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Links</h1>
        <p className="subtitle">Other places on the internet where I am (somewhat? More or less.) active!</p>
        <div className="accent-line" />
      </motion.div>

      <motion.div
        className="links-grid"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {links.map((item, i) => {
          const Icon = iconMap[item.icon] || BookOpen
          return (
            <motion.div key={i} variants={fadeUp}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <div className="link-icon">
                  <Icon size={22} />
                </div>
                <div className="link-info">
                  <h3>{item.platform}</h3>
                  <p>{item.description}</p>
                </div>
                <ArrowUpRight size={18} className="link-arrow" />
              </a>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
