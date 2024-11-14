import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutImage from "../../assets/images/main.jpg";
 
const MalaDharanaRegistration = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

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
    <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
      {/* Left div with form */}
      <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {t('common.malaDharanaRegistration')}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name (Surname)</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gothram</label>
            <input
              type="text"
              name="gothram"
              value={formData.gothram}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number (India only)</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}" // Validates a 10-digit phone number
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              rows="3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mala Dharana Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mala Dharana End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isKanniSwami"
              checked={formData.isKanniSwami}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm font-medium text-gray-700">Are you wearing Mala for the first time (Kanni Swami)?</label>
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
      
      {/* Right div with image */}
      <div className="hidden md:flex w-1/2 p-4 items-center justify-center">
        <img
          src={AboutImage} // Replace with the actual path to your image
          alt="Mala Dharana"
          className="rounded-lg shadow-md max-w-full"
        />
      </div>
    </div>
  );
};

export default MalaDharanaRegistration;