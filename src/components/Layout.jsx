import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import './Layout.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/cv', label: 'CV' },
  { path: '/blog', label: 'Thoughts' },
  { path: '/portfolio', label: 'Projects' },
  { path: '/songs', label: 'Songs' },
  { path: '/links', label: 'Links' },
]

const pageTitles = [
  { path: '/', label: 'Home' },
  { path: '/cv', label: 'CV' },
  { path: '/blog', label: 'Thoughts' },
  { path: '/portfolio', label: 'Projects' },
  { path: '/songs', label: 'Songs' },
  { path: '/links', label: 'Links' },
  { path: '/initiatives', label: 'Initiatives' },
  { path: '/board-games', label: 'Board Games' },
  { path: '/impressum', label: 'Impressum' },
]

function getPageLabel(pathname) {
  const exact = pageTitles.find(item => item.path === pathname)
  if (exact) return exact.label

  // longest matching prefix handles dynamic routes like /portfolio/:id or /blog/:slug
  const prefixMatch = pageTitles
    .filter(item => item.path !== '/' && pathname.startsWith(item.path))
    .sort((a, b) => b.path.length - a.path.length)[0]

  return prefixMatch?.label ?? 'Home'
}

export default function Layout({ children }) {
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.title = `${getPageLabel(location.pathname)} | Leon Thiel`
  }, [location.pathname])

  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <NavLink to="/" className="logo">
            <span className="logo-name">Leon Thiel</span>
          </NavLink>

          <nav className="nav-desktop">
            {navItems.map((item, index) => (
              <div key={item.path} className="nav-item-wrapper">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
                {(item.path === '/portfolio' || item.path === '/board-games') && (
                  <div className="nav-separator" />
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-mobile-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Leon Thiel. Built with Microsoft Paint.
          {' · '}
          <NavLink to="/impressum" className="footer-link">Impressum</NavLink>
        </p>
      </footer>
    </div>
  )
}
