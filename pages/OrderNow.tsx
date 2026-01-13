import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How long do the juices last?',
    answer: 'Since we use absolutely no preservatives, our juices are best consumed within 24-48 hours of delivery. Keep them refrigerated at all times to maintain freshness and nutrient density.',
  },
  {
    question: 'Is it really zero sugar?',
    answer: "Yes! We do not add any refined sugar, honey, or artificial sweeteners. All the sweetness comes naturally from the high-quality fruits we use.",
  },
  {
    question: 'Do you deliver to my area?',
    answer: "We currently serve the greater Juice City metro area. If you live within 15 miles of downtown, we've got you covered. Check our shipping page for zip codes.",
  },
  {
    question: 'What about bottle returns?',
    answer: "We believe in sustainability. Rinse your glass bottles and hand them back to our delivery partner on your next order, and you'll receive loyalty points!",
  },
];

const OrderNow: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="container fade-in">
          <h1>Get in Touch</h1>
          <p>Ready to refresh your life? We'd love to hear from you.</p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form reveal-left">
              <h2>Send us a Message</h2>
              <form style={{ marginTop: '2rem' }} onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={5} placeholder="I'd like to order..."></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info reveal-right">
              <div className="contact-info-card glass">
                <h2>Contact Information</h2>
                <p style={{ marginBottom: '2rem', color: '#666' }}>
                  Visit our outlet or order online for delivery.
                </p>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>123 Fresh Lane, Juice City, Earth</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+123 456 7890</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@fruitsheaven.com</p>
                  </div>
                </div>
              </div>

              <div className="map-container glass">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#e0e0e0',
                    color: '#888',
                    minHeight: '200px',
                  }}
                >
                  Google Maps integration would go here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section-padding bg-light">
        <div className="container">
          <div className="section-header center reveal-up">
            <h2>Juice Wisdom</h2>
            <p>Common questions about our process.</p>
          </div>
          <div className="faq-container reveal-up delay-1">
            {faqItems.map((item, index) => (
              <div key={index} className={`faq-item ${openFAQ === index ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {item.question}
                  <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderNow;