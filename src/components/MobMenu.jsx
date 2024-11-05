import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';

export default function MenuComponent({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const menuRef = useRef();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setClicked(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
    },
  };

  const handleMenuClick = (index) => {
    if (Menus[index].subMenu) {
      // Toggle submenu visibility if it exists
      setClicked(clicked === index ? null : index);
    } else {
      // For menus without submenus, navigate directly
      setIsOpen(false); // Close the menu
      navigate(Menus[index].url); // Navigate to the menu's URL
    }
  };

  const handleSubMenuClick = (submenuUrl) => {
    setIsOpen(false); // Close the menu when a submenu item is clicked
    navigate(submenuUrl); // Navigate to the submenu's URL
  };

  return (
    <div ref={menuRef}>
      {/* Mobile Menu */}
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" />
        )}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 h-full bg-white text-black p-6 pb-20 overflow-hidden"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ subMenu, ...menu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={menu.name}>
                <span
                  aria-expanded={isClicked}
                  className="uppercase flex-center-between p-4 hover:bg-orange-500 rounded-md cursor-pointer relative text-lg font-semibold"
                  onClick={() => handleMenuClick(i)} // Handle click for both menus and submenus
                >
                  {menu.name}
                  {hasSubMenu && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-auto transition-transform duration-200 ${isClicked ? "rotate-180" : ""}`}
                      size="lg"
                    />
                  )}
                </span>

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-0 bg-white border border-gray-300 rounded-lg shadow-lg w-full"
                  >
                    {subMenu.map((submenu) => (
                      <li 
                        key={submenu.name} 
                        className="p-3 flex-center hover:bg-orange-500 rounded-md gap-x-2 cursor-pointer text-black"
                        onClick={() => handleSubMenuClick(submenu.url)} // Navigate on submenu click
                      >
                        <Link to={submenu.url} className="uppercase text-black">
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex space-x-4">
        {Menus.map(({ subMenu, ...menu }, i) => {
          const hasSubMenu = subMenu?.length;

          return (
            <div key={menu.name} className="relative">
              <span
                className={`p-4 uppercase hover:bg-orange-500 rounded-md cursor-pointer text-lg font-semibold`}
                onClick={() => handleMenuClick(i)} // Handle click for both menus and submenus
              >
                {menu.name}
                {hasSubMenu && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`ml-auto transition-transform duration-200 ${clicked === i ? "rotate-180" : ""}`}
                    size="lg" // Set icon size here
                  />
                )}
              </span>
              {hasSubMenu && clicked === i && (
                <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {subMenu.map((submenu) => (
                    <li 
                      key={submenu.name} 
                      className="p-3 flex-center hover:bg-orange-500 rounded-md gap-x-2 cursor-pointer text-black"
                      onClick={() => handleSubMenuClick(submenu.url)} // Navigate on submenu click
                    >
                      <Link to={submenu.url} className="text-black uppercase">
                        {submenu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}