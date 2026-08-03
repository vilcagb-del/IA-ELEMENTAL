import React from 'react';
import { X, Check, ExternalLink, Star, ShieldCheck, Zap, ThumbsUp, AlertCircle } from 'lucide-react';

export default function PlatformModal({ platform, onClose }) {
  if (!platform) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', paddingRight: '2rem' }}>
          <div 
            style={{ width: '64px', height: '64px', borderRadius: '16px', flexShrink: 0 }}
            dangerouslySetInnerHTML={{ __html: platform.logoSvg }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>{platform.name}</h2>
              <span className="badge badge-glow">{platform.badgeText}</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Desarrollado por <strong>{platform.company}</strong> • {platform.category}
            </p>
          </div>
        </div>

        {/* Rating Banner */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justify: 'space-between',
          background: 'var(--bg-glass)', 
          padding: '0.85rem 1.25rem', 
          borderRadius: 'var(--radius-md)', 
          marginBottom: '1.5rem',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Star size={18} fill="#f59e0b" color="#f59e0b" />
            <strong style={{ fontSize: '1.1rem' }}>{platform.rating} / 5.0</strong>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>({platform.reviewsCount} reseñas verificadas)</span>
          </div>
          <span style={{ color: 'var(--emerald-accent)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <ShieldCheck size={16} /> Verificado 2026
          </span>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Descripción General</h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {platform.description}
          </p>
        </div>

        {/* Key Features & Use Cases Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* All Features */}
          <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={18} color={platform.iconColor} /> Funcionalidades Destacadas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {platform.keyFeatures.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <Check size={16} color={platform.iconColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pros and Cons */}
          <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ThumbsUp size={18} color="var(--emerald-accent)" /> Ventajas Clave
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              {platform.pros.map((pro, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <Check size={15} color="var(--emerald-accent)" style={{ flexShrink: 0 }} />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Tiers Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Planes de Precios Actualizados
          </h4>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {platform.plans.map((plan, idx) => (
              <div 
                key={idx}
                style={{
                  background: idx === 1 ? 'rgba(99, 102, 241, 0.12)' : 'var(--bg-glass)',
                  border: idx === 1 ? '1px solid var(--primary-accent)' : '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{plan.name}</strong>
                    {idx === 1 && <span className="badge badge-glow" style={{ fontSize: '0.65rem' }}>Recomendado</span>}
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>{plan.price}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{plan.period}</span>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {plan.features.map((f, i) => (
                      <li key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                        <Check size={14} color={platform.iconColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Cerrar
          </button>
          
          <a 
            href={platform.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Probar {platform.name} en Sitio Oficial</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
