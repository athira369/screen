import React from 'react';

const CategorieStats = () => {
  return (
    <div className="px-6 py-4">
      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: 'Categories',
            value: 932,
            iconColor: 'bg-[#4B48D2]',
            icon: 'person',
          },
          {
            title: 'Sub Categories',
            value: 754,
            iconColor: 'bg-[#FF745B]',
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
              <h2 className="text-lg font-semibold text-[#2E2E60]">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorieStats;
