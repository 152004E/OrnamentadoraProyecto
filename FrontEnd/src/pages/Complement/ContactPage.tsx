import { SectionComunication } from "../../components/componentsLayout/MainLayout/SectionComunication";
import { StatsSection } from "../../components/componentsLayout/MainLayout/StatsSection";
import { ChoseUs } from "../../components/ContactComponents/ChoseUs";

export const ContactPage = () => {
  return (
    <section className="">
      <SectionComunication />
      <ChoseUs />
      <StatsSection/>
    </section>
  );
};
