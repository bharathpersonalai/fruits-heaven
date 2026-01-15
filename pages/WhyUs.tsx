import React from 'react';

interface Feature {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🌿',
    iconClass: 'icon-leaf',
    title: '100% Fresh',
    description: 'Sourced directly from organic farms every morning. No concentrate, ever. We juice it right when you order it.',
  },
  {
    icon: '🚫',
    iconClass: 'icon-sugar',
    title: 'No Added Sugar',
    description: 'The sweetness comes purely from the fruits. No hidden syrups or sweeteners. Perfect for a healthy lifestyle.',
  },
  {
    icon: '🛡️',
    iconClass: 'icon-shield',
    title: 'Preservative Free',
    description: "Made fresh on order. We don't use chemicals to extend shelf life. Drink it fresh, utilize the nutrients.",
  },
];

const WhyUs: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="container fade-in">
          <h1>Why Juicy?</h1>
          <p>The philosophy behind every drop we serve.</p>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features section-padding">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`feature-card glass reveal-up delay-${index}`}
              >
                <div className={`icon-box ${feature.iconClass}`}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="section-padding center">
            <div
              className="glass"
              style={{
                padding: '3rem',
                borderRadius: '20px',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <h2 style={{ marginBottom: '1rem' }}>From Farm to Glass</h2>
              <p>
                Our commitment is simple: if nature didn't put it there, neither will we.
                We partner with local farmers to ensure that the journey from the soil to
                your soul is as short and pure as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;