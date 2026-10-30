import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, ExternalLink } from 'lucide-react'
import { blogPosts } from '../data/content'
import { getReadingTime } from '../utils/readingTime'
import '../styles/pages.css'
import './Blog.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <motion.div
      className="blog-post"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link to="/blog" className="back-link">
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <div className="blog-post-header">
        <div className="blog-post-meta">
          <span>{post.date}</span>
          <span>·</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={12} />
            {getReadingTime(post.content)}
          </span>
        </div>
        <h1>{post.title}</h1>
        <p className="post-subtitle">{post.subtitle}</p>
        <div className="tags">
          {post.tags.map((tag, i) => (
            <span className="tag accent" key={i}>{tag}</span>
          ))}
        </div>
        {post.sourceArticle && (
          <aside className="blog-source-article">
            <span>In response to</span>
            <a href={post.sourceArticle.url} target="_blank" rel="noopener noreferrer">
              {post.sourceArticle.title}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </aside>
        )}
        <hr className="blog-post-divider" />
      </div>

      <div className="blog-post-content">
        <div className="blog-post-body">
          {post.content.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {post.coverImage && (
          <aside className="blog-post-aside">
            <figure className="blog-post-cover">
              <img src={post.coverImage.url} alt={post.coverImage.alt} />
            </figure>
          </aside>
        )}
      </div>
    </motion.div>
  )
}
