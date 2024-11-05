import AboutImage from "../assets/images/main.jpg";
import Images from "../js/carousel";
import About from "../components/About";
import Hero from "../components/Hero";
import translations from "../js/translations/mainTranslations";
import { HomeHeading, HomeText, dontInMala, dosInMala } from "../js/data";
import TwoTable from "../components/TwoTable";
import Faq from "../components/Faq";
import { useSelector } from 'react-redux';
import { selectAlankaraSchedule } from '../store/slice/alankaraSlice';
import { selectPoojaTimings } from '../store/slice/poojaTimingsSlice';


const HomePage = () => {
  const language = useSelector((state) => state.language.currentLanguage); // Redux selector for language

  const alankaraSchedule = useSelector(selectAlankaraSchedule);
  const poojaTimings = useSelector(selectPoojaTimings);

  const showDateColumn1 = alankaraSchedule.some(item => item.date);
  const showDateColumn2 = poojaTimings.some(item => item.date);

  const headers1 = {
    col1: 'Date',
    col2: 'Day',
    col3: 'Alankara'
  };

  const headers2 = {
    col1: 'Date',
    col2: 'Timings',
    col3: 'Pooja'
  };

  return (
    <div>
      <About
        heading={HomeHeading[language]}
        textPoints={HomeText[language]}
        imageUrl={AboutImage}
      />

      <Faq
        heading={translations.frequentlyAskedQuestions[language]}
        dosContent={dosInMala[language]}
        dontsContent={dontInMala[language]}
        length={3}
      />

      <TwoTable
        heading1={translations.alankaraSchedule[language]}
        heading2={translations.poojaSchedule[language]}
        headers1={headers1}
        headers2={headers2}
        showDateColumn1={showDateColumn1}
        showDateColum2={showDateColumn2}
        table1={alankaraSchedule}
        table2={poojaTimings}
      />

      <Hero
        heading={translations.pictureGallery[language]}
        images={Images}
      />
    </div>
  );
};

export default HomePage;