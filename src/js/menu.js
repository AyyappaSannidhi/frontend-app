import translations from './translations/mainTranslations';
import routes from '../js/routes'
import { useSelector } from 'react-redux';


export const useNavbarMenu = () =>{
  const language = useSelector((state) => state.language.currentLanguage); // Redux selector for language

  return [
    {
      name: translations.home[language],
      url : routes.indexRoute
    },
  
    {
      name: translations.about[language],
      subMenu: [
        {
          name : translations.about[language],
          url: routes.aboutRoute
        },
        {
          name : translations.boardMembers[language],
          url: routes.boardMembersRoute,
        },
        {
          name : translations.faq[language],
          url: routes.faqRoute,
        },
        {
          name : translations.contactUs[language],
          url: routes.contactRoute,
        },
      ],
      gridCols: 1,
    },
  
    {
      name : translations.gallery[language],
      subMenu: [
        {
          name : translations.pictureGallery[language],
          url:routes.pictureGalleryRoute
        },
        {
          name : translations.videoGallery[language],
          url:routes.videoGalleryRoute
        },
      ],
      gridCols: 1,
    },

    {
      name : translations.registrations[language],
      subMenu: [
        {
          name : translations.malaDharanaRegistration[language],
          url:routes.malaDharanaRegistrationRoute
        },
        {
          name : translations.irumudiYatraRegistration[language],
          url:routes.irumudiYatraRegistrationRoute
        },
        {
          name : translations.housePoojaRequest[language],
          url:routes.housePoojaRequestRoute
        },
      ],
      gridCols: 1,
    },

    {
      name: translations.poojaSchedule[language],
      url : routes.poojaScheduleRoute
    },
  
    {
      name : translations.ayyappaDeeksha[language],
      subMenu: [
        {
          name : translations.sriSwamyAyyappaMala[language],
          url: routes.ayyappaMalaRoute
        },
        {
          name : translations.ayyappaDhyanamJapam[language],
          url: routes.ayyappaDhyanamJapamRoute
        },
        {
          name : translations.stepsOfDeeksha[language],
          url:routes.stepsOfDeekshaRoute
        },
        {
          name : translations.guidelinesToDeeksha[language],
          url: routes.guidelinesToDeekshaRoute
        },
        {
          name : translations.housePoojaGuidelines[language],
          url: routes.housePoojaGuidelinesRoute
        },
      ],
      gridCols: 1,
    },
  
    {
      name : translations.Donate[language],
      url: routes.donateRoute
    },
  ]
}