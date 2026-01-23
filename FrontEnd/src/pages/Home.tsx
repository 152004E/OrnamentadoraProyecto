import { StatsSection } from "../components/componentsLayout/StatsSection";
import { HeroSection } from "../components/home/HeroSection";
import { HomeComunication } from "../components/home/HomeComunication";
import { HomeProjects } from "../components/home/HomeProjects";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HomeComunication />
      <HomeProjects />
      <StatsSection />
    </div>
  );
};
