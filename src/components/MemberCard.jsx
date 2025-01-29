import React from 'react';


const MemberCard = ({ member }) => {
  // Check if the member object is undefined
  if (!member) {
    return <div style={{ color: 'red' }}>Member data is missing</div>;
  }

  const { imageUrl, fullName, role, profession, phoneNumber } = member;

  return (
    <div style={styles.card}>
      <div style={styles.cardContent}>
        <div style={styles.imageContainer}>
          {imageUrl ? (
            <img src={imageUrl} alt={fullName} style={styles.image} />
          ) : (
            <div style={styles.placeholderIcon}>👤</div>
          )}
        </div>
        <div style={styles.infoContainer}>
          <h2 style={styles.name}>{fullName}</h2>
          <p style={styles.role}>{role}</p>

          <div style={styles.detailContainer}>
            <label style={styles.label}>Profession:</label>
            <p style={styles.profession}>{profession || 'N/A'}</p>
          </div>

          <div style={styles.detailContainer}>
            <label style={styles.label}>Phone:</label>
            <p style={styles.phoneNumber}>{phoneNumber || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated inline styles with responsive adjustments
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    margin: '15px auto',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
  },
  imageContainer: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  placeholderIcon: {
    fontSize: '3rem',
    color: '#aaa',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '10px 0 6px',
  },
  role: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#555',
    margin: '6px 0',
  },
  detailContainer: {
    marginTop: '10px',
  },
  label: {
    fontSize: '0.85rem',
    color: '#999',
    marginBottom: '2px',
    fontWeight: 'bold',
  },
  profession: {
    fontSize: '1rem',
    color: '#777',
  },
  phoneNumber: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default MemberCard;