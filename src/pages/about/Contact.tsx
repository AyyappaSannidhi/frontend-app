import Heading from "../../components/Heading";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-8">
      <Heading heading={t('common.contactUs')} marginTop="mt-0"/>
      <div className="flex flex-col lg:flex-row w-full max-w-7xl px-4 mt-10">
        {/* Left Side: Contact Details */}
        <div className="lg:w-1/2 flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h2>
            <ul className="text-lg text-gray-600 space-y-2 mt-4">
              <li className="flex items-center">
                <span className="font-medium text-gray-800">Phone:</span> 
                <span className="ml-2">xx - xx - xx</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium text-gray-800">Email:</span> 
                <span className="ml-2">xx - xx - xx</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium text-gray-800">Address:</span> 
                <span className="ml-2">xx - xx - xx</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
            xx - xx - xx
            </h2>
            <ul className="text-lg text-gray-600 space-y-2 mt-4">
              <li>xx - xx - xx</li>
              <li>xx - xx - xx</li>
              <li>xx - xx - xx</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Google Maps Iframe */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <div className="w-full h-96">
            <iframe
              title="Google Map Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.180123991299!2d-74.00601508459433!3d40.71277597933178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a03b2577c3b%3A0x8f9a6b5c4c6c2c4f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1632999382639!5m2!1sen!2sus"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;