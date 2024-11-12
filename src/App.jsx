import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import About from './pages/about/About';
import CommitteMembers from './pages/about/CommitteMembers';
import PictureGallery from './pages/gallery/PictureGallery';
import VideoGallery from './pages/gallery/VideoGallery';
import TempleSeva from './pages/seva/TempleSeva';
import KumaraSwamySeva from './pages/seva/KumaraSwamySeva';
import AyyappaMala from './pages/ayyappa_deeksha/AyyappaMala';
import AyyappaJapam from './pages/ayyappa_deeksha/AyyappaJapam';
import StepsDeeksha from './pages/ayyappa_deeksha/StepsDeeksha';
import DeekshaGuideLines from './pages/ayyappa_deeksha/DeekshaGuideLines';
import HousePoojaGuideLines from './pages/ayyappa_deeksha/HousePoojaGuideLines';
import Contact from './pages/about/Contact';
import Donate from './pages/Donate';
import LogIn from './components/LogIn';
import routes from './js/routes';
import Faq from './pages/about/Faq';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MalaDharanaRegistration from './pages/registration/MalaDharanaRegistration';
import IrumudiYatraRegistration from './pages/registration/IrumudiYatraRegistration';
import HousePoojaRequest from './pages/registration/HousePoojaRequest';
import DonationPolicy from './pages/footer/DonationPolicy';
import PrivacyAndDisclaimer from './pages/footer/PrivacyAndDisclaimer';
import TermsAndConditions from './pages/footer/TermsAndConditions';
import PoojaSponsors from './pages/PoojaSponsors';

// ScrollToTop component
const ScrollToTop = () => {
  const location = useLocation(); // Access the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the location changes
  }, [location]);

  return null; // No visible output from this component
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.indexRoute} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.aboutRoute} element={<About />} />
        <Route path={routes.committeMembers} element={<CommitteMembers />} />
        <Route path={routes.faqRoute} element={<Faq />} />
        <Route path={routes.pictureGalleryRoute} element={<PictureGallery />} />
        <Route path={routes.videoGalleryRoute} element={<VideoGallery />} />
        <Route path={routes.malaDharanaRegistrationRoute} element={<MalaDharanaRegistration />} />
        <Route path={routes.irumudiYatraRegistrationRoute} element={<IrumudiYatraRegistration />} />
        <Route path={routes.housePoojaRequestRoute} element={<HousePoojaRequest />} />
        <Route path={routes.templeSevaRoute} element={<TempleSeva />} />
        <Route path={routes.kumaraSwamySevaRoute} element={<KumaraSwamySeva />} />
        <Route path={routes.ayyappaMalaRoute} element={<AyyappaMala />} />
        <Route path={routes.ayyappaDhyanamJapamRoute} element={<AyyappaJapam />} />
        <Route path={routes.stepsOfDeekshaRoute} element={<StepsDeeksha />} />
        <Route path={routes.guidelinesToDeekshaRoute} element={<DeekshaGuideLines />} />
        <Route path={routes.housePoojaGuidelinesRoute} element={<HousePoojaGuideLines />} />
        <Route path={routes.contactRoute} element={<Contact />} />
        <Route path={routes.donateRoute} element={<Donate />} />
        <Route path={routes.logInRoute} element={<LogIn />} />
        <Route path={routes.donationPolicyRoute} element={<DonationPolicy />} />
        <Route path={routes.privacyAndDisclaimerRoute} element={<PrivacyAndDisclaimer />} />
        <Route path={routes.termsAndConditionsRoute} element={<TermsAndConditions />} />
        <Route path={routes.poojaSponsorsRoute} element={<PoojaSponsors />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <ScrollToTop /> {/* Scroll to the top on route change */}
      {/* Your MainLayout or any other components can be placed here */}
    </RouterProvider>
  );
};

export default App;