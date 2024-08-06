import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

export default function AboutCard() {

  const textAnimationAbout = {
    type: "spring", 
    stiffness: 60, 
    damping: 11,
    delay: 0.1
  }

  return (
    <div className="container mx-auto flex w-full flex-col xl:pt-16 xl:pb-32 pt-12 pb-24">
      <div className="mb-4">
        <motion.h2 initial={{ y: 1000 }} animate={{ y: 0 }} transition={textAnimationAbout} className="text-text font-bold text-4xl">About Me</motion.h2>
      </div>
      <div className="flex flex-row xl:gap-32 gap-24 items-center">
        <div className="text-text w-6/12 text-sm space-y-3">
          <motion.p initial={{ y: 1000 }} animate={{ y: 0 }} transition={textAnimationAbout}>I am a dedicated <span className="font-bold brown-block">Front-end</span> Developer with a sharp eye for detail and a commitment to building websites that achieve <span className="font-bold brown-block">pixel-perfect</span> precision. </motion.p>
          <motion.p initial={{ y: 1000 }} animate={{ y: 0 }} transition={textAnimationAbout}>
            My background includes extensive experience in <span className="font-bold brown-block">agency</span> environments, where I have worked closely with clients and collaborated with small to medium-sized teams. I value <span className="font-bold brown-block">teamwork</span> and approach challenges with a positive, <span className="font-bold brown-block">optimistic</span> attitude.
          </motion.p>
        </div>
        <div className="w-6/12 relative h-full">          
          <motion.p initial={{ y: 1000 }} animate={{ y: 0 }} transition={textAnimationAbout} className="text-text text-2xl text-center">
            <FontAwesomeIcon icon={faQuoteLeft} className="absolute -left-8 -top-1" />A true developer stays humble, knowing there&apos;s always room to grow and others who surpass their skills.<FontAwesomeIcon icon={faQuoteRight} className="absolute -right-8 -bottom-1" />
          </motion.p>
        </div>
      </div>
    </div>
  )
}