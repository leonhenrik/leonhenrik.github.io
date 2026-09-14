import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { initiatives } from '../data/content'
import '../styles/pages.css'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

const allTags = ['All', ...Array.from(new Set(initiatives.flatMap(p => p.tags)))]

export default function Initiatives() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('All')

  const filtered = useMemo(() => {
    return initiatives.filter(item => {
      const matchesTag = activeTag === 'All' || item.tags.includes(activeTag)
      const q = query.toLowerCase()
      const matchesQuery = !q || item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.authors?.toLowerCase().includes(q) || item.venue?.toLowerCase().includes(q)
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
        <h1>Research</h1>
        <p className="subtitle">Publications, papers, and findings from my research work.</p>
        <div className="accent-line" />
      </motion.div>

      <div className="search-filter-bar">
        <div className="search-input-wrapper">
          <Search size={14} className="search-input-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search publications…"
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
        {filtered.length === 0 && <p className="no-results">No publications match your search.</p>}
        {filtered.map((item, i) => (
          <motion.div key={i} variants={fadeUp}>
            <div className="initiative-card">
              <h3>{item.title}</h3>
              <div className="initiative-meta">
                <span className="role">{item.authors}</span>
                <span className="period">{item.year}</span>
              </div>
              <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>{item.venue}</p>
              <p>{item.description}</p>
              <div className="tags">
                {item.tags.map((tag, j) => (
                  <span className="tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
