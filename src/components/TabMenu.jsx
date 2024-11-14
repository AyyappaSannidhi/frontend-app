import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import TextBlock from "./TextBlock";
import { useTranslation } from 'react-i18next';

const TabMenu = ({ 
  heading, 
  labels, 
  contents, 
  backGround = "bg-white-100", 
  fullList = true, 
  length = 1000 
}) => {

  const [selectedTab, setSelectedTab] = useState(0); // Default to the first tab
  const { t } = useTranslation(); // Access i18n instance

  const contentToShow = contents[selectedTab]?.slice(0, length) || [];

  return (
    <div className={`w-full p-2 space-y-6 ${backGround}`}>
      <Heading heading={heading} marginTop={'mt-8'} />
      
      <div className="flex w-full justify-around bg-white text-gray-800 p-4 rounded-lg border border-gray-300 space-x-2">
        {labels.map((label, index) => (
          <button
            key={label} // Use label as key for simplicity
            onClick={() => setSelectedTab(index)}
            className={`flex-1 px-4 py-2 text-center rounded border border-gray-300 transition-colors duration-300 ${
              selectedTab === index ? "bg-orange-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {/* Content Section */}
      <div className="w-full mt-6 p-4 border border-gray-300 rounded-lg space-y-4">
        <TextBlock textPoints={contentToShow} />
        
        {!fullList && (
          <div className="flex justify-end">
            <Link to="/faq">
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
                {t('common.readMore')}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;