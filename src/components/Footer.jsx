import logo from '../assets/images/logo.png';
import translations from "../js/translations/mainTranslations";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import routes from "../js/routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const language = useSelector((state) => state.language.currentLanguage);

  return (
    <footer className="w-full bg-gray-800 p-8"> {/* Changed background color to dark gray */}
      <div className="flex flex-row flex-wrap items-center justify-between gap-y-6 gap-x-12 text-center text-white"> {/* Changed text color to white */}
        <div className="flex items-center"> {/* Use flexbox to align items */}
          <img src={logo} alt="company logo" className="w-10 mr-2" /> {/* Add a margin to the right of the image */}
            <p>Sri Ayyappa Seva Sannidhi (SASS)</p>
        </div>
        
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              to={routes.contactRoute}
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500" // Changed hover color to orange
            >
              {translations.contactUs[language]}
            </Link>
          </li>
          <li>
            <Link
              to={routes.termsAndConditionsRoute}
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500" // Changed hover color to orange
            >
              {translations.termsAndConditions[language]}
            </Link>
          </li>
          <li>
            <Link
              to={routes.privacyAndDisclaimerRoute}
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500" // Changed hover color to orange
            >
              {translations.privacyAndDisclaimer[language]}
            </Link>
          </li>
          <li>
            <Link
              to={routes.donationPolicyRoute}
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500" // Changed hover color to orange
            >
              {translations.donationPolicy[language]}
            </Link>
          </li>
          <li>
            <Link
              to={routes.faqRoute}
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500" // Changed hover color to orange
            >
              {translations.faq[language]}
            </Link>
          </li>
        </ul>

        {/* Right-aligned YouTube link */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm md:text-base">Follow us on</span>
          <a
        href="https://www.youtube.com/channel/UCy0iGvWcaSjoNBMR2PvHhAw"
        target="_blank"
        rel="noopener noreferrer"
        className={'hover:text-red-400 transition-colors duration-200 text-red-600'}
        aria-label="YouTube"
      >
        <FontAwesomeIcon icon={faYoutube} size="lg" className="text-red-600 hover:text-red-400" />
      </a>
        </div>
      </div>

      <hr className="my-8 border-gray-600" /> {/* Changed border color to match the dark theme */}

      <div className="text-center font-normal">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Sri Ayyappa Seva Sannidhi (SASS). All Rights Reserved
          <br />Developed by Sode Kiran Avinash
        </p>
      </div>
    </footer>
  );
}

export default Footer;