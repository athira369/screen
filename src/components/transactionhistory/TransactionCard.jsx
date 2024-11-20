import React from "react";

const TransactionCard = () => {
  return (
    <div className="flex gap-5 mb-6">
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
  );
};

export default TransactionCard;
