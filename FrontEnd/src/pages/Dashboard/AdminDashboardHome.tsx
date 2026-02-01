import { SectionFinance } from "../../components/DashBoardComponents/Admin/ComponentsDashHome/SectionFinance";
import { SectionManagerProyects } from "../../components/DashBoardComponents/Admin/ComponentsDashHome/SectionManagerProyects";
import { SectionSettings } from "../../components/DashBoardComponents/Admin/ComponentsDashHome/SectionSettings";
import { SectionTeam } from "../../components/DashBoardComponents/Admin/ComponentsDashHome/SectionTeam";
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
