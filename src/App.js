import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import { AuthProvider } from './api/AuthContext';
import NewBookingPage from './pages/NewBookingPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutCommunityBook from './pages/AboutCommunityBook';
import BadmintonBookingPage from './pages/BadmintonBookingPage';
import BadmintonWorldPage from './pages/BadmintonWorldPage';
import YonexShoppingPage from './pages/YonexShoppingPage';
import LiningShoppingPage from './pages/LiningShoppingPage';
import BookingConfirmation from './pages/BookingConfirmation';
import FinalBookingDetails from './pages/FinalBookingDetails';
import RazorpayPage from './pages/RazorpayPage';
import SuccessPage from './pages/SuccessPage';
import GymWelcome from './pages/GymWelcome';
import PersonalizedFitness from './pages/PersonalizedFitness';
import ShoppingPage from './pages/ShoppingPage';
import GymBookings from './pages/GymBookings';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import UserPrivacyPolicy from './pages/UserPrivacyPolicy';
import AboutUs from './pages/AboutUs';
import ThankYouPage from './pages/ThankYouPage';
import AboutBadminton from './pages/AboutBadminton';
import CrowdLevelPredictor from './pages/CrowdLevelPredictor'; // Import the new component
import CrowdLevelDisplay from './pages/CrowdLevelDisplay';
import VirtualTour from './pages/VirtualTour';
import WelcomePage from './pages/gymmainWelcomePage.js';
import UserPrivacySubmission from './pages/UserPrivacySubmission';
import SportsComplexesWelcomePage from './pages/sportsComplexesWelcomePage'; // Corrected import statement
import TurfPage from './pages/TurfPage';
import SwimmingPoolsPage from './pages/SwimmingPoolsPage';
import FeedbackPage from './pages/FeedbackPage.js';
import AdvertisementPage from './pages/AdvertisementPage.js';
import CustomWorkoutPlans from './pages/PERSONALISEDFITNESS/CustomWorkoutPlans.js';
import CreateYourPlan from './pages/PERSONALISEDFITNESS/CreateYourPlan.js';
import GymSubscriptionConfirmation from './pages/GYMSECTION/GymSubscriptionConfirmation';
import FindCoach from './pages/FindCoach.js';
import BadmintonCoachBooking from './pages/BadmintonCoachBooking.js'; // Updated import
import CoachRazorpayPayment from './pages/CoachRazorpayPayment';
import Coachpaymentsuccess from './pages/Coachpaymentsuccess.js';
import ConfirmJoinPage from './components/ConfirmJoinPage.js'; // Adjust the path as needed





function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/bookings/new" element={<NewBookingPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about-community-book" element={<AboutCommunityBook />} />
            <Route path="/badminton-court" element={<BadmintonBookingPage />} />
            <Route path="/badminton-world" element={<BadmintonWorldPage />} />
            <Route path="/yonex" element={<YonexShoppingPage />} />
            <Route path="/lining" element={<LiningShoppingPage />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/final-booking-details" element={<FinalBookingDetails />} />
            <Route path="/razorpay" element={<RazorpayPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/gym" element={<GymWelcome />} />
            <Route path="/personalized-fitness" element={<PersonalizedFitness />} />
            <Route path="/exclusive-health-care-products" element={<ShoppingPage />} />
            <Route path="/booking/:gymName/:location" element={<GymBookings />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/privacy-policy" element={<UserPrivacyPolicy />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/about-badminton" element={<AboutBadminton />} />
            <Route path="/crowd-level-predictor" element={<CrowdLevelPredictor />} /> {/* New route for CrowdLevelPredictor */}
            <Route path="/video-crowd-display" element={<CrowdLevelDisplay />} /> {/* New route for CrowdLevelPredictor */}
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/gymhome_welcome" element={<WelcomePage />} />
            <Route path="/user-privacy-submission" element={<UserPrivacySubmission/>} />
            <Route path="/sports-complexes" element={<SportsComplexesWelcomePage />} /> {/* New route for SportsComplexesWelcomePage */}
            <Route path="/turf" element={<TurfPage/>} />
            <Route path="/swimming-pools" element={<SwimmingPoolsPage/>} />
            <Route path="/UserFeedback" element={<FeedbackPage/>} />
            <Route path="/Advertisement" element={<AdvertisementPage/>} />
            <Route path="/CustomWorkoutPlans" element={<CustomWorkoutPlans/>} />
            <Route path="/createyourplan" element={<CreateYourPlan/>} />
            <Route path="/GymSubscriptionConfirmation" element={<GymSubscriptionConfirmation/>} />
            <Route path="/find-coach" element={<FindCoach/>} />
            <Route path="/booking/:coachId" element={<BadmintonCoachBooking />} /> {/* Updated booking route */}
            <Route path="/coachrazorpay" element={<CoachRazorpayPayment />} />
            <Route path="/coachpaymentsuccess" element={<Coachpaymentsuccess />} />
            <Route path="/confirm-join/:bookingId" element={<ConfirmJoinPage/>} />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
