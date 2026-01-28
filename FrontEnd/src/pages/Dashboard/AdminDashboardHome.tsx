import { HeaderDashBoard } from "../../components/DashBoardComponents/Admin/HeaderDashBoard";
import { SectionFinance } from "../../components/DashBoardComponents/Admin/SectionFinance";
import { SectionManagerProyects } from "../../components/DashBoardComponents/Admin/SectionManagerProyects";
import { SectionTeam } from "../../components/DashBoardComponents/Admin/SectionTeam";
export const AdminDashboardHome = () => {
  return (
    <main className="">
      <HeaderDashBoard />
      <div className="px-6">
        <SectionFinance />
        <SectionManagerProyects />
        <SectionTeam/>
      </div>
    </main>
  );
};
