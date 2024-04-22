"use client";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {

  showRadialGradient?: boolean;
  opacity?: number;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  opacity = 0.2,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          `absolute w-full flex flex-col  h-[100vh] items-center justify-center transition-bg opacity-[${opacity}] top-0`,
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,var(--red-burdeo)_0%,var(--red-intense)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--red-burdeo)_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
              [--aurora:repeating-linear-gradient(100deg,var(--red-intense)_10%,var(--red-intense)_15%,var(--red-intense)_20%,var(--red-intense)_25%,var(--red-intense)_30%)]
              [background-image:var(--white-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px]  dark:invert-0
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:200%,_100%]
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-50 will-change-transform`,

                showRadialGradient &&
                  `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
              )}
          ></div>
        </div>

      </div>
    </main>
  );
};
