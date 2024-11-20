import React from 'react';

const Dropdown = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <select
      className="w-full border rounded-lg px-4 py-2"
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
