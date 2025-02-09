import Heading from "../../components/Heading";
import LazyImageWrapper from "../../components/LazyImageWrapper";
import TempleSevaImage from '../../assets/images/temple_seva_image.jpg'
import { useTranslation } from 'react-i18next';

const TempleSeva = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Heading heading={t('common.templeSeva')} marginTop={'mt-40'}/>
      <LazyImageWrapper
      src={TempleSevaImage}
      className={"relative lg:w-[90%] h-[1000px] "}/>

    </div>
  )
}

export default TempleSeva;