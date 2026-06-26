import React from 'react';
import ProductCard from './ProductCard';

export default function ProductTabs({ 
  products, 
  categories, 
  activeCategory, 
  onCategoryChange,
  onAddToCart,
  onQuickView,
  wishlist,
  onToggleWishlist,
  searchQuery
}) {
  // Filter products based on active category & search query
  const filteredProducts = products.filter(prod => {
    const matchesCategory = activeCategory === 'All' || prod.category === activeCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section-container" id="shop-catalog">
      <div className="section-header">
        <div>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-brand)' }}>
            HouseOf Girls Collection
          </span>
          <h2 className="section-title">Top Selling Products</h2>
        </div>
        
        {/* Tabs switcher */}
        <div className="tab-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              isWishlisted={wishlist.includes(prod.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--slate-light)' }}>
          <p style={{ fontSize: '18px', fontWeight: 600 }}>No products found matching "{searchQuery}"</p>
          <p style={{ fontSize: '14px', marginTop: '8px' }}>Try exploring other categories or clearing your search.</p>
        </div>
      )}
    </section>
  );
}
