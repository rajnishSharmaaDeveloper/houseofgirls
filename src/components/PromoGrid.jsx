import React from 'react';
import { ArrowRight } from 'lucide-react';
import skincareImg from '../assets/skincare_dropper.png';
import makeupImg from '../assets/eyeshadow_palette.png';
import hairImg from '../assets/cream_jar.png'; // Reuse high quality cream jar image

export default function PromoGrid({ onSelectCategory }) {
  const promos = [
    {
      title: "Get Radiant Skin",
      subtitle: "100% Organic Serums",
      category: "Skin Care",
      image: skincareImg,
      linkText: "Explore Skincare"
    },
    {
      title: "Discover Trending Makeup",
      subtitle: "Vivid Pigment Eyeshadows",
      category: "Makeup",
      image: makeupImg,
      linkText: "Explore Makeup"
    },
    {
      title: "Nourishing Hair Care",
      subtitle: "Miracle Keratin Oils",
      category: "Hair Care",
      image: hairImg,
      linkText: "Explore Haircare"
    }
  ];

  return (
    <section className="promo-grid">
      {promos.map((promo, index) => (
        <div 
          key={index} 
          className="promo-card"
          onClick={() => onSelectCategory(promo.category)}
          style={{ cursor: 'pointer' }}
        >
          <img src={promo.image} alt={promo.title} className="promo-bg-img" />
          <div className="promo-overlay">
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-rose)', marginBottom: '4px' }}>
              {promo.subtitle}
            </span>
            <h2 className="promo-title">{promo.title}</h2>
            <span className="promo-link">
              {promo.linkText} <ArrowRight size={14} />
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
