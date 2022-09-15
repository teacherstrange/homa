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
import { ScrollParallax } from 'react-just-parallax'
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import Image from 'next/image'
import Link from 'next/link'

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

export default function Games(initalData) {
  // Sanity Data
  // const { data: { about } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo title="Games" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="w-full h-full min-h-screen bg-gradient-to-t from-pink/20 to-pink pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
              <DayInfo className="mb-1" />
              <MousePosition />
            </div>

            <div className="max-w-screen-3xl mx-auto">
              <h1 className="font-black text-[clamp(80px,_9vw,190px)] leading-[0.95] mb-4 uppercase relative z-10 w-11/12 lg:w-full">Win with the ease of cheating</h1>

              <div className="w-10/12 lg:w-[50%] xl:w-[45%] 2xl:w-[40%] max-w-[720px] pt-[5%] lg:pt-[10%] relative pb-8 lg:pb-0">
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl xl:text-3xl mb-12 lg:mb-16">By combining data and expertise to superpower creativity, we’re making better games possible and more hits probable. It’s a full on game changer for game makers.</p>

                  <Link href="/">
                    <a className="bg-black text-white px-12 py-6 uppercase tracking-wide w-1/2 text-center">
                      Submit your game
                    </a>
                  </Link>
                </div>
              </div>
              
              <ScrollParallax isAbsolutelyPositioned lerpEase={0.15}>
                <div className="absolute bottom-0 right-[3%] lg:right-[7%] z-0 w-[60%] lg:w-[65%] xl:w-[40%] max-w-[400px] lg:max-w-[580px] xl:max-w-[700px]">
                  <Image
                    src="/images/horse.webp"
                    alt="Bee"
                    layout="responsive"
                    width={864}
                    height={865}
                    className="w-full"
                  />
                </div>
              </ScrollParallax>
            </div>
          </div>


          <div className="relative border-b border-black/50">
            <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.14} zIndex={10}>
              <div className="absolute bottom-[25%] right-[48%] z-0 w-full max-w-[100px] lg:max-w-[180px]">
                <Image
                  src="/images/bee.webp"
                  alt="Bee"
                  layout="responsive"
                  width={398}
                  height={548}
                  className="w-full"
                />
              </div>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.23} zIndex={0}>
              <div className="absolute top-[40%] left-[12%] z-0 w-full max-w-[55px] lg:max-w-[95px] -scale-x-100 rotate-[15deg]">
                <Image
                  src="/images/bee.webp"
                  alt="Bee"
                  layout="responsive"
                  width={398}
                  height={548}
                  className="w-full"
                />
              </div>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.1} zIndex={10}>
              <div className="absolute top-[35%] right-[8%] z-0 w-full max-w-[65px] lg:max-w-[140px] rotate-[-14deg]">
                <Image
                  src="/images/bee.webp"
                  alt="Bee"
                  layout="responsive"
                  width={398}
                  height={548}
                  className="w-full"
                />
              </div>
            </ScrollParallax>

            <div className="relative z-0 flex overflow-x-hidden">
              <div className="my-56 lg:my-[25vw] animate-marquee whitespace-nowrap">
                <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
              </div>

              <div className="my-56 lg:my-[25vw] absolute top-0 animate-marquee2 whitespace-nowrap">
                <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
              </div>
            </div>
          </div>



          <div className="bg-lime text-black">
            <div className="grid grid-cols-12 py-12 lg:py-[10vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
              
              <div className="col-span-12 z-10">
                <h2 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase w-[70%] lg:w-[50%] max-w-[800px]">How we get your game in lights.</h2>

                <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8">
                  <div className="w-full lg:w-1/2 xl:w-1/4 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <div className="w-full h-[200px] xl:h-auto xl:aspect-square border-black/50 border mb-6 lg:mb-10"></div>

                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-5 lg:mb-8 uppercase">Test your idea</h3>

                    <div className="content content--small w-11/12">
                      <p>There’s no reward in building a game no one will download or play. With Homa, you’ll have access to all the latest trends, niches and statistics you need to make sure you’re building games billions will play.</p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 xl:w-1/4 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <div className="w-full h-[200px] xl:h-auto xl:aspect-square border-black/50 border mb-6 lg:mb-10"></div>

                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-5 lg:mb-8 uppercase">Send a prototype</h3>

                    <div className="content content--small w-11/12">
                      <p>Send a prototype our way and one of our Publishing Managers will be in touch to talk about how we can help, one-to-one.</p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 xl:w-1/4 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <div className="w-full h-[200px] xl:h-auto xl:aspect-square border-black/50 border mb-6 lg:mb-10"></div>

                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-5 lg:mb-8 uppercase">Build a game</h3>

                    <div className="content content--small w-11/12">
                      <p>With our SDK you can start iterating immediately to perfect your game by every metric, from cost of acquisition to retention to session times. You’ll also get hot-off-the-press insights from our Market Intelligence team.</p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 xl:w-1/4 p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <div className="w-full h-[200px] xl:h-auto xl:aspect-square border-black/50 border mb-6 lg:mb-10"></div>

                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-5 lg:mb-8 uppercase">Launch a hit</h3>

                    <div className="content content--small w-11/12">
                      <p>Once everything is running smoothly, we’ll push it out into the world using the right channels at the right time to maximize impact and land at the top of the charts, where the real money is.</p>
                    </div>
                  </div>
                </div>

                <Link href="#">
                  <a className="inline-block border border-black/50 font-medium uppercase leading-none py-6 px-10 rounded-sm bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white">Submit your game</a>
                </Link>
              </div>
            </div>
          </div>


          <div className="bg-[#54596F] text-white">
            <div className="grid grid-cols-12 py-12 lg:py-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
              <div className="col-span-12 lg:col-span-2 relative z-10">
                <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">Our Team</span>
              </div>
              
              <div className="col-span-12 lg:col-span-8 z-10">
                <h2 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">People you'll meet along the way</h2>
                <div className="content max-w-3xl mb-8 xl:mb-12 w-10/12">
                  <p>In addition to having the data needed to supercharge your creativity, you’ll be working alongside a group of experts who want your game to succeed as much as you do.</p>
                </div>

                <div className="w-full flex flex-wrap border border-white mb-6 lg:mb-8">
                  <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase">WFH, WFParis, WFAnywhere</h3>

                    <div className="content content--small w-11/12">
                      <p>We’re a distributed team with a flagship HQ in Paris. Work from here, or anywhere.</p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase w-11/12">Work In English</h3>

                    <div className="content content--small w-11/12">
                      <p>We’re over 25 nationalities strong and we work in English all day long.</p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/3 p-5 lg:p-6 xl:p-8 2xl:p-10">
                    <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase">Work your way up</h3>

                    <div className="content content--small w-11/12">
                      <p>Twice-yearly reviews: twice-yearly chances to prove you deserve more.</p>
                    </div>
                  </div>
                </div>

                <Link href="#">
                  <a className="inline-block border border-white font-medium uppercase leading-none py-6 px-10 rounded-sm bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white">Apply for a job at Homa</a>
                </Link>
              </div>
            </div>
          </div>

          <Container className="pb-[10vw]">
            <m.div>
              <h1 className="display-text">Games Page</h1>
              <div className="content max-w-3xl mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </m.div>
          </Container>

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