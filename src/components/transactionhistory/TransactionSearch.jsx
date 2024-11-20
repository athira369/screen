import React, { useState } from 'react';

const TransactionSearch = () => {
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');

  return (
    // Search and Button Section
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search by Name, ID or Location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Handle search input change
        className="w-1/3 p-2 border rounded-lg"
      />
      {/* Optional: Add a button if needed */}
      <button className="ml-4 p-2 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </div>
  );
}

export default TransactionSearch;
