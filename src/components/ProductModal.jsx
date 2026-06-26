import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart } from 'lucide-react';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToCart, 
  wishlist, 
  onToggleWishlist 
}) {
  if (!product) return null;

  const [selectedShade, setSelectedShade] = useState(product.shades[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const handleAddClick = () => {
    onAddToCart(product, quantity, selectedShade);
    onClose();
  };

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>

        {/* Left Side - Image */}
        <div className="modal-left">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Right Side - Details */}
        <div className="modal-right">
          <span className="details-cat">{product.category}</span>
          <h3 className="details-title" style={{ fontSize: '26px', marginBottom: '8px' }}>{product.name}</h3>

          {/* Rating */}
          <div className="rating-container" style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < Math.floor(product.rating) ? '#fbbf24' : 'none'} 
                  color="#fbbf24"
                />
              ))}
            </div>
            <span className="reviews-count">({product.reviewsCount} reviews)</span>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-brand)' }}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '16px', color: 'var(--slate-light)', textDecoration: 'line-through' }}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="details-desc" style={{ fontSize: '14px', marginBottom: '20px' }}>
            {product.description}
          </p>

          {/* Options */}
          <div className="shade-picker-section" style={{ marginBottom: '20px' }}>
            <h4 className="picker-label" style={{ fontSize: '12px' }}>Choose Size / Shade:</h4>
            <div className="shades-row">
              {product.shades.map((shade) => (
                <button
                  key={shade}
                  className={`shade-bubble ${selectedShade === shade ? 'active' : ''}`}
                  onClick={() => setSelectedShade(shade)}
                  style={{ padding: '6px 12px', fontSize: '11px' }}
                >
                  {shade}
                </button>
              ))}
            </div>
          </div>

          {/* Add actions */}
          <div className="quantity-buy-row">
            <div className="counter-box">
              <button className="counter-btn" onClick={handleDecrement}>-</button>
              <span className="counter-val">{quantity}</span>
              <button className="counter-btn" onClick={handleIncrement}>+</button>
            </div>

            <button 
              className="primary-btn" 
              onClick={handleAddClick} 
              style={{ flexGrow: 1, justifyContent: 'center', padding: '10px 20px', fontSize: '12px' }}
            >
              <ShoppingBag size={16} /> Add to Cart
            </button>

            <button 
              className="action-btn" 
              style={{ 
                border: '1.5px solid var(--border-color)', 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%'
              }}
              onClick={() => onToggleWishlist(product.id)}
            >
              <Heart size={16} fill={isWishlisted ? 'var(--secondary-accent)' : 'none'} color={isWishlisted ? 'var(--secondary-accent)' : 'var(--slate-mid)'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
