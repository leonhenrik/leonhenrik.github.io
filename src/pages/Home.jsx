import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/content'
import './Home.css'

const roles = ['data scientist', 'ai researcher', 'musician', 'producer', 'board game developer']

const sectionCards = [
  { path: '/cv', label: 'CV', desc: 'Experience & education' },
  { path: '/portfolio', label: 'Portfolio', desc: 'Coding & projects' },
  { path: '/songs', label: 'Songs', desc: 'Music & composition' },
  { path: '/blog', label: 'Thoughts', desc: 'Essays & writing' },
  { path: '/initiatives', label: 'Initiatives', desc: 'Community & causes' },
  { path: '/board-games', label: 'Board Games', desc: 'Collection & favourites' },
  { path: '/links', label: 'Links', desc: 'Around the internet' },
]

export default function Home() {
  return (
    <div className="home">
      {/* ─── Hero ─── */}
      <div className="home-hero">
        <motion.div
          className="home-photo-col"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="home-photo-frame">
            <img src="/Image.jpeg" alt="Leon Thiel" className="home-photo" />
            <div className="home-photo-overlay" />
          </div>
          <div className="home-photo-caption">
            <span className="location-dot" />
            Cambridge, UK
          </div>
        </motion.div>

        <motion.div
          className="home-text-col"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="home-eyebrow">Hello, I'm</div>
          <h1 className="home-name"><span className="home-first-name">Leon</span><br /><span className="home-last-name">Thiel<img src="/notes.png" alt="" className="home-notes-decoration" aria-hidden="true" /></span></h1>

          <div className="home-roles">
            {roles.map((role, i) => (
              <motion.span
                key={role}
                className="home-role-pill"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
              >
                {role}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="home-bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {profile.bio}
          </motion.p>

          <motion.div
            className="home-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
          >
            <Link to="/portfolio" className="cta-primary">View Work</Link>
            <Link to="/cv" className="cta-secondary">Read CV</Link>
          </motion.div>
        </motion.div>
      </div>


      {/* ─── Navigation Grid ─── */}
     
    </div>
  )
}
