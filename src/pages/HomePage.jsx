import AboutImage from "../assets/images/main.jpg"
import Images from "../js/carousel";
import About from "../components/About"
import Hero from "../components/Hero"
import translations from "../js/translations";
import { HomeHeading, HomeText } from "../js/About"
import { useLanguage } from '../context/LanguageContext';


const HomePage = () => {
  const { language } = useLanguage();
  return (
      <div>
      <About
      heading={ HomeHeading[language] }
      textPoints= { HomeText[language]  }
      imageUrl={ AboutImage }/>
      <Hero 
      heading= {translations.pictureGallery[language]}
      images = {Images}/>
      </div>
  )
}

export default HomePage