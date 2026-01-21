import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16 flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
