// SummaryCards.js
import React from 'react';
import { FaUsers, FaBriefcase, FaCheckCircle } from 'react-icons/fa';

const SummaryCard = () => {
  return (
    <div className="flex gap-5 mb-6">
      <div className="bg-white p-5 rounded-lg shadow-md w-1/3 flex flex-col items-center text-center">
        <FaUsers className="text-blue-600 text-3xl mb-2" />
        <h2 className="text-lg font-semibold">Total Jobs</h2>
        <p className="text-3xl font-bold text-blue-600">932</p>
        <span className="text-green-500 text-sm">+10% than last month</span>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md w-1/3 flex flex-col items-center text-center">
        <FaBriefcase className="text-orange-600 text-3xl mb-2" />
        <h2 className="text-lg font-semibold">Active Jobs</h2>
        <p className="text-3xl font-bold text-orange-600">754</p>
        <span className="text-red-500 text-sm">-0.5% than last month</span>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md w-1/3 flex flex-col items-center text-center">
        <FaCheckCircle className="text-pink-600 text-3xl mb-2" />
        <h2 className="text-lg font-semibold">Completed Jobs</h2>
        <p className="text-3xl font-bold text-pink-600">754</p>
        <span className="text-red-500 text-sm">-0.5% than last month</span>
      </div>
    </div>
  );
};

export default SummaryCard;
