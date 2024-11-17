import TabMenu from '../../components/TabMenu';
import { useTranslation } from 'react-i18next';
import { makeTextBold } from "../../components/common";

const Faq = () => {
  const { t } = useTranslation();
  
  // Ensure the contents is an array of strings
  const contents: string[][] = [
    makeTextBold(t('common.dosInMala') as any),
    makeTextBold(t('common.dontInMala') as any),
  ];

  return (
    <div>
      <TabMenu
        heading={t('common.frequentlyAskedQuestions')}
        contents={contents}
        labels={t('common.faqMenuItems') as any}
      />
    </div>
  );
}

export default Faq;