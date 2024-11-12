import { useState } from 'react';
import Heading from '../components/Heading';
import translations from '../js/translations/mainTranslations';
import { useSelector } from 'react-redux';

const Donate = () => {
  const language = useSelector((state) => state.language.currentLanguage);

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsapp: false,
    purpose: 'Annadam',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };


  return (
    <div>
<Heading heading={translations.Donate[language]} marginTop='mt-40'/>
    <div style={styles.container}>
      {/* Donation Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Make a Donation</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Mobile Number</label>
          <div style={styles.mobileContainer}>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="whatsapp"
                checked={formData.whatsapp}
                onChange={handleChange}
              />
              WhatsApp
            </label>
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Purpose</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="Annadam">Annadam</option>
            <option value="General">General</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Pay Now
        </button>
      </form>

      {/* Recent Donations */}
      <div style={styles.recentDonations}>
        <h2 style={styles.heading}>Recent Donations</h2>
        <div style={styles.card}>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Amount:</strong> $50</p>
          <p><strong>Purpose:</strong> General</p>
        </div>
        <div style={styles.card}>
          <p><strong>Name:</strong> Jane Smith</p>
          <p><strong>Amount:</strong> $75</p>
          <p><strong>Purpose:</strong> Annadam</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>

    </div>
      
  );
};

// Inline CSS for styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '900px',
    margin: '20px auto',
    padding: '20px',
  },
  form: {
    flex: 1,
    marginRight: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  recentDonations: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    color: '#333',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  mobileContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  checkboxLabel: {
    fontSize: '0.9rem',
    color: '#555',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  select: {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    color: '#007bff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '6px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default Donate;