import React from 'react'
const BookingDetails = () => {
  return (
    <div className="p-8">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-6 text-customPurple">Booking Details</h2>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          {/* User Information */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="User Profile" className="rounded-full h-12 w-12" />
            <div>
              <h3 className="font-bold text-lg">Karan Hope</h3>
              <p className="text-gray-500">User</p>
              <p className="text-gray-500"><i className="material-icons-outlined">location_on</i> North Paravoor, Eravam</p>
              <p className="text-gray-500">Booking ID: 12aa21w</p>
            </div>
            <span className="ml-auto px-4 py-2 bg-blue-200 text-blue-800 rounded-full">Requested</span>
          </div>

          {/* Booking Details */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <h3 className="font-semibold">Title: Bulb Change</h3>
            <p className="text-gray-500">Description: Bulb Change sadadasd asfadas...</p>
            <div className="flex space-x-2">
              <img src="https://via.placeholder.com/40" alt="Image/Video" className="rounded-md" />
              <img src="https://via.placeholder.com/40" alt="Image/Video" className="rounded-md" />
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <p className="text-gray-500">Availability From</p>
                <button className="px-4 py-2 border rounded-md">Jun 10, 2024 - 9:41 AM</button>
              </div>
              <div>
                <p className="text-gray-500">To</p>
                <button className="px-4 py-2 border rounded-md">Jun 10, 2024 - 9:41 AM</button>
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold">Review</h3>
            <div className="flex items-center space-x-4 mt-4">
              <img src="https://via.placeholder.com/40" alt="Reviewer" className="rounded-full" />
              <div>
                <h4 className="font-semibold">Heather S. McMullen</h4>
                <p className="text-gray-500">The course is very good...</p>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★ 4.2</span>
                  <p className="text-gray-500">760 Likes • 2 Weeks Ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Complaint */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold">Complaint</h3>
            <p className="text-gray-500 mt-4">The course is very good...</p>
            <div className="flex space-x-2 mt-2">
              <img src="https://via.placeholder.com/40" alt="Complaint Image/Video" className="rounded-md" />
              <img src="https://via.placeholder.com/40" alt="Complaint Image/Video" className="rounded-md" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="material-icons-outlined text-gray-500">phone</button>
              <button className="material-icons-outlined text-gray-500">message</button>
              <button className="material-icons-outlined text-gray-500">email</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6">
          {/* Service Provider Information */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Provider Profile" className="rounded-full h-12 w-12" />
            <div>
              <h3 className="font-bold text-lg">Nazrul Islam</h3>
              <p className="text-gray-500">Electrification</p>
              <p className="text-gray-500">Franchise: SNS</p>
            </div>
            <span className="ml-auto px-4 py-2 bg-green-200 text-green-800 rounded-full">Accepted</span>
          </div>

          {/* Appointment Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold">Appointment</h3>
            <p className="text-gray-500">Date & Time: Jun 10, 2024 - 9:41 AM</p>
            <p className="text-gray-500">Invoice: #12345</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500">Total:</span>
              <span className="font-semibold text-lg">₹300</span>
            </div>
            <p className="text-gray-500 mt-2">Terms: Valid up to 1 month</p>
            <p className="text-red-500 mt-2">Additional Requirements: Provide Ladder</p>
          </div>

          {/* Complaint Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold">Complaint</h3>
            <p className="text-gray-500">The course is very good...</p>
            <div className="flex space-x-2 mt-4">
              <img src="https://via.placeholder.com/40" alt="Complaint Image" className="rounded-md" />
              <img src="https://via.placeholder.com/40" alt="Complaint Video" className="rounded-md" />
            </div>
          </div>

          {/* Status Dropdowns */}
          <div className="space-y-4">
            <label className="block text-gray-700 font-semibold">Booking Status</label>
            <select className="w-full p-2 border rounded-md">
              <option>Tag</option>
              <option>Requested</option>
              <option>Accepted</option>
              <option>Completed</option>
            </select>

            <label className="block text-gray-700 font-semibold">Complaint Status</label>
            <select className="w-full p-2 border rounded-md">
              <option>Tag</option>
              <option>Resolved</option>
              <option>Pending</option>
            </select>

            <label className="block text-gray-700 font-semibold">Payment Status</label>
            <select className="w-full p-2 border rounded-md">
              <option>Tag</option>
              <option>Paid</option>
              <option>Unpaid</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails
