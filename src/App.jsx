// import "./App.css";
// import Navbar from "./component/header";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/homePage";
// import Footer from "./component/footer";
// import Buy from "./pages/buyPage";
// import Rent from "./pages/rentPage";
// import Detail from "./pages/buyPage/feacture/detail";
// import ContactPage from "./pages/contactPage";
// import TermsCondition from "./pages/termsCondition";
// import SellPage from "./pages/sellPage";

// // Dashboard pages
// import DashboardLayout from "./pages/dashboard/dashboardLayout";
// import DashboardHome from "./pages/dashboard/dashboardHome";

// // Public layout wrapper
// import { Outlet } from "react-router-dom";
// import PropertyListingForm from "./pages/dashboard/listItem";
// import Properties from "./pages/dashboard/my-properties";
// import OfferPage from "./pages/dashboard/offerDashboard";
// import Contract from "./pages/dashboard/contract";
// import PaymentPage from "./pages/dashboard/paymentPage";
// import FinancialPage from "./pages/dashboard/financialPage";
// import ChatPage from "./pages/chatPage";
// import Login from "./pages/login";
// import ProtectedRoute from "./protectedRoute";

// function PublicLayout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//   <Route path="/login" element={<Login />} />
//           {/* PUBLIC ROUTES WITH NAVBAR + FOOTER */}
//           <Route element={<PublicLayout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/buy" element={<Buy />} />
//             <Route path="/rent" element={<Rent />} />
//             <Route path="/detail" element={<Detail />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/terms" element={<TermsCondition />} />
//             <Route path="/sell" element={<SellPage />} />
//           </Route>

//           {/* DASHBOARD ROUTES WITHOUT NAVBAR + FOOTER */}
//           <Route path="/dashboard" element={<DashboardLayout />}>
//             <Route index element={<DashboardHome />} />
//        <Route path="listItem" element={<PropertyListingForm />} />
//         <Route path="my-property" element={<Properties/>} />
//          <Route path="offers" element={<OfferPage/>} />
//          <Route path="contracts" element={<Contract/>} />
//            <Route path="payments" element={<PaymentPage/>} />
//            <Route path="insights" element={<FinancialPage/>} />
//            <Route path="messages" element={<ChatPage/>} />
           
//           </Route>
//             <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />


//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import "./App.css";
import Navbar from "./component/header";
import Footer from "./component/footer";

import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import Home from "./pages/homePage";
import Buy from "./pages/buyPage";
import Rent from "./pages/rentPage";
import Detail from "./pages/buyPage/feacture/detail";
import ContactPage from "./pages/contactPage";
import TermsCondition from "./pages/termsCondition";
import SellPage from "./pages/sellPage";

// Dashboard
import DashboardLayout from "./pages/dashboard/dashboardLayout";
import DashboardHome from "./pages/dashboard/dashboardHome";
import PropertyListingForm from "./pages/dashboard/listItem";
import Properties from "./pages/dashboard/my-properties";
import OfferPage from "./pages/dashboard/offerDashboard";
import Contract from "./pages/dashboard/contract";
import PaymentPage from "./pages/dashboard/paymentPage";
import FinancialPage from "./pages/dashboard/financialPage";
import ChatPage from "./pages/chatPage";
import Login from "./pages/login";

import ProtectedRoute from "./ProtectedRoute";
import SignupPage from "./signUp";

// Public Layout Wrapper
function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignupPage />} />

        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/sell" element={<SellPage />} />
        </Route>

        {/* PROTECTED DASHBOARD ROUTES */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="listItem" element={<PropertyListingForm />} />
          <Route path="my-property" element={<Properties />} />
          <Route path="offers" element={<OfferPage />} />
          <Route path="contracts" element={<Contract />} />
          <Route path="payments" element={<PaymentPage />} />
          <Route path="insights" element={<FinancialPage />} />
          <Route path="messages" element={<ChatPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
