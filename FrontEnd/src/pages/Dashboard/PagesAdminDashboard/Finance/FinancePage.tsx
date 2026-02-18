import { MovementHistory } from "../../../../components/DashBoardComponents/Admin/AdminDashComponents/financesPages/MovementHistory";
import { SectionFinance } from "../../../../components/DashBoardComponents/Admin/ComponentsDashHome/SectionFinance";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../components/componentsLayout/Button";
import { CategoryBudget } from "../../../../components/DashBoardComponents/Admin/AdminDashComponents/financesPages/CategoryBudget";

export const FinancePage = () => {
  return (
    <main className="p-3 relative">
      <SectionFinance sonContect="Resumen Financiero" />
      <MovementHistory />
      <CategoryBudget/>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          text=""
          iconLetf={faPlus}
          className="gap-0! p-4! text-xl  rounded-full!"
        />
      </div>
    </main>
  );
};
