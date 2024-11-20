import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center space-y-2">
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-32 object-cover rounded-lg"
      />
      <h3 className="text-md font-medium">{category.title}</h3>
      <div className="flex space-x-2">
        <button className="text-gray-500 hover:text-gray-800">
          <i>👁️</i>
        </button>
        <button className="text-blue-500 hover:text-blue-800">
          <i>✏️</i>
        </button>
        <button className="text-red-500 hover:text-red-800">
          <i>🗑️</i>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
