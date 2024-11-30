import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appoinment from "./pages/Appoinment";
import Consultant from "./pages/Consultant";
import SubService from "./pages/SubService";
import ConsultantProfile from "./pages/ConsultantProfile";
import ForgotPassword from "./pages/ForgotPassword";
import OtpVerification from "./pages/OtpVerification";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/subservice/:subServiceId" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consultant" element={<Consultant />} />
        <Route path="/appointment" element={<Appoinment />} />
        <Route path="/services/:serviceId" element={<SubService />} />
        <Route path="/consultant-profile/:id" element={<ConsultantProfile />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
