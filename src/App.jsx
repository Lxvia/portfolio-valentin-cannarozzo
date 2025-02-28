import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TemporaryAccueil from "./pages/TemporaryAccueil";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<TemporaryAccueil />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>

    </Router>
  )
}

export default App
