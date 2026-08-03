import React, { useState } from 'react';
import { aiPlatforms } from '../data/aiPlatforms';
import { HelpCircle, Sparkles, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

export default function AIRecommenderQuiz({ onSelectPlatform }) {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [recommendedPlatform, setRecommendedPlatform] = useState(null);

  const goals = [
    { id: 'design', label: '🎨 Crear Diseños, Imágenes & Vídeos para Redes', targetId: 'canva-magic' },
    { id: 'office', label: '💼 Productividad en Excel, Word, Teams y Windows', targetId: 'microsoft-copilot' },
    { id: 'files', label: '📁 Buscar & Resumir Documentos entre Dropbox/Drive', targetId: 'dropbox-dash' },
    { id: 'multimodal', label: '🎥 Analizar Vídeos Largos, Archivos y Ecosistema Google', targetId: 'gemini' },
    { id: 'allround', label: '💬 Programación, Redacción General & Razonamiento', targetId: 'chatgpt' }
  ];

  const budgets = [
    { id: 'free', label: 'Gratis ($0 / mes)' },
    { id: 'pro', label: 'Presupuesto Pro ($15 - $20 / mes)' },
    { id: 'team', label: 'Equipos / Empresas ($20+ / usuario)' }
  ];

  const handleRecommend = () => {
    if (!selectedGoal) return;
    const foundGoal = goals.find(g => g.id === selectedGoal);
    if (foundGoal) {
      const matched = aiPlatforms.find(p => p.id === foundGoal.targetId);
      setRecommendedPlatform(matched || aiPlatforms[0]);
    }
  };

  const handleReset = () => {
    setSelectedGoal('');
    setSelectedBudget('');
    setRecommendedPlatform(null);
  };

  return (
    <section id="recomendador" style={{ padding: '4rem 0' }} className="fade-in-up">
      <div className="glass-card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)', border: '1px solid var(--primary-glow)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge badge-glow" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Asistente de Selección Inteligente
          </span>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            ¿No sabes cuál elegir? ¡Te ayudamos!
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto' }}>
            Responde 2 preguntas sencillas y te recomendaremos la plataforma de IA ideal para tu flujo de trabajo.
          </p>
        </div>

        {!recommendedPlatform ? (
          <div style={{ maxWidth: '650px', margin: '0 auto' }}>
            {/* Step 1: Goal */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
                1. ¿Cuál es tu objetivo principal?
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {goals.map(g => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    style={{
                      textAlign: 'left',
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: selectedGoal === g.id ? 'rgba(99, 102, 241, 0.25)' : 'var(--bg-card)',
                      border: selectedGoal === g.id ? '1px solid var(--primary-accent)' : '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontWeight: selectedGoal === g.id ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between'
                    }}
                  >
                    <span>{g.label}</span>
                    {selectedGoal === g.id && <CheckCircle2 size={18} color="var(--primary-accent)" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Budget */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
                2. Presupuesto estimado:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.6rem' }}>
                {budgets.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBudget(b.id)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)',
                      background: selectedBudget === b.id ? 'rgba(99, 102, 241, 0.25)' : 'var(--bg-card)',
                      border: selectedBudget === b.id ? '1px solid var(--primary-accent)' : '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Quiz button */}
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={handleRecommend}
                disabled={!selectedGoal}
                className="btn btn-primary"
                style={{ padding: '0.85rem 2.5rem', opacity: !selectedGoal ? 0.5 : 1 }}
              >
                <span>Obtener Mi Recomendación</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ) : (
          /* Recommendation Result View */
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', animation: 'fadeInUp 0.4s ease' }}>
            <div style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <span className="badge badge-emerald" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>
                🎉 Tu Mejor Opción Encontrada
              </span>
            </div>

            <div 
              style={{ width: '80px', height: '80px', margin: '0 auto 1.2rem auto', borderRadius: '20px' }}
              dangerouslySetInnerHTML={{ __html: recommendedPlatform.logoSvg }}
            />

            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {recommendedPlatform.name}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              {recommendedPlatform.tagline}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button 
                onClick={() => onSelectPlatform(recommendedPlatform)}
                className="btn btn-primary"
              >
                <span>Ver Información Completa</span>
                <ArrowRight size={16} />
              </button>
              
              <button 
                onClick={handleReset}
                className="btn btn-secondary"
              >
                <RotateCcw size={16} />
                <span>Reiniciar Test</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
