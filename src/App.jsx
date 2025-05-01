// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import TemporaryAccueil from './pages/TemporaryAccueil';
import Home from './pages/Home';

function AppContent() {
  const location = useLocation();
  const excludedRoutes = ['/']; // Chemins où la Navbar est masquée

  const shouldShowNavbar = !excludedRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<TemporaryAccueil />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
