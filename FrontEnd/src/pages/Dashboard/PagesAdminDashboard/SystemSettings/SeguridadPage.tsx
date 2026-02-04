import { ButtonsSettings } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/ButtonsSettings";
import { ActivesSesion } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/Security/ActivesSesion";
import { SecuritySerrings } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/Security/SecuritySerrings";

export const SeguridadPage = () => {
  return (
    <div>
      <SecuritySerrings />
      <ButtonsSettings />
      <ActivesSesion />
    </div>
  );
};
