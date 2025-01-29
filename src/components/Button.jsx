import { Link } from "react-router-dom";

const Button = ({ text, url = '#', }) => {

    return (
        <Link to={url} className="bg-[#FE5A0E] text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition duration-200">
        {text}
      </Link>
    )
  }
  
  export default Button;
  
  