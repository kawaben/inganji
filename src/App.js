import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./components/styles/grobal.css";
import "./App.css";
import ToggleList from "./components/TopMenuBar";
import Parallax from "./components/body";
import AsSeenOnYou from "./components/asSeenOnYou";
import Footer from "./components/Footer";
import HelpButton from "./components/help";
import AppRoutes from "./routes/route";
import FirstParallax from "./components/firstPallarax";
import AdminPage from "./components/AdminPage";
import Controls from "./components/controls";

import { LanguageProvider, useLanguage } from "./components/context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
    <Router>
      <Routes>
        {/* Route for Admin Page */}
        <Route path="/admin" element={<AdminPage />} />
        {/* Main Application */}
        <Route path="*" element={<MainApp />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

function MainApp() {
  const location = useLocation();

  // Check if the current route is the homepage
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {/* Render components specific to the homepage */}
      {isHomePage && (
        <>
          <Controls/>
          <ToggleList />
          <FirstParallax />
        </>
      )}
      {/* Dynamic routes */}
      <AppRoutes />
      {/* Render additional components for the homepage */}
      {isHomePage && (
        <>
          <Parallax />
          <AsSeenOnYou />
          <Footer />
          <HelpButton />
          
          
        </>
      )}
    </div>
  );
}

export default App;
