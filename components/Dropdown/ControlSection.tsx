import { Icon } from "@iconify/react"
import { ButtonParallaxTransparent } from "../Buttons/ButtonParallax"
import { useEffect, useState } from "react"
import { useSoundContext } from "@/utils/useSound"
import { Tabs, Tab } from "@nextui-org/tabs";
import { useSelectedTranslation, useTranslationContext } from "@/utils/useTranslations";

interface ButtonControlProps {
  state: boolean,
  children: React.ReactNode,
  onClick?: () => void
}

export const ButtonControl = ({ state, children, onClick }: ButtonControlProps) => {
  return (
    <>
      {state ?
        <button onClick={onClick} className="flex flex-row bg-n-1/10 text-white h-[6rem] min-w-[5.5rem] rounded-3xl pointer-events-auto w-full transition-all">
          {children}
        </button>
        :
        <button onClick={onClick} className="flex flex-row bg-transparent text-gray-500 h-[6rem] min-w-[5.5rem] opacity-50 transition-all">
          {children}
        </button>
      }
    </>
  )
}



export const ControlSectionButtons = () => {

  const [theme, setTheme] = useState(true);

  const { soundEnabled, toggleSound } = useSoundContext();

  const { translate, changeLanguage } = useTranslationContext();

  const toggleTheme = () => {
    setTheme(!theme);
  }


  return (
    <section>
      <div className="flex flex-row items-start justify-center gap-2">

        <ButtonControl state={soundEnabled} onClick={toggleSound}>
          <ButtonParallaxTransparent className="flex flex-col items-center justify-center w-full h-full ">
           {soundEnabled ?

           <>
           <Icon icon="solar:volume-loud-line-duotone" width="1.2em" height="1.2em" />
           <span className="text-sm mt-2">{translate("sound_title_ON")}</span>
           </>

           :
           <>
           <Icon icon="solar:volume-cross-line-duotone" width="1.2em" height="1.2em" />
            <span className="text-sm mt-2">{translate("sound_title_OFF")}</span>
           </>
           }

          </ButtonParallaxTransparent>
        </ButtonControl>

        <ButtonControl state={false}>
          <ButtonParallaxTransparent className="flex flex-col items-center justify-center w-full h-full">
          <Icon icon="solar:shield-cross-line-duotone" width="1.2em" height="1.2em" />
            <span className="text-sm mt-2">{translate("unvailable_title")}</span>
          </ButtonParallaxTransparent>
        </ButtonControl>

        <ButtonControl state={false}>
          <ButtonParallaxTransparent className="flex flex-col items-center justify-center w-full h-full">
          <Icon icon="solar:shield-cross-line-duotone" width="1.2em" height="1.2em" />
            <span className="text-sm mt-2">{translate("unvailable_title")}</span>
          </ButtonParallaxTransparent>
        </ButtonControl>

      </div>
    </section>
  )
}


export const LanguageSectionButtons = () => {

  const { translate, changeLanguage } = useTranslationContext();

  const selectedTranslation = useSelectedTranslation();
  const [selectedTab, setSelectedTab] = useState(() => localStorage.getItem('language') || 'en')

  useEffect(() => {
    changeLanguage(selectedTab);
    localStorage.setItem('language', selectedTab)
  }, [selectedTab])

  const handleChangeLanguage = (newLanguage: string) => {

    setSelectedTab(newLanguage);
  };

  return (
    <section className="">
      <div className="flex flex-row items-start justify-around gap-2">
        <div className="flex items-center justify-between h-[4rem] min-w-[5.5rem]">
          <h1>{translate("language_title")} </h1>
        </div>
        <Tabs
          defaultSelectedKey={selectedTab === "en" ? "en" : "es"}
          onSelectionChange={(index) => handleChangeLanguage(index.toString())}

          className="flex items-center h-[4rem]" key={"md"} size={"md"} aria-label="Tabs sizes" radius="full"
          classNames={{
            tabList: "bg-n-1/10",
            cursor: "bg-n-1/30",
            tab: "",
            tabContent: ""
          }}

        >
          <Tab key="es"
            title={
              <div className="flex items-center space-x-1">
                <Icon icon="material-symbols:language-spanish-rounded" width="1.6em" height="1.6em" />
                {/* <span>Spanish</span> */}

              </div>
            }

          />
          <Tab
            key="en" title={
              <div className="flex items-center space-x-1">
                <Icon icon="ri:english-input" width="1.2em" height="1.2em" />
                {/* <span>English</span> */}

              </div>
            } />
        </Tabs>
      </div>
    </section>
  )
}


export const ThemeSectionButtons = () => {

  const { translate } = useTranslationContext();

  const [selected, setSelected] = useState(() => localStorage.getItem('theme') || 'red');


  useEffect(() => {

    if (selected === "red") {
      document.documentElement.style.setProperty('--red-accent', '#ff0040');
      document.documentElement.style.setProperty('--red-accent-opacity', '#ff004049');
      document.documentElement.style.setProperty('--red-intense', '#df0c52');
      document.documentElement.style.setProperty('--red-burdeo', '#62162f');
    } else if (selected === "blue") {
      document.documentElement.style.setProperty('--red-accent', '#2196f3');
      document.documentElement.style.setProperty('--red-accent-opacity', 'rgba(33, 150, 243, 0.1)');
      document.documentElement.style.setProperty('--red-intense', '#0d47a1');
      document.documentElement.style.setProperty('--red-burdeo', '#2379ff');

    }
    else if (selected === "green") {
      document.documentElement.style.setProperty('--red-accent', '#00bf4a');
      document.documentElement.style.setProperty('--red-accent-opacity', 'rgba(0, 255, 111, 0.1)');
      document.documentElement.style.setProperty('--red-intense', '#00ff9c');
      document.documentElement.style.setProperty('--red-burdeo', '#1e2c23');
    }

    localStorage.setItem('theme', selected)

  }, [selected])



  const handleTabChange = (index: string) => {
    setSelected(index);
  }



  return (
    <section className="">
      <div className="flex flex-row items-start justify-around gap-2">
        <div className="flex items-center justify-between h-[4rem] min-w-[5.5rem]">
          <h1 className="ml-6">{translate("theme_title")} </h1>
        </div>
        <Tabs
          // defaultSelectedKey={selectedTab === "en" ? "en" : "es"}
          // onSelectionChange={(index) => handleChangeLanguage(index.toString())}

          selectedKey={selected}
          onSelectionChange={(index) => handleTabChange(index.toString())}

          className="flex items-center h-[4rem]" key={"md"} size={"md"} aria-label="Tabs sizes" radius="full"
          classNames={{
            tabList: "bg-n-1/10",
            cursor: "bg-n-1/30",
            tab: "",
            tabContent: ""
          }}

        >
          <Tab key="red"
            title={
              <div className="flex items-center space-x-1">
                <span>Red</span>

              </div>
            }

          />
          <Tab
            key="blue" title={
              <div className="flex items-center space-x-1">
                <span>Blue</span>

              </div>
            } />

          <Tab
            key="green" title={
              <div className="flex items-center space-x-1">
                <span>Green</span>

              </div>
            } />

        </Tabs>
      </div>
    </section>
  )
}