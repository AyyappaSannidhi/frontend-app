import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SyntheticEvent } from 'react';

const MalaDharanaRegistration = () => {
  const { t } = useTranslation();

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };


  const handleSubmit = (e :SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  interface FormData {
    [key: string]: string | boolean;
  }
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    gothram: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    startDate: '',
    endDate: '',
    isKanniSwami: false,
  });

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gothram: '',
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      startDate: '',
      endDate: '',
      isKanniSwami: false,
    });
  };

  return (
    <div className="flex flex-wrap p-6 bg-gray-100 min-h-screen">
      {/* Left side with form */}
      <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {t('common.malaDharanaRegistration')}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input fields */}
          {[
            { label: 'First Name', name: 'firstName', type: 'text' },
            { label: 'Last Name (Surname)', name: 'lastName', type: 'text' },
            { label: 'Gothram', name: 'gothram', type: 'text' },
            {
              label: 'Phone Number (India only)',
              name: 'phoneNumber',
              type: 'tel',
              pattern: '[0-9]{10}',
            },
            { label: 'Email', name: 'email', type: 'email' },
          ].map(({ label, name, type, pattern }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name].toString()}
                onChange={handleChange}
                pattern={pattern}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Address</label>
            <textarea
              name="address"
              value={formData.address.toString()}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city.toString()}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {['startDate', 'endDate'].map((name, i) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">
                {i === 0 ? 'Mala Dharana Start Date' : 'Mala Dharana End Date'}
              </label>
              <input
                type="date"
                name={name}
                value={formData[name].toString()}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
          ))}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isKanniSwami"
              checked={Boolean(formData.isKanniSwami)}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm font-medium text-gray-700">
              Are you wearing Mala for the first time (Kanni Swami)?
            </label>
          </div>
          <div className="flex space-x-4 mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      {/* Right side with text */}
      <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg mt-6 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mala Dharana Overview</h2>
        <p className="text-gray-700">
          The Mala Dharana ritual marks the beginning of a spiritual journey
          towards the Sabarimala pilgrimage. Devotees observe strict practices
          and undertake vows to purify their mind, body, and soul. Please fill
          out the registration form to officially begin your journey.
        </p>
      </div>
    </div>
  );
};

export default MalaDharanaRegistration;