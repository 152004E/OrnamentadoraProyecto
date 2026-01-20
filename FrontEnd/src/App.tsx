import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

import AuthLayout from "./layouts/AuthLayout";
import { Register } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Rutas sin Navbar */}

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
