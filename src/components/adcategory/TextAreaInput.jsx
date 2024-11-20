import React from 'react';

const TextAreaInput = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <textarea
      className="w-full border rounded-lg px-4 py-2"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  </div>
);

export default TextAreaInput;
