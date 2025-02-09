import Heading from "../../components/Heading";
import { useTranslation } from 'react-i18next';
import TwoColumnTable from "../../components/TwoColumnTable";

const TempleSeva = () => {
  const { t } = useTranslation();
  const sevaData = t("seva.sevaDetailsWithCharges", { returnObjects: true }) || [];
  const saturdaySpecialsevaData = t("seva.saturdaySpecialSeva", { returnObjects: true }) || [];
  const ayyappaDekshaSevaData = t("seva.ayyappaDekshaSeva", { returnObjects: true }) || [];

  return (
    <div className="flex flex-col items-center justify-center mb-12 px-4">
      
      <Heading heading={t('common.templeSeva')} marginTop={'mt-10'} />
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        
        {/* Left Side - Full Height Table */}
        <div className="w-full">
          <TwoColumnTable 
            column1={t('common.sevaDetails')} 
            column2={t('common.charges')} 
            data={sevaData} 
            headerHeight="h-[50px]" 
            rowHeight="h-[50px]"
          />
        </div>

        {/* Right Side - Two Stacked Tables */}
        <div className="w-full flex flex-col gap-6">
          <TwoColumnTable 
            column1={t('common.saturdaySpecialPooja')} 
            column2={t('common.charges')} 
            data={saturdaySpecialsevaData} 
            headerHeight="h-[50px]" 
            rowHeight="h-[50px]"
          />
          <TwoColumnTable 
            column1={t('common.ayyappaDeekshaSeva')} 
            column2={t('common.charges')} 
            data={ayyappaDekshaSevaData} 
            headerHeight="h-[50px]" 
            rowHeight="h-[50px]"
          />
        </div>
        
      </div>
    </div>
  );
};

export default TempleSeva;