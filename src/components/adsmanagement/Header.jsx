import React from 'react';

const Header = () => {
  return (
    <div className="bg-[#F3F4FF] px-6 py-4 shadow-sm">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        {/* Title */}
        <h1 className="text-xl font-bold text-[#2E2E60]">Ads Management</h1>

        {/* Search Bar and Profile */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-white border border-gray-300 rounded-full py-2 px-4 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4B48D2]"
            />
            <span className="absolute right-4 top-2.5 text-gray-500 material-symbols-outlined">
              search
            </span>
          </div>

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
      <div className="mt-6 grid grid-cols-4 gap-4">
        {[{
            title: 'Total Ads',
            value: 932,
            change: '+10%',
            iconColor: 'bg-[#4B48D2]',
            icon: 'account_circle',
          },
          {
            title: 'Total Ads Revenue',
            value: 754,
            change: '-0.5%',
            iconColor: 'bg-[#FF745B]',
            icon: 'account_balance_wallet',
          },
          {
            title: 'Boosted Profile',
            value: 932,
            change: '+10%',
            iconColor: 'bg-[#4B48D2]',
            icon: 'verified_user',
          },
          {
            title: 'Other Ads',
            value: 754,
            change: '-0.5%',
            iconColor: 'bg-[#FF745B]',
            icon: 'shopping_bag',
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
  );
};

export default Header;
