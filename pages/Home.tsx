import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';
import MenuPopup from '../components/MenuPopup';

const Home: React.FC = () => {
  return (
    <>
      {/* <MenuPopup /> */}
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content reveal-up">
            <span className="badge hero-badge">
              100% Natural &amp; Fresh
            </span>
            <h1 className="hero-title">
              Sip the <span className="highlight">Heavens</span> <br />
              Taste the <span className="highlight-alt">Pure</span>.
            </h1>
            <p className="hero-text">
              Experience juice as nature intended. Absolutely no sugar, no preservatives, and 100% love. Your body deserves the best.
            </p>
            <div className="hero-btns">
              <Link to={Page.MENU} className="btn-primary">Explore Menu</Link>
              <Link to={Page.WHY_US} className="btn-secondary btn-outline-white">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Symmetrical Feature Grid */}
      <section id="benefits" className="features-section section-padding">
        <div className="container">
          <div className="section-header center reveal-up">
            <span className="sub-badge">Why Fruits Heaven</span>
            <h2>Pure Health, Zero Compromise</h2>
            <p>Experience the perfect balance of nature and nutrition in every sip.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card reveal-up">
              <div className="feature-image-container">
                <img src="/f1.jpg" alt="100% Organic" className="feature-image" />
              </div>
              <h3>100% Organic</h3>
              <p>Sourced from certified farms, ensuring pure, pesticide-free goodness in every bottle.</p>
            </div>
            <div className="feature-card reveal-up delay-1">
              <div className="feature-image-container">
                <img src="/f2.jpg" alt="Natural Energy" className="feature-image" />
              </div>
              <h3>Natural Energy</h3>
              <p>Sustained vitality from fruit nutrients without the crash of caffeine or sugar spikes.</p>
            </div>
            <div className="feature-card reveal-up delay-2">
              <div className="feature-image-container">
                <img src="/f3.jpg" alt="No Added Sugar" className="feature-image" />
              </div>
              <h3>No Added Sugar</h3>
              <p>Zero syrups or sweeteners. We let the natural profile of fresh fruits shine through.</p>
            </div>
            <div className="feature-card reveal-up delay-3">
              <div className="feature-image-container">
                <img src="/f4.jpg" alt="Immunity Boost" className="feature-image" />
              </div>
              <h3>Immunity Boost</h3>
              <p>Packed with vitamins and antioxidants to strengthen your body's natural defenses.</p>
            </div>
            <div className="feature-card reveal-up delay-4">
              <div className="feature-image-container">
                <img src="/f5.jpg" alt="Glow Naturally" className="feature-image" />
              </div>
              <h3>Glow Naturally</h3>
              <p>Essential nutrients that promote healthy skin and a radiant, natural complexion.</p>
            </div>
            <div className="feature-card reveal-up delay-5">
              <div className="feature-image-container">
                <img src="/f6.jpg" alt="Eco-Friendly" className="feature-image" />
              </div>
              <h3>Eco-Friendly</h3>
              <p>Premium glass packaging that's infinitely recyclable and better for the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding">
        <div className="container">
          <div className="section-header center reveal-up">
            <h2>Love from the Heavens</h2>
            <p>Don't just take our word for it. Here is what our community says.</p>
          </div>
          <div className="testimonial-grid">
            {/* Review 1 */}
            <div className="testimonial-card reveal-up delay-1">
              <div className="quote-icon">"</div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"I've tried every detox juice out there, but Fruits Heaven is the only one that tastes genuinely fresh. The Green Detox is a lifesaver!"</p>
              <div className="user-profile">
                <div className="user-avatar" style={{ background: '#a8dadc' }}></div>
                <div>
                  <h4>Sarah Jenkins</h4>
                  <small>Yoga Instructor</small>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="testimonial-card reveal-up delay-2">
              <div className="quote-icon">"</div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"Finally, a juice place that doesn't sneak in sugar. My kids love the Citrus Sunrise, and I feel good giving it to them."</p>
              <div className="user-profile">
                <div className="user-avatar" style={{ background: '#f4a261' }}></div>
                <div>
                  <h4>Mike Ross</h4>
                  <small>Parent of 2</small>
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="testimonial-card reveal-up delay-3">
              <div className="quote-icon">"</div>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"The subscription service is seamless. Fresh juice at my doorstep every Monday morning. It's the best way to start the week."</p>
              <div className="user-profile">
                <div className="user-avatar" style={{ background: '#e76f51' }}></div>
                <div>
                  <h4>Jessica Lee</h4>
                  <small>Software Engineer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Banner */}
      <section className="cta-banner">
        <div className="container center reveal-up">
          <h2>Ready to Taste Heaven?</h2>
          <p>Order now and get free delivery on your first subscription.</p>
          <Link to={Page.ORDER} className="btn-white">Connect &amp; Order</Link>
        </div>
      </section>
    </>
  );
};

export default Home;