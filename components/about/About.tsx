"use client"

import { motion } from "framer-motion"
import { Section } from "../Section/Section"
import {Initial } from "@/assets"
import { Spotlight } from "../Background/Spotlight";
import { Ellipse } from "../Figure/Ellipse";
import { useTranslationContext } from "@/utils/useTranslations";

interface AboutProps {
  handleMouseOver: () => void;
  handleMouseOut: () => void;

}

export const About = ({handleMouseOver, handleMouseOut}: AboutProps) => {

  const {translate, changeLanguage} = useTranslationContext();


  return (
    <Section
      className=" z-10 pb-[2rem] py-0 lg:py-0 xl:py-0 w-screen h-screen flex items-center justify-center"
      crossesOffset="lg:translate-y-[5.25rem]"
      padding={false}
      id="about_me">
      <main
        className="container relative z-1  mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
      >
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center ">
          <div className="flex flex-col items-start justify-center text-left w-full">
            <motion.h1 className=" text-6xl xl:text-[4vw] font-bold lg:w-[30rem] xl:w-[33rem] lg:h-auto"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5}}

            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseOut}

            >{translate("about_title")}<br /></motion.h1>
            <motion.p className="mt-5 text-md text-n-1/50"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7}}

            >{translate("about_desc")}</motion.p>
          </div>
          <motion.div className="test absolute z-[-1] w-[25rem] h-[25rem] opacity-30"
          initial={{ opacity: 0, rotate: 10 }}
          whileInView={{ opacity: 0.3, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.5}}

          >
          </motion.div>
          <div className="flex items-center justify-center text-left ml-0 lg:ml-40 mt-10 lg:mt-0">
            <motion.h1 className="text-1xl font-light text-n-1/70"

            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5}}
            >
             {translate("about_text")}
            </motion.h1>
          </div>
        </div>
      </main>
      {/* <Ellipse></Ellipse> */}
      <Spotlight
        className="-top-[-0] left-0 md:left-60 md:-top-20"
        fill="var(--red-accent)"
      />
    </Section>
  )
}