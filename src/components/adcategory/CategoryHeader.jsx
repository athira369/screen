import React from 'react';

const CategoryHeader = () => {
  return (
    <div className="px-6 py-4 mb-6">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        {/* Title */}
        <h1 className="text-xl font-bold text-[#2E2E60] mr-6">Category</h1> {/* Added margin-right */}

        {/* Search Bar */}
        <div className="flex-1 mx-6"> {/* Adjusted spacing using mx-6 */}
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E2E60]"
          />
        </div>

        {/* Icons and Profile Section */}
        <div className="flex items-center space-x-4">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <span className="material-symbols-outlined text-gray-500">notifications</span>
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <span className="material-symbols-outlined text-gray-500">settings</span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full shadow-sm"
            />
            <div className="text-sm">
              <p className="font-medium text-[#2E2E60]">Nabila A.</p>
              <p className="text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default CategoryHeader;
