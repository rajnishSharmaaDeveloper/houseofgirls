import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ toasts }) {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          <CheckCircle size={16} style={{ color: 'var(--accent-rose)' }} />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
