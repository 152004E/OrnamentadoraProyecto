import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../../../../components/componentsLayout/Button"
import { NewFinanceModal } from "../../../../components/DashBoardComponents/Admin/AdminDashComponents/financesPages/NewFinanceModal"
import { useState } from "react"
import { AlertMessage } from "../../../../components/componentsLayout/AlertMessage"
import { SectionProjectsStatus } from "../../../../components/DashBoardComponents/Admin/SectionProjectsStatus"
import { SearchBar } from "../../../../components/componentsLayout/SearchBar"

export const ProjectManager = () => {
      const [isNewOpen, setIsNewOpen] = useState(false);
  return (
   <main className="p-3 relative">
    <AlertMessage contenido={"Gestion de Proyectos"} />
    <SectionProjectsStatus/>
    <SearchBar/>

    <div className="fixed bottom-6 right-6 z-50">
            <Button
              text=""
              iconLetf={faFileCirclePlus}
              onClick={() => setIsNewOpen(true)}
              className="gap-0! p-4! text-xl rounded-full!"
            />
            <NewFinanceModal
              isOpen={isNewOpen}
              onClose={() => setIsNewOpen(false)}
            />
          </div>
   </main>
  )
}

