import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);
  const menuRef = useRef(null);

  const subMenuAnimate = {
    enter: { opacity: 1, rotateX: 0, transition: { duration: 0.5 }, display: "block" },
    exit: { opacity: 0, rotateX: -15, transition: { duration: 0.5 }, transitionEnd: { display: "none" } },
  };

  const hasSubMenu = menu?.subMenu?.length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsHover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <motion.li
      className="group/link"
      ref={menuRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        to={menu.url || "#"}
        className="text-ms h-14 flex-center gap-0.5 uppercase hover:bg-orange-600 cursor-pointer px-1 py-1 rounded-md font-bold text-white"
      >
        {menu.name} 
        {/* Remove or conditionally hide ChevronDown */}
        {hasSubMenu && false && <ChevronDown className="mt-[0.9px] group-hover/link:rotate-180 duration-200" />}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="sub-menu bg-white border border-gray-300 rounded-lg shadow-lg"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div className={`grid gap-7 ${menu.gridCols > 1 ? `grid-cols-${menu.gridCols}` : "grid-cols-1"}`}>
            {menu.subMenu.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
                <Link
                  to={submenu.url || "#"}
                  className="flex-center gap-x-4 group/menubox hover:bg-orange-500 rounded-md p-2 duration-300"
                >
                  <div>
                    <h6 className="text-sm font-bold text-black uppercase ">{submenu.name}</h6> 
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}