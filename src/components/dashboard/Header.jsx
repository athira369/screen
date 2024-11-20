import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center">
        <span className="material-symbols-outlined mr-4">notifications</span>
        <span className="material-symbols-outlined">settings</span>
        <div className="ml-4 flex items-center space-x-2">
          <p><b>nobil</b></p>
          <p>admin</p>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img src="https://images.pexels.com/photos/1522186/pexels-photo-1522186.jpeg?cs=srgb&dl=pexels-nubikini-1522186.jpg&fm=jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
