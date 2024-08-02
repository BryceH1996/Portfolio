import PrimaryButton from "../components/button/primary-button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="min-h-with-nav bg-white mb-4 z-30 relative">
        <div className="flex bg-white rounded-b-4xl shadow-md">
          <div className="flex w-full flex-row p-20 xl:p-32 xl:pt-4 xl:pb-0 pt-4 pb-0 bg-primary rounded-b-4xl">
            <div className="flex flex-col w-4/12 xl:w-4/12 2xl:w-3/12 space-y-3 self-center">
              <h3 className="text-2xl font-bold">Hello, I'm</h3>
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
            <div className="flex flex-col w-1/12 xl:w-2/12 2xl:w-1/12 space-y-8 self-center items-end">
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
        </div>
      </section>
      <section className="min-h-full bg-primary mb-4 -mt-8 z-20 relative">
        <div className="flex bg-primary rounded-b-4xl shadow-md">
          <div className="flex w-full flex-row p-20 bg-white rounded-b-4xl">

          </div>
        </div>
      </section>
      <section className=" min-h-full bg-white -mt-8 z-10">
        <div className="flex w-full flex-row p-20 bg-primary rounded-b-4xl">

        </div>
      </section>
    </main>
  );
}
