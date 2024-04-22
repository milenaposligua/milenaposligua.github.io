"use client"

import { useState, useEffect } from "react";

import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { motion } from 'framer-motion';

import { navigationContent } from '@/constants'
import { usePathname } from "next/navigation";
import { HamburgerMenu } from "./design/Navbar";
import Button from "@/components/Buttons/Button";
import { Avatar } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/react";

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { UserTwitterCard } from "@/components/Card/Card";

import MenuSvg from "@/assets/svg/MenuSvg";

import { Milena } from "@/assets";

import { Icon } from "@iconify/react";

import { ButtonParallax } from "@/components/Buttons/ButtonParallax";
import { ControlSectionButtons, LanguageSectionButtons, ThemeSectionButtons } from "../Dropdown/ControlSection";
import { useSoundContext } from "@/utils/useSound";
import { useTranslationContext } from "@/utils/useTranslations";

interface NavbarProps {
  handleMouseOver: () => void;
  handleMouseOut: () => void;

}


export const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false)
  const [isTop, setIsTop] = useState(true);

  const { translate, changeLanguage } = useTranslationContext();

  const { content } = navigationContent(translate)

  const router = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsTop(position === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }

  const handleClick = (e: any) => {
    // if (!openNavigation) return;

    // enablePageScroll();
    // setOpenNavigation(false);



    console.log(e.target);
  }

  return (
    <motion.header
      className={`fixed top-20 left-0 right-0 w-full z-50 ease-in duration-300 transition-all border-b border-transparent `}
      initial={{ y: -200 }}
      whileInView={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0,
        duration: 0.3,
        ease: "easeInOut",
      }}
    >

      <div className="flex items-center px-5 md:px-20 justify-between">
        <a className="block w-[3rem] xl:mr-8">
          <Avatar
            src={Milena.src}
            alt="Avatar"
            className="w-10 h-10 contain"
          />
        </a>

        <nav
          className={` top-[4.5rem] left-0 right-0 bottom-0  static flex  bg-transparent transition-colors`}
        >
          <div className="relative z-2 flex flex-row items-end justify-center m-auto lg:flex-row ">
            <Dropdown  backdrop="blur"
              classNames={{

                base: "before:lg:bg-n-1/0",
                content: "p-0 rounded-lg bg-transparent overflow-hidden shadow-none",
              }}
            >
              <DropdownTrigger disabled={false}>
                <button className="bg-transparent outline-none" disabled={false}>
                  <ButtonParallax
                  >
                    <Icon icon="solar:remote-controller-minimalistic-line-duotone" width="1.5em" height="1.5em" />
                  </ButtonParallax>
                </button>
              </DropdownTrigger>
              <DropdownMenu closeOnSelect={false} variant="faded" aria-label="Static Actions">
                <DropdownSection className="bg-[#303030]/70 lg:bg-[#303030]/40 rounded-3xl">
                  <DropdownItem closeOnSelect={false} key="new" className="data-[hover=true]:border-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-white data-[focus-visible=true]:outline-none data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:ring-offset-background-transparent border-transparent hover:border-transparent data-[selectable=true]:focus:border-transparent data-[selectable=true]:focus:bg-transparent data-[hover=true]:transition-none data-[selectable=true]:focus:text-white
                ">
                    <ControlSectionButtons></ControlSectionButtons>
                  </DropdownItem>
                </DropdownSection>

                <DropdownSection className="bg-[#303030]/70 lg:bg-[#303030]/40 rounded-3xl">
                  <DropdownItem closeOnSelect={false} key="new" className="data-[hover=true]:border-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-white data-[focus-visible=true]:outline-none data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:ring-offset-background-transparent border-transparent hover:border-transparent data-[selectable=true]:focus:border-transparent data-[selectable=true]:focus:bg-transparent data-[hover=true]:transition-none data-[selectable=true]:focus:text-white
                ">

                    <LanguageSectionButtons></LanguageSectionButtons>
                  </DropdownItem>
                </DropdownSection>

                <DropdownSection className="bg-[#303030]/70 lg:bg-[#303030]/40 rounded-3xl">
                  <DropdownItem closeOnSelect={false} key="new" className="data-[hover=true]:border-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-white data-[focus-visible=true]:outline-none data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:ring-offset-background-transparent border-transparent hover:border-transparent data-[selectable=true]:focus:border-transparent data-[selectable=true]:focus:bg-transparent data-[hover=true]:transition-none data-[selectable=true]:focus:text-white
                ">

                    <ThemeSectionButtons></ThemeSectionButtons>
                  </DropdownItem>
                </DropdownSection>


              </DropdownMenu>

            </Dropdown>

            {content.map((item) => (
              <Popover
              key={item.id}
              classNames={{
                base: "before:bg-[#181818]",
                content: "bg-[#181818]",
              }}

              showArrow placement="bottom-end" backdrop="transparent">
                <PopoverTrigger>
                  <button className="bg-transparent border-transparent ring-0 outline-none">
                  <ButtonParallax>


                    <a
                      key={item.id}
                      // href={item.url}
                      // onClick={handleClick}
                      className={` text-right relative font-code text-sm  text-n-1 transition-colors uppercase
    } px-6 py-0 md:py-1 lg:-mr-0.25 lg:text-sm m-0  p-0 lg:font-semibold ${item.url === router
                          ? "z-2 lg:text-n-1"
                          : "lg:text-n-1/50"
                        } lg:leading-5 lg:hover:text-n-1 xl:px-0`}
                    >
                      {item.title}
                    </a>
                  </ButtonParallax>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="p-1">
                  <UserTwitterCard />
                </PopoverContent>
              </Popover>

            ))}
          </div>

          <HamburgerMenu />
        </nav>
        {/* <div className="absolute right-0 px-5 md:px-20 "> */}
          {/* <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button> */}
        {/* </div> */}


      </div>

    </motion.header>
  )
}