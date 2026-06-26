import React from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQty, 
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} className="text-primary-brand" style={{ color: 'var(--primary-brand)' }} />
            <h2>Your Shopping Cart ({cartItems.length})</h2>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div className="cart-empty-message">
              <ShoppingBag size={48} strokeWidth={1} />
              <p style={{ fontWeight: 600 }}>Your cart is empty</p>
              <button 
                className="primary-btn" 
                onClick={onClose}
                style={{ padding: '10px 24px', fontSize: '12px' }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedShade}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <span className="cart-item-shade">{item.selectedShade}</span>
                  
                  <div className="cart-item-controls">
                    {/* Counter */}
                    <div className="counter-box" style={{ padding: '2px' }}>
                      <button 
                        className="counter-btn" 
                        onClick={() => onUpdateQty(item.id, item.selectedShade, item.quantity - 1)}
                        style={{ width: '24px', height: '24px' }}
                      >
                        <Minus size={10} />
                      </button>
                      <span className="counter-val" style={{ padding: '0 8px', fontSize: '12px' }}>
                        {item.quantity}
                      </span>
                      <button 
                        className="counter-btn" 
                        onClick={() => onUpdateQty(item.id, item.selectedShade, item.quantity + 1)}
                        style={{ width: '24px', height: '24px' }}
                      >
                        <Plus size={10} />
                      </button>
                    </div>

                    <span className="cart-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  
                  <div style={{ marginTop: '8px', textAlign: 'right' }}>
                    <button 
                      className="remove-item-btn"
                      onClick={() => onRemoveItem(item.id, item.selectedShade)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <span className="cart-subtotal">${subtotal.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--slate-light)', marginBottom: '16px' }}>
              Shipping and taxes calculated at checkout. Free shipping active.
            </p>
            <button className="checkout-btn" onClick={onCheckout}>
              Proceed To Checkout <ArrowRight size={16} style={{ marginLeft: '6px', verticalAlign: 'middle', display: 'inline-block' }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
