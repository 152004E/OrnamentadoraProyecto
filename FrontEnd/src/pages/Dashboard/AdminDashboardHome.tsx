import { HeaderDashBoard } from "../../components/DashBoardComponents/Admin/HeaderDashBoard";
import { SectionFinance } from "../../components/DashBoardComponents/Admin/SectionFinance";
import { SectionManagerProyects } from "../../components/DashBoardComponents/Admin/SectionManagerProyects";
export const AdminDashboardHome = () => {
  return (
    <main className="">
      <HeaderDashBoard />
      <div className="px-6">
        <SectionFinance />
        <SectionManagerProyects />
      </div>
    </main>
  );
};
