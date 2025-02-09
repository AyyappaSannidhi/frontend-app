import { useState } from 'react';
import Heading from '../components/Heading';
import { useTranslation } from 'react-i18next';
import { SyntheticEvent } from 'react';

const Donate = () => {
  const { t } = useTranslation(); // Access i18n instance

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsapp: false,
    purpose: 'Annadam',
    email: '',
    amount: '', // Added amount field
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = (e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Heading heading={t('common.donate')} marginTop='mt-40'/>
      <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-screen-xl mx-auto px-4 py-8">
        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="w-full sm:w-11/12 lg:w-6/12 p-6 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4 text-blue-600">Make a Donation</h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 text-base border border-gray-400 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Mobile Number</label>
            <div className="flex items-center gap-2">
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-2 text-base border border-gray-400 rounded-md"
                required
              />
              <label className="text-sm text-gray-600 flex items-center gap-2">
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

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Purpose</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full p-2 text-base border border-gray-400 rounded-md"
              required
            >
              <option value="Annadam">Annadam</option>
              <option value="General">General</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-base border border-gray-400 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 text-base border border-gray-400 rounded-md"
              required
            />
          </div>

          <button type="submit" className="w-full p-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Pay Now
          </button>
        </form>

        {/* Recent Donations */}
        <div className="w-full sm:w-11/12 lg:w-6/12 p-6 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4 text-blue-600">Recent Donations</h2>
          <p>Login to see your recent donations.</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;