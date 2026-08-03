import React, { useState } from 'react';
import { X, Github, Cloud, Check, Copy, ExternalLink, Terminal, Sparkles } from 'lucide-react';

export default function GitHubDeployGuide({ isOpen, onClose }) {
  const [copiedStep, setCopiedStep] = useState(null);

  if (!isOpen) return null;

  const gitCommands = [
    { label: "1. Inicializar repositorio Git", cmd: "git init" },
    { label: "2. Agregar archivos", cmd: "git add ." },
    { label: "3. Primer commit", cmd: 'git commit -m "Initial commit - IA Elemental Web"' },
    { label: "4. Enlazar a tu repositorio remoto de GitHub (remplaza la URL)", cmd: "git remote add origin https://github.com/TU-USUARIO/ia-elemental.git" },
    { label: "5. Subir a la rama principal", cmd: "git push -u origin main" }
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(index);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
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
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'linear-gradient(135deg, #24292e, #6e5494)', display: 'flex', alignItems: 'center', justify: 'center', color: 'white' }}>
            <Github size={28} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>Guía de Despliegue en GitHub & Vercel</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Paso a paso para vincular este proyecto a tu GitHub y publicar la web en Vercel gratis.
            </p>
          </div>
        </div>

        {/* Step 1: Push to GitHub */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--primary-accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={18} /> Paso 1: Subir el código a tu cuenta de GitHub
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {gitCommands.map((item, index) => (
              <div 
                key={index}
                style={{ 
                  background: 'rgba(0,0,0,0.4)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: 'var(--radius-md)', 
                  padding: '0.75rem 1rem' 
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>{item.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <code style={{ color: '#38bdf8', fontFamily: 'monospace', fontSize: '0.9rem' }}>{item.cmd}</code>
                  <button 
                    onClick={() => handleCopy(item.cmd, index)}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
                  >
                    {copiedStep === index ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedStep === index ? '¡Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Deploy to Vercel */}
        <div style={{ marginBottom: '2rem', background: 'var(--bg-glass)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--emerald-accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cloud size={18} /> Paso 2: Publicar en VERCEL (1 Clic)
          </h3>
          
          <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            <li>Ingresa a <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-accent)', fontWeight: 600 }}>Vercel.com</a> e inicia sesión con tu cuenta de GitHub.</li>
            <li>Haz clic en el botón <strong>"Add New..." → "Project"</strong>.</li>
            <li>Selecciona el repositorio <code>ia-elemental</code> que acabas de subir a GitHub.</li>
            <li>Haz clic en <strong>"Deploy"</strong>. ¡Vercel detectará automáticamente que es un proyecto Vite + React y te entregará una URL pública SSL en segundos!</li>
          </ol>
        </div>

        {/* Footer actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--emerald-accent)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Sparkles size={14} /> Archivos vercel.json y package.json pre-configurados.
          </span>
          <button onClick={onClose} className="btn btn-primary">
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
