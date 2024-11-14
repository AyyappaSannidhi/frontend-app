import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../js/routes';
import { useTranslation } from 'react-i18next';


const Timeline = ({ years, descriptions, fullList = true }) => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  // Check if the screen size is mobile (max-width: 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Interval to change the highlighted dot every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % years.length);
    }, 500); // Adjust animation speed here
    return () => clearInterval(interval);
  }, [years.length]);

  return (
    <div className="w-full mt-8 p-8 border border-gray-300 box-border">
      {/* <Heading heading={heading}/> */}

      <div className={`flex flex-wrap  w-full gap-x-${isMobile ? '10' : '4'} gap-y-4 justify-between mt-12`}>
        {years.map((year, index) => (
          <div key={index} className="flex-shrink-0 w-1/18 max-w-16 flex flex-col items-center text-center">
            {/* Event Year */}
            <h3 className="text-sm font-semibold text-gray-600">{year}</h3>
            <br />
            {/* Dot with highlight animation */}
            <div className="relative mb-2.5">
              <div
                className={`w-6 h-6 rounded-full ${index === highlightIndex ? 'bg-orange-500 shadow-lg' : 'bg-orange-500 shadow-sm'} transition-all`}
              ></div>
              {/* Horizontal connecting line */}
              {index !== years.length - 1 && (
                <div className="absolute top-1/2 left-full ml-2 w-16 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
              )}
            </div>
            <br />
            {/* Event Description */}
            <p className="text-xs font-bold text-black">{descriptions[index]}</p>
          </div>
        ))}
      </div>
        {
          !fullList &&(
            <div className="flex justify-end mt-4">
                    <Link to={routes.ayyappaDeekshaTitlesRoute}>
                      <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
                        {t('common.readMore')}
                      </button>
                    </Link>
                  </div>
          )
        }
    </div>
  );
};

export default Timeline;