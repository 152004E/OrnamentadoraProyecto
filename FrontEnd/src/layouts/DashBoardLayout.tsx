import { Outlet } from "react-router-dom";
import { Navbar } from "../components/componentsLayout/MainLayout/Navbar";

const DashBoardLayout = () => {
  return (
    <div className="lg:w-250 lg:flex lg:flex-col lg:m-auto">
      <Navbar />
      <main className="py-16 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;
