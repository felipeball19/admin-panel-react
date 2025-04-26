import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Clientes from './pages/Clientes.jsx';
import Proveedor from './pages/Proveedor.jsx';
import Usuarios from './pages/Usuarios.jsx';
import Logout from './pages/Logout.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
