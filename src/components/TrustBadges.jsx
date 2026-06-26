import React from 'react';
import { Leaf, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function TrustBadges() {
  const trustList = [
    {
      title: "Natural Products",
      desc: "100% organic, cruelty-free formulas",
      icon: <Leaf size={24} />
    },
    {
      title: "Secure Payment",
      desc: "SSL encrypted safe checkout portal",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Fast Delivery",
      desc: "Free shipping on orders over $50",
      icon: <Truck size={24} />
    },
    {
      title: "Easy Returns",
      desc: "30-day money-back guarantee",
      icon: <RotateCcw size={24} />
    }
  ];

  return (
    <section className="trust-badges-bar">
      <div className="trust-inner">
        {trustList.map((item, idx) => (
          <div key={idx} className="trust-item">
            <div className="trust-icon">
              {item.icon}
            </div>
            <div>
              <h4 className="trust-title">{item.title}</h4>
              <p className="trust-subtitle">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
