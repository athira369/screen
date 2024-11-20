import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
const AdsManagement = () => {
  const adCategories = ["Banner Ad", "Card Ad", "Popup Ad", "Boost Profile"];
  const ads = [
    { id: 1, views: 420, hits: 50 },
    { id: 2, views: 300, hits: 45 },
    { id: 3, views: 200, hits: 30 },
    // Add more ads as needed
  ];
  return (
       
<div className="flex flex-col flex-grow">
        <Header />
        <MainContent adCategories={adCategories} ads={ads} />
      </div>
       
  )
}

export default AdsManagement