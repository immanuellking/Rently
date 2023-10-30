import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SpacesPage from "./Pages/SpacesPage";
import Header from "./components/Header";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
