import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBannerImg from '../assets/hero_banner.png';

export default function Hero({ onShopClick }) {
  return (
    <section className="hero-section">
      <div className="hero-banner">
        <div className="hero-content">
          <span className="hero-tag">HouseOf Girls Brand</span>
          <h1 className="hero-title">Discover Your Natural Beauty</h1>
          <p className="hero-desc">
            Explore premium dermatologist-tested skincare, vivid pigment makeup, and organic botanical hair essentials crafted to make you shine inside out.
          </p>
          <button className="primary-btn" onClick={onShopClick}>
            Shop Collection <ArrowRight size={16} />
          </button>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src={heroBannerImg} 
            alt="Beautiful women showing radiant healthy skin" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
