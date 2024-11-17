import { useTranslation } from 'react-i18next';
import { makeTextBold } from "../../components/common";
import { 
  years18 
} from '../../scripts/data'
import Timeline from "../../components/TimeLine";
import TextBlock from "../../components/TextBlock";
import Heading from "../../components/Heading";

const AyyappaDeekshaTitles = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-16 mb-8">
      <Heading heading={t('common.ayyappaDeekshaTitles')} marginTop={"mt-40"}/>
      <TextBlock textPoints={makeTextBold(t('ayyappaDeeksha.ayyappaDeekshaTitlesDescription').slice(0,2))}/>
    <Timeline
        years={years18}
        descriptions={t('ayyappaDeeksha.ayyappaDeekshaTitles') as any}
      />
      <TextBlock textPoints={makeTextBold(t('ayyappaDeeksha.ayyappaDeekshaTitlesDescription').slice(2))}/>
    </div>
  )
}

export default AyyappaDeekshaTitles;