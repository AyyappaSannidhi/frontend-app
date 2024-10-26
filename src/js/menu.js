import translations from './translations';
import { useLanguage } from '../context/LanguageContext';
import routes from '../js/routes'

export const useNavbarMenu = () =>{
  const { language } = useLanguage();

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
      ],
      gridCols: 1,
    },
  
    {
      name : translations.guideLines[language],
      subMenu: [
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
      name : translations.contactUs[language],
      url: routes.contactRoute
    },
  ]
}


// custom hook
const useFooterMenu = () => {
  const { language } = useLanguage();

  return [
    {
      title: translations.quickLinks[language],
      links: [
        {
          text: translations.about[language],
          url: routes.contactRoute,
        },
        {
          text: translations.boardMembers[language],
          url: routes.boardMembersRoute,
        },
        {
          text: translations.contactUs[language],
          url: routes.contactRoute,
        },
      ],
    },
    {
      title: translations.ayyappaDeeksha[language],
      links: [
        {
          text: translations.sriSwamyAyyappaMala[language],
          url: routes.contactRoute,
        },
        {
          text: translations.ayyappaDhyanamJapam[language],
          url: routes.contactRoute,
        },
        {
          text: translations.stepsOfDeeksha[language],
          url: routes.contactRoute,
        },
      ],
    },
    {
      title: translations.guideLines[language],
      links: [
        {
          text: translations.guidelinesToDeeksha[language],
          url: routes.contactRoute,
        },
        {
          text: translations.housePoojaGuidelines[language],
          url: routes.contactRoute,
        },

      ],
    },
    {
      title: translations.Information[language],
      links: [
        {
          text: translations.termsAndConditions[language],
          url: routes.contactRoute,
        },
        {
          text: translations.privacyAndDisclaimer[language],
          url: routes.contactRoute,
        },
        {
          text: translations.donationPolicy[language],
          url: routes.contactRoute,
        },
        
      ],
    },
    
  ];
};

export default useFooterMenu;
  