import React from 'react';
function AddNewUser() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-customPurple">Add New User</h2>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-lg font-semibold mb-4 text-customPurple">Student Details</h3>
        
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Photo Upload */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <label className="mb-2 text-gray-700 font-semibold">Photo *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 w-48 flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-center">
                Drag and drop or click here to select file
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="Full Name" />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 font-semibold">Address</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="Address" />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-700 font-semibold">Date of Birth</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="Email" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold">Phone</label>
                <div className="flex">
                  <select className="px-3 py-2 border border-r-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-customPurple">
                    <option>+1</option>
                    <option>+91</option>
                    {/* Add other country codes as needed */}
                  </select>
                  <input type="tel" className="w-full px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="Phone Number" />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-700 font-semibold">Gender</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* House Name */}
              <div>
                <label className="block text-gray-700 font-semibold">House Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="House Name" />
              </div>

              {/* Landmark */}
              <div>
                <label className="block text-gray-700 font-semibold">Landmark</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="Landmark" />
              </div>

              {/* Pin Code */}
              <div>
                <label className="block text-gray-700 font-semibold">Pin Code</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="Pin Code" />
              </div>

              {/* District */}
              <div>
                <label className="block text-gray-700 font-semibold">District</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="District" />
              </div>

              {/* State */}
              <div>
                <label className="block text-gray-700 font-semibold">State</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple" placeholder="State" />
              </div>
            </div>

            <p className="text-gray-500 mt-4">#Other info as required</p>
          </div>
        </div>
          {/* Action Buttons */}
          <div className="mt-8 flex justify-end space-x-4">
          {/* Save as Draft Button */}
          <button className="px-6 py-2 border border-customPurple text-customPurple rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-customPurple">
            Save as Draft
          </button>
          
          {/* Submit Button */}
          <button className="px-6 py-2 bg-customPurple text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-customPurple">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewUser;
