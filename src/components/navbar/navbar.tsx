'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import PrimaryButton from '../button/primary-button'
import Image from "next/image";
import { useState, useEffect } from 'react';
 
export default function Navbar() {
  const pathname = usePathname()
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 0) {
          // if scrolling down, show box-shadow
          setShadow(true);
        } else {
          // if scrolling up, hide box-shadow
          setShadow(false);
        }
  
        // remember the current page location for the next move
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      window.addEventListener('load', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('load', controlNavbar);
      };
    }
  }, []);
 
  return (
    <nav className={`sticky top-0 p-6 px-8 lg:px-12 xl:px-20 bg-primary transition-shadow duration-300 z-40 ${shadow ? 'shadow-md' : 'shadow-none'}`}>
      <div className='container mx-auto flex flex-wrap flex-row justify-between'>
        <ul className='flex flex-wrap flex-row w-40 justify-between'>
          <li>
            <Link className={`link ${pathname === '/' ? 'font-bold border-b-2 border-secondary' : 'font-medium'} text-secondary text-sm py-1`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/portfolio' ? 'font-bold border-b-2 border-secondary' : 'font-medium'} text-secondary text-sm py-1`}
              href="/portfolio"
            >
              My Portfolio
            </Link>
          </li>
        </ul>
        <ul className='flex flex-wrap flex-row w-32 justify-between lg:mx-2'>
          <li>
            <PrimaryButton text="View CV" url="https://drive.google.com/file/d/1M1oGxJ2r6Uqxf8SWrllbkwBTDkKQps2u/view?usp=sharing" isOpenNewPage={true}/>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </nav>
  )
}