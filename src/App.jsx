import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Precing from './pages/Precing'
import Demo from './pages/Demo'
import About from './pages/About'
import Contact from './pages/Contact'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/pricing" element={<Precing/>} />
<Route path="/demo" element={<Demo/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<Footer />
</div>
)
}