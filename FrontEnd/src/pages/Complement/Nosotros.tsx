import { AboutUsSection } from "../../components/componentsLayout/NosotrosComponents/AboutUsSection"
import { ContactoSection } from "../../components/componentsLayout/NosotrosComponents/ContactoSection"
import { HeroNosotros } from "../../components/componentsLayout/NosotrosComponents/HeroNosotros"
import { ValoresNosotros } from "../../components/componentsLayout/NosotrosComponents/ValoresNosotros"

export const Nosotros = () => {
  return (
    <main>
        <HeroNosotros/>
        <AboutUsSection/>
        <ValoresNosotros/>
        <ContactoSection/>
    </main> 
  )
}

