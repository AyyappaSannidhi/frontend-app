import { useTranslation } from 'react-i18next';
import Heading from '../components/Heading';
import TwoColumnTable from '../components/TwoColumnTable';

const UsefullLinks = () => {
  const { t } = useTranslation();
  const data = t("common.usefullLinksWebsite", { returnObjects: true }) || [];
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <Heading heading={t('common.useFullLinks')} marginTop={'mt-8'} />
      <TwoColumnTable column1={t('common.resource')} column2={t('common.website')} data={data} column2Link = {true} />
    </div>
  );
}

export default UsefullLinks;