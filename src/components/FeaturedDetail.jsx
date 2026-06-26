import React, { useState } from 'react';
import { Star, ShoppingCart, ShieldCheck, Heart } from 'lucide-react';

export default function FeaturedDetail({ product, onAddToCart, wishlist, onToggleWishlist }) {
  if (!product) return null;

  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedShade, setSelectedShade] = useState(product.shades[0]);
  const [quantity, setQuantity] = useState(1);

  // Thumbnail array - we can use the same image with different opacity/effects or placeholders to simulate a gallery
  const thumbnails = [
    product.image,
    product.image, // In a real app these would be different photo angles
    product.image
  ];

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddClick = () => {
    onAddToCart(product, quantity, selectedShade);
  };

  const isWishlisted = wishlist.includes(product.id);

  return (
    <section className="section-container" id="featured">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-brand)' }}>
          Trending Spot
        </span>
        <h2 style={{ fontSize: '32px', color: 'var(--indigo-dark)', marginTop: '4px' }}>Spotlight Product</h2>
      </div>

      <div className="featured-detail-wrapper">
        {/* Gallery */}
        <div className="gallery-container">
          <div className="thumbnail-col">
            {thumbnails.map((thumb, idx) => (
              <img 
                key={idx}
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                className={`thumb-img ${activeThumb === idx ? 'active' : ''}`}
                onClick={() => setActiveThumb(idx)}
                style={{
                  opacity: activeThumb === idx ? 1 : 0.6,
                  filter: idx === 1 ? 'hue-rotate(25deg)' : idx === 2 ? 'saturate(0.5)' : 'none' // simulate different angles
                }}
              />
            ))}
          </div>

          <div className="main-img-display">
            <img 
              src={thumbnails[activeThumb]} 
              alt={product.name}
              style={{
                filter: activeThumb === 1 ? 'hue-rotate(25deg)' : activeThumb === 2 ? 'saturate(0.5)' : 'none'
              }}
            />
          </div>
        </div>

        {/* Info */}
        <div className="featured-details-info">
          <span className="details-cat">{product.category}</span>
          <h3 className="details-title">{product.name}</h3>

          {/* Rating */}
          <div className="rating-container" style={{ margin: '8px 0 20px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(product.rating) ? '#fbbf24' : 'none'} 
                  color="#fbbf24"
                />
              ))}
            </div>
            <span className="reviews-count" style={{ fontSize: '13px' }}>
              {product.rating} Rating ({product.reviewsCount} customer reviews)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary-brand)' }}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '18px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="details-desc">{product.description}</p>

          {/* Shades Picker */}
          <div className="shade-picker-section">
            <h4 className="picker-label">Select Options / Size:</h4>
            <div className="shades-row">
              {product.shades.map((shade) => (
                <button
                  key={shade}
                  className={`shade-bubble ${selectedShade === shade ? 'active' : ''}`}
                  onClick={() => setSelectedShade(shade)}
                >
                  {shade}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Controls & Action Buttons */}
          <div className="quantity-buy-row">
            <div className="counter-box">
              <button className="counter-btn" onClick={handleDecrement}>-</button>
              <span className="counter-val">{quantity}</span>
              <button className="counter-btn" onClick={handleIncrement}>+</button>
            </div>

            <button 
              className="primary-btn" 
              onClick={handleAddClick} 
              style={{ flexGrow: 1, justifyContent: 'center' }}
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>

            <button 
              className="action-btn" 
              style={{ 
                border: '1.5px solid var(--border-color)', 
                width: '46px', 
                height: '46px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%'
              }}
              onClick={() => onToggleWishlist(product.id)}
              aria-label="Add to wishlist"
            >
              <Heart size={20} fill={isWishlisted ? 'var(--secondary-accent)' : 'none'} color={isWishlisted ? 'var(--secondary-accent)' : 'var(--slate-mid)'} />
            </button>
          </div>

          {/* Value Props */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--slate-mid)', fontWeight: 600 }}>
              <ShieldCheck size={16} className="text-emerald-500" style={{ color: '#10b981' }} /> 100% Authentic Brand
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--slate-mid)', fontWeight: 600 }}>
              <ShieldCheck size={16} className="text-emerald-500" style={{ color: '#10b981' }} /> Vegan &amp; Cruelty-Free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
