import React, { useState } from 'react';

const TransactionTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for table rows
  const data = [
    { trans_id: 'FRDLSE1201', date: 'March 25, 2021', type: 'Ad', description: 'ad posted', from: 'R01A01S002', to: 'R01A01S002', amount: 2001, status: 'Active' },
    { trans_id: 'FRDLSE1202', date: 'March 26, 2021', type: 'ad', description: 'ad posted', from: 'R01A01S003', to: 'GL210102', amount: 3001, status: 'Completed' },
    { trans_id: 'DERSWS1203', date: 'March 25, 2021', type: 'Ad', description: 'ad posted', from: 'R01A01S004', to: 'GL210103', amount: 1500, status: 'Active' },
    // Add more rows as needed
  ];

  // Filter data based on search term
  const filteredData = data.filter(row => 
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {/* Search Bar Section */}
      <div className="p-4 mb-6"> {/* mb-6 adds space between the search bar and table */}
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-lg w-1/4"
        />
      </div>

      {/* Table Section */}
      <div className = "overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-white justify-center ">
              <th className="p-4">Select</th>
              <th className="p-4 whitespace-nowrap">Transaction_ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Type</th>
              <th className="p-4">Description</th>
              <th className="p-4 whitespace-nowrap">From</th>
              <th className="p-4">To</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{row.trans_id}</td>
                  <td className="p-3">{row.date}</td>
                  <td className="p-3">{row.type}</td>
                  <td className="p-3">{row.description}</td>
                  <td className="p-3">{row.from}</td>
                  <td className="p-3">{row.to}</td>
                  <td className="p-3">{row.amount}</td>
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
      </div>

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

export default TransactionTable;
