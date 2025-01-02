export default function TabNavigation({ activeTab, onTabChange }) {
  const tabs = [
    "Teams",
    "Updates",
    "Sold Players",
    "Unsold Players",
    "Yet to auction Players",
  ];

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`py-4 px-6 text-sm font-medium rounded-t-lg transition duration-200 ease-in-out ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

