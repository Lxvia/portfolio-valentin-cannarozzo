import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TemporaryAccueil from "./pages/TemporaryAccueil";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemporaryAccueil />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
