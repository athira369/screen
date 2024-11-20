import React from 'react';
import { FaCog, FaBell, FaPlus,FaEnvelope } from 'react-icons/fa';

const RightSidebar = () => {
  return (
    <div 
      className="w-64 bg-gray-700 text-black p-4 flex flex-col space-y-6overflow-y-scroll" 
      style={{ minHeight: '200vh' }} // Ensuring a minimum height of 200vh for scrollbar
    >
      {/* Top Row: Settings, Notification, Profile Picture, and Name */}
      <div className="flex items-center space-x-4 justify-between">
        <FaCog className="text-2xl cursor-pointer hover:text-gray-400" />
        <FaBell className="text-2xl cursor-pointer hover:text-gray-400" />
        
        {/* Profile Picture and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/30" 
            alt="Admin"
            className="rounded-full w-8 h-8"
          />
          <div>
            <p className="font-semibold">Admin Name</p>
          </div>
        </div>
      </div>

      {/* Recent Activities Container with Add Button */}
      <div className="bg-white p-4 rounded-lg">
        {/* Title and Add Button in Horizontal Row */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Activities</h3>
          <button className="bg-white text-black p-2 rounded-full hover:bg-customPurple">
            <FaPlus />
          </button>
        </div>

        {/* Activity List (Vertical Alignment) */}
        <div className="space-y-4">
          {/* Example Activity */}
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/30" 
              alt="Activity Profile"
              className="rounded-full w-8 h-8"
            />
            <div className="flex-1">
              <p className="font-medium">Activity Name</p>
              <p className="text-sm text-gray-400">Kochi</p>
              
            </div>
            {/* <FaEllipsisH className="text-lg text-gray-400 cursor-pointer hover:text-gray-300" /> */}
            <FaEnvelope className="text-lg text-gray-400 cursor-pointer hover:text-gray-300 " />
          </div>
        </div>
        <div className="space-y-4">
          {/* Example Activity */}
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/30" 
              alt="Activity Profile"
              className="rounded-full w-8 h-8"
            />
            <div className="flex-1">
              <p className="font-medium">Activity Name</p>
              <p className="text-sm text-gray-400">Location • Email</p>
              
            </div>
            <FaEnvelope className="text-lg text-gray-400  cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        <div className="space-y-4">
          {/* Example Activity */}
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/30" 
              alt="Activity Profile"
              className="rounded-full w-8 h-8"
            />
            <div className="flex-1">
              <p className="font-medium">Activity Name</p>
              <p className="text-sm text-gray-400">Location • Email</p>
              
            </div>
            <FaEnvelope className="text-lg text-gray-400 cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        <div className="space-y-4">
          {/* Example Activity */}
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/30" 
              alt="Activity Profile"
              className="rounded-full w-8 h-8"
            />
            <div className="flex-1">
              <p className="font-medium">Activity Name</p>
              <p className="text-sm text-gray-400">Location • Email</p>
              
            </div>
            <FaEnvelope className="text-lg text-gray-400 cursor-pointer hover:text-gray-300" />
          </div>
        </div>


        {/* View More Button */}
        <button className="w-full bg-gray-400 text-white py-2 rounded-md text-center mt-4 hover:text-gray-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
