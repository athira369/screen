import React from 'react'

const FranchiseeHeader = () => {
  return (
    <div className="px-6 py-4 mb-6">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        {/* Title */}
        <h1 className="text-xl font-bold text-[#2E2E60]">Franchisees</h1>

        {/* Search Bar and Profile */}
        <div className="flex items-center space-x-6">
          {/* Icons and Profile Section */}
          <div className="flex items-center space-x-4">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
              <span className="material-symbols-outlined text-gray-500">
                notifications
              </span>
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
              <span className="material-symbols-outlined text-gray-500">
                settings
              </span>
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full shadow-sm"
              />
              <div className="text-sm">
                <p className="font-medium text-[#2E2E60]">Nabila A.</p>
                <p className="text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Statistics Section */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {[
          {
            title: 'Franchisees',
            value: 932,
            change: '+10%',
            iconColor: 'bg-[#4B48D2]',
            icon: 'person',
          },
          {
            title: 'Active Franchisees',
            value: 754,
            change: '-0.5%',
            iconColor: 'bg-[#FF745B]',
            icon: 'person',
          },
          {
            title: 'Inactive Franchisees',
            value: 754,
            change: '+10%',
            iconColor: 'bg-[#4B48D2]',
            icon: 'person',
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center bg-white p-4 rounded-lg shadow-sm space-x-4"
          >
            <div
              className={`${stat.iconColor} p-2 rounded-full flex items-center justify-center`}
            >
              <span className="material-symbols-outlined text-white text-2xl">
                {stat.icon}
              </span>
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <h3 className="text-lg font-bold text-[#2E2E60]">{stat.value}</h3>
              <p
                className={`text-sm ${
                  stat.change.includes('+') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stat.change} than last month
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FranchiseeHeader;
