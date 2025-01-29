import TextWithImage from "../../components/TextWithImage"
import AboutImage from "../../assets/images/main.jpg";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

return (
  <div>
    <TextWithImage
          heading={t('common.sriAyppaSwamySevaSannidhi')}
          textPoints={t('homePage.text')}
          imageUrl={AboutImage}
        />
    </div>
  
  )
}

export default About