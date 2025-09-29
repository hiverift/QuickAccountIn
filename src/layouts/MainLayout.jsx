// layouts/MainLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <Outlet /> {/* Yaha specific page ka content aayega */}
      </main>
      <Footer />
    </div>
  );
}
