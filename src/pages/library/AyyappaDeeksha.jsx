import { useTranslation } from 'react-i18next';
import TabMenu from '../../components/TabMenu'
import { makeTextBold } from "../../components/common";

const AyyappaDeeksha = () => {
  const { t } = useTranslation();
  const contents = [
    makeTextBold(t('ayyappaDeeksha.AyyappaMala')),
    makeTextBold(t('ayyappaDeeksha.vrathamDetails')),
    makeTextBold(t('ayyappaDeeksha.sabarimalaPilgrimage'))
  ]
  return (
    <div className="mb-8">
    <TabMenu
        heading={t('common.ayyappaDeeksha')}
        contents={contents}
        labels={t('ayyappaDeeksha.ayyappaDeekshaMenuItems')}
      />
    </div>
  )
}

export default AyyappaDeeksha;