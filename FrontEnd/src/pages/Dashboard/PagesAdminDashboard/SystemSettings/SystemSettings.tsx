import { Outlet } from "react-router-dom";
import { TitleSubTitle } from "../../../../components/componentsLayout/TitleSubTitle";
import { SettingsTabs } from "../../../../components/DashBoardComponents/Admin/ComponentsSettings/SettingsTabs";

export const SystemSettings = () => {
  return (
    <main className="px-6">
      <div className="mb-3">
        <TitleSubTitle
          title="Ajustes Generales"
          subTitle="Administra la informacion y configuracion de la empresa"
          classTitle="text-4xl tracking-tight"
        />
      </div>
      <SettingsTabs />
      <Outlet />
    </main>
  );
};
