import React from 'react';
import logo from '../assets/logo.svg';

export default function Footer({ onCategoryChange }) {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* Brand Block */}
        <div className="footer-brand">
          <img src={logo} alt="HouseOf Girls Logo" className="footer-brand-logo" />
          <p className="footer-brand-desc">
            Your premium destination for clean, dermatologically formulated beauty products. Empowering you to embrace your natural glowing skin.
          </p>
        </div>

        {/* Categories Links */}
        <div>
          <h4 className="footer-title">Shop Category</h4>
          <ul className="footer-links">
            <li><button onClick={() => onCategoryChange('Skin Care')} className="footer-link">Skin Care</button></li>
            <li><button onClick={() => onCategoryChange('Makeup')} className="footer-link">Makeup</button></li>
            <li><button onClick={() => onCategoryChange('Hair Care')} className="footer-link">Hair Care</button></li>
            <li><button onClick={() => onCategoryChange('Fragrances')} className="footer-link">Fragrances</button></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#shop-catalog" className="footer-link">Shop All</a></li>
            <li><a href="#featured" className="footer-link">Spotlight Product</a></li>
            <li><a href="#blog" className="footer-link">Blog Journal</a></li>
            <li><a href="#faq" className="footer-link">FAQ Support</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="footer-title">Information</h4>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">About Us</a></li>
            <li><a href="/" className="footer-link">Contact Support</a></li>
            <li><a href="/" className="footer-link">Privacy Policy</a></li>
            <li><a href="/" className="footer-link">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-links" style={{ color: '#94a3b8' }}>
            <li>Email: support@houseofgirls.com</li>
            <li>Phone: +1 (800) 555-GLOW</li>
            <li>Address: 456 Beauty Avenue, New York, NY</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HouseOf Girls Inc. All rights reserved.</p>
        <p>Created with Love by Antigravity AI for premium web aesthetics.</p>
      </div>
    </footer>
  );
}
