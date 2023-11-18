import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SpacesPage from "./Pages/SpacesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/spaces"
          element={<SpacesPage />}
        />
        <Route path="/apartment/:spaceId" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
