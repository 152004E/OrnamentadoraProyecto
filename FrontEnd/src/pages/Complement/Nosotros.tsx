import { AboutUsSection } from "../../components/NosotrosComponents/AboutUsSection"
import { ContactoSection } from "../../components/NosotrosComponents/ContactoSection"
import { HeroNosotros } from "../../components/NosotrosComponents/HeroNosotros"
import { ValoresNosotros } from "../../components/NosotrosComponents/ValoresNosotros"

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

