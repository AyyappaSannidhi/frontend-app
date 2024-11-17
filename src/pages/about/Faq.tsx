import TabMenu from '../../components/TabMenu';
import { useTranslation } from 'react-i18next';
import { makeTextBold } from "../../components/common";

const Faq = () => {
  const { t } = useTranslation();
  
  // Ensure the contents is an array of strings
  const contents: string[] = [
    makeTextBold(t('common.dosInMala')),
    makeTextBold(t('common.dontInMala')),
  ];

  return (
    <div>
      <TabMenu
        heading={t('common.frequentlyAskedQuestions')}
        contents={contents} // contents should be string[]
        labels={t('common.faqMenuItems')}
      />
    </div>
  );
}

export default Faq;