'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import PrimaryButton from '../button/primary-button'
import Image from "next/image";
import { useState, useEffect } from 'react';
 
export default function Navbar() {
  const pathname = usePathname()
  const [shadow, setShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // if scrolling down, show box-shadow
          setShadow(true);
        } else {
          // if scrolling up, hide box-shadow
          setShadow(false);
        }
  
        // remember the current page location for the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
 
  return (
    <nav className={`sticky top-0 flex flex-wrap flex-row p-6 px-20 bg-primary justify-between transition-shadow duration-300 z-100 ${shadow ? 'shadow-md' : 'shadow-none'}`}>
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
      <ul className='flex flex-wrap flex-row w-32 justify-between mx-2'>
        <li>
          <PrimaryButton text="View CV" url="/" isOpenNewPage={true}/>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/brycehardie01/" target='_blank'>
            <Image
              className="relative"
              src="/Linkedin.svg"
              alt="Linkedin Logo"
              width={31}
              height={28}
              priority
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}