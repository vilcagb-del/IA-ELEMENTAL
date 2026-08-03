import React from 'react';
import { Search, Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { categories } from '../data/aiPlatforms';

export default function HeroSection({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) {
  return (
    <section style={{ padding: '4rem 0 2rem 0', textAlign: 'center' }} className="fade-in-up">
      <div style={{ display: 'inline-flex', marginBottom: '1.2rem' }}>
        <span className="badge badge-glow">
          <Sparkles size={14} /> Guía Interactiva de Inteligencia Artificial 2026
        </span>
      </div>

      <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.15, marginBottom: '1.2rem', fontWeight: 800 }}>
        Descubre las Plataformas de <br />
        <span className="gradient-text">Inteligencia Artificial</span> Líderes
      </h1>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
        Información actualizada, características avanzadas, planes de precios y comparativa interactiva de 
        <strong style={{ color: 'var(--text-primary)' }}> ChatGPT, Google Gemini, Microsoft Copilot, Canva y Dropbox</strong>.
      </p>

      {/* Real-time Search Box */}
      <div style={{ maxWidth: '640px', margin: '0 auto 2rem auto', position: 'relative' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          background: 'var(--bg-card)', 
          border: '1px solid var(--border-color)', 
          borderRadius: 'var(--radius-full)', 
          padding: '0.5rem 0.5rem 0.5rem 1.25rem',
          boxShadow: 'var(--shadow-card)',
          backdropFilter: 'blur(16px)'
        }}>
          <Search size={20} color="var(--text-muted)" style={{ flexShrink: 0, marginRight: '0.75rem' }} />
          <input 
            type="text"
            placeholder="Buscar por nombre, función o empresa (ej. ChatGPT, imágenes, Excel)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)'
            }}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'var(--text-secondary)',
                borderRadius: '50%',
                width: '26px',
                height: '26px',
                cursor: 'pointer',
                marginRight: '0.5rem',
                fontSize: '0.8rem'
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem' }}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`btn btn-sm ${selectedCategory === cat.key ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Quick stats highlights */}
      <div style={{ 
        display: 'flex', 
        justify: 'center', 
        alignItems: 'center', 
        gap: '2rem', 
        flexWrap: 'wrap', 
        color: 'var(--text-muted)', 
        fontSize: '0.88rem' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <CheckCircle2 size={16} color="var(--emerald-accent)" /> 5 Plataformas Oficiales Requeridas
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <CheckCircle2 size={16} color="var(--emerald-accent)" /> Precios & Funciones 2026
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <CheckCircle2 size={16} color="var(--emerald-accent)" /> Despliegue 1-Click en Vercel
        </div>
      </div>
    </section>
  );
}
