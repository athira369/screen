// ServiceHistory.js
import React from 'react';
 import SummaryCard from './SummaryCard.jsx';
import ServiceTable from './ServiceTable.jsx';

const ServiceHistory = () => {
  return (
    <div className="flex-grow p-8">
      <h1 className="text-2xl font-semibold mb-6">Service History</h1>
      <SummaryCard />
      <ServiceTable />
    </div>
  );
};

export default ServiceHistory;
