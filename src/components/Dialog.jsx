import React from 'react';

export const Dialog = ({ open, onOpenChange, children }) => (
  <div className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`}>
    <div className="fixed inset-0 bg-black opacity-50" onClick={() => onOpenChange(false)}></div>
    <div className="relative z-50 mx-auto my-8 max-w-lg bg-white rounded-lg shadow-lg">
      {children}
    </div>
  </div>
);

export const DialogContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const DialogHeader = ({ children }) => (
  <div className="border-b pb-4 mb-4">
    {children}
  </div>
);

export const DialogTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-800">{children}</h2>
);

export const DialogFooter = ({ children, className }) => (
  <div className={`border-t pt-4 mt-4 ${className}`}>
    {children}
  </div>
);