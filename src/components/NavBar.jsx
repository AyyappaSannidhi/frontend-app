import { useNavbarMenu } from "../js/menu";
import Logo from "../assets/images/logo.png";
import DesktopMenu from "../components/DesktopMenu"; 
import MobMenu from "../components/MobMenu";
import { useState, useEffect, useRef } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/slice/languageSlice"; // Import action
import translations from "../js/translations/mainTranslations";
import LoginIn from '../components/LogIn'; // Import the modal component
import { Link } from "react-router-dom";
import routes from "../js/routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);  // State to track dropdown visibility
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const dropdownRef = useRef(null);  // Reference to the dropdown container
  const navBarMenu = useNavbarMenu();

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
    setDropdownOpen(false); // Close dropdown after language selection
  };

  // Close dropdown if clicked outside of the dropdown area
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false); // Close dropdown when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);  // Listen for clicks outside
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);  // Clean up event listener on unmount
    };
  }, []);

  return (
    <div>
      

      {/* Main Navbar */}
      <header className="h-16 fixed top-0 inset-x-0 bg-orange-600 z-30 mt-7">
        <nav className="flex justify-between items-center mx-auto h-full px-4 md:px-6">
          <Link to={routes.indexRoute}>
            <div className="flex items-center">
              <img src={Logo} alt="company logo" className="w-10 mr-2" />
              <div className="flex flex-col">
                <p className="text-lg hidden lg:block text-white">SASSS</p>
                <p className="text-ms text-white lg:hidden">SASSS</p>
              </div>
            </div>
          </Link>

          <ul className="hidden lg:flex flex-1 justify-center gap-x-6">
            {navBarMenu.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-5 relative">
            {/* Donate Button */}
            <Link to={routes.donateRoute}>
              <button
                aria-label="donate"
                className="bg-transparent text-white font-semibold px-4 py-2 rounded-full border-2 border-white flex items-center justify-center gap-2 hover:bg-orange-500 transition duration-300 text-sm"
                >
                {translations.Donate[language]}
              </button>
            </Link>

            {/* Login Button with Round Shape and Guest User Picture */}
            <button
              onClick={() => setModalOpen(true)}
              aria-label="login"
              className="bg-transparent text-white font-semibold px-4 py-2 rounded-full border-2 border-white flex items-center justify-center gap-2 hover:bg-orange-500 transition duration-300 text-sm"
            >
              {translations.logIn[language]}
            </button>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobMenu Menus={navBarMenu} />
            </div>
          </div>
        </nav>
      </header>

      {/* Small Navbar */}
      <div className="bg-orange-700 text-white fixed top-0 inset-x-0 z-40  flex justify-between items-center px-4 md:px-6">
      <p className="text-ms hidden lg:block text-white">Sri Ayyappa Swamy Seva Sannidhi</p>
      <p className="text-xs text-white lg:hidden">Sri Ayyappa Swamy Seva Sannidhi</p>
        <div className="relative">
        <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}  // Toggle dropdown visibility on click
              className="text-sm font-semibold px-3 py-1 flex items-center"
            >
              <FontAwesomeIcon icon={faLanguage} className="mr-2" />  {/* Icon on the left */}
              {language === 'en' ? 'English' : language === 'kn' ? 'ಕನ್ನಡ' : 'తెలుగు'}
        </button>
          {isDropdownOpen && (
            <div 
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-300 ease-in-out z-50"
            >
              <button onClick={() => handleLanguageChange('en')} className="text-black block w-full text-left px-3 py-1 text-sm font-bold hover:bg-orange-500 hover:text-white transition duration-200">
                English
              </button>
              <button onClick={() => handleLanguageChange('kn')} className="text-black block w-full text-left px-3 py-1 text-sm font-bold hover:bg-orange-500 hover:text-white transition duration-200">
                ಕನ್ನಡ
              </button>
              <button onClick={() => handleLanguageChange('te')} className="text-black block w-full text-left px-3 py-1 text-sm font-bold hover:bg-orange-500 hover:text-white transition duration-200">
                తెలుగు
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Render the modal */}
      <LoginIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default NavBar;