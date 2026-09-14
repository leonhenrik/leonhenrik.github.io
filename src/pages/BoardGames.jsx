import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { boardGames } from '../data/content'
import '../styles/pages.css'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export default function BoardGames() {
  return (
    <div>
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Board Games</h1>
        <p className="subtitle">My collection highlights and personal ratings.</p>
        <div className="accent-line" />
      </motion.div>

      <motion.div
        className="card-grid cols-3"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {boardGames.map((game, i) => (
          <motion.div key={i} variants={fadeUp}>
            <div className="game-card">
              {game.image && (
                <div className="game-card-image">
                  <img src={game.image} alt={game.title} />
                </div>
              )}
              <div className="game-card-header">
                <h3>{game.title}</h3>
                <div className="game-rating">
                  <Star size={14} fill="currentColor" />
                  {game.rating}
                </div>
              </div>
              <div className="game-meta">
                <span>{game.category}</span>
                <span>·</span>
                <span>{game.players} players</span>
              </div>
              <p>{game.note}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
