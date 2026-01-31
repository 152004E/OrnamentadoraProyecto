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
import { AdminDashboardHome } from "./pages/Dashboard/AdminDashboardHome";
import { SystemSettings } from "./pages/Dashboard/PagesAdminDashboard/SystemSettings/SystemSettings";
import DashBoardLayout from "./layouts/DashBoardLayout";
import { EmpresaPage } from "./pages/Dashboard/PagesAdminDashboard/SystemSettings/EmpresaPage";
import { PerfilPage } from "./pages/Dashboard/PagesAdminDashboard/SystemSettings/PerfilPage";
import { ProyectosPage } from "./pages/Dashboard/PagesAdminDashboard/SystemSettings/ProyectosPage";
import { SeguridadPage } from "./pages/Dashboard/PagesAdminDashboard/SystemSettings/SeguridadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con Navbar  y footer*/}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProyectosRealizados />} />
          <Route path="/detalleProyectos" element={<DetallesProyecto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
        {/* Rutas Con Navbar*/}

        <Route element={<DashBoardLayout />}>
          <Route path="/SystemSettings" element={<SystemSettings />}>
            <Route index element={<EmpresaPage />} />
            <Route path="empresa" element={<EmpresaPage />} />
            <Route path="perfil" element={<PerfilPage />} />
            <Route path="proyectos" element={<ProyectosPage />} />
            <Route path="seguridad" element={<SeguridadPage />} />
          </Route>

          <Route path="/AdminDashboardHome" element={<AdminDashboardHome />} />
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
