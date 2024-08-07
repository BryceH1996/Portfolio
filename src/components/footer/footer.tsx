import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  
  const currentDate = new Date().getFullYear();

  return (
    <footer className='flex flex-row px-32 py-16 bg-white justify-between'>
      <div>
        <p className='text-sm text-text'>©{currentDate} Website Powered by Bryce Hardie. Designed in collaboration with Connor Easton. All rights reserved.</p>
      </div>
      <div>
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
    </footer>
  )
}