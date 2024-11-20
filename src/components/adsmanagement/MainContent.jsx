import PropTypes from 'prop-types';

const MainContent = ({ adCategories, ads }) => {
  return (
    <main className="p-6 bg-[#F3F4FF] flex-grow">
      {/* Filters Section */}
      <div className="flex gap-4 mb-6">
        {/* Franchisee Dropdown */}
        <select className="border px-4 py-2 rounded-lg w-64 bg-white ">
          <option>Franchisee</option>
        </select>
        
        {/* Service Provider Dropdown */}
        <select className="border px-4 py-2 rounded-lg w-64 bg-white">
          <option>Service Provider</option>
        </select>
      </div>

      {/* Ad Categories and Ads List Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ad Category Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Ad Category</h2>
            <button className="text-gray-400 hover:text-gray-600 text-sm">
              <span className="material-symbols-outlined">edit</span>
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {adCategories.map((category) => (
              <button
                key={category}
                className="w-full bg-[#F3F4FF] p-4 rounded-lg shadow flex justify-between items-center"
              >
                {category}
                <span className="text-gray-400 text-sm">Edit</span>
              </button>
            ))}
          </div>
        </div>

        {/* Ads List Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              {/* Sort Dropdown with custom outline color */}
              <select className="border px-4 py-2 rounded-lg bg-white  focus:outline-[#4D44B5]">
                <option>Sort</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
            {/* Add New Button as Dropdown */}
            <div className="relative">
              <select className="bg-[#4D44B5] text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <option>ADD NEW</option>
              <option>Newest</option>
              <option>Oldest</option>
              {/* Dropdown Menu for Add New */}
    
              </select>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {ads.map((ad, index) => {
              const adType =
                index === 0 ? "Card Ad" :
                index === 1 ? "Banner Ad" :
                index === 2 ? "Popup Ad" :
                "Boost Profile";

              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg shadow flex items-center justify-between w-full sm:w-60 ${
                    adType === "Card Ad" || adType === "Banner Ad" || adType === "Popup Ad" || adType === "Boost Profile"
                      ? "bg-[#F3F4FF]"
                      : "bg-white"
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-sm">{adType}</h3>
                    <p className="text-gray-600 text-xs">Ad ID: {ad.id}</p>
                    <p className="text-gray-600 text-xs">{ad.views} Views | {ad.hits} Hits</p>
                  </div>
                  <div className="bg-gray-200 w-10 h-10 rounded-md"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

// Add prop validation
MainContent.propTypes = {
  adCategories: PropTypes.array.isRequired,
  ads: PropTypes.array.isRequired,
};

export default MainContent;
