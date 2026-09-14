import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { songs } from '../data/content'
import '../styles/pages.css'
import './Songs.css'

const carouselImages = [
  { src: '/music2.jpeg', alt: 'Leon performing live' },
  { src: '/music1.jpeg', alt: 'Leon with band' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export default function Songs() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % carouselImages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="songs-page">
      {/* ─── Left column: intro + carousel ─── */}
      <motion.div
        className="songs-left"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="songs-intro">
          <div className="songs-eyebrow">Music</div>
          <h1 className="songs-title">
            Indie artist.<br />
            Producer.
          </h1>
          <div className="songs-identity-cards">
            <div className="songs-identity-card">
              <div className="songs-identity-label">As an artist</div>
              <div className="songs-identity-name">theon</div>
              <p className="songs-identity-desc">
                I write and release german indie music under the name <strong>theon</strong> — guitar-driven songs that sit somewhere between singer-songwriter and indie pop. Playing piano, drums, and guitar since I was a kid; writing songs since I could.
              </p>
            </div>
            <div className="songs-identity-card">
              <div className="songs-identity-label">As a producer</div>
              <div className="songs-identity-name">for others</div>
              <p className="songs-identity-desc">
                I also produce for other artists, handling arrangement, recording, and mixing. I enjoy collaboration on music as much as the solo work.
              </p>
            </div>
          </div>
        </div>

        <div className="songs-carousel">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={carouselImages[current].src}
              alt={carouselImages[current].alt}
              className="songs-carousel-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          <div className="songs-carousel-dots">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                className={`songs-carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Show photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Right column: song list ─── */}
      <div className="songs-right">
        <div className="songs-list-header">
          <span className="section-title">Releases</span>
        </div>

        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {songs.map((song, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="song-card">
                <div className="song-disc" />
                <div className="song-info">
                  <h3>{song.title}</h3>
                  <div className="song-meta">
                    <span>{song.project}</span>
                    <span>·</span>
                    <span>{song.year}</span>
                    <span>·</span>
                    <span>{song.genre}</span>
                  </div>
                  <p>{song.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
