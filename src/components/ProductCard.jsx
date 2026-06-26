import React from 'react';
import { Heart, Plus, Star } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onAddToCart, 
  onQuickView, 
  isWishlisted, 
  onToggleWishlist 
}) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        {/* Sale / New Tag */}
        {product.tag && (
          <span className="tag-badge">{product.tag}</span>
        )}

        {/* Wishlist Button */}
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label="Add to wishlist"
        >
          <Heart size={18} fill={isWishlisted ? 'var(--secondary-accent)' : 'none'} />
        </button>

        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card-img" 
          onClick={() => onQuickView(product)}
          style={{ cursor: 'pointer' }}
        />

        {/* Hover Quick View Button */}
        <div className="product-actions-overlay">
          <button className="quick-view-btn" onClick={() => onQuickView(product)}>
            Quick View
          </button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-cat">{product.category}</span>
        <h3 
          className="product-name" 
          onClick={() => onQuickView(product)}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="rating-container">
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
          <span className="reviews-count">({product.reviewsCount})</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="product-price-row">
          <div className="price-wrapper">
            <span className="current-price">₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <button 
            className="add-cart-btn" 
            onClick={() => onAddToCart(product)}
            aria-label="Add to cart"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
