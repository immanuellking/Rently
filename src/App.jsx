import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Spaces from "./Pages/Spaces";
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
          element={<Spaces />}
        />
      </Routes>
    </>
  );
}

export default App;
