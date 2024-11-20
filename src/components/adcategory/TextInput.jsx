import React from 'react';

const TextInput = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type="text"
      className="w-full border rounded-lg px-4 py-2"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default TextInput;
