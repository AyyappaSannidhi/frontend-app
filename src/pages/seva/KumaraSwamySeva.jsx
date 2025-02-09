import { makeTextBold } from "../../components/common";
import { useTranslation } from 'react-i18next';
import TabMenu from '../../components/TabMenu'

const KumaraSwamySeva = () => {
  const { t } = useTranslation();
  const contents = [
    makeTextBold(t('seva.whoIskanneswamy')),
    makeTextBold(t('seva.mythologolyAboutKanneSwamy')),
    makeTextBold(t('seva.directionForKanneSwamy'))
  ]
  return (
    <div className="mb-8">
    <TabMenu
        heading={t('common.KanneSwamy')}
        contents={contents}
        labels={t('seva.kanneSwamyTabs')}
      />
    </div>

  )
}

export default KumaraSwamySeva;