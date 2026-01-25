import { SectionComunication } from "../components/componentsLayout/MainLayout/SectionComunication";
import { StatsSection } from "../components/componentsLayout/MainLayout/StatsSection";
import { HeroSection } from "../components/home/HeroSection";
import { HomeProjects } from "../components/home/HomeProjects";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SectionComunication/>
      <HomeProjects />
      <StatsSection />
    </div>
  );
};
