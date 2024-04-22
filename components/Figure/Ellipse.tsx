import { motion } from "framer-motion"




export const Ellipse = () => {
  return(
    <motion.div className={`absolute gradient-circle-red-right blur-[50px] w-60 h-60 z-[-1] right-[12rem] top-50 hidden lg:flex`}
  ></motion.div>

  )
}