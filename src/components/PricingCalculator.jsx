import React, { useState } from 'react';
import { aiPlatforms } from '../data/aiPlatforms';
import { Check, Info, Sparkles, ExternalLink } from 'lucide-react';

export default function PricingCalculator({ onSelectPlatform }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'

  // Helper to compute discount for annual plan display
  const getDisplayPrice = (basePriceStr) => {
    if (basePriceStr === '$0') return '$0';
    const numeric = parseFloat(basePriceStr.replace('$', ''));
    if (isNaN(numeric)) return basePriceStr;
    
    if (billingCycle === 'annual') {
      const discounted = (numeric * 0.8).toFixed(2);
      return `$${discounted}`;
    }
    return basePriceStr;
  };

  return (
    <section id="comparativa" style={{ padding: '4rem 0' }} className="fade-in-up">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="badge badge-emerald" style={{ marginBottom: '0.8rem' }}>
          <Sparkles size={14} /> Comparativa Transparente
        </span>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>
          Tabla de Precios e Información General
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 1.5rem auto' }}>
          Compara los costos mensuales de las 5 grandes plataformas de Inteligencia Artificial para tomar la mejor decisión de compra.
        </p>

        {/* Toggle Billing Cycle */}
        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--bg-card)', padding: '0.3rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`btn btn-sm ${billingCycle === 'monthly' ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: 'var(--radius-full)', border: 'none' }}
          >
            Pago Mensual
          </button>
          <button 
            onClick={() => setBillingCycle('annual')}
            className={`btn btn-sm ${billingCycle === 'annual' ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: 'var(--radius-full)', border: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            Pago Anual <span style={{ background: '#10b981', color: 'black', fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '10px', fontWeight: 800 }}>-20% Off</span>
          </button>
        </div>
      </div>

      {/* Comparison Table Glass Box */}
      <div className="glass-card" style={{ overflowX: 'auto', padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '750px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '1.2rem', color: 'var(--text-primary)', fontSize: '1rem' }}>Plataforma</th>
              <th style={{ padding: '1.2rem', color: 'var(--text-primary)', fontSize: '1rem' }}>Plan Gratuito</th>
              <th style={{ padding: '1.2rem', color: 'var(--text-primary)', fontSize: '1rem' }}>Plan Pro / Individual</th>
              <th style={{ padding: '1.2rem', color: 'var(--text-primary)', fontSize: '1rem' }}>Plan Empresa / Team</th>
              <th style={{ padding: '1.2rem', color: 'var(--text-primary)', fontSize: '1rem', textAlign: 'right' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {aiPlatforms.map((platform) => (
              <tr 
                key={platform.id}
                style={{ 
                  borderBottom: '1px solid var(--border-color)',
                  transition: 'var(--transition)'
                }}
              >
                {/* Platform Name & Logo */}
                <td style={{ padding: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div 
                      style={{ width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0 }}
                      dangerouslySetInnerHTML={{ __html: platform.logoSvg }}
                    />
                    <div>
                      <strong style={{ color: 'var(--text-primary)', display: 'block' }}>{platform.name}</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{platform.company}</span>
                    </div>
                  </div>
                </td>

                {/* Free Tier */}
                <td style={{ padding: '1.2rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--emerald-accent)' }}>$0</span>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Funciones básicas</div>
                </td>

                {/* Pro Tier */}
                <td style={{ padding: '1.2rem' }}>
                  <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                    {getDisplayPrice(platform.plans[1]?.price || '$19.99')}
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400 }}> /mes</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{platform.plans[1]?.name}</div>
                </td>

                {/* Enterprise Tier */}
                <td style={{ padding: '1.2rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                    {getDisplayPrice(platform.plans[2]?.price || platform.plans[platform.plans.length - 1]?.price)}
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400 }}> /user</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{platform.plans[platform.plans.length - 1]?.name}</div>
                </td>

                {/* Action CTA */}
                <td style={{ padding: '1.2rem', textAlign: 'right' }}>
                  <button 
                    onClick={() => onSelectPlatform(platform)}
                    className="btn btn-secondary btn-sm"
                  >
                    Detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
