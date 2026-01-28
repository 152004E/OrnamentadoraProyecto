import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../componentsLayout/Button";

export const HeaderDashBoard = () => {
  return (
    <header className="flex justify-between items-center border-b border-gray-200 px-6 ">
      <h2 className="text-[20px] font-semibold">Panel De Control</h2>

      <div className="flex items-center gap-2">
        <div className="flex flex-col text-right ">
          <p className="font-medium ">Wilian</p>
          <p className="text-[11px] text-gray-500">Administrador</p>
        </div>
        {/* Separador vertical */}
        <div className="w-px h-9 bg-gray-300"></div>
        <Button text="" icon={faBell} className="w-0 px-4! py-2.5! gap-0! " />
      </div>
    </header>
  );
};
