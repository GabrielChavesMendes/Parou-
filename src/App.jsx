import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { initialRoutes } from './data/mockData';

export default function App() {
  const [routes, setRoutes] = useState(() => {
    const saved = localStorage.getItem('parou_routes');
    return saved ? JSON.parse(saved) : initialRoutes;
  });

  useEffect(() => {
    localStorage.setItem('parou_routes', JSON.stringify(routes));
  }, [routes]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* Rotas liberadas sem bloqueio de autenticação */}
        <Route path="/dashboard" element={<Dashboard routes={routes} setRoutes={setRoutes} />} />
        <Route path="/perfil" element={<Profile routes={routes} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}