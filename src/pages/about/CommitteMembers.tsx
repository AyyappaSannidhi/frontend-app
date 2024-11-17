import Heading from '../../components/Heading';
import MemberCard from '../../components/MemberCard';
import { useTranslation } from 'react-i18next';

const CommitteeMembers = () => {
  const { t } = useTranslation();

  const members = [
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
    {
      imageUrl: '', // Leave empty to show placeholder
      fullName: 'xxxxxxxxxxx',
      role: 'xxxxxxxxxxx',
      profession: 'xxxxxxxxxxx',
      phoneNumber : 'xxxxxxxxxxx',
    },
  ];

  return (
    <div>
    <Heading
    heading={t('common.commmitteMembers')}
    marginTop={"mt-40"}
    />
        <div style={styles.listContainer}>
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>    
    </div>
  );
    
};

const styles = {
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default CommitteeMembers;