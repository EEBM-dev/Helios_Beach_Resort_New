import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ContactUsPage from './pages/contactUs';
import ReservationForm from './pages/reservation';
import OurServices from './pages/services';
import Destinations from './pages/destinations';
import SpecialOffers from './pages/offers';
import SunKissedBreakfast from './pages/sunKissedBreakfast';
import TheHalfFeast from './pages/theHalfFeast';
import SunrisetoSunsetDining from './pages/sunrisetofSunsetDining';
import BaseRatePlan from './pages/baseRatePlan';
import AboutUs from './pages/aboutUs';
import Accommodations from './pages/accommodations';
import Packages from './pages/packages';
import Package1 from './pages/package1';
import Package2 from './pages/package2';
import GalleryPage from './pages/gallery';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/booking" element={<ReservationForm />} />
        <Route path="/services" element={<OurServices/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path='/destinations' element={ <Destinations />} />
        <Route path='/offers' element={ <SpecialOffers />} />
        <Route path='/sunkissedbreakfast' element={ <SunKissedBreakfast />} />
        <Route path='/thehalffeast' element={ <TheHalfFeast />} />
        <Route path='/sunrisetosunsetdining' element={ <SunrisetoSunsetDining />} />
        <Route path='/baserateplan' element={ <BaseRatePlan />} />
        <Route path='/aboutus' element={ <AboutUs />} />
        <Route path='/accommodations' element={ <Accommodations/>} />
        <Route path='/packages' element={ <Packages />} />
        <Route path='/package1' element={ <Package1 />} />
        <Route path='/package2' element={ <Package2 />} />
      </Routes>
    </Router>
  );
}