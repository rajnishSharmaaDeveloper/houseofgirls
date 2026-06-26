import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/products';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-container" id="faq">
      <div className="faq-grid">
        {/* Left Col */}
        <div>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-brand)' }}>
            Got Questions?
          </span>
          <h2 className="faq-intro-title">Frequently Asked Answers</h2>
          <p style={{ color: 'var(--slate-light)', fontSize: '15px', marginTop: '12px' }}>
            Can't find the answers you're looking for? Reach out to our customer care team anytime at support@houseofgirls.com. We're here to help you glow!
          </p>
        </div>

        {/* Right Col */}
        <div className="faq-list">
          {faqData.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isActive ? 'active' : ''}`}
              >
                <div 
                  className="faq-question-bar" 
                  onClick={() => toggleAccordion(idx)}
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-icon-holder">
                    <ChevronDown size={18} />
                  </div>
                </div>
                <div 
                  className="faq-answer-panel"
                  style={{
                    maxHeight: isActive ? '200px' : '0px'
                  }}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
