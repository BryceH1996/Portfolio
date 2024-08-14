import Image from "next/image";
import { portfolioData } from "../../../../json/portfolio-data";
import Link from "next/link";

export function generateStaticParams() { 
  return portfolioData.map((post) => ({
    slug: post.slug,
  }))
}
 
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  return(

    <main className="bg-white">
        {portfolioData.map((data, key) => {
          if(data.slug == slug)
          return (
            <div key={key}>
              <section>
                <Image
                  src={data.topBanner}
                  alt='Project main banner image'
                  width={0}
                  height={0}
                  style={{ width: '100%', height: '55vh', objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </section>
              <section className="w-full p-8 xl:p-20">
                <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-x-24 lg:space-y-0">
                  <div className="w-full lg:w-7/12 flex flex-col text-text space-y-6">
                    <h1 className="font-bold text-5xl">{data.project}</h1>
                    <div className="flex flex-row flex-wrap gap-2">
                      {data.techStack.map((tech, techKey) => {
                        return(
                          <div key={techKey} className="px-2 bg-primary font-semibold">{tech}</div>
                        )
                      })}
                    </div>
                    <p className="text-sm whitespace-pre-line">{data.longDescription}</p>
                  </div>
                  <div className="w-full lg:w-5/12 flex flex-wrap flex-row text-text content-start gap-y-6">
                      <div className="flex flex-col w-1/2">
                        <h3>Client</h3>
                        <p>{data.project}</p>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <h3>Role</h3>
                        <p>{data.roleOnProject}</p>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <h3>Website</h3>
                        <Link className="hover:text-primary" href={data.websiteURL} target="_blank">{data.websiteURL}</Link>
                      </div>
                  </div>
                </div>
              </section>
              <section className="w-full p-8 xl:p-20 ">
                <div className="container mx-auto flex flex-col lg:flex-row space-y-12 lg:space-x-24 lg:space-y-0 items-center">
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={data.problemOneImage}
                      alt='First issue image'
                      width={0}
                      height={0}
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      priority
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <p className="text-sm whitespace-pre-line text-text">{data.problemOneText}</p>
                  </div>
                </div>
              </section>
              <section className="w-full p-8 pb-20 xl:p-20 ">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row space-y-12 lg:space-x-24 lg:space-y-0 items-center">
                  <div className="w-full lg:w-1/2">
                    <p className="text-sm whitespace-pre-line text-text">{data.problemTwoText}</p>
                  </div>
                  <div className="w-full lg:w-1/2">
                  <video width="100%" height="auto" autoPlay loop muted playsInline preload="auto">
                    <source src={data.problemTwoImage} type="video/mp4" />
                    <track
                      src={data.problemTwoImage}
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                  </div>
                </div>
              </section>
            </div>
          )
        })}
    </main>
  )
}