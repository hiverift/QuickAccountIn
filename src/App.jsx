import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Precing from './pages/Precing'
import Demo from './pages/Demo'
import About from './pages/About'
import Contact from './pages/Contact' 
import Subfooter from './components/subfooter'
import Features from './pages/Features' 
import Finance from './pages/Finance'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'
import ComingSoon from "./components/ComingSoon";
import Welcome from './components/Welcome'

export default function App() {
  const location = useLocation(); // Current route

  // Agar route Welcome page hai → Navbar aur Footer hide kar do
  const hideNavbar = location.pathname === "/Welcome";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pricing" element={<Precing/>} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Subfooter" element={<Subfooter/>} />
          <Route path="/Features" element={<Features/>} />
          <Route path="/Finance" element={<Finance/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/LogIn" element={<LogIn/>} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/Welcome" element={<Welcome />} />
        </Routes>
      </main>
      {!hideNavbar && <Footer />}
    </div>
  )
}
