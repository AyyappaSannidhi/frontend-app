import { useTranslation } from 'react-i18next';
import React from 'react';

const ScrollingBanner: React.FC = () => {
  const { t } = useTranslation();

  const scrollingText: string = t('common.ScrollingBannerText');

  return (
    <div
      className="overflow-hidden fixed w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white text-lg font-semibold h-10 flex items-center z-20"
      style={{ top: '5.7rem' }}
    >
      <div
        className="inline-flex animate-scroll space-x-8"
        style={{
          whiteSpace: 'nowrap',
          animation: 'scroll 30s linear infinite',
        }}
      >
        {Array(3)
          .fill(
            <>
              <span className="px-2">{scrollingText}</span>
              <span className="px-2">{scrollingText}</span>
              <span className="px-2">{scrollingText}</span>
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