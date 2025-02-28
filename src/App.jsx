import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TemporaryAccueil from "./pages/TemporaryAccueil";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemporaryAccueil />} />
      </Routes>
    </Router>
  )
}

export default App
