import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage  from './pages/HomePage'
import About  from './pages/about/About'
import BoardMembers  from './pages/about/BoardMembers'
import PictureGallery from './pages/gallery/PictureGallery'
import VideoGallery from './pages/gallery/VideoGallery'
import PoojaSchedule from './pages/PoojaSchedule'
import AyyappaMala from './pages/ayyappa_deeksha/AyyappaMala'
import AyyappaJapam from './pages/ayyappa_deeksha/AyyappaJapam'
import StepsDeeksha from './pages/ayyappa_deeksha/StepsDeeksha'
import DeekshaGuideLines from './pages/ayyappa_deeksha/DeekshaGuideLines'
import HousePoojaGuideLines from './pages/ayyappa_deeksha/HousePoojaGuideLines'
import Contact from './pages/Contact'
import Donate from './pages/Donate'

const App = () => {

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/board_members' element={<BoardMembers/>}/>

        <Route path='/picture_gallery' element={<PictureGallery/>}/>
        <Route path='/video_gallery' element={<VideoGallery/>}/>

        <Route path='/pooja_schedule' element={<PoojaSchedule/>}/>

        <Route path='/ayyappa_mala' element={<AyyappaMala/>}/>
        <Route path='/ayyappa_japam' element={<AyyappaJapam/>}/>
        <Route path='/deeksha_steps' element={<StepsDeeksha/>}/>

        <Route path='/guidelines_deeksha' element={<DeekshaGuideLines/>}/>
        <Route path='/guidelines_pooja' element={<HousePoojaGuideLines/>}/>

        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donate' element={<Donate/>}/>
      </Route>
    )
  
  );

  return <RouterProvider router = {router}/>
}

export default App