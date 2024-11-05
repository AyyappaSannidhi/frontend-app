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

const NavBar = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State for modal
  const dropdownRef = useRef(null); 
  const navBarMenu = useNavbarMenu();

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
    setDropdownOpen(false);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="h-16 fixed top-0 inset-x-0 bg-orange-500 z-50">
        <nav className="flex justify-between items-center mx-auto h-full px-4 md:px-6">
            <Link to={routes.indexRoute}>
          <div className="flex items-center">
            <img src={Logo} alt="company logo" className="w-10 mr-2" />
            <div className="flex flex-col">
              <p className="text-ms text-white hidden lg:block">Sri Ayyappa Seva Sannidhi</p>
              <p className="text-ms text-white hidden lg:block">(SASS)</p>
              <p className="text-ms text-white block lg:hidden">SASS</p> {/* Show only on mobile */}
            </div>
            
          </div>
            </Link>

          <ul className="hidden lg:flex flex-1 justify-center gap-x-6">
            {navBarMenu.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-5 relative">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="bg-white text-black font-semibold px-2 py-1 rounded-md shadow-md hover:shadow-lg transition duration-300 text-sm"
              >
                {language === 'en' ? 'English' : language === 'kn' ? 'ಕನ್ನಡ' : 'తెలుగు'}
              </button>

              {isDropdownOpen && (
                <div 
                  className={`absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                  style={{
                    transform: isDropdownOpen ? 'scale(1)' : 'scale(0)',
                    opacity: isDropdownOpen ? 1 : 0,
                    pointerEvents: isDropdownOpen ? 'auto' : 'none', // Prevent interaction when closed
                  }}
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

            {/* Styled Login Button */}
            <button
              onClick={() => setModalOpen(true)}
              aria-label="login"
              className="bg-white text-black font-semibold px-2 py-1 rounded-md shadow-md hover:shadow-lg transition duration-300 text-sm"
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

      {/* Render the modal */}
      <LoginIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default NavBar;