import React from 'react'
import { Link } from 'react-router-dom'
import FranchiseeHeader from './FranchiseeHeader'

const Franchisees = () => {
  return (
    <div className="p-6">
      <FranchiseeHeader />

      {/* Search, Filter, and Add Buttons */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search here..."
          className="flex-1 p-2 border rounded-lg"
        />
        <select className="p-2 border rounded-lg">
          <option>Franchise Type</option>
        </select>
        <Link
          to={"/FranchiseeForm"}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add/Edit Franchisee Type
        </Link>
        <select className="p-2 border rounded-lg">
          <option>Newest</option>
        </select>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          + New Franchisee
        </button>
      </div>

      {/* Franchisee Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-black">
              <th className="p-4">Select</th>
              <th className="p-4 whitespace-nowrap">Franchisee Name</th>
              <th className="p-4">ID</th>
              <th className="p-4">Revenue</th>
              <th className="p-4">Branches</th>
              <th className="p-4 whitespace-nowrap">Service Providers</th>
              <th className="p-4">Location</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Valid Up To</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center ">
                  <div className="w-12 h-12 rounded-full bg-[#C1BBEB] flex items-center justify-center overflow-hidden">
                    <img
                      src=""
                      alt=""
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div> 
                  
                    <span className="whitespace-nowrap ml-4">Samanta William</span>
                  </div>
                </td>
                <td className="p-4 text-center text-purple-600">#123456789</td>
                <td className="p-4 text-center">10,00,500</td>
                <td className="p-4 text-center">2</td>
                <td className="p-4 text-center">2</td>
                <td className="p-4 text-center">Jakarta</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="material-symbols-outlined text-purple-500">
                      call
                    </span>
                    <span className="material-symbols-outlined text-purple-500">
                      email
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="text-sm text-gray-700 whitespace-nowrap">
                    March 25, 2021
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="bg-[#FF745B] text-white px-3 py-1 rounded-full text-xs">
                    Inactive
                  </span>
                </td>
                <td className="p-4 text-center">
                  <i className="material-symbols-outlined text-gray-500 cursor-pointer">
                    more_vert
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <button className="p-2 bg-gray-200 rounded-lg">
            <i className="material-symbols-outlined">chevron_left</i>
          </button>
          <button className="p-2 bg-gray-200 rounded-lg">1</button>
          <button className="p-2 bg-gray-200 rounded-lg">2</button>
          <button className="p-2 bg-gray-200 rounded-lg">3</button>
          <button className="p-2 bg-gray-200 rounded-lg">
            <i className="material-symbols-outlined">chevron_right</i>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Ask to edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Franchisees
