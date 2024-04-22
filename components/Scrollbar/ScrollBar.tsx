import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(224);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setMaxHeight(scrollContainerRef.current?.clientHeight || 224);
    }
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, maxHeight - 48]);

  return (
    <div ref={scrollContainerRef} className="fixed top-1/2 right-4 w-2 h-[14rem] overflow-hidden rounded-md transition-opacity bg-[#ffffff1a] z-40 sd:state" style={{ transform: 'translateY(-50%)' }}>
      <motion.div className="absolute bg-n-1 w-full shadow-sm rounded-lg origin-top h-[3rem]" style={{ y }}
        viewport={{ once: true }}
      >
      </motion.div>
    </div>
  );
}
