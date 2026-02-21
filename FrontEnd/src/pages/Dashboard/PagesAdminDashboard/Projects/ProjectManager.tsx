import { useState } from "react";
import { AlertMessage } from "../../../../components/componentsLayout/AlertMessage";
import { SectionProjectsStatus } from "../../../../components/DashBoardComponents/Admin/SectionProjectsStatus";
import { SearchBar } from "../../../../components/componentsLayout/SearchBar";
import { ProjectCard } from "../../../../components/componentsLayout/proyectosComponents/ProjectCard";
import CreateProjectModal from "../../../../components/DashBoardComponents/Admin/ProjectCreation/CreateProjectModal";
import { Button } from "../../../../components/componentsLayout/Button";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

export const ProjectManager = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="p-3 relative">
      <AlertMessage contenido={"Gestion de Proyectos"} />
      <SectionProjectsStatus />
      <SearchBar />

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          text=""
          iconLetf={faFileCirclePlus}
          onClick={() => setOpen(true)}
          className="gap-0! p-4! text-xl rounded-full!"
        />

        <CreateProjectModal isOpen={open} onClose={() => setOpen(false)} />
      </div>

      <ProjectCard mode="edit" showStatus />
    </main>
  );
};
