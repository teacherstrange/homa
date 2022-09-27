// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Transitions
import { fade } from '@/helpers/transitions'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FooterCta from '@/components/footer-cta'
import Image from 'next/image'
import { ScrollParallax } from 'react-just-parallax'
import DayInfo from '@/components/day-info'
import MousePosition from '@/components/mouse-position'
import TextScrambler from '@/components/text-scrambler'

import LocationIcon from '@/icons/location.svg'
import ClockIcon from '@/icons/clock.svg'
import GraphIcon from '@/icons/graph.svg'
import HappyIcon from '@/icons/happy.svg'
import BookIcon from '@/icons/book.svg'
import CashIcon from '@/icons/cash.svg'

// Sanity
// import SanityPageService from '@/services/sanityPageService'

// const query = `{
//   "about": *[_type == "about"][0]{
//     title,
//     imageExample {
//       asset-> {
//         ...
//       },
//       caption,
//       alt,
//       hotspot {
//         x,
//         y
//       },
//     },
//     seo {
//       ...,
//       shareGraphic {
//         asset->
//       }
//     }
//   }
// }`

// const pageService = new SanityPageService(query)

export default function Careers({initalData, careers}) {
  // Sanity Data
  // const { data: { about } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo title="Careers" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade}>
            <div className="w-full bg-gradient-to-b from-pink to-pink/30 pt-24 lg:pt-40 xl:pt-52 border-black/50 mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>
              
              <div className="max-w-screen-3xl mx-auto px-6 xl:px-10 mb-[15vw]">
                <h1 className="font-black text-[clamp(35px,_9vw,190px)] leading-[0.95] mb-4 uppercase relative z-10 w-11/12 lg:w-full">
                  <span className="block mb-8 lg:mb-12">
                    <TextScrambler text="Brains over backgrounds." seed={22} step={2} />
                  </span>
                  <span className="block mb-8 lg:mb-12">
                    <TextScrambler text="Results over CVs." seed={16} step={2} />
                  </span>
                  <span className="block mb-8 lg:mb-12">
                    <TextScrambler text="Determination over degrees." seed={25} step={2} />
                  </span>
                </h1>
              </div>

              <div className="w-full border-t border-b border-black/50">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[10vw] md:px-10">
                    <div className="grid grid-cols-10 items-center">
                      <div className="col-span-9 md:col-span-5 mb-12 md:mb-0">

                        <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">Work With Us</span>

                        <p className="text-xl lg:text-2xl xl:text-3xl uppercase font-bold">We’re building a modern workplace with a remote-friendly way of working. We ask for a lot, but in return we give a lot – like the flexibility to fit work around your life, and the ability to do work you’re proud of.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full border-b border-black/50 pb-56 md:pb-0">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[5vw] md:px-10">
                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <HappyIcon className="w-[40%] max-w-[50px] lg:max-w-[100px] lg:mx-auto" />
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="block font-black text-[clamp(35px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-12 uppercase max-w-[550px]">Trust from day one</span>

                        <div className="content max-w-[550px]">
                          <p>Take a long lunch. Go to the dentist. Book a spin class. We’ll trust you to get the job done.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <BookIcon className="w-[40%] max-w-[50px] lg:max-w-[100px] lg:mx-auto" />
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="block font-black text-[clamp(35px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-12 uppercase max-w-[550px]">Continuous learning</span>

                        <div className="content max-w-[550px]">
                          <p>Knowledge shares, Learning Days and a full-on learning platform mean you’ll gain experience and knowledge here.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 md:pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <CashIcon className="w-[40%] max-w-[50px] lg:max-w-[100px] lg:mx-auto" />
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="block font-black text-[clamp(35px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-12 uppercase max-w-[550px]">Competitive Cash</span>

                        <div className="content max-w-[550px]">
                          <p>We’re looking for people who care about our mission as much as we do – and we know care doesn’t come cheap.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full border-b border-black/50 hidden md:block">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[8vw] md:px-10">
                    <div className="grid grid-cols-10 items-center">
                      <div className="col-span-9 md:col-span-5 mb-12 md:mb-0">
                        <a href="https://apply.workable.com/homa-games/" target="_blank" rel="noopener noreferrer" class="roll-btn inline-block">
                          <span class="roll-btn__front">Join Homa</span>
                          <span class="roll-btn__back">Join Homa</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-lime text-black">
              <div className="grid grid-cols-12 py-24 lg:py-[10vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
                
                <div className="col-span-12 z-10">
                  <h2 className="display-text w-11/12 lg:w-9/12 mb-12 lg:mb-24 xl:mb-32">Success is its own reward. But there are perks as well.</h2>

                  <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8">
                    <div className="w-full lg:w-1/3 xl:w-1/3 border-b lg:border-b lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">

                      <div className="content content--small w-11/12 flex flex-wrap h-full">
                        <div className="w-full mb-24 content">
                          <p>If you’re interested in working from our newly-renovated Paris HQ with a rooftop garden and WeWork amenities, we’ve got a desk right here...</p>
                        </div>

                        <LocationIcon className="w-1/4 max-w-[120px] mt-auto" />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 xl:w-1/3 border-b lg:border-b lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">

                      <div className="content content--small w-11/12 flex flex-wrap h-full">
                        <div className="w-full mb-24 content">
                          <p>Don’t live in France or have a right to work here? No worries, we offer sponsorship and relocation packages.</p>
                        </div>

                        <LocationIcon className="w-1/4 max-w-[120px] mt-auto" />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 xl:w-1/3 border-b lg:border-b lg:border-r-0 border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">

                      <div className="content content--small w-11/12 flex flex-wrap h-full">
                        <div className="w-full mb-24 content">
                          <p>Don't speak French and don't want to learn it? Pas de problème, we work in English.</p>
                        </div>

                        <LocationIcon className="w-1/4 max-w-[120px] mt-auto" />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 xl:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">

                      <div className="content content--small w-11/12 flex flex-wrap h-full">
                        <div className="w-full mb-24 content">
                          <p>If you’re interested in working from our newly-renovated Paris HQ with a rooftop garden and WeWork amenities, we’ve got a desk right here...</p>
                        </div>

                        <LocationIcon className="w-1/4 max-w-[120px] mt-auto" />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 xl:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">

                      <div className="content content--small w-11/12 flex flex-wrap h-full">
                        <div className="w-full mb-24 content">
                          <p>Don’t live in France or have a right to work here? No worries, we offer sponsorship and relocation packages.</p>
                        </div>

                        <LocationIcon className="w-1/4 max-w-[120px] mt-auto" />
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 xl:w-1/3 border-b-0 lg:border-b-0 lg:border-r-0 border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">

                      <div className="content content--small w-11/12 flex flex-wrap h-full">
                        <div className="w-full mb-24 content">
                          <p>Don't speak French and don't want to learn it? Pas de problème, we work in English.</p>
                        </div>

                        <LocationIcon className="w-1/4 max-w-[120px] mt-auto" />
                      </div>
                    </div>
                  </div>

                  <a href="https://apply.workable.com/homa-games/" target="_blank" rel="noopener noreferrer" class="roll-btn inline-block">
                    <span class="roll-btn__front">Join Homa</span>
                    <span class="roll-btn__back">Join Homa</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <div className="relative z-0 flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/500/500" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/600/600" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/700/700" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/800/800" alt="PLACEHOLDER" />
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/500/500" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/600/600" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/700/700" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/800/800" alt="PLACEHOLDER" />
                </div>
              </div>
            </div>

            <div className="w-full bg-pink/20 border-b border-black/50 mx-auto relative overflow-hidden">
              <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[10vw] md:px-16 xl:px-24">
                  <h2 className="display-text w-8/12 xl:w-[60%] mb-8 lg:mb-24">Want to join us?</h2>
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">Open Roles</span>
                  
                  <div className="mb-8 lg:mb-12">
                    {careers.jobs.slice(0,8).map((e, i) => {
                      return (
                        <a key={i} href={e.shortlink} target="_blank" rel="noreferrer noopener" className={`flex flex-wrap border-l border-r border-b border-black/50 p-6 lg:p-10 hover:bg-pink focus:bg-pink ${(i == 0) && 'border-t'}`}>
                          <div className="w-full lg:w-2/3 pr-8 lg:pr-16 xl:pr-24 mb-6 lg:mb-0">
                            <span className="block font-black text-[clamp(25px,_3vw,_66px)] leading-[0.95] uppercase">{e.title}</span>
                          </div>
                          <div className="w-full lg:w-1/3">
                            <div className="w-full">
                              <span className="flex uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 border border-b-0 border-black/50">
                                <div className="px-4 border-r border-black/50 flex items-center justify-center">
                                  <LocationIcon className="w-[25px] lg:w-[30px]"/>
                                </div>
                                <div className="px-3 py-4 lg:py-5">
                                  {e.city}
                                </div>
                              </span> 
                            </div>
                            <div className="w-full">
                              <span className="flex uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 border border-b-0 border-black/50">
                                <div className="px-4 border-r border-black/50 flex items-center justify-center">
                                  <ClockIcon className="w-[25px] lg:w-[30px]"/>
                                </div>
                                <div className="px-3 py-4 lg:py-5">
                                  {e.employment_type}
                                </div>
                              </span>
                            </div>
                            <div className="w-full">
                              <span className="flex uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 border border-black/50">
                                <div className="px-4 border-r border-black/50 flex items-center justify-center">
                                  <GraphIcon className="w-[25px] lg:w-[30px]"/>
                                </div>
                                <div className="px-3 py-4 lg:py-5">
                                  {e.department}
                                </div>
                              </span>
                            </div>
                          </div>
                        </a>
                      )
                    })}
                  </div>

                  <a href="https://apply.workable.com/homa-games/" target="_blank" rel="noopener noreferrer" class="roll-btn inline-block">
                    <span class="roll-btn__front">All Career Opportunities</span>
                    <span class="roll-btn__back">All Career Opportunities</span>
                  </a>
                </div>
              </div>
            </div>

            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

// Sanity CMS Props
// export async function getStaticProps(context) {
//   const cms = await pageService.fetchQuery(context)

//   return {
//     props: { ...cms }
//   }
// }


export async function getStaticProps(context) {
  // const cms = await pageService.fetchQuery(context)

  const res = await fetch(`https://apply.workable.com/api/v1/widget/accounts/homa-games?details=true`);

  const careers = await res.json()

  return {
    props: { careers }
  }
}