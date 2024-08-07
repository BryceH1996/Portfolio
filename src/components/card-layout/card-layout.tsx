'use client'

import { delay, motion } from "framer-motion";

interface cardLayoutProps{
  minHeight: string;
  primary: string;
  secondary: string;
  layer?: string;
  children: JSX.Element;
  margining?: string;
  padding?: string;
  overflow?: string;
  alignment?: string;
  animate?: boolean;
}

export default function CardLayout({ children, minHeight, primary, secondary, layer, margining, padding, overflow, alignment, animate=false}: cardLayoutProps) {

  const variants = {
    visible: { y: 0 },
    hidden: { y: -300 },
  }

  return (
    <motion.section initial={animate ? "hidden" : "visible"} animate="visible" variants={variants} transition={{duration: 1}} className={`${minHeight} ${secondary} ${margining} ${layer} relative ${padding}`}>
      <div className={`flex ${minHeight} ${primary} rounded-b-4xl shadow-md ${overflow} ${alignment} mb-4`}>
        <div className={`w-full p-8 lg:p-20 xl:p-32 xl:pt-4 xl:pb-0 lg:pt-4 lg:pb-0 pt-4 pb-0 ${primary} rounded-b-4xl`}>
          {children}
        </div>
      </div>
    </motion.section>
  )
}