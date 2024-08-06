import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "../button/primary-button";


export default function TopCard() {

  const date = new Date();
  const yearsExperience = date.getFullYear() - 2018;  
  
  const textAnimationTop = {
    type: "spring", 
    stiffness: 60, 
    damping: 9
  }

  return (
    <div className="container mx-auto flex w-full flex-row text-secondary">
      <div className="flex flex-col lg:w-4/12 2xl:w-3/12 xl:space-y-3 space-y-2 self-center py-12">
        <motion.h3 initial={{ x: -400 }} animate={{ x: 0 }} transition={textAnimationTop} className="text-xl xl:text-2xl font-bold">Hello, I&apos;m</motion.h3>
        <h1 className="font-bold"><motion.span initial={{ x: -600 }} animate={{ x: 0 }} transition={textAnimationTop} className="xl:text-5xl text-4xl mb-3 white-block">Bryce Hardie</motion.span> <motion.span initial={{ x: -600 }} animate={{ x: 0 }} transition={textAnimationTop} className="text-xl xl:text-2xl space-y-1 block">a Passionate <br></br>Front-end Developer</motion.span></h1>
        <motion.h2 initial={{ x: -600 }} animate={{ x: 0 }} transition={textAnimationTop} className="text-sm font-bold hero-paragraph">A dedicated Front-end Developer with a passion for creating pixel perfect fast loading websites.</motion.h2>
        <motion.div initial={{ x: -400 }} animate={{ x: 0 }} transition={textAnimationTop}>
          <PrimaryButton className="inline-block mt-1" text="View portfolio" url="/portfolio"/>
        </motion.div>
      </div>
      <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{type: "spring", stiffness: 300, damping: 100}} className="flex flex-col lg:w-6/12 2xl:w-8/12 self-end">
        <Image
            className="relative"
            src="/portrait-photo.png"
            alt="Portrait photo"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
      </motion.div>
      <div className="flex flex-col lg:w-2/12 2xl:w-1/12 space-y-8 self-center items-end py-12">
        <motion.div initial={{ x: 600 }} animate={{ x: 0 }} transition={textAnimationTop} className="hero-points">
          <h3 className="xl:text-5xl text-4xl font-bold">{yearsExperience}</h3>
          <p className="text-sm font-bold">Years of Experience</p>
        </motion.div>
        <motion.div initial={{ x: 600 }} animate={{ x: 0 }} transition={textAnimationTop} className="hero-points">
          <h3 className="xl:text-5xl text-4xl font-bold">Tech</h3>
          <ul className="text-sm font-bold">
            <li>Javascript</li>
            <li>React</li>
            <li>PHP</li>
            <li>C#</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}