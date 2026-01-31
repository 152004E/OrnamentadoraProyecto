import { AddImg } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/AddImg";
import { ButtonsSettings } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/ButtonsSettings";
import { EmpresaSettings } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/Empresa/EmpresaSettings";

export const EmpresaPage = () => {
  return (
    <div>
      <EmpresaSettings />
      <AddImg title="Cambia el logotipo" />
      <ButtonsSettings />
    </div>
  );
};
