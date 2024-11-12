import TextWithImage from "../../components/TextWithImage"
import AboutImage from "../../assets/images/main.jpg";
import {  HomeText } from "../../js/data";
import { useSelector } from 'react-redux';
import translations from "../../js/translations/mainTranslations";

const About = () => {
const language = useSelector((state) => state.language.currentLanguage); // Redux selector for language

return (
  <div>
    <TextWithImage
          heading={translations.SASSS[language]}
          textPoints={HomeText[language]}
          imageUrl={AboutImage}
        />
    </div>
  
  )
}

export default About