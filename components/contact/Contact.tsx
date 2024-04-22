import { motion } from "framer-motion";
import { Section } from "../Section/Section"
import { Cobe } from "../cobe/Cobe";
import { useTranslationContext } from "@/utils/useTranslations";
import Starfield from "../Background/Starfield";
import { SpotlightContact } from "../Background/SpotlightContact";



interface ContactProps {
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  handleCursorTextShow: (show: boolean, text: string) => void;
}

export const Contact = ({ handleMouseOver, handleMouseOut, handleCursorTextShow }: ContactProps) => {

  const { translate, changeLanguage } = useTranslationContext();

  return (
    <Section id="contact-ts" className="z-10 py-0"
      crossesOffset="lg:translate-y-[5.25rem]"
      padding={false}>
      <div className="container relative mt-[20rem] md:mt-0">
        <div className="relative z-1 top-10 h-[60svh] w-full md:top-0 md:h-screen mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-7xl md:text-9xl font-bold text-center text-white uppercase"
            >{translate("contact_title")}</motion.h1>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              onMouseOver={() => {
                handleMouseOver();
                handleCursorTextShow(true, translate("mail_hover"));
              }}
              onMouseLeave={() => {
                handleMouseOut();
                handleCursorTextShow(false, "");
              }}
              className="text-center text-3xl md:text-5xl text-n-1/30" href="mailto:posliguamilena@gmail.com">posliguamilena@gmail.com</motion.a>
          </div>
          <Cobe></Cobe>
        </div>

      </div>
      <Starfield
        starCount={200}
        // starColor="var(--red-accent)"
        speedFactor={0.05}
        backgroundColor="#020202"
      />

      <div className="absolute w-screen h-full top-0 right-0 flex flex-row justify-end">
        <SpotlightContact
          className="right-0 relative"
          fill="var(--red-accent)" />
      </div>




    </Section>

  )
}