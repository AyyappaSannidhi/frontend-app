import { useNavbarMenu } from "../scripts/menu";
import Logo from "../assets/images/logo.png";
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import { useState, useEffect, useRef } from "react";
import LoginIn from "../components/LogIn";
import { Link } from "react-router-dom";
import routes from "../scripts/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/slice/userSlice";
import { store } from "../store/store";

const NavBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage: string = i18n.language;

  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const navBarMenu = useNavbarMenu();

  const { user } = useSelector((state: store) => state.user); // Access user state from Redux
  const dispatch = useDispatch();

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
      setProfileDropdownOpen(false);
    }
  };

  const handleLogout = (): void => {
    dispatch(clearUser());
    setProfileDropdownOpen(false);
  };

  useEffect(() => {
    if (user) {
      setModalOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [user]);

  return (
    <div>
      {/* Main Navbar */}
      <header className="h-16 fixed top-0 inset-x-0 bg-orange-600 z-30 mt-7">
        <nav className="flex justify-between items-center mx-auto h-full px-4 md:px-6">
          <Link to={routes.indexRoute}>
            <div className="flex items-center">
              <img src={Logo} alt="company logo" className="w-10 mr-2" />
              <p className="text-lg hidden lg:block text-white">{t("common.sasss")}</p>
              <p className="text-ms text-white lg:hidden">SASSS</p>
            </div>
          </Link>

          <ul className="hidden lg:flex flex-1 justify-center gap-x-6">
            {navBarMenu.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-5 relative">
            <Link
              to="/donate"
              className="bg-transparent text-white font-semibold px-4 py-2 rounded-full border-2 border-white hover:bg-orange-500 transition duration-300 text-sm"
            >
              {t("common.donate")}
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center"
                >
                  <img src={user.picture} alt="profile" className="w-10 h-10 rounded-full border-2" />
                </button>
                {isProfileDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-50"
                  >
                    <button
                      onClick={handleLogout}
                      className="text-black block w-full text-left px-3 py-1 text-sm font-bold hover:bg-orange-500 hover:text-white"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                aria-label="login"
                className="bg-transparent text-white font-semibold px-4 py-2 rounded-full border-2 border-white hover:bg-orange-500 transition duration-300 text-sm"
              >
                {t("common.logIn")}
              </button>
            )}

            <div className="lg:hidden">
              <MobMenu Menus={navBarMenu} />
            </div>
          </div>
        </nav>
      </header>

      {/* Small Navbar */}
      <div className="bg-orange-700 text-white fixed top-0 inset-x-0 z-40 flex justify-between items-center px-4 md:px-6">
        <p className="text-ms hidden lg:block text-white">Sri Ayyappa Swamy Seva Sannidhi</p>
        <p className="text-xs text-white lg:hidden">Sri Ayyappa Swamy Seva Sannidhi</p>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="text-sm font-semibold px-3 py-1 flex items-center"
          >
            <FontAwesomeIcon icon={faLanguage} className="mr-2" />
            {currentLanguage === "en"
              ? "English"
              : currentLanguage === "kn"
              ? "ಕನ್ನಡ"
              : "తెలుగు"}
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-50"
            >
              <button
                onClick={() => changeLanguage("en")}
                className="text-black block w-full text-left px-3 py-1 text-sm font-bold hover:bg-orange-500 hover:text-white"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("kn")}
                className="text-black block w-full text-left px-3 py-1 text-sm font-bold hover:bg-orange-500 hover:text-white"
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => changeLanguage("te")}
                className="text-black block w-full text-left px-3 py-1 text-sm font-bold hover:bg-orange-500 hover:text-white"
              >
                తెలుగు
              </button>
            </div>
          )}
        </div>
      </div>

      <LoginIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default NavBar;