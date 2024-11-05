import translations from "../js/translations/mainTranslations";
import { useSelector } from 'react-redux';


const Donate = () => {
  const language = useSelector((state) => state.language.currentLanguage); // Redux selector for language
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-100">
    <h1 className="text-3xl font-bold text-gray-800">
      {translations.poojaSchedule[language]}
    </h1>
    <h2 className="text-2xl font-bold text-gray-800 mt-12">Under Development</h2>
    <h3 className="text-1xl font-bold text-gray-800 mt-2">Check After Sometime</h3>
    </div>
  )
}

export default Donate;