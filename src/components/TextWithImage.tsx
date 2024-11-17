import { useEffect, useState } from "react";
import routes from "../scripts/routes";
import Heading from './Heading';
import TextBlock from './TextBlock';
import Button from './Button';
import LazyImageWrapper from "./LazyImageWrapper";
import { useTranslation } from 'react-i18next';

interface TextWithImageProps {
  heading: string;
  textPoints: string[];
  imageUrl: string;
  fullList?: boolean;
}

const TextWithImage: React.FC<TextWithImageProps> = ({ heading, textPoints, imageUrl, fullList = true }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
                <Button text={t('common.readMore')} url={routes.aboutRoute} />
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
                <Button text={t('common.readMore')} url={routes.aboutRoute} />
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