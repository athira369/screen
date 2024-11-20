import React from 'react'

const EditProfile = () => {
  return (
    <div className="flex flex-wrap gap-8 p-8">
      {/* Main Content Container */}
      <div className="flex gap-8 w-full justify-between">
        {/* Left Sidebar - Profile Information */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/3">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="rounded-full border-4 border-pink-500 mb-4"
            />
            <h3 className="text-lg font-semibold">Yash Ghori</h3>
            <p className="text-gray-500">Ahmedabad, Gujarat, India</p>
            <hr className="w-full my-4" />
            <div className="space-y-2 text-center">
              <p className="text-gray-700 flex items-center justify-center">
                <i className="material-icons-outlined mr-2">admin_panel_settings</i>
                Administrator
              </p>
              <p className="text-gray-700 flex items-center justify-center">
                <i className="material-icons-outlined mr-2">phone</i>
                +91 7048144030
              </p>
              <p className="text-gray-700 flex items-center justify-center">
                <i className="material-icons-outlined mr-2">email</i>
                yghori@asite.com
              </p>
              <p className="text-gray-700 flex items-center justify-center">
                <i className="material-icons-outlined mr-2">badge</i>
                PDT - I
              </p>
            </div>
          </div>
        </div>

        {/* Edit Profile Form */}
        <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">First Name</label>
              <input type="text" defaultValue="Yash" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-600">Last Name</label>
              <input type="text" defaultValue="Ghori" className="w-full p-2 border rounded-md" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600">Email</label>
              <input type="email" defaultValue="yghori@asite.com" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-600">Phone Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100">+91</span>
                <input type="text" defaultValue="8023456789" className="w-full p-2 border rounded-r-md" />
              </div>
            </div>
            <div>
              <label className="block text-gray-600">Nationality</label>
              <input type="text" defaultValue="India" className="w-full p-2 border rounded-md" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600">Password</label>
              <input type="password" placeholder="Change Password" className="w-full p-2 border rounded-md" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600">Designation</label>
              <select className="w-full p-2 border rounded-md">
                <option>UI Intern</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="col-span-2 flex justify-center mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Save</button>
            </div>
          </form>
        </div>

        {/* Work Progress Widget - Shortened Size */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/4">
          <h3 className="font-semibold mb-4">Total work done</h3>
          <div className="relative flex justify-center items-center h-24 w-24 mx-auto">
            {/* Placeholder for Circular Progress */}
            <svg className="absolute top-0 left-0 w-full h-full">
              <circle cx="50%" cy="50%" r="50%" fill="transparent" stroke="#e2e8f0" strokeWidth="8" />
              <circle
                cx="50%"
                cy="50%"
                r="50%"
                fill="transparent"
                stroke="#6366f1"
                strokeWidth="8"
                strokeDasharray="125"
                strokeDashoffset="25"
              />
            </svg>
            <p className="absolute text-xl font-semibold">5w: 2d</p>
          </div>
          <div className="text-center mt-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">This Week</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile;
