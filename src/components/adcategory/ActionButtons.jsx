import React from 'react';

const ActionButtons = ({ onDelete, onSubmit }) => (
  <div className="flex justify-between mt-6">
    <button
      onClick={onDelete}
      className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
    >
      Delete
    </button>
    <button
      onClick={onSubmit}
      className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
    >
      Save
    </button>
  </div>
);

export default ActionButtons;
