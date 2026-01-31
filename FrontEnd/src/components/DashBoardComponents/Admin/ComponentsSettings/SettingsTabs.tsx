import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Empresa", path: "empresa" },
  { label: "Perfil", path: "perfil" },
  { label: "Proyectos", path: "proyectos" },
  { label: "Seguridad", path: "seguridad" },
];

export const SettingsTabs = () => {
  return (
    <nav className="flex gap-7 border-b mb-6">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `pb-2 text-[16px] font-semibold ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-400 hover:text-blue-600"
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
};
