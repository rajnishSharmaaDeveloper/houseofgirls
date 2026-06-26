import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PromoGrid from './components/PromoGrid';
import ProductTabs from './components/ProductTabs';
import FeaturedDetail from './components/FeaturedDetail';
import TrustBadges from './components/TrustBadges';
import BlogSection from './components/BlogSection';
import FaqSection from './components/FaqSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import Toast from './components/Toast';

import { products, categories } from './data/products';
import brushesImg from './assets/makeup_brushes.png'; // Highlight banner assets

export default function App() {
  // Application State
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Toast Generator
  const triggerToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Cart Operations
  const handleAddToCart = (product, quantity = 1, selectedShade = null) => {
    const shadeToUse = selectedShade || product.shades[0];
    
    setCart(prev => {
      const existingIdx = prev.findIndex(item => item.id === product.id && item.selectedShade === shadeToUse);
      
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          selectedShade: shadeToUse,
          quantity: quantity
        }];
      }
    });

    triggerToast(`Added ${quantity}x ${product.name} (${shadeToUse}) to cart! 🛍️`);
  };

  const handleUpdateQty = (id, selectedShade, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, selectedShade);
      return;
    }
    setCart(prev => prev.map(item => 
      (item.id === id && item.selectedShade === selectedShade) 
        ? { ...item, quantity: newQty } 
        : item
    ));
  };

  const handleRemoveItem = (id, selectedShade) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedShade === selectedShade)));
    triggerToast("Item removed from cart.");
  };

  const handleCheckout = () => {
    setCart([]);
    setIsCartOpen(false);
    triggerToast("Order placed successfully! Thank you for choosing HouseOf Girls! 🚚✨");
  };

  // Wishlist Operations
  const handleToggleWishlist = (id) => {
    const isPresent = wishlist.includes(id);
    const product = products.find(p => p.id === id);
    
    if (isPresent) {
      setWishlist(prev => prev.filter(item => item !== id));
      triggerToast(`Removed ${product?.name} from wishlist.`);
    } else {
      setWishlist(prev => [...prev, id]);
      triggerToast(`Added ${product?.name} to wishlist! 💖`);
    }
  };

  // Scroll Helpers
  const handleShopRedirect = (catName = 'All') => {
    setActiveCategory(catName);
    const element = document.getElementById('shop-catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Count helper
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-wrapper">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onCartToggle={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(val) => {
          setSearchQuery(val);
          if (val) handleShopRedirect('All');
        }}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleShopRedirect}
      />

      {/* Hero Banner */}
      <Hero onShopClick={() => handleShopRedirect('All')} />

      {/* Category Promo Boxes */}
      <PromoGrid onSelectCategory={handleShopRedirect} />

      {/* Product Catalog with Tabs */}
      <ProductTabs
        products={products}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onAddToCart={handleAddToCart}
        onQuickView={setActiveModalProduct}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        searchQuery={searchQuery}
      />

      {/* Dynamic Mid-Banner Promotion */}
      <section className="section-container">
        <div className="mid-banner">
          {/* Sparkles / Cosmetics SVG details */}
          <div className="mid-banner-content">
            <span className="mid-banner-tag">Exquisite Brushes</span>
            <h2 className="mid-banner-title">Discover The Most Trending Beauty Tools</h2>
            <p className="mid-banner-desc">
              Upgrade your routine with our ultra-soft vegan fiber makeup brushes, designed for seamless blending and flawless precision.
            </p>
            <button 
              className="primary-btn" 
              onClick={() => handleShopRedirect('Makeup')}
              style={{ marginTop: '24px', backgroundColor: 'var(--secondary-accent)', boxShadow: '0 4px 14px rgba(219, 39, 119, 0.4)' }}
            >
              Shop Tools Now
            </button>
          </div>
          <div style={{ width: '35%', display: 'flex', justifyContent: 'center' }}>
            <img src={brushesImg} alt="Fluffy makeup brushes" style={{ borderRadius: '20px', maxWidth: '100%', maxHeight: '240px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Spotlight Featured Product (e.g. Rose Petals Serum) */}
      <FeaturedDetail
        product={products[0]}
        onAddToCart={handleAddToCart}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Double Offer Grid */}
      <section className="promo-double-grid">
        {/* Card 1 */}
        <div className="double-promo-card">
          <div className="double-content">
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: 'var(--indigo-dark)' }}>Limited Time</span>
            <h3 className="double-title">Save 20% On Glow Kits</h3>
            <p className="double-desc">Reveal hydrated, radiant skin with our curated skincare sets. Use code: GLOWSKIN.</p>
            <button className="primary-btn" onClick={() => handleShopRedirect('Skin Care')} style={{ padding: '8px 20px', fontSize: '12px', backgroundColor: 'var(--indigo-dark)', boxShadow: 'none' }}>
              Claim Offer
            </button>
          </div>
          <img src={products[0].image} alt="Skincare kit" />
        </div>

        {/* Card 2 */}
        <div className="double-promo-card dark-theme">
          <div className="double-content">
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: 'var(--accent-rose)' }}>Special Deal</span>
            <h3 className="double-title">Free Shipping on $50+</h3>
            <p className="double-desc">Free shipping and premium beauty packaging included with every order above $50.</p>
            <button className="primary-btn" onClick={() => handleShopRedirect('All')} style={{ padding: '8px 20px', fontSize: '12px', backgroundColor: 'var(--primary-brand)', boxShadow: 'none' }}>
              Shop Now
            </button>
          </div>
          <img src={products[1].image} alt="Cosmetics kit" />
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Blog Feed */}
      <BlogSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Newsletter */}
      <Newsletter onShowToast={triggerToast} />

      {/* Footer */}
      <Footer onCategoryChange={handleShopRedirect} />

      {/* Sliding Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Quick View Product Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Toast Alert Popups */}
      <Toast toasts={toasts} />
    </div>
  );
}
