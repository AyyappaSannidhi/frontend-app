import { useNavbarMenu } from "../js/menu";
import Logo from "../assets/images/logo.png";
import DesktopMenu from "../components/DesktopMenu"; 
import MobMenu from "../components/MobMenu";
import { useLanguage } from "../context/LanguageContext"; 
import { useState, useEffect, useRef } from "react"; 
import {Link} from 'react-router-dom';
import translations from '../js/translations'

const NavBar = () => {

  const { language, toggleLanguage } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const navBarMenu = useNavbarMenu();


  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setDropdownOpen(false);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="h-16 fixed top-0 inset-x-0 bg-orange-500 z-50">
        <nav className="flex justify-between items-center mx-auto h-full px-4 md:px-6">
          {/* Left: Logo */}
          <div className="flex items-center gap-x-2 md:gap-x-3">
  <img src={Logo} alt="Framer Logo" loading="lazy" className="h-12 w-12" />
  <h1 className="text-3xl font-semibold text-white md:text-4xl">SASS</h1>
</div>

          {/* Center: Desktop Menu */}
          <ul className="hidden lg:flex flex-1 justify-center gap-x-6">
            {navBarMenu.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>



          {/* Right: Language Dropdown and Donate Button */}
          <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-5 relative">
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="bg-white text-black font-semibold px-3 py-1 rounded-md shadow-md hover:shadow-lg transition duration-300"
              >
                {language === 'en' ? 'English' : language === 'kn' ? 'ಕನ್ನಡ' : 'తెలుగు'}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-orange-500 hover:text-white transition duration-200"
                  >
                    <span className="font-bold text-black">English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('kn')}
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-orange-500 hover:text-white transition duration-200"
                  >
                    <span className="font-bold text-black">ಕನ್ನಡ</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('te')}
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-orange-500 hover:text-white transition duration-200"
                  >
                    <span className="font-bold text-black">తెలుగు</span>
                  </button>
                </div>
              )}
            </div>

            {/* Donate Button */}
            <Link to='/donate'>
            <button
              aria-label="donate"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-2 shadow-lg rounded-full hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 text-xs md:text-sm lg:text-sm"
            >
              {translations.Donate[language]}
            </button>
            </Link>
            
          </div>
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
            <MobMenu Menus={navBarMenu} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;