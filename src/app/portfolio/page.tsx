import Image from "next/image";
import { portfolioData } from "../../../json/portfolio-data";
import BasicButton from "@/components/button/basic-buttom";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="max-h-96 h-full w-full">
        <Image
          className="relative object-cover object-center max-h-96"
          src="/portfolio-library.jpg"
          alt="Portfolio banner image"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </section>
      <section className="p-8 lg:p-20 xl:p-32">
        <div className="container mx-auto ">
          <h1 className="text-text font-bold text-4xl lg:text-5xl text-center mb-12">My Portfolio</h1>
          <div className="flex flex-row flex-wrap justify-between gap-8">
            {portfolioData.map((data, key) => {
              return(
                <div className="w-full md:w-0.5/2 xl:w-3.5/12 image-overlay relative" key={key}>
                  <Image
                    src={data.mainImage}
                    alt={data.mainImageAlt}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                  />
                  <div className="absolute flex flex-col w-full z-10 bottom-0 p-6 pt-0 gap-2">
                    <h3 className="text-white text-lg font-bold">{data.project}</h3>
                    <p className="text-white text-sm">{data.shortDescription.substring(0, 100)}...</p>
                    <BasicButton className="block text-white font-medium" text="View project" url={`/portfolio/${data.slug}`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
