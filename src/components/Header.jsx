import React from 'react';
import { Sparkles, Moon, Sun, Github, ExternalLink } from 'lucide-react';

export default function Header({ theme, toggleTheme, onOpenDeployGuide }) {
  return (
    <header className="navbar">
      <div className="app-container nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Sparkles size={22} />
          </div>
          <span>IA <span className="gradient-text">ELEMENTAL</span></span>
        </a>

        <ul className="nav-links">
          <li><a href="#plataformas" className="nav-link">Plataformas</a></li>
          <li><a href="#comparativa" className="nav-link">Precios</a></li>
          <li><a href="#recomendador" className="nav-link">Recomendador</a></li>
          <li><a href="#github-guide" onClick={onOpenDeployGuide} className="nav-link" style={{ color: '#818cf8', fontWeight: 600 }}>🚀 Desplegar en Vercel</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button 
            onClick={toggleTheme} 
            className="btn btn-secondary btn-sm"
            aria-label="Cambiar tema"
            title="Cambiar entre modo oscuro y claro"
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          <button 
            onClick={onOpenDeployGuide}
            className="btn btn-primary btn-sm"
          >
            <Github size={16} />
            <span>GitHub & Vercel</span>
          </button>
        </div>
      </div>
    </header>
  );
}
