import TabMenu from '../../components/TabMenu'
import { useTranslation } from 'react-i18next';
import { makeTextBold } from "../../components/common";

const Faq = () => {
  const { t } = useTranslation();
  const contents = [
    makeTextBold(t('common.dosInMala')),
    makeTextBold(t('common.dontInMala')),
  ]

  return (
    <div >
    <TabMenu
        heading={t('common.frequentlyAskedQuestions')}
        contents={contents}
        labels={t('common.faqMenuItems')}
      />
    </div>
  )

}

export default Faq;