import { Outlet } from "react-router-dom";
import { Navbar } from "../components/componentsLayout/MainLayout/Navbar";
import { Footer } from "../components/componentsLayout/MainLayout/Footer";

const MainLayout = () => {
  return (
    <div className="lg:w-250 lg:flex lg:flex-col lg:m-auto">
      <Navbar />
      <main className="pt-16 flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
