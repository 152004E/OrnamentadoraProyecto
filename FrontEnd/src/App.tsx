import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import AuthLayout from "./layouts/AuthLayout";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { Home } from "./pages/Home";
import { ProyectosRealizados } from "./pages/proyectos/ProyectosRealizados";
import { DetallesProyecto } from "./pages/proyectos/DetallesProyecto";
import { Nosotros } from "./pages/Complement/Nosotros";
import { ContactPage } from "./pages/Complement/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProyectosRealizados />} />
          <Route path="/detalleProyectos" element={<DetallesProyecto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
        {/* Rutas sin Navbar */}

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
