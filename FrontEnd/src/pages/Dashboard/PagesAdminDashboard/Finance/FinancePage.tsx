import { MovementHistory } from "../../../../components/DashBoardComponents/Admin/AdminDashComponents/financesPages/MovementHistory";
import { SectionFinance } from "../../../../components/DashBoardComponents/Admin/ComponentsDashHome/SectionFinance";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../components/componentsLayout/Button";
import { CategoryBudget } from "../../../../components/DashBoardComponents/Admin/AdminDashComponents/financesPages/CategoryBudget";

import { useState } from "react";
import { FilterModal } from "../../../../components/DashBoardComponents/Admin/AdminDashComponents/financesPages/FilterModal";
import { NewFinanceModal } from "../../../../components/DashBoardComponents/Admin/AdminDashComponents/financesPages/NewFinanceModal";
import { MovementHistoryModal } from "../../../../components/DashBoardComponents/Admin/AdminDashComponents/financesPages/MovementHistoryModal";

export const FinancePage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isMovementHistoryOpen, setIsMovementHistoryOpen] = useState(false);

  return (
    <main className="p-3 relative">
      <SectionFinance sonContect="Resumen Financiero" />

      <MovementHistory
        onOpenFilters={() => setIsFilterOpen(true)}
        onOpenHistory={() => setIsMovementHistoryOpen(true)}
      />
      <CategoryBudget />

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          text=""
          iconLetf={faPlus}
          onClick={() => setIsNewOpen(true)}
          className="gap-0! p-4! text-xl rounded-full!"
        />
        <NewFinanceModal
          isOpen={isNewOpen}
          onClose={() => setIsNewOpen(false)}
        />
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
      <MovementHistoryModal
        isOpen={isMovementHistoryOpen}
        onClose={() => setIsMovementHistoryOpen(false)}
      />
    </main>
  );
};
