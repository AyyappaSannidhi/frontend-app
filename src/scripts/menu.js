import routes from './/routes'
import { useTranslation } from 'react-i18next';

export const useNavbarMenu = () =>{
  const { t } = useTranslation();
  
  return [
    {
      name: t('common.home'),
      url : routes.indexRoute
    },
  
    {
      name: t('common.about'),
      subMenu: [
        {
          name : t('common.about'),
          url: routes.aboutRoute
        },
        {
          name : t('common.commmitteMembers'),
          url: routes.committeMembers,
        },
        {
          name : t('common.faq'),
          url: routes.faqRoute,
        },
        {
          name : t('common.contactUs'),
          url: routes.contactRoute,
        },
      ],
      gridCols: 1,
    },
  
    {
      name : t('common.gallery'),
      subMenu: [
        {
          name : t('common.pictureGallery'),
          url:routes.pictureGalleryRoute
        },
        {
          name : t('common.videoGallery'),
          url:routes.videoGalleryRoute
        },
      ],
      gridCols: 1,
    },

    {
      name : t('common.registrations'),
      subMenu: [
        {
          name : t('common.malaDharanaRegistration'),
          url:routes.malaDharanaRegistrationRoute
        },
        {
          name : t('common.irumudiYatraRegistration'),
          url:routes.irumudiYatraRegistrationRoute
        },
        {
          name : t('common.housePoojaRequest'),
          url:routes.housePoojaRequestRoute
        },
      ],
      gridCols: 1,
    },

    {
      name : t('common.sevaDetails'),
      subMenu: [
        {
          name : t('common.templeSeva'),
          url:routes.templeSevaRoute
        },
        {
          name : t('common.kumaraSwamySeva'),
          url:routes.kumaraSwamySevaRoute
        },
      ],
      gridCols: 1,
    },
    
  
    {
      name : t('common.library'),
      subMenu: [
        {
          name : t('common.ayyappaDeeksha'),
          url: routes.ayyappaDeekshaRoute
        },
        {
          name : t('common.guidelines'),
          url: routes.guideLinesRoute
        },
        {
          name : t('common.ayyappaDeekshaTitles'),
          url: routes.ayyappaDeekshaTitlesRoute
        },
      ],
      gridCols: 1,
    },
  
    {
      name : t('common.useFullLinks'),
      url: routes.useFullLinksRoute
    },

    {
      name : t('common.poojaSponsors'),
      url: routes.poojaSponsorsRoute
    },

  ]
}