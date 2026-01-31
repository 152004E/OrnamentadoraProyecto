import { AddImg } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/AddImg";
import { ButtonsSettings } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/ButtonsSettings";
import { PerfilSettings } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/Perfil/PerfilSettings";


export const PerfilPage = () => {
  return (
    <div>
      <PerfilSettings/>
      <AddImg title="Sube tu Foto de perfil"/>
      <ButtonsSettings />
    </div>
  );
};
