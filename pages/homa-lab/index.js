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
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import DayInfo from '@/components/day-info'
import MousePosition from '@/components/mouse-position'
import Link from 'next/link'
import Image from 'next/image'
import PixelatedImage from '@/components/pixelated-image'

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

export default function HomaLab(initalData) {
  // Sanity Data
  // const { data: { about } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo title="Homa Lab" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <div className="w-full h-full min-h-screen lg:min-h-[130vh] bg-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden">
            <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
              <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.035}>
                <Image
                  src="/images/about.jpg"
                  alt="About Test"
                  layout="fill"
                  className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                />
              </ScrollParallax>
            </div>

            <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
              <DayInfo className="mb-1" />
              <MousePosition />
            </div>

            <div className="mx-auto relative z-10">
              <h1 className="font-black text-[clamp(80px,_8.5vw,180px)] leading-[0.95] mb-16 lg:mb-32 uppercase relative z-10 w-11/12 lg:w-full">If you’re not using this, you’re just playing around.</h1>

              <Link href="/">
                <a className="bg-black text-white px-12 py-6 uppercase tracking-wide w-1/2 text-center">
                  Submit your game
                </a>
              </Link>
            </div>
          </div>

          <div className="border-b border-black/50 relative overflow-hidden">
            <Container>
              <div className="flex flex-wrap py-12 pb-72 lg:py-[12vw]">
                <div className="w-full lg:w-1/2">
                  <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-[5vw] uppercase w-10/12 tracking-wide">Welcome to our data-powered centrifuge of ideas, insights and tools to game the system and score HITS. Lab coat optional.</h2>

                  <div className="w-10/12 content mb-8 lg:mb-12">
                    <p>Homa Lab is a SaaS workspace and data platform built by and for game devs. It helps you develop new game ideas by looking at market trends to spot niches and fresh mechanics. Then it helps you test out builds for quality, engagement, and marketability.</p>
                  </div>
                </div>

                <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.025}>
                  <ScrollParallax isAbsolutelyPositioned lerpEase={0.15}>
                    <div className="absolute bottom-[-30px] right-[10vw] w-[55vw] lg:w-[35vw] xl:w-[32vw] 2xl:w-[30vw] max-w-[250px] lg:max-w-[600px] z-0">
                      {/* <Image
                        src="/images/character-test.webp"
                        alt="Character Test"
                        layout="responsive"
                        width={930}
                        height={1236}
                      /> */}

                      <PixelatedImage image={'/images/character-test.webp'} width={'930'} height={1236} />
                    </div>
                  </ScrollParallax>
                </MouseParallax>
              </div>
            </Container>
          </div>
          
          {Array.from(Array(6), (e, i) => {
            return (
              <div className="bg-white relative overflow-hidden" key={i}>
                <div className="w-full border-b border-black/50">
                  <div className="grid grid-cols-12 ">
                    <div className="col-span-10 col-start-2 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50">
                      <div className="grid grid-cols-10">
                        <div className="col-span-9 lg:col-span-5 mb-12 lg:mb-0 py-10 lg:py-12 lg:px-12 flex flex-wrap">
                          <div className="w-full mb-auto">
                            <span className="uppercase text-base tracking-widest mb-5 lg:mb-8 block font-medium">01</span>
                            <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-32 uppercase">Ideas</h2>
                          </div>
                          <div className="w-full mt-auto">
                            <div className="content mb-6 lg:mb-12 w-11/12">
                              <p>We have teams of people who have one job: to watch the market, scope the trends and come up with hot-ticket game ideas for you to run with.</p>
                            </div>

                            <Link href="#">
                              <a className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">Learn More</a>
                            </Link>
                          </div>
                        </div>
                        <div className="col-span-10 lg:col-span-5 lg:col-start-6 relative overflow-hidden">
                          <div className="scale-[1.25] w-full h-full aspect-square">
                            <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.05}>
                              <Image
                                src="/images/about.jpg"
                                alt="About Test"
                                layout="fill"
                                className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                              />
                            </ScrollParallax>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full border-b border-black/50 hidden lg:block">
                  <div className="grid grid-cols-12">
                    <div className="col-span-10 col-start-2 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50 h-[8vw]">
                      <div className="grid grid-cols-10">
                        <div className="col-span-9 lg:col-span-5">
                        </div>
                        <div className="col-span-10 lg:col-span-5 lg:col-start-6 lg:border-l lg:border-black/50 h-[8vw]">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="bg-lime text-black">
            <div className="grid grid-cols-12 py-12 lg:py-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
              <div className="col-span-12 lg:col-span-2 relative z-10">
                <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">Homa Academy</span>
              </div>
              
              <div className="col-span-12 lg:col-span-8 z-10">
                <h1 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">Level up your game</h1>
                <div className="content max-w-3xl mb-8 xl:mb-12 w-10/12">
                  <p>The Academy is a dev-centered learning hub where you can access game design and game play analysis of the latest hits, training on how to build great games, methods for ideation and player experience optimization.</p>
                </div>

                <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8">
                  <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase">Analysis &amp; Feedback</h3>

                    <div className="content content--small w-11/12">
                      <p>The weekly Homa Hangout where we dissect hit games.</p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase w-11/12">Best in class mentorship</h3>

                    <div className="content content--small w-11/12">
                      <p>Best practice guides for ideation and game design.</p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/3 p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase">Access to our library</h3>

                    <div className="content content--small w-11/12">
                      <p>Resource examples for (hyper and hybrid) casual games, UI/UX analysis and examples</p>
                    </div>
                  </div>
                </div>

                <Link href="#">
                  <a className="inline-block border border-black/50 font-medium uppercase leading-none py-6 px-10 rounded-sm bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white">Learn More</a>
                </Link>
              </div>
            </div>
          </div>

          <FooterCta />          
          <Footer />
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