// HomePage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sampleData } from '../data/sampleData';
import CurrentBidCard from '../components/CurrentBidCard';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    // Set initial active tab based on current route
    const pathToTab = {
      '/': 'Teams',
      '/updates': 'Updates',
      '/sold-players': 'Sold Players',
      '/unsold-players': 'Unsold Players',
      '/yet-to-auction': 'Yet to auction Players'
    };
    return pathToTab[location.pathname] || 'Teams';
  });

  // Handle tab changes and navigation
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const tabToPath = {
      'Teams': '/',
      'Updates': '/updates',
      'Sold Players': '/sold-players',
      'Unsold Players': '/unsold-players',
      'Yet to auction Players': '/yet-to-auction'
    };
    navigate(tabToPath[tab]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-500 p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <img 
            src="/api/placeholder/56/56" 
            alt="TPA Logo" 
            className="h-14 brightness-0 invert cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate('/')}
          />
        </div>
      </header>

      {/* Current Bid Card */}
      <CurrentBidCard bid={sampleData.currentBid} />

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-6 pb-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm flex justify-center flex-wrap">
          {[
            "Teams",
            "Updates",
            "Sold Players",
            "Unsold Players",
            "Yet to auction Players"
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-3 rounded-full cursor-pointer mr-4 mb-2 text-base transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white scale-105 shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-blue-800 text-white py-4 text-center mt-18">
        <p className="text-sm">© 2023 Cricket Auction. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;