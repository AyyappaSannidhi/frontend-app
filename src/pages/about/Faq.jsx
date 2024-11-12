import translations from "../../js/translations/mainTranslations";
import TabMenu from '../../components/TabMenu'
import { useSelector } from 'react-redux';
import { makeTextBold } from "../../components/common";
import { dontInMala, dosInMala,faqMenuItems } from "../../js/data";

const Faq = () => {
  const language =useSelector((state) => state.language.currentLanguage);
  
  return (
    <div >
    <TabMenu
        heading={translations.frequentlyAskedQuestions[language]}
        dosContent={makeTextBold(dosInMala[language])}
        dontsContent={makeTextBold(dontInMala[language])}
        menuItems={faqMenuItems[language]}
      />
    </div>
  )

  
}

export default Faq;