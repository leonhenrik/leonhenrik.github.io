import { motion } from 'framer-motion'
import { films } from '../data/content'
import '../styles/pages.css'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export default function Films() {
  return (
    <div>
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Films & Scripts</h1>
        <p className="subtitle">Short films, documentaries, and screenwriting work.</p>
        <div className="accent-line" />
      </motion.div>

      <motion.div
        className="card-grid cols-2"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {films.map((film, i) => (
          <motion.div key={i} variants={fadeUp}>
            <div className="film-card">
              <div className="film-card-header">
                <h3>{film.title}</h3>
                <span className="film-card-meta">{film.year} · {film.duration}</span>
              </div>
              <div className="role">{film.role}</div>
              <span className="tag" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{film.type}</span>
              <p>{film.description}</p>
              {film.festivals.length > 0 && (
                <div className="festivals">
                  {film.festivals.map((fest, j) => (
                    <span className="tag accent" key={j}>{fest}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
