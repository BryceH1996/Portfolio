'use client'

import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Footer() {
  
  const pathname = usePathname()
  const currentDate = new Date().getFullYear();
  const variants = {
    visible: { y: 0 },
    hidden: { y: -800 },
  }

  return (
    <motion.footer initial={pathname === '/' ? "hidden" : "visible"}  animate="visible"  variants={variants} transition={{duration: 1}} className='flex flex-col-reverse lg:flex-row px-8 py-12 lg:px-32 lg:py-16 bg-light-gray justify-between'>
      <div>
        <div className='text-sm text-secondary space-y-2'>
          <p>©{currentDate} Website Powered by Bryce Hardie. Designed in collaboration with Connor Easton.</p>
          <p>Code is available <Link href='https://github.com/BryceH1996/portfolio' target='_blank' className='underline'>here</Link></p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div className='mb-6 lg:mb-0'>
        <Link href="https://www.linkedin.com/in/brycehardie01/" target='_blank'>
          <Image
            className="relative"
            src="/linkenIn-logo.svg"
            alt="Linkedin Logo"
            width={31}
            height={28}
            priority
            style={{width: "auto", height: "28px"}}
          />
        </Link>
      </div>
    </motion.footer>
  )
}