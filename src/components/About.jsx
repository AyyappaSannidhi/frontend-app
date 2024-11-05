import { useEffect, useState } from "react";
import translations from "../js/translations/mainTranslations";
import routes from "../js/routes";
import Heading from '../components/Heading'
import TextBlock from '../components/TextBlock'
import Button from '../components/Button'
import LazyImageWrapper from "./LazyImageWrapper";
import { useSelector } from 'react-redux';


const About = ({ heading, textPoints, imageUrl }) => {
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
          <TextSection
            headingEnglish={heading}
            textEnglish={textPoints}
            language={language}
            routes = {routes}
          />
          <ImageSection imageUrl={imageUrl} />
        </div>
      ) : (
        <div className="flex flex-row justify-center items-stretch p-6 md:p-12 space-x-12">
          <TextSection
            headingEnglish={heading}
            textEnglish={textPoints}
            language={language}
            routes = {routes}
          />
          <ImageSection imageUrl={imageUrl} />
        </div>
      )}
    </>
  );
};

const TextSection = ({ headingEnglish, textEnglish,language }) => {
  return (
    <div className="flex flex-col items-start text-left space-y-4 mt-28 w-full md:w-1/2 flex-grow">
      <Heading heading= {headingEnglish} />
      <TextBlock textPoints = {textEnglish} />
      <Button text= {translations.readMore[language]} url= {routes.aboutRoute}/>
    </div>
  );
};

const ImageSection = ({ imageUrl }) => {
  return (
    <div className="flex items-center justify-center p-4 w-full md:w-1/2 flex-grow mt-28">
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <LazyImageWrapper
      src={imageUrl}
      alt={imageUrl}
      className="w-full h-full"
    />
      </div>
    </div>
  );
};

export default About;