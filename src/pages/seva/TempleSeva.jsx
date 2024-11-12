import Heading from "../../components/Heading";
import translations from "../../js/translations/mainTranslations";
import LazyImageWrapper from "../../components/LazyImageWrapper";
import TempleSevaImage from '../../assets/images/temple_seva_image.jpg'
import { useSelector } from 'react-redux';

const TempleSeva = () => {
  const language = useSelector((state) => state.language.currentLanguage);

  return (
    <div>
      <Heading heading={translations.templeSeva[language]} marginTop={'mt-40'}/>
      <LazyImageWrapper
      src={TempleSevaImage}
      className={"relative lg:w-[90%] h-[1000px] "}/>

    </div>
  )
}

export default TempleSeva;