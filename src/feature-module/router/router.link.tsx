import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Login from "../auth/login/login";
import Payment from "../userDashboard/payment/payment";
import Register from "../auth/register/register";
import ForgotPassword from "../auth/forgot-password/forgotPassword";
import ChangePassword from "../auth/change-password/changePassword";
import HomeSix from "../home-six/homeSix";
import TourGrid from "../tour/tour-grid/tourGrid";
import TourList from "../tour/tour-list/tourList";
import TourMap from "../tour/tour-map/tourMap";
import TourBooking from "../tour/tour-booking/tourBooking";
import TourBookingConfirmation from "../tour/tour-bookingConfirmation/tourBookingConfirmation";
import Destination from "../pages/Destination/destination";
import AboutUs from "../pages/about-us/about_us";
import Teams from "../pages/teams/teams";
import Invoices from "../pages/invoices/invoices";
import Notification from "../userDashboard/notification/notification";
import UserFlightBooking from "../userDashboard/myBooking/flight/userFlightBooking";
import UserCarBooking from "../userDashboard/myBooking/car/userCarBooking";
import UserHotelsBooking from "../userDashboard/myBooking/hotels/userHotelsBooking";
import UserWishlist from "../userDashboard/wishlist/userWishlist";
import UserWallet from "../userDashboard/wallet/userWallet";
import MyProfile from "../userDashboard/myProfile/myProfile";
import ProfileSettings from "../userDashboard/settings/profileSettings";
import UserCruiseBooking from "../userDashboard/myBooking/cruise/userCruiseBooking";
import PrivacyPolicy from "../pages/privacy-policy/privacyPolicy";
import ContactUs from "../pages/contact/contactUs";
import Error404 from "../pages/error/Error404";
import Error500 from "../pages/error/Error500";
import FAQ from "../pages/Faq/FAQ";
import Gallery from "../pages/Gallery/Gallery";
import PricingPlan from "../pages/pricing-plan/PricingPlan";
import Testimonials from "../pages/Testimonials/Testimonials";
import UnderMaintenance from "../pages/under-maintenance/UnderMaintenance";
import TourDetails from "../tour/tour-details/tourDetails";
import AddTour from "../tour/add-tour/addTour";
import Dashboard from "../userDashboard/dashboard/dashboard";
import UserTourBooking from "../userDashboard/myBooking/tour/userTourBooking";
import UserReviews from "../userDashboard/myReviews/userReviews";
import NotificationSettings from "../userDashboard/settings/notificationSettings";
import IntegrationSettings from "../userDashboard/settings/integrationSettings";
import SecuritySettings from "../userDashboard/settings/securitySettings";
import ComingSoon from "../pages/coming-soon/comingSoon";
import TermsConditions from "../pages/terms-conditions/termsConditions";
const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index-6" />,
    route: Route,
  },

  {
    path: routes.home6,
    element: <HomeSix />,
    route: Route,
  },

  {
    path: routes.payment,
    element: <Payment />,
    route: Route,
  },
  {
    path: routes.tourGrid,
    element: <TourGrid />,
    route: Route,
  },
  {
    path: routes.tourList,
    element: <TourList />,
    route: Route,
  },

  {
    path: routes.tourMap,
    element: <TourMap />,
    route: Route,
  },
  {
    path: routes.tourBooking,
    element: <TourBooking />,
    route: Route,
  },
  {
    path: routes.tourBookingConfirmation,
    element: <TourBookingConfirmation />,
    route: Route,
  },

  {
    path: routes.destination,
    element: <Destination />,
    route: Route,
  },
  {
    path: routes.about_us,
    element: <AboutUs />,
    route: Route,
  },
  {
    path: routes.teams,
    element: <Teams />,
    route: Route,
  },
  {
    path: routes.invoices,
    element: <Invoices />,
    route: Route,
  },
  {
    path: routes.notification,
    element: <Notification />,
    route: Route,
  },
  {
    path: routes.userFlightBooking,
    element: <UserFlightBooking />,
    route: Route,
  },
  {
    path: routes.userCarBooking,
    element: <UserCarBooking />,
    route: Route,
  },
  {
    path: routes.userCruiseBooking,
    element: <UserCruiseBooking />,
    route: Route,
  },
  {
    path: routes.userHotlesBooking,
    element: <UserHotelsBooking />,
    route: Route,
  },
  
  {
    path: routes.userWishlist,
    element: <UserWishlist />,
    route: Route,
  },
  {
    path: routes.userWallet,
    element: <UserWallet />,
    route: Route,
  },
  {
    path: routes.myProfile,
    element: <MyProfile />,
    route: Route,
  },
  {
    path: routes.profileSettings,
    element: <ProfileSettings />,
    route: Route,
  },
  {
    path: routes.privacyPolicy,
    element: <PrivacyPolicy />,
    route: Route,
  },
  {
    path: routes.contactUs,
    element: <ContactUs />,
    route: Route,
  },

  {
    path: routes.FAQ,
    element: <FAQ />,
    route: Route,
  },
  {
    path: routes.Gallery,
    element: <Gallery />,
    route: Route,
  },
  {
    path: routes.pricingPlan,
    element: <PricingPlan />,
    route: Route,
  },
  {
    path: routes.Testimonials,
    element: <Testimonials />,
    route: Route,
  },
  {
    path: routes.underMaintenance,
    element: <UnderMaintenance />,
    route: Route,
  },
  

  {
    path: routes.tourDetails,
    element: <TourDetails />,
    route: Route,
  },
  {
    path: routes.addTour,
    element: <AddTour />,
    route: Route,
  },
  

  {
    path: routes.userDashboard,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: routes.userFlightBooking,
    element: <UserFlightBooking />,
    route: Route,
  },
  {
    path: routes.userTourBooking,
    element: <UserTourBooking />,
    route: Route,
  },
  {
    path: routes.userReviews,
    element: <UserReviews />,
    route: Route,
  },
  
  {
    path: routes.userWishlist,
    element: <UserWishlist />,
    route: Route,
  },
  {
    path: routes.userWallet,
    element: <UserWallet />,
    route: Route,
  },
  {
    path: routes.myProfile,
    element: <MyProfile />,
    route: Route,
  },
  {
    path: routes.profileSettings,
    element: <ProfileSettings />,
    route: Route,
  },
  {
    path: routes.securitySettings,
    element: <SecuritySettings />,
    route: Route,
  },
  {
    path: routes.notificationSettings,
    element: <NotificationSettings />,
    route: Route,
  },
  {
    path: routes.integrationSettings,
    element: <IntegrationSettings />,
    route: Route,
  },

  
  {
    path: routes.termsConditions,
    element: <TermsConditions />,
    route: Route,
  },
];

export const authRoutes = [
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
  },
  {
    path: routes.changepassword,
    element: <ChangePassword />,
    route: Route,
  },

  {
    path: routes.Error404,
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.Error500,
    element: <Error500 />,
    route: Route,
  },
  {
    path: routes.underMaintenance,
    element: <UnderMaintenance />,
    route: Route,
  },
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
    route: Route,
  },
];
