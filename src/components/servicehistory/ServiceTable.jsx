import React, { useState } from 'react';

const ServiceTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for table rows
  const data = [
    { jobId: 'FRDLSE1201', date: 'March 25, 2021', franchisee: 'Recto C', agent: 'Jackop R', providerId: 'R01A01S002', customerId: 'R01A01S002', customerType: 'Service Provider', jobType: 'One Time Lead', status: 'Active' },
    { jobId: 'FRDLSE1202', date: 'March 26, 2021', franchisee: 'Recto C', agent: 'Jackop R', providerId: 'R01A01S003', customerId: 'GL210102', customerType: 'Customer', jobType: 'Daily Work', status: 'Completed' },
    {jobId:'DERSWS1203',date:'March 25,'}
    // Add more rows as needed
  ];

  // Filter data based on search term
  const filteredData = data.filter(row => 
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
            <th className="p-3">JOB_ID</th>
            <th className="p-3">Date</th>
            <th className="p-3">Franchisee</th>
            <th className="p-3">Agent</th>
            <th className="p-3">Service Provider Id</th>
            <th className="p-3">Customer Id</th>
            <th className="p-3">Customer Type</th>
            <th className="p-3">Job Type</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3">{row.jobId}</td>
                <td className="p-3">{row.date}</td>
                <td className="p-3">{row.franchisee}</td>
                <td className="p-3">{row.agent}</td>
                <td className="p-3">{row.providerId}</td>
                <td className="p-3">{row.customerId}</td>
                <td className="p-3">{row.customerType}</td>
                <td className="p-3">{row.jobType}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      row.status === 'Active' ? 'bg-orange-500' : 'bg-green-500'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-3 text-gray-500 hover:text-gray-700 cursor-pointer">⋮</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="p-3 text-center text-gray-500">No matching data found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span>Showing {filteredData.length} from {data.length} data</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-full hover:bg-indigo-100">1</button>
          <button className="px-3 py-1 border rounded-full hover:bg-indigo-100">2</button>
          <button className="px-3 py-1 border rounded-full hover:bg-indigo-100">3</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTable;
