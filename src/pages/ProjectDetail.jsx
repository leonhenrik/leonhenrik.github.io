import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, GitFork } from 'lucide-react'
import { projects } from '../data/content'
import '../styles/pages.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <Navigate to="/portfolio" replace />

  return (
    <motion.div
      className="detail-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link to="/portfolio" className="back-link">
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      <div className="detail-container">
        <div className="detail-content">
          <div className="detail-header">
            <h1>{project.title}</h1>
            <div className="project-subtitle">{project.subtitle}</div>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span className="tag accent" key={i}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="detail-body">
            {project.longDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="detail-links">
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="detail-link">
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="detail-link">
                <GitFork size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>

        {project.image && (
          <div className="detail-image">
            <img src={project.image} alt={project.title} />
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="detail-image-badge">
                <ExternalLink size={16} />
                Visit Site
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
