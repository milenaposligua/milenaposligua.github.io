"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  let maxheight = 224;


  useEffect(() => {
    maxheight = scrollContainerRef.current?.clientHeight || 224;
  }, []);
  const y = useTransform(scrollYProgress, [0, 1], [0, maxheight - 48 || 224 - 48]);

  return (
    <div  ref={scrollContainerRef} className="fixed top-1/2 right-4 w-2 h-[14rem] overflow-hidden rounded-md transition-opacity bg-[#ffffff1a] z-40 sd:state" style={{transform: 'translateY(-50%)'}}>
      <motion.div className="absolute bg-n-1 w-full shadow-sm rounded-lg origin-top h-[3rem]" style={{y}}
      viewport={{ once: true}}
      >
      </motion.div>
    </div>
  );
}

