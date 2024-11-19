import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import HeroSection from "./pages/HeroSection";
import FirstProgram from "./pages/FirstProgram";
import SecondProgram from "./pages/SecondProgram";
import ThirdProgram from "./pages/ThirdProgram";
import FourthProgram from "./pages/FourthProgram";
import FifthProgram from "./pages/FifthProgram";
import SixthProgram from "./pages/SixthProgram";
import WomenLeadershipPage from "./pages/WomenLeadershipPage";
import YoungLeadersPage from "./pages/YoungLeadersPage";
import HowWeDoItPage from "./pages/HowWeDoItPage";
import TopFAQsPage from "./pages/TopFAQsPage";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop"; // Import the new component

const AppRoutes = () => {
  return (
    <Router>
      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/herosection" element={<HeroSection />} />

        <Route
          path="/public-company-founders-program"
          element={<FirstProgram />}
        />
        <Route path="/ceo-genesis-program" element={<SecondProgram />} />
        <Route path="/billionaire-blueprint" element={<ThirdProgram />} />
        <Route path="/visionary-accelerator" element={<FourthProgram />} />
        <Route path="/vanguard-rd-lab" element={<FifthProgram />} />
        <Route path="/ethos-leadership-program" element={<SixthProgram />} />

        <Route path="/women-leadership" element={<WomenLeadershipPage />} />

        <Route path="/youngleaders" element={<YoungLeadersPage />} />

        <Route path="/howwedoit" element={<HowWeDoItPage />} />

        <Route path="/faqspage" element={<TopFAQsPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default AppRoutes;
