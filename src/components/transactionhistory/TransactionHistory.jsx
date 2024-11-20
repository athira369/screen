import React from 'react'
import TransactionHeader from './TransactionHeader';

import TransactionTable from './TransactionTable';
import TransactionCard from './TransactionCard';
const TransactionHistory = () => {
  return (
    <div className="flex-grow p-8">
      
      <TransactionHeader/>
     
      <TransactionCard/>
      <TransactionTable/>
      </div>

  )
}

export default TransactionHistory;