// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { ScrollParallax } from 'react-just-parallax'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FooterCta from '@/components/footer-cta'
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import Image from 'next/image'
import Link from 'next/link'

// Sanity
// import SanityPageService from '@/services/sanityPageService'

// const query = `{
//   "home": *[_type == "home"][0]{
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

export default function Home(initialData) {
  // Sanity Data
  // const { data: { home } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <div className="w-full h-full min-h-screen lg:min-h-[1400px] bg-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden">
            <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
              <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.035}>
                <Image
                  src="/images/home.jpg"
                  alt="Character Test"
                  layout="fill"
                  className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                />
              </ScrollParallax>
            </div>

            <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
              <DayInfo className="mb-1" />
              <MousePosition />
            </div>

            <div className="max-w-screen-3xl mx-auto">
              <h1 className="font-black text-[clamp(80px,_10.2vw,_210px)] leading-[0.95] mb-4 uppercase relative z-10 w-11/12 lg:w-full">Game The System</h1>

              <div className="w-10/12 lg:w-[50%] xl:w-[45%] 2xl:w-[35%] max-w-[720px] pt-[75%] lg:pt-[10%] relative pb-8 lg:pb-0">
                <div className="relative z-10">
                  <p className="text-lg md:text-xl xl:text-2xl mb-6 lg:mb-10">We're believers in data and builders of tools that help game creators <span className="inline border border-black rounded-sm p-1 px-2 uppercase tracking-wider text-sm md:text-base xl:text-lg">make</span> and <span className="inline border border-black rounded-sm p-1 px-2 uppercase tracking-wider text-sm md:text-base xl:text-lg">publish</span> hit games with franchise potential built right in.</p>

                  <div className="flex space-x-2">
                    <Link href="/">
                      <a className="bg-black text-white px-3 py-6 uppercase tracking-wide w-1/2 text-center">
                        Make a Game
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="bg-black text-white px-3 py-6 uppercase tracking-wide w-1/2 text-center">
                        Build A Career
                      </a>
                    </Link>
                  </div>
                </div>

                <ScrollParallax isAbsolutelyPositioned lerpEase={0.15}>
                  <div className="absolute top-[-15vw] lg:top-auto lg:bottom-[-80%] right-[-10vw] lg:right-[-55%] xl:right-[-70%] w-[55vw] lg:w-[28vw] 2xl:w-[30vw] max-w-[500px] z-0">
                    <Image
                      src="/images/character-test.webp"
                      alt="Character Test"
                      layout="responsive"
                      width={930}
                      height={1236}
                    />
                  </div>
                </ScrollParallax>
              </div>
            </div>
          </div>
        
          <m.div>
            <div className="bg-gradient-to-b from-white to-pink mb-[5vw]">
              <div className="w-full border-b border-black/50">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[15vw] md:px-10">
                    <div className="grid grid-cols-10 items-center">
                      <div className="col-span-9 md:col-span-5 mb-12 md:mb-0">
                        <p className="text-2xl uppercase font-bold">HI,<br/>WE'RE HOMA, a gaming technology lab that gives game creators the data-driven tools and human expertise needed to turn their creative ideas into commercial hits.</p>
                      </div>
                      <div className="col-span-5 col-start-4 md:col-span-4 md:col-start-7">
                        <div className="w-full bg-black opacity-20 h-[50vw] 2xl:h-[720px] rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full border-b border-black/50">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[5vw] md:px-10">
                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-3">
                        <p className="text-2xl uppercase font-bold">[Icon]</p>
                      </div>
                      <div className="col-span-7">
                        <p className="text-2xl uppercase font-bold">Statistic One</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-3">
                        <p className="text-2xl uppercase font-bold">[Icon]</p>
                      </div>
                      <div className="col-span-7">
                        <p className="text-2xl uppercase font-bold">Statistic Two</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-3">
                        <p className="text-2xl uppercase font-bold">[Icon]</p>
                      </div>
                      <div className="col-span-7">
                        <p className="text-2xl uppercase font-bold">Statistic Three</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Container className="pb-[10vw]">
              <m.div>
                <h1 className="font-black leading-none uppercase text-[clamp(40px,_6.5vw,_100px)]">Home Page</h1>
                <div className="content max-w-3xl mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </m.div>
            </Container>
            
          </m.div>
        </m.main>
        <FooterCta />
        <Footer />
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