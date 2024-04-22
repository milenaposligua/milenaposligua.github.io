"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/utils/cn"
import { useSoundContext } from "@/utils/useSound"

interface ButtonParallaxProps {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  handleMouseOver?: () => void,
  handleMouseOut?: () => void
}

export const ButtonParallax: React.FC<ButtonParallaxProps> = ({children, onClick, className, handleMouseOver, handleMouseOut}) => {

  const buttonRef = useRef<HTMLDivElement>(null);

  const {soundEnabled, setSoundEnabled, playSoundOnHover} = useSoundContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return
      const button = buttonRef.current as HTMLDivElement
      const mouseX = e.clientX
      const mouseY = e.clientY
      const buttonRect = button.getBoundingClientRect()
      const offsetX = (mouseX - buttonRect.left) / buttonRect.width - 0.5
      const offsetY = (mouseY - buttonRect.top) / buttonRect.height - 0.5

      button.style.transform = `translate(${offsetX * 10}px, ${offsetY * 12}px)`
      button.style.scale = `1.1`
    }

    const handleMouseLeave = () => {
      const button = buttonRef.current as HTMLDivElement;

      if (button) {
        button.style.transform = `translate(0, 0)`;
        button.style.scale = `1`;
      }
    }

    const button = buttonRef.current;
    button?.addEventListener('mousemove', handleMouseMove)
    button?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button?.removeEventListener('mousemove', handleMouseMove)
      button?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  onMouseEnter={playSoundOnHover} className="relative" onClick={onClick}>
      <div ref={buttonRef} className="relative z-10 hover:bg-n-1/10 rounded-xl hover:shadow-lg mr-2 flex items-center justify-center p-2 text-white font-bold text-xl transition-property">
        {children}
      </div>
    </button>
  )
}


export const ButtonParallaxTransparent: React.FC<ButtonParallaxProps> = ({children, onClick, className}) => {

  const buttonRef = useRef<HTMLDivElement>(null);

  const {soundEnabled, setSoundEnabled, playSoundOnHover} = useSoundContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return
      const button = buttonRef.current as HTMLDivElement
      const mouseX = e.clientX
      const mouseY = e.clientY
      const buttonRect = button.getBoundingClientRect()
      const offsetX = (mouseX - buttonRect.left) / buttonRect.width - 0.5
      const offsetY = (mouseY - buttonRect.top) / buttonRect.height - 0.5

      button.style.transform = `translateX(${offsetX * 6}px) translateY(${offsetY * 6}px)`
      button.style.scale = `1.1`
    }

    const handleMouseLeave = () => {
      const button = buttonRef.current as HTMLDivElement;

      if (button) {
        button.style.transform = `translate(0, 0)`;
        button.style.scale = `1`;
      }
    }

    const button = buttonRef.current;
    button?.addEventListener('mousemove', handleMouseMove)
    button?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button?.removeEventListener('mousemove', handleMouseMove)
      button?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button onMouseEnter={playSoundOnHover} className="relative w-full h-full" onClick={onClick}>
      <div ref={buttonRef} className={cn(`relative z-10 rounded-xl flex items-center justify-center p-2 text-white font-bold text-xl transition-property
      `, className)}>
        {children}
      </div>
    </button>
  )
}