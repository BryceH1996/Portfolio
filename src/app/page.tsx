"use client"

import CardLayout from "@/components/card-layout/card-layout";
import PrimaryButton from "../components/button/primary-button";
import Image from "next/image";
import { motion } from "framer-motion"
import SliderBottom from "../components/slider/bottom-slider"

export default function Home() {

  const textAnimationTop = {
    type: "spring", 
    stiffness: 60, 
    damping: 9
  }

  const textAnimationAbout = {
    type: "spring", 
    stiffness: 60, 
    damping: 11,
    delay: 0.1
  }

  const date = new Date();
  const yearsExperience = date.getFullYear() - 2018;  

  return (
    <main>
      <CardLayout minHeight="min-h-with-nav" primary="bg-primary" secondary="bg-white" layer="z-10" padding="pb-4" overflow="overflow-hidden">
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
              <h3 className="text-5xl font-bold">{yearsExperience}</h3>
              <p className="text-sm font-bold">Years of Experience</p>
            </motion.div>
            <motion.div initial={{ x: 600 }} animate={{ x: 0 }} transition={textAnimationTop} className="hero-points">
              <h3 className="text-5xl font-bold">Tech</h3>
              <ul className="text-sm font-bold">
                <li>Javascript</li>
                <li>React</li>
                <li>PHP</li>
                <li>C#</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </CardLayout>
      <CardLayout minHeight="min-h-full" primary="bg-white" secondary="bg-primary" layer="z-10" margining="-mt-4" padding="pb-4" overflow="overflow-hidden">
        <div className="container mx-auto flex w-full flex-col xl:pt-16 xl:pb-32 pt-12 pb-24">
          <div className="mb-4">
            <motion.h2 initial={{ y: 1000 }} animate={{ y: 0 }} transition={textAnimationAbout} className="text-text font-bold text-4xl">About Me</motion.h2>
          </div>
          <div className="flex flex-row xl:gap-32 gap-24">
            <div className="text-text w-6/12 text-sm space-y-3">
              <motion.p initial={{ y: 1000 }} animate={{ y: 0 }} transition={textAnimationAbout}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, tristique at porta in, scelerisque quis nisl. </motion.p>
              <motion.p initial={{ y: 1000 }} animate={{ y: 0 }} transition={textAnimationAbout}>
                Curabitur enim odio, ultrices sed iaculis eu, rutrum et nunc. Phasellus in <span className="font-bold brown-block">sem</span> quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer convallis purus et tellus imperdiet interdum. 
              </motion.p>
            </div>
            <div className="w-6/12">          
              <motion.p initial={{ y: 1000 }} animate={{ y: 0 }} transition={textAnimationAbout} className="text-text text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, tristique at porta in, scelerisque quis nisl.
              </motion.p>
            </div>
          </div>
        </div>
      </CardLayout>
      <CardLayout minHeight="min-h-full" primary="bg-primary" secondary="bg-white" layer="z-10" margining="-mt-4">
        <SliderBottom />
      </CardLayout>
    </main>
  );
}
