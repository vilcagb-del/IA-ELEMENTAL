import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PlatformCard from './components/PlatformCard';
import PlatformModal from './components/PlatformModal';
import PricingCalculator from './components/PricingCalculator';
import AIRecommenderQuiz from './components/AIRecommenderQuiz';
import GitHubDeployGuide from './components/GitHubDeployGuide';
import Footer from './components/Footer';
import { aiPlatforms } from './data/aiPlatforms';
import { Sparkles, SearchX } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  // Toggle Theme (Dark / Light)
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Filter platforms by category & search query
  const filteredPlatforms = aiPlatforms.filter((platform) => {
    const matchesCategory = selectedCategory === 'all' || platform.categoryKey === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      platform.name.toLowerCase().includes(q) ||
      platform.company.toLowerCase().includes(q) ||
      platform.description.toLowerCase().includes(q) ||
      platform.keyFeatures.some(f => f.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Background Glow Animation */}
      <div className="bg-glow-container">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      {/* Header */}
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)} 
      />

      {/* Main Content */}
      <main className="app-container">
        {/* Hero Section with Search & Categories */}
        <HeroSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Platform Cards Grid */}
        <section id="plataformas" style={{ padding: '2rem 0 4rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Sparkles size={22} color="var(--primary-accent)" /> 
              Plataformas Destacadas 
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                ({filteredPlatforms.length} de {aiPlatforms.length})
              </span>
            </h2>
          </div>

          {filteredPlatforms.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}>
              {filteredPlatforms.map((platform) => (
                <PlatformCard 
                  key={platform.id}
                  platform={platform}
                  onSelectPlatform={setSelectedPlatform}
                />
              ))}
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
              <SearchX size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>No se encontraron plataformas</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                No hay resultados para "{searchQuery}". Intenta con otros términos como "imágenes", "Excel" o "código".
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="btn btn-secondary btn-sm"
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </section>

        {/* Interactive Pricing Comparison Table */}
        <PricingCalculator onSelectPlatform={setSelectedPlatform} />

        {/* AI Recommender Quiz */}
        <AIRecommenderQuiz onSelectPlatform={setSelectedPlatform} />
      </main>

      {/* Footer */}
      <Footer onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      {/* Detail Modal */}
      <PlatformModal 
        platform={selectedPlatform}
        onClose={() => setSelectedPlatform(null)}
      />

      {/* GitHub & Vercel Deploy Guide Modal */}
      <GitHubDeployGuide 
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
