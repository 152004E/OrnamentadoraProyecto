import { SectionFinance } from "../../components/DashBoardComponents/Admin/SectionFinance";
import { SectionManagerProyects } from "../../components/DashBoardComponents/Admin/SectionManagerProyects";
import { SectionSettings } from "../../components/DashBoardComponents/Admin/SectionSettings";
import { SectionTeam } from "../../components/DashBoardComponents/Admin/SectionTeam";
export const AdminDashboardHome = () => {
  return (
    <main className="">
      <div className="px-6 flex flex-col gap-7">
        <SectionFinance />
        <SectionManagerProyects />
        <SectionTeam/>
        <SectionSettings/>
      </div>
    </main>
  );
};
