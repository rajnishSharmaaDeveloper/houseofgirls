import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/products';

export default function BlogSection() {
  return (
    <section className="section-container" id="blog">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-brand)' }}>
          Our Journal
        </span>
        <h2 style={{ fontSize: '32px', color: 'var(--indigo-dark)', marginTop: '4px' }}>Latest Beauty Secrets</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            style={{ 
              backgroundColor: 'var(--bg-pure)', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'var(--transition-smooth)',
              cursor: 'pointer'
            }}
            className="blog-card"
          >
            {/* Image */}
            <div style={{ height: '220px', overflow: 'hidden', backgroundColor: 'var(--bg-warm-grey)' }}>
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  transition: 'var(--transition-smooth)'
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              {/* Meta */}
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--slate-light)', marginBottom: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} /> {post.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <User size={12} /> By {post.author}
                </span>
              </div>

              <h3 style={{ fontSize: '18px', color: 'var(--slate-dark)', marginBottom: '12px', fontWeight: 700 }}>
                {post.title}
              </h3>
              
              <p style={{ fontSize: '14px', color: 'var(--slate-light)', marginBottom: '20px', flexGrow: 1 }}>
                {post.excerpt}
              </p>

              <span 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  color: 'var(--primary-brand)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Read Article <ArrowRight size={12} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
