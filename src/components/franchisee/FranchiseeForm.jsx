import React from 'react'

const FranchiseeForm = () => {
  return (
    <div className="flex-grow bg-gray-50 p-8">
    <h1 className="text-2xl font-semibold mb-5">Edit / Add Franchisee Type</h1>
    <div className="flex gap-10">
      {/* Type Selection */}
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        <h2 className="text-lg font-semibold mb-4">Type</h2>
        <ul className="space-y-3">
          <li className="bg-gray-100 p-3 rounded-lg">Grama panchayat</li>
          <li className="bg-gray-100 p-3 rounded-lg">Municipality</li>
          <li className="bg-gray-100 p-3 rounded-lg">Cooperation</li>
          <li className="bg-gray-100 p-3 rounded-lg text-blue-500 cursor-pointer">+ Add new</li>
        </ul>
      </div>
      
      {/* Franchisee Type Form */}
      <div className="bg-white p-6 rounded-lg shadow-md w-2/3">
        <h2 className="text-lg font-semibold mb-4">Franchisee Type</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Grama panchayat" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Details" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Rate" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Currency" className="w-full p-3 border rounded-lg" />
        </form>
        {/* Action Buttons */}
        <div className="flex gap-4 mt-5">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Delete</button>
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">Save as Draft</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
        </div>
      </div>
    </div>
  </div>
);
};

export default FranchiseeForm;
