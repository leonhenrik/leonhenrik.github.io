import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import CV from './pages/CV'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import Songs from './pages/Songs'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Initiatives from './pages/Initiatives'
import BoardGames from './pages/BoardGames'
import Links from './pages/Links'
import Impressum from './pages/Impressum'

function App({ initialPath }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (initialPath) {
      navigate(initialPath, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/board-games" element={<BoardGames />} />
          <Route path="/links" element={<Links />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
