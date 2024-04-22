import { motion } from "framer-motion";
import { TracingBeam } from "../Background/TracingBeam"
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Section } from "../Section/Section";
import { formationContent } from "@/constants";
import { useTranslationContext } from "@/utils/useTranslations";

interface FormationProps {
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  handleCursorTextShow: (show: boolean, text: string) => void;
}

export const TracingCV = ({handleMouseOver, handleMouseOut, handleCursorTextShow}: FormationProps) => {

  const {translate, changeLanguage} = useTranslationContext();

  const {content} = formationContent(translate)

  return (
    <Section id="trancingbeam"
    className=" z-10  py-0 lg:py-0 xl:py-0 w-screen h-fit flex items-center justify-center flex-col mb-[18.25rem]"
    crossesOffset="lg:translate-y-[5.25rem]"
    padding={false}

    >
      <div className="flex flex-col items-center justify-center max-w-4xl px-6 mb-12">
      <motion.h1
        className="text-1xl font-light mb-4 text-n-1/30 text-left md:text-center w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        {translate("cv_badge_text")}
      </motion.h1>
      <motion.h1
        className="text-6xl font-bold mb-4 "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        {translate("cv_title")}
      </motion.h1>
      <p className=" relative text-1xl text-left md:text-center text-n-1/70 max-w-3xl mb-2">
      {translate("cv_text")}
      </p>

      <a
  onMouseOver={() => {
    handleMouseOver();
    handleCursorTextShow(true, translate("linkendin_hover"));
  }}
  onMouseLeave={() => {
    handleMouseOut();
    handleCursorTextShow(false, "");
  }}
  className="font-bold text-[--red-accent]"
>
  {translate("cv_linkedin_title")}
</a>
      </div>
    <TracingBeam className="px-6">

        <div className="max-w-2xl mx-auto antialiased relative ">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 ">
              <motion.h2 className="bg-[--red-accent] text-white rounded-full text-sm w-fit px-4 py-1 mb-4"

                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0 }}

              >
                {item.badge}
              </motion.h2>

              <motion.p className={" text-3xl mb-4 font-bold"}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0 }}

              >
                {item.title}
              </motion.p>

              <div className="text-sm  prose prose-sm dark:prose-invert ">
                {item.formations.map((formation, index) => (
                  <div key={`formation-${index}`} className="mb-9">
                    <motion.p className="text-lg font-semibold"

                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0 }}

                    >
                      {formation.title}
                    </motion.p>
                    <motion.p className="text-sm text-n-1/60"

                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0 }}
                    >
                      {formation.description}
                    </motion.p>
                    <motion.p className="text-sm text-n-1/40"

                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0 }}
                    >
                      {formation.time}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </Section>
  )
}