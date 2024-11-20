import React from 'react';

const AddCategoryButton = () => {
  return (
    <button className="bg-gray-100 p-4 flex flex-col items-center justify-center rounded-lg border-dashed border-2 border-gray-300 hover:bg-gray-200">
      <i className="text-4xl text-gray-500">+</i>
      <span className="text-gray-500">Add New</span>
    </button>
  );
};

export default AddCategoryButton;
