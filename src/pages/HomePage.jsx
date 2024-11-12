import AboutImage from "../assets/images/main.jpg";
import Images from "../js/carousel";
import TextWithImage from "../components/TextWithImage";
import Hero from "../components/Hero";
import translations from "../js/translations/mainTranslations";
import { 
  HomeHeading, 
  HomeText,
  dontInMala, 
  dosInMala,
  faqMenuItems 
} from "../js/data";
import TwoTable from "../components/TwoTable";
import TabMenu from "../components/TabMenu";
import { useSelector } from 'react-redux';
import { selectAlankaraSchedule } from '../store/slice/alankaraSlice';
import { selectPoojaTimings } from '../store/slice/poojaTimingsSlice';
import { makeTextBold } from "../components/common";
import LazyImageWrapper from "../components/LazyImageWrapper";
import  BannerImage from '../assets/images/banner.png'



const HomePage = () => {
  const language = useSelector((state) => state.language.currentLanguage);
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
      <LazyImageWrapper src={BannerImage}/>
      <TextWithImage
        heading={HomeHeading[language]}
        textPoints={HomeText[language]}
        imageUrl={AboutImage}
        fullList={false}
      />

      <TabMenu
        heading={translations.frequentlyAskedQuestions[language]}
        dosContent={makeTextBold(dosInMala[language])}
        dontsContent={makeTextBold(dontInMala[language])}
        length={3}
        backGround="bg-gray-100"
        fullList={false}
        menuItems = {faqMenuItems[language]}
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