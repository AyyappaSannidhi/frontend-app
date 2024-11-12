import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import TextBlock from "./TextBlock";
import translations from "../js/translations/mainTranslations";
import { useSelector } from 'react-redux';

const TabMenu = ({ heading, dosContent, dontsContent, menuItems, backGround = "bg-white-100", fullList = true, length = 1000 }) => {

  const [selectedTab, setSelectedTab] = useState("dos");
  const language = useSelector((state) => state.language.currentLanguage);
  const contentToShow = selectedTab === "dos" ? dosContent.slice(0, length) : dontsContent.slice(0, length);

  return (
    <div className={`w-full p-2 space-y-6 ${backGround}`}>
      <Heading heading={heading} marginTop={'mt-8'}/>
      
      <div className="flex w-full justify-around bg-white text-gray-800 p-4 rounded-lg border border-gray-300 space-x-2">
        {menuItems.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(index === 0 ? "dos" : "donts")}
            className={`flex-1 px-4 py-2 text-center rounded border border-gray-300 transition-colors duration-300 ${
              selectedTab === (index === 0 ? "dos" : "donts") ? "bg-orange-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
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
                {translations.readMore[language]}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;