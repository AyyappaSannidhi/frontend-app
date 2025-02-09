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
                <span className="ml-2"> ayappasannidhi@gmail.com</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-medium text-gray-800">Address:</span> 
                <span className="ml-0 sm:ml-2">17th cross, 31st Main Rd, 6th Phase, J. P. Nagar, Bengaluru, Karnataka 560070</span>
            </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Google Maps Iframe */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <div className="w-full h-96">
            <iframe
              title="Google Map Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.962591488514!2d77.65086897544994!3d12.910125887399598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149d8645dc5b%3A0x451ba2c58db28bed!2s17th%20Cross%20Rd%20%26%2031st%20Main%20Rd%2C%20Sector%202%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1739095173724!5m2!1sen!2sin"
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