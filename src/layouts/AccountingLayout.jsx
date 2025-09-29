import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ConversionInfo from "../components/ConversionInfo";
import ClientLogoSlider from "../components/ClientLogoSlider";
import ConversionSection from "../components/ConversionSection";
import ChooseConversionSection from "../components/ChooseConversionSection";
import ConversionPhases from "../components/ConversionPhases";
import TrustedBy from "../components/TrustedBy";
import AccountingFooter from "../components/AccountingFooter";
import HeaderSection from "../components/HeaderSection";
import NotFound from "../components/NotFound"; // NotFound component

export default function AccountingLayout({ children }) {
  return (
    <div className="">
      <HeaderSection />
      <HeroSection />
      <ConversionInfo />
      <ClientLogoSlider />
      <ConversionSection />
      <ChooseConversionSection />
      <ConversionPhases />
      <TrustedBy />
      <AccountingFooter />

      <main className="">

        {children}
      </main>
    </div>
  );
}
