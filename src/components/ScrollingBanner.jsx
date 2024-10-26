import React from "react";
import translations from "../js/translations";
import { useLanguage } from "../context/LanguageContext"; 

const ScrollingBanner = () => {

  const { language } = useLanguage();
  const scrollingText = translations.ScrollingBannerText[language];
    return (
      <div className="overflow-hidden w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white text-lg font-semibold h-10 flex items-center mt-16">
        <div
          className="inline-flex animate-scroll space-x-8"
          style={{
            whiteSpace: "nowrap",
            animation: "scroll 30s linear infinite",
          }}
        >
          {Array(3)
            .fill(
              <>
                <span className="px-2">
                {scrollingText}
                </span>
                <span className="px-2">
                {scrollingText}
                </span>
                <span className="px-2">
                {scrollingText}
                </span>
              </>
            )
            .map((message, index) => (
              <React.Fragment key={index}>{message}</React.Fragment>
            ))}
        </div>
      </div>
    );
  };

export default ScrollingBanner;