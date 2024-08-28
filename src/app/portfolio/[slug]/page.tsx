import Image from "next/image";
import { portfolioData } from "../../../../json/portfolio-data";
import Link from "next/link";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function generateStaticParams() { 
  return portfolioData.map((post) => ({
    slug: post.slug,
  }))
}
 
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  
  return(

    <main className="bg-white">
        {portfolioData.map((data, key, array) => {
          const previousItem = array[key - 1];
          const nextItem = array[key + 1];
          if(data.slug == slug)
          return (
            <div key={key}>
              <section className="relative">
                <div className="image-overlay">
                  <Image
                    src={data.topBanner}
                    alt='Project main banner image'
                    width={0}
                    height={0}
                    style={{ width: '100%', height: '55vh', maxHeight: '80vw', objectFit: 'cover', objectPosition: 'top center' }}
                    priority
                  />
                </div>
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
                {data.problemContent.map((content, index) => {
                  return(
                    content[index] && index%2 == 0 ?         
                      <section key={index} className={`w-full p-8 ${data.problemImage[index] ? 'xl:py-12 xl:px-20' : 'xl:py-4 xl:px-20'}`}>
                        <div className="container mx-auto flex flex-col lg:flex-row space-y-12 lg:space-x-24 lg:space-y-0 items-center">
                          {data.problemImage[index] ? 
                            <div className="w-full lg:w-1/2">
                              {data.problemImage[index].includes('.mp4') ? 
                                <video width="100%" height="auto" autoPlay loop muted playsInline preload="auto" className="border border-medium-gray pb-1">
                                  <source src={data.problemImage[index]} type="video/mp4" />
                                  <track
                                    src={data.problemImage[index]}
                                    kind="subtitles"
                                    srcLang="en"
                                    label="English"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                                :
                                <Image
                                  src={data.problemImage[index]}
                                  alt='Left side images'
                                  className="border border-medium-gray"
                                  width={0}
                                  height={0}
                                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                  priority
                                />
                              }
                            </div>
                          : ""}
                          <div className={`w-full ${data.problemImage[index] ? 'lg:w-1/2' : 'lg:w-full'}`}>
                            <p className="text-sm whitespace-pre-line text-text">{content}</p>
                          </div>
                        </div>
                      </section>
                      :
                      <section key={index} className={`w-full p-8 ${data.problemImage[index] ? 'xl:py-12 xl:px-20' : 'xl:py-4 xl:px-20 xl:pb-20'}`}>
                        <div className="container mx-auto flex flex-col-reverse lg:flex-row space-y-12 lg:space-x-24 lg:space-y-0 items-center">
                          <div className={`w-full ${data.problemImage[index] ? 'lg:w-1/2' : 'lg:w-full'}`}>
                            <p className="text-sm whitespace-pre-line text-text">{content}</p>
                          </div>
                          {data.problemImage[index] ?  
                            <div className="w-full lg:w-1/2">
                            {data.problemImage[index].includes('.mp4') ? 
                              <video width="100%" height="auto" autoPlay loop muted playsInline preload="auto" className="border border-medium-gray pb-1">
                                <source src={data.problemImage[index]} type="video/mp4" />
                                <track
                                  src={data.problemImage[index]}
                                  kind="subtitles"
                                  srcLang="en"
                                  label="English"
                                />
                                Your browser does not support the video tag.
                              </video>
                              :
                              <Image
                                src={data.problemImage[index]}
                                alt='Right side images'
                                className="border border-medium-gray"
                                width={0}
                                height={0}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                priority
                              />
                            }
                          </div>
                          : ''}
                        </div>
                      </section>
                    )
                  })}
              <section className="w-full p-8 pb-20 xl:px-20 xl:pt-0 xl:pb-20 ">
                <div className={`container mx-auto flex flex-row gap-12 items-center ${previousItem && nextItem ? "justify-between" : ""} ${previousItem && !nextItem ? "justify-start" : ""} ${!previousItem && nextItem ? "justify-end" : ""}`}>
                {previousItem ? 
                  <Link href={previousItem.slug} className="flex flex-row items-center block justify-start border border-medium-gray">
                    <Image
                      src={previousItem.mainImage}
                      alt='Previous portfolio image'
                      className="md:block hidden"
                      width={0}
                      height={0}
                      style={{ width: '100%', height: 'auto', maxWidth: '150px', objectFit: 'cover' }}
                      priority
                    />
                    <div className="flex flex-row px-6 min-w-32 py-4 items-center gap-4">
                      <span className="md:hidden block"><FontAwesomeIcon icon={faChevronLeft} className='ml-1 text-xl' /></span>
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-sm">Previous:</h3>
                        <h4 className="font-bold">{previousItem.project}</h4>
                      </div>
                    </div>
                  </Link> : ""}
                  {nextItem ? 
                  <Link href={nextItem.slug} className="flex flex-row items-center block justify-end border border-medium-gray">
                    <div className="flex flex-row px-6 min-w-32 py-4 items-center gap-4">
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-sm">Next:</h3>
                        <h4 className="font-bold">{nextItem.project}</h4>
                      </div>
                      <span className="md:hidden block"><FontAwesomeIcon icon={faChevronRight} className='ml-1 text-xl' /></span>
                    </div>
                    <Image
                      src={nextItem.mainImage}
                      alt='Next portfolio image'
                      className="md:block hidden"
                      width={0}
                      height={0}
                      style={{ width: '100%', height: 'auto', maxWidth: '150px', objectFit: 'cover' }}
                      priority
                    />
                  </Link> : ""}
                </div>
              </section>
            </div>
          )
        })}
    </main>
  )
}