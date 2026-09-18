import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Code2, Search, ExternalLink } from 'lucide-react'
import { projects } from '../data/content'
import '../styles/pages.css'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))]

export default function Portfolio() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('All')

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchesTag = activeTag === 'All' || p.tags.includes(activeTag)
      const q = query.toLowerCase()
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))
      return matchesTag && matchesQuery
    })
  }, [query, activeTag])

  return (
    <div>
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Portfolio</h1>
        <p className="subtitle">Coding projects, analyses and other things I've built.</p>
        <div className="accent-line" />
      </motion.div>

      <div className="search-filter-bar">
        <div className="search-input-wrapper">
          <Search size={14} className="search-input-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search projects…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="filter-tags">
          {allTags.map(tag => (
            <button key={tag} className={`filter-tag ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(tag)}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="card-grid cols-2"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {filtered.length === 0 && <p className="no-results">No projects match your search.</p>}
        {filtered.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <div className="project-card-wrapper">
              <Link to={`/portfolio/${project.id}`} className="project-card">
                <div className="project-card-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <Code2 size={40} className="placeholder-icon" />
                  )}
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <div className="project-subtitle">{project.subtitle}</div>
                  <p>{project.description}</p>
                </div>
                <div className="project-card-footer">
                  <div className="tags">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span className="tag" key={i}>{tag}</span>
                    ))}
                  </div>
                  <span className="year">{project.year}</span>
                </div>
              </Link>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-badge">
                  <ExternalLink size={16} />
                  Visit Site
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
