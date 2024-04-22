import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const SpotlightContact = ({ className, fill }: SpotlightProps) => {
  return (
    <motion.svg
  initial={{ opacity: 0, rotate: -10, y: "100%" }} // Cambiado el valor de rotate y agregado y: "100%"
  whileInView={{ opacity: 0.3, rotate: 0, y: "0%" }} // Cambiado el valor de rotate y agregado y: "0%"
  transition={{ duration: 2, delay: 0.5}}
  className={cn(
    "animate-spotlightContact pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] right-0",
    className
  )}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 3787 2842"
  fill="none"
>
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </motion.svg>
  );
};
