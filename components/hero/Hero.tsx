"use client"

import { useRef } from "react";
import { Section } from "../Section/Section"
import { motion } from "framer-motion";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { instagram } from "@/assets";
import Image from "next/image";
import { useTranslationContext } from "@/utils/useTranslations";

interface HeroProps {
  handleMouseOver: () => void;
  handleMouseOut: () => void;

}

export const Hero = ({handleMouseOver, handleMouseOut}: HeroProps) => {
  const parallaxRef = useRef(null);

  const {translate, changeLanguage} = useTranslationContext();



  return (
    <Section
      className="z-10 py-0"
      crossesOffset="lg:translate-y-[5.25rem]"
      padding={false}
      id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 top-10 h-[60svh] w-full md:top-0 md:h-screen mx-auto flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0}}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3}}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="text-[2.4rem] md:text-5xl lg:text-6xl xl:text-[5vw] font-bold leading-[3rem] text-white w-full text-center">
            <span className="block">{translate("hero_title")}</span>
          </motion.h1>

        </div>
      </div>
    </Section>
  )
}