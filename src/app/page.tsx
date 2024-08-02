import CardLayout from "@/components/card-layout/card-layout";
import PrimaryButton from "../components/button/primary-button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CardLayout minHeight="min-h-with-nav" primary="bg-primary" secondary="bg-white" layer="z-30" margining="mb-4">
        <div className="container mx-auto flex w-full flex-row">
          <div className="flex flex-col w-4/12 xl:w-4/12 2xl:w-3/12 space-y-3 self-center py-12">
            <h3 className="text-2xl font-bold">Hello, I&apos;m</h3>
            <h1 className="font-bold"><span className="text-5xl mb-3 block white-block relative"><span className="z-10 relative">Bryce Hardie</span></span> <span className="text-2xl space-y-1">a Passionate <br></br>Front-end Developer</span></h1>
            <h2 className="text-sm font-bold hero-paragraph">A dedicated Front-end Developer with a passion for creating pixel perfect fast loading websites.</h2>
            <div>
              <PrimaryButton className="inline-block" text="View portfolio" url="/portfolio"/>
            </div>
          </div>
          <div className="flex flex-col w-7/12 xl:w-7/12 2xl:w-8/12 self-end">
            <Image
                className="relative"
                src="/portrait-photo.png"
                alt="Portrait photo"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
          </div>
          <div className="flex flex-col w-1/12 xl:w-2/12 2xl:w-1/12 space-y-8 self-center items-end py-12">
            <div className="hero-points">
              <h3 className="text-5xl font-bold">6</h3>
              <p className="text-sm font-bold">Years of Experience</p>
            </div>
            <div className="hero-points">
              <h3 className="text-5xl font-bold">Tech</h3>
              <ul className="text-sm font-bold">
                <li>Javascript</li>
                <li>React</li>
                <li>PHP</li>
                <li>C#</li>
              </ul>
            </div>
          </div>
        </div>
      </CardLayout>
      <CardLayout minHeight="min-h-full" primary="bg-white" secondary="bg-primary" layer="z-20" margining="-mt-4">
        <div className="container mx-auto flex w-full flex-col xl:pt-32 xl:pb-32 pt-20 pb-20">
          <div className="mb-4">
            <h2 className="text-text font-bold text-4xl">About Me</h2>
          </div>
          <div className="flex flex-row">
            <div className="w-6/12">          
              <p className="text-text text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, tristique at porta in, scelerisque quis nisl.
              </p>--
            </div>
            <div className="w-6/12 text-sm space-y-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum urna, tristique at porta in, scelerisque quis nisl. </p>
              <p>
                Curabitur enim odio, ultrices sed iaculis eu, rutrum et nunc. Phasellus in <span className="font-bold brown-block">sem</span> quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer convallis purus et tellus imperdiet interdum. 
              </p>
            </div>
          </div>
        </div>
      </CardLayout>
      <section className=" min-h-full bg-white -mt-8 z-10">
        <div className="flex w-full flex-row p-20 bg-primary rounded-b-4xl">

        </div>
      </section>
    </main>
  );
}
