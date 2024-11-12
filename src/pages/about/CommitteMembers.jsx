import Heading from '../../components/Heading';
import MemberCard from '../../components/MemberCard';
import translations from '../../js/translations/mainTranslations';
import { useSelector } from 'react-redux';

const CommitteeMembers = () => {
  const language = useSelector((state) => state.language.currentLanguage);
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
    heading={translations.commmitteMembers[language]}
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
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default CommitteeMembers;