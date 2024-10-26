import Logo from "../assets/images/logo.png";
import useFooterMenu from '../js/menu'
import {Link} from 'react-router-dom'
import translations from "../js/translations";
import { useLanguage } from '../context/LanguageContext';


const currentYear = new Date().getFullYear();

const Footer = () => {

  const footerMenu = useFooterMenu();
  const { language } = useLanguage();
  
  return (
    <footer className="relative w-full bg-[#F7F7F7] border-t border-gray-300 ">
      <div className="mx-auto w-full max-w-7xl px-8 mt-12">
        {/* Logo and Text Section */}
        <div className="flex items-center mb-2">
          <img src={Logo} alt="Company Logo" loading="lazy" className="h-12 mr-4" />
          <p className="text-[#333333] text-lg">
          {translations.sriAyppaSwamySevaSannidhi[language]}
          </p>
        </div>
        
        {/* Sitemap Section */}
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {footerMenu.map(({ title, links }, index) => (
            <div key={index} className="w-full">
              <h4 className="mb-4 font-bold uppercase text-[#333333]">
                {title}
              </h4>
              <ul className="space-y-1">
                {links.map(({ text, url }, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={url}
                      className="inline-block py-1 pr-2 font-bold text-[#333333] transition-transform hover:scale-105"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Text Section */}
        <div className="flex w-full flex-col items-center justify-center border-t border-gray-300 py-4 md:flex-row md:justify-between">
          <p className="mb-4 text-center font-bold text-[#333333] md:mb-0">
            &copy; {currentYear} Sri Ayyappa Seva Sannidhi (SASS). All Rights Reserved.
          </p>
          <p className="mb-4 text-center font-bold text-[#333333] md:mb-0">
            Developed and maintained by <a href="https://material-tailwind.com/" className="underline">Sode Kiran Avinash</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;