import React from 'react';

const Input = ({ type, value, onChange, placeholder, className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`border border-gray-300 rounded-md px-4 py-2 ${className}`}
  />
);

export default Input;