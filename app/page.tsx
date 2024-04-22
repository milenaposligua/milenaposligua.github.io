"use client"

import { AuroraBackground } from "@/components/Background/Aurora"
import { ScrollBar } from "@/components/Scrollbar/ScrollBar"
import { About } from "@/components/about/About"
import { Footer } from "@/components/footer/Footer"
import { Hero } from "@/components/hero/Hero"
import "@/components/navbar/Navbar"
import { Navbar } from "@/components/navbar/Navbar"
import { Contact } from "@/components/contact/Contact"
import { TracingCV } from "@/components/tracing/TracingCV"
import { useEffect, useRef, useState } from "react"
import { Cobe } from "@/components/cobe/Cobe"
import { GetStaticProps } from "next"
import { useRouter } from "next/navigation"


export default function Page(){

  const delay = 18;

  const dot = useRef<HTMLDivElement>(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(0);
  const endY = useRef(0);

  const requestRef = useRef<number | null>(null);

  const [scaledot, setScaledot] = useState(1);
  const [isButton, setIsButton] = useState(false);

  const [showCursorText, setShowCursorText] = useState(false);
  const [customText, setCustomText] = useState("");


  useEffect(() => {

    if (typeof window !== 'undefined') { // Verificar si window está definido
      endX.current = window.innerWidth / 2;
      endY.current = window.innerHeight / 2;
    }

      // document.addEventListener('mousedown', mouseOverEvent);
      // document.addEventListener('mouseup', mouseOutEvent);
      document.addEventListener('mousemove', mouseMoveEvent);
      document.addEventListener('mouseenter', mouseEnterEvent);
      document.addEventListener('mouseleave', mouseLeaveEvent);

      // animateDotOutline();

      return () => {
          // document.removeEventListener('mousedown', mouseOverEvent);
          // document.removeEventListener('mouseup', mouseOutEvent);
          document.removeEventListener('mousemove', mouseMoveEvent);
          document.removeEventListener('mouseenter', mouseEnterEvent);
          document.removeEventListener('mouseleave', mouseLeaveEvent);

          if(requestRef.current) {
            cancelAnimationFrame(requestRef.current);
          }
      };
  }, []);

  const handleCursorTextShow = (show: boolean, text: string) => {
    setShowCursorText(show);
    setCustomText(text);
  };

  const toggleCursorVisibility = () => {
    if (dot && dot.current && dot.current.style){
      if (cursorVisible.current) {
          dot.current.style.opacity = '1';
      } else {
          dot.current.style.opacity = '0';
      }
    }
  };

    const toggleCursorSize = () => {
      if (cursorEnlarged.current && dot.current) {
        dot.current.style.scale = isButton ? '2' : '8';
        setScaledot(12);
      } else if (dot.current) {
        dot.current.style.scale = '1';
        setScaledot(1);
      }
    };

    const mouseOverEvent = () => {
      cursorEnlarged.current = true;
      toggleCursorSize();
    };

  const mouseOutEvent = () => {
      cursorEnlarged.current = false;
      toggleCursorSize();
  };

  const mouseEnterEvent = () => {
      cursorVisible.current = true;
      toggleCursorVisibility();

  };

  const mouseLeaveEvent = () => {
      cursorVisible.current = false;
      toggleCursorVisibility();
  };

  const mouseMoveEvent = (e: { pageX: number; pageY: number }) => {
      cursorVisible.current = true;
      toggleCursorVisibility();

      endX.current = e.pageX;
      endY.current = e.pageY;

      if (dot.current) {
        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
      }
  };

  const [hitBottom, setHitBottom] = useState(true);

  return (
    <div className=" overflow-hidden bg-n-8 scroll-hidden">
      <Navbar />
      <AuroraBackground opacity={0.5}></AuroraBackground>
      <Hero handleMouseOver={mouseOverEvent} handleMouseOut={mouseOutEvent}/>
      <About handleMouseOver={mouseOverEvent} handleMouseOut={mouseOutEvent}/>
      <TracingCV handleMouseOver={mouseOverEvent}
        handleMouseOut={mouseOutEvent}
        handleCursorTextShow={handleCursorTextShow}/>
      <Contact handleMouseOver={mouseOverEvent}
        handleMouseOut={mouseOutEvent}
        handleCursorTextShow={handleCursorTextShow}/>
      {/* <Footer/> */}
      <ScrollBar></ScrollBar>
      <div ref={dot} className="cursor-dot hidden lg:flex" style={{scale: scaledot}}>
        <p className="cursor-text text-center text-n-8" style={{ display: showCursorText ? 'block' : 'none' }}>
          {customText}
        </p>
      </div>

    </div>
  )
}