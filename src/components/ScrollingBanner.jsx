import React from "react";
import translations from "../js/translations/mainTranslations";

const ScrollingBanner = () => {

  const scrollingText = translations.ScrollingBannerText['en'];
    return (
<div className="overflow-hidden fixed w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white text-lg font-semibold h-10 flex items-center z-40" style={{ top: "4rem" }}>
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