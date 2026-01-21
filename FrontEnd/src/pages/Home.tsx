import { HeroSection } from "../components/home/HeroSection";
import { HomeProjects } from "../components/home/HomeProjects";
import { StatsSection } from "../components/home/StatsSection";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <HomeProjects/>
    </div>
  );
};
