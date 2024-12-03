import { GoogleOAuthProvider } from "@react-oauth/google";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/about/About";
import CommitteMembers from "./pages/about/CommitteMembers";
import PictureGallery from "./pages/gallery/PictureGallery";
import VideoGallery from "./pages/gallery/VideoGallery";
import TempleSeva from "./pages/seva/TempleSeva";
import KumaraSwamySeva from "./pages/seva/KumaraSwamySeva";
import AyyappaDeeksha from "./pages/library/AyyappaDeeksha";
import GuideLines from "./pages/library/GuideLines";
import AyyappaDeekshaTitles from "./pages/library/AyyappaDeekshaTitles";
import Contact from "./pages/about/Contact";
import Donate from "./pages/Donate";
import LoginPage from "./pages/LoginPage";
import routes from "./scripts/routes";
import Faq from "./pages/about/Faq";
import MalaDharanaRegistration from "./pages/registration/MalaDharanaRegistration";
import IrumudiYatraRegistration from "./pages/registration/IrumudiYatraRegistration";
import HousePoojaRequest from "./pages/registration/HousePoojaRequest";
import DonationPolicy from "./pages/footer/DonationPolicy";
import PrivacyAndDisclaimer from "./pages/footer/PrivacyAndDisclaimer";
import TermsAndConditions from "./pages/footer/TermsAndConditions";
import PoojaSponsors from "./pages/PoojaSponsors";
import NotFoundPage from "./pages/NotFoundPage";
import UsefullLinks from "./pages/UsefullLinks";

// Add your Google Client ID here
const GOOGLE_CLIENT_ID: string | undefined = import.meta.env.VITE_GOOGLE_CLIENT_ID;
if (!GOOGLE_CLIENT_ID) {
    throw new Error('GOOGLE_CLIENT_ID is not defined in the environment variables');
}
console.log(import.meta.env);


const App: React.FC = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={routes.indexRoute} element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path={routes.aboutRoute} element={<About />} />
                <Route path={routes.committeMembers} element={<CommitteMembers />} />
                <Route path={routes.faqRoute} element={<Faq />} />
                <Route path={routes.pictureGalleryRoute} element={<PictureGallery />} />
                <Route path={routes.videoGalleryRoute} element={<VideoGallery />} />
                <Route
                    path={routes.malaDharanaRegistrationRoute}
                    element={<MalaDharanaRegistration />}
                />
                <Route
                    path={routes.irumudiYatraRegistrationRoute}
                    element={<IrumudiYatraRegistration />}
                />
                <Route path={routes.housePoojaRequestRoute} element={<HousePoojaRequest />} />
                <Route path={routes.templeSevaRoute} element={<TempleSeva />} />
                <Route path={routes.kumaraSwamySevaRoute} element={<KumaraSwamySeva />} />
                <Route path={routes.ayyappaDeekshaRoute} element={<AyyappaDeeksha />} />
                <Route path={routes.guideLinesRoute} element={<GuideLines />} />
                <Route path={routes.guideLinesRoute} element={<AyyappaDeekshaTitles />} />
                <Route path={routes.contactRoute} element={<Contact />} />
                <Route path={routes.donateRoute} element={<Donate />} />
                <Route path={routes.loginRoute} element={<LoginPage />} />
                <Route path={routes.donationPolicyRoute} element={<DonationPolicy />} />
                <Route
                    path={routes.privacyAndDisclaimerRoute}
                    element={<PrivacyAndDisclaimer />}
                />
                <Route path={routes.termsAndConditionsRoute} element={<TermsAndConditions />} />
                <Route path={routes.poojaSponsorsRoute} element={<PoojaSponsors />} />
                <Route
                    path={routes.ayyappaDeekshaTitlesRoute}
                    element={<AyyappaDeekshaTitles />}
                />
                <Route path={routes.useFullLinksRoute} element={<UsefullLinks />} />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <RouterProvider router={router}></RouterProvider>
        </GoogleOAuthProvider>
    );
};

export default App;