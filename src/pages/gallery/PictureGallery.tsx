import Gallery from "../../components/Gallery";
import Heading from "../../components/Heading";
import { useTranslation } from 'react-i18next';



const PictureGallery = () => {
  const { t } = useTranslation();

  return (
    <div >
      <Heading heading={t('common.pictureGallery')} marginTop="mt-48"/>
      
      <Gallery/>

    </div>
  )
}

export default PictureGallery;