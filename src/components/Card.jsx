import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b pb-4 mb-4">
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-800">{children}</h2>
);

export const CardContent = ({ children }) => (
  <div>
    {children}
  </div>
);