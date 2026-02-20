import { SearchBar } from "../componentsLayout/SearchBar";
import { TitleSubTitle } from "../componentsLayout/TitleSubTitle";

export const HeroProyectos = () => {
  return (
    <div>
      <TitleSubTitle
        title="Proyectos Realizados"
        subTitle="Descubre nuestra experiencia a través de proyectos de ornamentación realizados"
        classTitle="text-3xl! text-blue-800  tracking-wide"
        classSubTitle="text-sm my-2 text-gray-500"
      />
      <SearchBar />
    
    </div>
  );
};
