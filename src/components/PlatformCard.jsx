import React from 'react';
import { Star, ArrowRight, Check, ExternalLink, Zap } from 'lucide-react';

export default function PlatformCard({ platform, onSelectPlatform }) {
  const getBadgeClass = (type) => {
    if (type === 'emerald') return 'badge-emerald';
    if (type === 'amber') return 'badge-amber';
    return 'badge-glow';
  };

  return (
    <div className="glass-card" style={{ 
      padding: '1.75rem', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Brand Glow line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: `linear-gradient(90deg, ${platform.iconColor}, transparent)`
      }} />

      <div>
        {/* Card Header: Icon + Name + Badge */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{ width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0 }}
              dangerouslySetInnerHTML={{ __html: platform.logoSvg }}
            />
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.2 }}>
                {platform.name}
              </h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                por {platform.company}
              </span>
            </div>
          </div>

          <span className={`badge ${getBadgeClass(platform.badgeType)}`}>
            {platform.badgeText}
          </span>
        </div>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', color: '#f59e0b' }}>
            <Star size={15} fill="#f59e0b" />
          </div>
          <strong style={{ color: 'var(--text-primary)' }}>{platform.rating}</strong>
          <span style={{ color: 'var(--text-muted)' }}>({platform.reviewsCount} usuarios)</span>
        </div>

        {/* Tagline */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          {platform.tagline}
        </p>

        {/* Key Features List */}
        <div style={{ marginBottom: '1.5rem', background: 'var(--bg-glass)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
            Características Clave:
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {platform.keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Check size={14} color={platform.iconColor} style={{ flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / Pricing & Actions */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.2rem', paddingTtop: '0.5rem', borderTop: '1px dashed var(--border-color)' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Planes desde:</span>
          <div>
            <strong style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>{platform.plans[0].price}</strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}> / {platform.plans[0].name}</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.6rem' }}>
          <button 
            onClick={() => onSelectPlatform(platform)}
            className="btn btn-primary btn-sm"
            style={{ width: '100%' }}
          >
            <span>Ver Detalles & Precios</span>
            <ArrowRight size={15} />
          </button>

          <a 
            href={platform.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            title={`Visitar sitio oficial de ${platform.name}`}
            style={{ padding: '0.45rem 0.75rem' }}
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
