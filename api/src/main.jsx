import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from '../src/components/login.jsx'
import './index.css';
import { FiltersProvider } from './context/filter.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/loginContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <FiltersProvider>
      <Router>
        <Routes>
          <Route path="/Home" element={<App />} /> {/* Ruta principal */}
          <Route path="/login" element={<Login />} /> {/* Ruta para el componente Login */}
        </Routes>
      </Router>

    </FiltersProvider>

  </AuthProvider>

)
