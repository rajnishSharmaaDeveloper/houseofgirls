import React from 'react';
import { Search, Heart, ShoppingBag, User, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Header({ 
  cartCount, 
  wishlistCount, 
  onCartToggle, 
  searchQuery, 
  onSearchChange,
  categories,
  activeCategory,
  onCategoryChange
}) {
  return (
    <header className="main-header">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        FREE SHIPPING ON ORDERS OVER $50 • USE CODE: HOUSEGLOW FOR 10% OFF
      </div>

      {/* Main Bar */}
      <div className="header-top">
        {/* Logo */}
        <a href="/" className="logo-link">
          <img src={logo} alt="HouseOf Girls Logo" style={{ height: '55px' }} />
        </a>

        {/* Search */}
        <div className="search-container">
          <Search size={18} className="text-slate-light" />
          <input 
            type="text" 
            placeholder="Search beauty products..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Icons */}
        <div className="header-actions">
          <button className="action-btn" aria-label="Profile">
            <User size={20} />
          </button>
          
          <button className="action-btn" aria-label="Wishlist">
            <Heart size={20} />
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </button>
          
          <button className="action-btn" onClick={onCartToggle} aria-label="Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="main-nav">
        <ul className="nav-links">
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                className={`nav-link ${activeCategory === cat ? 'active-link' : ''}`}
                style={{
                  fontWeight: 600,
                  color: activeCategory === cat ? 'var(--primary-brand)' : 'var(--slate-mid)',
                  borderBottom: activeCategory === cat ? '2px solid var(--primary-brand)' : 'none',
                  paddingBottom: '4px'
                }}
                onClick={() => onCategoryChange(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
          <li><a href="#featured" className="nav-link">Featured</a></li>
          <li><a href="#blog" className="nav-link">Blog</a></li>
          <li><a href="#faq" className="nav-link">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
}
