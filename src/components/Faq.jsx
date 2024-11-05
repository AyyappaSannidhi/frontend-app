import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Heading from "../components/Heading";
import TextBlock from "../components/TextBlock";
import translations from "../js/translations/mainTranslations";
import { useSelector } from 'react-redux';

const Faq = ({ heading, dosContent, dontsContent, length }) => {
  const [selectedTab, setSelectedTab] = useState("dos");
  const language = useSelector((state) => state.language.currentLanguage); // Redux selector for language

  return (
    <div className="w-full p-2 space-y-6 bg-gray-100"> {/* Added grey background */}
  <Heading heading={heading} />
  <MenuBar selectedTab={selectedTab} onSelect={setSelectedTab} />
  <ContentSection
    selectedTab={selectedTab}
    dosContent={dosContent}
    dontsContent={dontsContent}
    length={length}
    language={language}
  />
</div>
  );
};

const MenuBar = ({ selectedTab, onSelect }) => {
  return (
    <div className="flex w-full justify-around bg-white text-gray-800 p-4 rounded-lg border border-gray-300 space-x-2">
      {["dos during lord ayyappa vratham", "donts during lord ayyappa vratham"].map((tab, index) => (
        <button
          key={tab}
          onClick={() => onSelect(index === 0 ? "dos" : "donts")}
          className={`flex-1 px-4 py-2 text-center rounded border border-gray-300 transition-colors duration-300 ${
            selectedTab === (index === 0 ? "dos" : "donts") ? "bg-orange-500 text-white" : "hover:bg-gray-200"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

const ContentSection = ({ selectedTab, dosContent, dontsContent, length,language }) => {
  // Slice content based on length prop
  const contentToShow = selectedTab === "dos" ? dosContent.slice(0, length) : dontsContent.slice(0, length);

  return (
    <div className="w-full mt-6 p-4 border border-gray-300 rounded-lg space-y-4">
      <TextBlock textPoints={contentToShow} />
      <div className="flex justify-end">
        <Link to="/faq">
          <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
            {translations.readMore[language]}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Faq;