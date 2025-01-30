import React, { useState } from 'react';
import Description from './Description';
import Reviews from './Reviews';
import ReturnPolicies from './ReturnPolicies';
import Shipping from './Shipping';

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const renderContent = () => {
    switch (activeTab) {
      case 'Description':
        return <Description />;
      case 'Review':
        return <Reviews />;
      case 'Shipping':
        return <Shipping />;
      case 'Return Policies':
        return <ReturnPolicies />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <header className="p-4 border-b border-gray-200"></header>
      <div className="p-4 sm:p-6">
        {/* Tab Navigation */}
        <div className="mb-6">
          <ul className="flex space-x-4 border-b-2 overflow-x-auto whitespace-nowrap text-sm sm:text-base">
            {['Description', 'Review', 'Shipping', 'Return Policies'].map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer p-2 flex-shrink-0 ${
                  activeTab === tab ? 'border-b-2 border-black font-bold' : ''
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Section */}
        <div className="p-2 sm:p-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default MainComponent;
