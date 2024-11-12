import { useEffect, useState } from "react";
import translations from "../js/translations/mainTranslations";
import routes from "../js/routes";
import Heading from './Heading';
import TextBlock from './TextBlock';
import Button from './Button';
import LazyImageWrapper from "./LazyImageWrapper";
import { useSelector } from 'react-redux';

const TextWithImage = ({ heading, textPoints, imageUrl, fullList = true }) => {
  const [isMobile, setIsMobile] = useState(false);
  const language = useSelector((state) => state.language.currentLanguage); // Redux selector for language

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col items-center p-6 space-y-6">
          <div className="flex flex-col items-start text-left space-y-4 w-full md:w-1/2 flex-grow">
          <Heading heading={heading} />
            <TextBlock textPoints={textPoints} />
            {
              !fullList && (
                <Button text={translations.readMore[language]} url={routes.aboutRoute} />
              )
            }
          </div>
          <div className="flex items-center justify-center p-4 w-full md:w-1/2 flex-grow">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <LazyImageWrapper
                src={imageUrl}
                alt={imageUrl}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-stretch p-6 md:p-12 space-x-12">
          <div className="flex flex-col items-start text-left space-y-4 w-full md:w-1/2 flex-grow">
            <Heading heading={heading} />
            <TextBlock textPoints={textPoints} />
            {
              !fullList && (
                <Button text={translations.readMore[language]} url={routes.aboutRoute} />
              )
            }
          </div>
          <div className="flex items-center justify-center p-4 w-full md:w-1/2 flex-grow">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <LazyImageWrapper
                src={imageUrl}
                alt={imageUrl}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextWithImage;