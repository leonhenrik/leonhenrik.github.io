import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Clock, Search } from 'lucide-react'
import { blogPosts } from '../data/content'
import '../styles/pages.css'
import './Blog.css'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(p => p.tags)))]

export default function Blog() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('All')

  const filtered = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesTag = activeTag === 'All' || post.tags.includes(activeTag)
      const q = query.toLowerCase()
      const matchesQuery = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || post.tags.some(t => t.toLowerCase().includes(q))
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
        <h1>Thoughts</h1>
        <p className="subtitle">Essays on creativity, technology, and the things in between.</p>
        <div className="accent-line" />
      </motion.div>

      <div className="search-filter-bar">
        <div className="search-input-wrapper">
          <Search size={14} className="search-input-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search posts…"
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
        className="blog-list"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {filtered.length === 0 && <p className="no-results">No posts match your search.</p>}
        {filtered.map((post) => (
          <motion.div key={post.slug} variants={fadeUp}>
            <Link to={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-sep">·</span>
                <span className="blog-read-time">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-subtitle">{post.subtitle}</p>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <div className="tags">
                  {post.tags.map((tag, j) => (
                    <span className="tag" key={j}>{tag}</span>
                  ))}
                </div>
                <span className="blog-read-more">Read →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
