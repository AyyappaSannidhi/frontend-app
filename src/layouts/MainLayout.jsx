import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../components/Footer";
import ScrollingBanner from "../components/ScrollingBanner"
import NavBar from "../components/NavBar";


const MainLayout = () => {
  return (
    <>
      <NavBar/>
      <ToastContainer />
      <ScrollingBanner/>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;