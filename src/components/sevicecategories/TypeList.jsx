import React from 'react';
import PropTypes from 'prop-types';

const TypeList = ({ types, onEdit, onAddNew }) => {
  return (
    <div className="  bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Type</h2>
      <div className="space-y-4 ">
        {types.map((type, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4  bg-[#F3F4FF] border rounded-lg cursor-pointer hover:bg-gray-100"
          >
            {type}
            <button onClick={() => onEdit(type)}>
              <i>✏️</i>
            </button>
          </div>
        ))}
        <button
          className="w-full p-4 border border-dashed rounded-lg bg-[#F3F4FF] text-purple-600 hover:bg-purple-50"
          onClick={onAddNew}
        >
          + Add New
        </button>
      </div>
    </div>
  );
};

// Correctly define prop types
TypeList.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings is expected
  onEdit: PropTypes.func.isRequired,                   // Function is expected
  onAddNew: PropTypes.func.isRequired,                 // Function is expected
};

export default TypeList;
