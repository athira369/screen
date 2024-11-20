import React from 'react';
import IncompleteBookings from './IncompleteBooking';
import ComparisonsChart from './ComparisonsChart';
import Calendar from './Calender';
import Complaint from './Complaint';
function MainContent() {
  return (

    <main className="flex-1 p-6 bg-customLightBlue" style={{ minHeight: '200vh' }}>
    
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p shadow rounded-lg w-full h-[600px]">
        {/* Full-width Chart */}
        <h3 className="text-xl">Full-width Chart</h3>
        <div className="mt-4"><ComparisonsChart/></div>
      </div>
      {/* <div className="grid grid-cols-2 gap-6 mb-6 p-4"> */}
        <div className="bg-white p-4 shadow rounded-lg h-30">
          {/* Chart 1 */}
          <h3 className="text-xl">Chart 1</h3>
          <div className="mt-4"><Calendar/></div>
        {/* </div> */}
        
        <div className="bg-white p-4 shadow rounded-lg h-80">
          {/* Chart 2 */}
          <h3 className="text-xl">Chart 2</h3>
          <div className="mt-4"> {/* Insert your chart component here */}</div>
        </div>
      <div className="bg-white p-4 shadow rounded-lg h-96">
        {/* Full-width Chart */}
        <h3 className="text-xl">Full-width Chart</h3>
        <div className="mt-4"> {/* Insert your full-width chart component here */}</div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg h-80">
          {/* Chart 1 */}
          <h3 className="text-xl">Complaints</h3>
          <div className="mt-4"> <Complaint/></div>
        </div>
        
        <div className="bg-white p-4 shadow rounded-lg h-80">
          {/* Chart 2 */}
          <h3 className="text-xl">Incomplete Bookings</h3>
          <div className="mt-4"> <IncompleteBookings/></div>
        </div>
        </div>
      
    </main>
  );
};

export default MainContent;
