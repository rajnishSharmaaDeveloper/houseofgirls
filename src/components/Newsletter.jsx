import React, { useState } from 'react';

export default function Newsletter({ onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast("Please enter a valid email address!");
      return;
    }
    onShowToast("Successfully Subscribed! 20% Discount Code Sent! 🎉");
    setEmail('');
  };

  return (
    <section className="section-container">
      <div className="newsletter-banner">
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--indigo-dark)', marginBottom: '8px' }}>
          Newsletter Club
        </span>
        <h2 className="news-title">Join Our Newsletter &amp; Get 20% Off</h2>
        <p className="news-desc">
          Subscribe to get exclusive updates on new arrivals, secret promo discounts, makeup tutorial guides, and early skincare product access.
        </p>
        <form className="news-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email address..." 
            className="news-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="news-btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
