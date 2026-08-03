import React from 'react';
import { Sparkles, Github, Heart, Globe } from 'lucide-react';

export default function Footer({ onOpenDeployGuide }) {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-color)', 
      background: 'var(--bg-main)', 
      padding: '3rem 0 2rem 0',
      marginTop: '4rem'
    }}>
      <div className="app-container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '2rem',
          marginBottom: '2.5rem'
        }}>
          {/* Col 1 */}
          <div>
            <a href="#" className="logo" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <div className="logo-icon">
                <Sparkles size={20} />
              </div>
              <span>IA <span className="gradient-text">ELEMENTAL</span></span>
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Plataforma interactiva de descubrimiento y análisis comparativo de herramientas de Inteligencia Artificial.
            </p>
          </div>

          {/* Col 2 - Platforms Covered */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>Plataformas Incluidas</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>🤖 OpenAI ChatGPT</li>
              <li>✨ Google Gemini</li>
              <li>🛡️ Microsoft Copilot</li>
              <li>🎨 Canva Magic Studio</li>
              <li>📁 Dropbox Dash & AI</li>
            </ul>
          </div>

          {/* Col 3 - Vercel / GitHub */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>Publicación & Despliegue</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1rem' }}>
              Proyecto optimizado para desplegar en Vercel gratis con repositorios de GitHub.
            </p>
            <button onClick={onOpenDeployGuide} className="btn btn-secondary btn-sm">
              <Github size={15} />
              <span>Ver Guía de Despliegue</span>
            </button>
          </div>
        </div>

        <div style={{ 
          paddingTop: '1.5rem', 
          borderTop: '1px solid var(--border-color)', 
          display: 'flex', 
          justify: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 IA ELEMENTAL. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Listo para ser publicado en <strong>Vercel</strong> ⚡
          </div>
        </div>
      </div>
    </footer>
  );
}
