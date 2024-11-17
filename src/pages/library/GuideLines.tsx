import TabMenu from '../../components/TabMenu'
import { useTranslation } from 'react-i18next';
import { makeTextBold } from "../../components/common";

const GuideLines = () => {
  const { t } = useTranslation();
  const contents = [
    makeTextBold(t('ayyappaDeeksha.deekshaGuidelines')),
    makeTextBold(t('ayyappaDeeksha.housePoojaGuidelines'))
  ]
    return (
      <div className="mb-28">
      <TabMenu
          heading={t('common.guidelines')}
          contents={contents}
          labels={t('ayyappaDeeksha.guideLinesMenuItems') as any}
        />
      </div>
    )
}

export default GuideLines;