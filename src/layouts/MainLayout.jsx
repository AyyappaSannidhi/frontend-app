import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../components/Footer";
import ScrollingBanner from "../components/ScrollingBanner"
import NavBar from "../components/NavBar";
import BackToTopButton from "../components/BackTopButton";
import ScrollToTop from "../components/ScrollToTop";
import AddTopMargin from '../components/AddTopMargin'


const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar/>
      <ScrollingBanner/>
      <ToastContainer />
      <BackToTopButton/>
      <AddTopMargin/>
      <Outlet style={{ paddingTop: "2.5rem" }} />
      <Footer />
    </>
  );
};

export default MainLayout;