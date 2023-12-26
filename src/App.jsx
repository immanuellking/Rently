import { useState, useMemo, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SpacesPage from "./Pages/SpacesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpaceDetailsPage from "./Pages/SpaceDetailsPage";
import TenantSignUp from "./Pages/TenantSignUp";

function App() {
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);
  const [currentPath, setCurrentPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const noHeaderAndFooterRoutes = useMemo(() => ["/create-account"], []);

  useEffect(() => {
    for (let i = 0; i < noHeaderAndFooterRoutes.length; i++) {
      if (currentPath.includes(noHeaderAndFooterRoutes[i])) {
        setShowHeaderAndFooter(false);
        return;
      }
      setShowHeaderAndFooter(true);
    }
  }, [currentPath, noHeaderAndFooterRoutes]);

  return (
    <div className="w-full">
      {showHeaderAndFooter && <Header />}
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/spaces"
          element={<SpacesPage />}
        />
        <Route
          path="/apartment/:spaceId"
          element={<SpaceDetailsPage />}
        />
        <Route
          path="/create-account"
          element={<TenantSignUp />}
        />
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
