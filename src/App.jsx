import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AccountingLayout from "./layouts/AccountingLayout";

import Home from "./pages/Home";
import Precing from "./pages/Precing";
import Demo from "./pages/Demo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Subfooter from "./components/subfooter";
import Features from "./pages/Features";
import Finance from "./pages/Finance";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import ComingSoon from "./components/ComingSoon";
import Welcome from "./components/Welcome";
import QuickSupport from "./pages/QuickSupport";
import Accounting from "./pages/Accounting";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Normal Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Precing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Subfooter" element={<Subfooter />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/QuickSupport" element={<QuickSupport />} />
      </Route>

      {/* Accounting Layout without Navbar/Footer */}
     <Route element={<AccountingLayout />}>
  <Route path="/Accounting/*" element={<Accounting />} />
</Route>

         {/* Catch-All Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
