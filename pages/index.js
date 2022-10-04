// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import { fade } from '@/helpers/transitions'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FooterCta from '@/components/footer-cta'
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import Image from 'next/image'
import Link from 'next/link'
import SocialScroller from '@/components/social-scroller'
import { useRef } from 'react'
import PixelatedImage from '@/components/pixelated-image'
import { CarouselBlog } from '@/components/carousel-blog'

import MobileHandIcon from '@/icons/mobile-hand.svg'
import GlobeIcon from '@/icons/globe.svg'
import DownloadIcon from '@/icons/download.svg'
import PhoneIcon from '@/icons/phone.svg'

// Sanity
import SanityPageService from '@/services/sanityPageService'
import TextScrambler from '@/components/text-scrambler'
import GridOverlayDense from '@/components/grid-overlay-dense'
import ScramblePillButton from '@/components/scramble-pill-button'
import SanityImage from '@/components/sanity-image'
import LocalImage from '@/components/local-image'
import ProductScroller from '@/components/product-scroller'

const query = `{
  "blog": *[_type == "blog"][0...5]{
    title,
    slug {
      current
    },
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    category-> {
      title,
      slug {
        current
      }
    },
    publishDate
  },
  "products": *[_type == "products"] | order(orderRank asc){
    title,
    introText,
    productVisual {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    }
  },
  "home": *[_type == "home"][0]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    introText,
    makeAGameCtaHeading,
    makeAGameCtaText,
    homaAcademyCtaHeading,
    homaAcademyCtaText,
    featuredGames[]->{
      title,
      partnerName,
      gameplayVideo,
      installs
    },
    scrollingImages[] {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "contact": *[_type == "contact"][0]{
    email,
    phone,
    twitter,
    instagram,
    linkedIn,
    facebook,
    tikTok,
    discord
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const characterBinder = useRef(null);

  // Sanity Data
  const { data: { blog, products, home, contact } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo
        title={home.seo?.metaTitle ? home.seo?.metaTitle : 'Home'}
        description={home.seo?.metaDesc ? home.seo?.metaDesc : null}
      />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade} className="w-full h-full min-h-screen lg:min-h-[115vh] bg-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden">
              <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-y-[1.07] -scale-x-100">
                <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.036}>
                  <SanityImage
                    image={home.heroImage}
                    layout="fill"
                    className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                  />
                </ScrollParallax>
              </div>

            <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
              <DayInfo className="mb-1" />
              <MousePosition />
            </div>

            <div className=" mx-auto" ref={characterBinder}>
              <h1 className="font-black index-heading tracking-tight leading-[0.95] mb-4 uppercase relative z-10 w-full md:w-11/12 lg:w-full">
                <TextScrambler text="Game The System" seed={12} step={1} singleLine />
              </h1>

              <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[35%] max-w-[720px] pt-[75%] lg:pt-[10%] relative pb-8 lg:pb-0">
                <div className="relative z-10">
                  <div className="mb-6 lg:mb-10">
                    <p className="text-lg md:text-xl xl:text-2xl">We're believers in data and builders of tools that help game creators <Link href="/homa-lab"><a className="inline-block border border-black rounded-sm p-[2px] px-2 uppercase tracking-wider text-sm md:text-base xl:text-lg font-medium hover:bg-black hover:text-white focus:bg-black focus:text-white group"><span className="relative block"><span className="inline-block group-hover:opacity-0">Make</span><span className="absolute top-0 left-0 right-0 hidden  group-hover:block"><TextScrambler text="Make" seed={5} step={1} singleLine /></span></span></a></Link> and <Link href="/publish"><a className="inline-block border border-black rounded-sm p-[2px] px-2 uppercase tracking-wider text-sm md:text-base xl:text-lg font-medium hover:bg-black hover:text-white focus:bg-black focus:text-white group"><span className="relative block"><span className="inline-block group-hover:opacity-0">Publish</span><span className="absolute top-0 left-0 right-0 hidden  group-hover:block"><TextScrambler text="Publish" seed={5} step={1} singleLine /></span></span></a></Link> hit games with franchise potential built right in.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    <div className="col-span-1 md:col-span-1">
                      <Link href="/homa-lab">
                        <a className="roll-btn roll-btn--hero w-full" >
                          <span className="roll-btn__front">Make A Game</span>
                          <span className="roll-btn__back">Make A Game</span>
                        </a>
                      </Link>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                      <Link href="/careers">
                        <a className="roll-btn roll-btn--hero 
                        w-full md:w-1/2">
                          <span className="roll-btn__front">Build A Career</span>
                          <span className="roll-btn__back">Build A Career</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.025}>
                  <ScrollParallax isAbsolutelyPositioned lerpEase={0.15}>
                    <div className="absolute top-[-15vw] lg:top-auto lg:bottom-[-80%] right-[-5vw] lg:right-[-70%] xl:right-[-90%] w-[55vw] lg:w-[28vw] 2xl:w-[30vw] max-w-[480px] z-0">
                      {/* <Image
                        src="/images/character-test.webp"
                        alt="Character Test"
                        layout="responsive"
                        width={930}
                        height={1236}
                      /> */}

                      <LocalImage src={'/images/panda-new.webp'} width={1081} height={1392.5} />
                    </div>
                  </ScrollParallax>
                </MouseParallax>
              </div>
            </div>
          </m.div>
        
          <m.div variants={fade}>
            <div className="bg-gradient-to-b from-pink/20 to-pink relative overflow-hidden">
              <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.025} zIndex={0}>
                <div className="absolute bottom-[-12vw] lg:bottom-[-3vw] right-[10%] md:right-[3%] z-0 w-[65%] lg:w-[20%] max-w-[290px] lg:max-w-[350px] xl:max-w-[380px]">
                  {/* <Image
                    src="/images/horse.webp"
                    alt="Bee"
                    layout="responsive"
                    width={864}
                    height={865}
                    className="w-full"
                  /> */}
                  <LocalImage src={'/images/horse.webp'} width={792.5} height={1173.5} />
                </div>
              </ScrollParallax>
              
              <div className="w-full border-b border-black/50 relative z-10">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[10vw] md:px-10">
                    <div className="grid grid-cols-10 items-center">
                      <div className="col-span-9 md:col-span-6 md:px-6 lg:px-10 xl:px-24 mb-12 md:mb-0">
                        <p className="text-2xl xl:text-3xl uppercase font-bold">{home.introText}</p>
                      </div>

                      {/* Abstract */}
                      <div className="col-span-6 col-start-3 md:col-span-4 md:col-start-7">
                        <div className="w-[100%] md:w-[85%] lg:w-[65%] relative mx-auto">
                          <PhoneIcon className="w-full relative z-0 opacity-90" />

                          <div className="absolute bottom-[50px] lg:bottom-auto lg:top-0 right-0 mr-[-35%] lg:mr-[-50%] mt-[15%] z-10 w-full lg:w-[70%]">
                            <div className="w-full">
                              <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-b-0 border-black/50 px-3 py-5">{home.featuredGames[0].title}</span>
                            </div>
                            <div className="w-full">
                              <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5">{home.featuredGames[0].partnerName}</span>
                            </div>
                          </div>


                          <div className="absolute inset-0 z-1 scale-y-[0.961] scale-x-[0.96] translate-x-[1.2%] border-1 border-black">

                            <svg className="w-full scale-y-[0.97] scale-x-[0.97] translate-y-[-1.5%] translate-x-[-1.5%] absolute inset-0 z-30" viewBox="0 0 355 623" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="1" y="1" width="352.72" height="620.72" rx="48" stroke="#0F0F19" stroke-width="2"/>
                            </svg>

                            <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 phone-mask`}>
                              <source src={home.featuredGames[0].gameplayVideo} type="video/mp4" />

                              Sorry. Your browser does not support the video tag.
                            </video>

                            {/* <Image
                              src="/images/game-example.webp"
                              layout="responsive"
                              width={496}
                              height={882}
                              quality={75}
                              className="w-full"
                            /> */}
                          </div>

                          <div className="absolute bottom-0 left-0 ml-[-40%] md:ml-[-20%] mb-[15%] z-10 w-[130%] md:w-[70%] min-w-[120px] md:min-w-[290px]">
                            <div className="w-full">
                              <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5 text-center">{home.featuredGames[0].installs}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full border-b border-black/50 pb-56 md:pb-0 relative z-10">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-12  md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[5vw] px-6 md:px-10">
                    <div className="grid grid-cols-12 pt-[4vw] pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <GlobeIcon className="w-[40%] max-w-[50px] lg:max-w-[100px] lg:mx-auto" />
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="text-lg lg:text-2xl 2xl:text-3xl uppercase font-bold block mb-4">Our data-driven creations have helped</span>
                        <span className="font-black text-[clamp(40px,_5vw,_86px)] tracking-tight leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">1,000+ Studios &amp; Developers</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <MobileHandIcon className="w-[40%] max-w-[50px] lg:max-w-[100px] lg:mx-auto" />
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="text-lg lg:text-2xl 2xl:text-3xl uppercase font-bold block mb-4">Combining our creative expertise into</span>
                        <span className="font-black text-[clamp(40px,_5vw,_86px)] tracking-tight leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">80+ Mobile Games</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 pb-[30vw] md:pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <DownloadIcon className="w-[40%] max-w-[50px] lg:max-w-[100px] lg:mx-auto" />
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="text-lg lg:text-2xl 2xl:text-3xl uppercase font-bold block mb-4">Resulting in chart topping hits and</span>
                        <span className="font-black text-[clamp(40px,_5vw,_86px)] tracking-tight leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">1,000,000,000+ Downloads</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 py-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
              <div className="order-2 md:order-1 col-span-12 lg:col-span-2 relative z-10">
                <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">
                  <TextScrambler text="Make A Game" seed={5} step={1} singleLine /></span>
              </div>
              
              <div className="order-3 md:order-2 col-span-12 md:col-span-6 z-10">
                <h2 className="font-black text-[clamp(35px,_4.55vw,_90px)] leading-[0.95] mb-8 lg:mb-16 uppercase tracking-tight">{home.makeAGameCtaHeading}</h2>
                <div className="content max-w-3xl mb-8 xl:mb-12 w-10/12">
                  <p>{home.makeAGameCtaText}</p>
                </div>
                
                <ScramblePillButton href="/homa-lab" label="Enter The Homa Lab" internal />
              </div>
              
              <div className="order-1 md:order-3 col-span-12 md:col-span-6 lg:col-span-4 relative z-0 h-[300px] md:h-full">
                <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.015} zIndex={0}>
                  <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.14} zIndex={0}>
                    <div className="absolute top-[25%] right-[5%] z-0 w-full lg:w-1/2 max-w-[150px] lg:max-w-[160px] xl:max-w-[180px] 2xl:max-w-[230px]">
                      {/* <Image
                        src="/images/bee.webp"
                        alt="Bee"
                        layout="responsive"
                        width={398}
                        height={548}
                        className="w-full"
                      /> */}
                      <LocalImage src={'/images/bee.webp'} width={398} height={548} />
                    </div>
                  </ScrollParallax>
                </MouseParallax>

                <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.025} zIndex={0}>
                  <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.23} zIndex={0}>
                    <div className="absolute bottom-0 left-[0] z-0 w-full max-w-[90px] xl:max-w-[100px] -scale-x-100 rotate-[15deg]">
                      {/* <Image
                        src="/images/bee.webp"
                        alt="Bee"
                        layout="responsive"
                        width={398}
                        height={548}
                        className="w-full"
                      /> */}
                      <LocalImage src={'/images/bee.webp'} width={398} height={548} />
                    </div>
                  </ScrollParallax>
                </MouseParallax>

                <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.025} zIndex={0}>
                  <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.1} zIndex={0}>
                    <div className="absolute top-[0] left-[17%] 2xl:left-[22%] z-0 w-full max-w-[70px] lg:max-w-[110px] xl:max-w-[135px] 2xl:max-w-[155px]">
                      {/* <Image
                        src="/images/bee.webp"
                        alt="Bee"
                        layout="responsive"
                        width={398}
                        height={548}
                        className="w-full"
                      /> */}
                      <LocalImage src={'/images/bee2.webp'} width={263} height={352} />
                    </div>
                  </ScrollParallax>
                </MouseParallax>
              </div>
            </div>

            {/* Product Scroller */}
            <ProductScroller products={products} />


            <div className="relative overflow-hidden border-t border-black/50">
              <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.015} zIndex={10}>
                <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.14} zIndex={10}>
                  <div className="absolute bottom-[15vw] right-[10vw] w-[60%] lg:w-1/3 max-w-[300px] lg:max-w-[550px] z-10">
                    {/* <Image
                      src="/images/ninja.webp"
                      alt="Ninja"
                      layout="responsive"
                      width={1056}
                      height={800}
                      className="w-full"
                    /> */}
                    <LocalImage src={'/images/ninja.webp'} width={1056} height={800} />
                  </div>
                </ScrollParallax>
              </MouseParallax>

              <div className="relative z-0 flex overflow-x-hidden">
                
                <div className="mt-56 lg:mt-[25vw] mb-[16vw] animate-marquee whitespace-nowrap">
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">Play To Win</span>
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">Play To Win</span>
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">Play To Win</span>
                </div>

                <div className="mt-56 lg:mt-[25vw] mb-[16vw] absolute top-0 animate-marquee2 whitespace-nowrap">
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">Play To Win</span>
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">Play To Win</span>
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">Play To Win</span>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-12 pb-12 lg:pb-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
              <div className="order-2 md:order-1 col-span-12 lg:col-span-2 relative z-10">
                <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium"><TextScrambler text="Homa Academy" seed={5} step={1} singleLine /></span>
              </div>
              
              <div className="order-3 md:order-2 col-span-12 md:col-span-6 z-10">
                <h2 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">{home.homaAcademyCtaHeading}</h2>
                <div className="content max-w-3xl mb-8 xl:mb-12 w-10/12">
                  <p>The Homa Academy provides developers and studios everywhere the insights needed to create games with hit potential coded right in.</p>

                  <p>Stop by to learn the ins and outs of game design, including in-depth game play analysis, methods for ideation &amp; player experience optimization, as well as hands-on game building tutorials, hangouts and more. </p>
                </div>
                
                <ScramblePillButton href="https://academy.homagames.com/" label="Learn More"/>
              </div>
              
              <div className="order-1 md:order-3 col-span-12 md:col-span-6 lg:col-span-4 relative z-0 md:h-full mb-8 lg:mb-0">

                {/* Henry to replace with WebGl */}
                {/* <TestWebgl /> */}
                <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full scale-[1.1]`}>
                  <source src={'/videos/stairs.mp4'} type="video/mp4" codecs="hvc1" />
                  <source src={'/videos/stairs.webm'} type="video/webm" />

                  Sorry. Your browser does not support the video tag.
                </video>
              </div>
            </div>

            
            {/* DISABLED DUE TO MISSING CONTENT */}
            {/* <div className="">
              <div className="relative z-0">
                <Marquee speed={130} gradient={false}>
                  {home.scrollingImages.map((e, i) => {
                    return (
                      <span className="inline-block w-[60%] md:w-[40%] xl:w-[30%] h-[60vw] md:h-[40vw] xl:h-[30vw] aspect-square relative overflow-hidden border border-r-0 border-black" key={i}>
                        <SanityImage
                          key={i}
                          image={e}
                          layout="fill"
                          className="block w-full h-full inset-0 scale-[1.02]"
                        />
                      </span>
                    )
                  })}
                </Marquee>
              </div>
            </div> */}

            
            <div className="bg-lime text-black relative overflow-hidden border-t border-b border-black/50">
              <div className="grid grid-cols-12 py-12 lg:py-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
                <div className="col-span-12 lg:col-span-2 relative z-10">
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium"><TextScrambler text="Build a career" seed={5} step={1} singleLine /></span>
                </div>
                
                <div className="col-span-12 lg:col-span-8 z-10 relative">
                  <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-[60%] absolute top-0 right-0 z-[1] translate-x-[65%] lg:translate-y-[10%] xl:translate-y-[-5%] hidden lg:block`}>
                    <source src={'/videos/rocket.mov'} type="video/quicktime" />
                    <source src={'/videos/rocket.webm'} type="video/webm" />

                    Sorry. Your browser does not support the video tag.
                  </video>

                  <h1 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">We're changing gaming by rewriting the rules</h1>
                  <div className="content max-w-3xl mb-8 xl:mb-12 md:w-9/12 xl:w-7/12">
                    <p>Creating tools to superpower others’ creativity requires a lot of creativity on our end too. If you’re creative and up for taking over an industry, we want our logo on your Linkedin.</p>
                  </div>

                  <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8 relative bg-lime z-[10]">
                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-12 lg:mb-32 uppercase">WFH, WFParis, WFAnywhere</h3>

                      <div className="content content--small w-full">
                        <p>We’re a distributed team with a flagship HQ in Paris. Work from here, or anywhere.</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-12 lg:mb-32 uppercase w-11/12">Work In<br/>English</h3>

                      <div className="content content--small w-full">
                        <p>We’re over 34 nationalities strong and we work in English all day long.</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-12 lg:mb-32 uppercase">Work your<br/>way up</h3>

                      <div className="content content--small w-full">
                        <p>Twice-yearly reviews: twice-yearly chances to prove you deserve more.</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/careers">
                    <a className="roll-btn inline-block lg:w-1/3" >
                      <span className="roll-btn__front">Apply for a job at Homa</span>
                      <span className="roll-btn__back">Apply for a job at Homa</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>


            <div className="bg-orange/40 relative overflow-hidden pb-[25vw] lg:pb-0">
              <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.05} zIndex={0}>
                <div className="scale-[1.15] absolute inset-0 w-full h-full">
                  <LocalImage
                    src="/images/hope-cta2.jpg"
                    alt="About Test"
                    layout="fill"
                    className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                  />             
                </div>   
              </ScrollParallax>

              <div className="grid grid-cols-12 py-12 lg:pt-[15vw] lg:pb-[20.5vw] px-6 lg:px-24 xl:px-32 max-w-screen-3xl mx-auto">
                
                <div className="col-span-12 lg:col-span-7 z-10 mb-12 lg:mb-0">
                  <h2 className="font-black text-[clamp(43px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">There is luck.<br/>Or there is Homa.</h2>
                  <div className="content max-w-3xl mb-6 xl:mb-8 w-10/12">
                    <p>With us, every step of your game’s build and launch phase – from ideation right through to monetization - is managed by experts and tested, tweaked and improved by data-rich technology.</p>

                    <p>To see our process and the hits its produced:</p>
                  </div>

                  <ScramblePillButton href="/games" label="View Our Games" internal/>
                </div>

                <div className="col-span-6 col-start-4 lg:col-span-4 lg:col-start-8">
                  <div className="w-[100%] lg:w-[70%] relative mx-auto lg:translate-y-[-1.5vw] lg:translate-x-[2.5vw]">
                    <PhoneIcon className="w-full relative z-0 opacity-[0.85]" />

                    <div className="absolute top-0 right-0 mr-[-35%] lg:mr-[-50%] mt-[15%] z-10 w-full lg:w-[70%]">
                      <div className="w-full">
                        <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-b-0 border-black/50 px-3 py-5">{home.featuredGames[1].title}</span>
                      </div>
                      <div className="w-full">
                        <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5">{home.featuredGames[1].partnerName}</span>
                      </div>
                    </div>


                    <div className="absolute inset-0 z-1 scale-y-[0.961] scale-x-[0.96] translate-x-[1.2%] border-1 border-black">

                      <svg className="w-full scale-y-[0.97] scale-x-[0.97] translate-y-[-1.5%] translate-x-[-1.5%] absolute inset-0 z-30" viewBox="0 0 355 623" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="352.72" height="620.72" rx="48" stroke="#0F0F19" stroke-width="2"/>
                      </svg>

                      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 phone-mask`}>
                        <source src={home.featuredGames[1].gameplayVideo} type="video/mp4" />

                        Sorry. Your browser does not support the video tag.
                      </video>

                      {/* <Image
                        src="/images/game-example.webp"
                        layout="responsive"
                        width={496}
                        height={882}
                        quality={75}
                        className="w-full"
                      /> */}
                    </div>

                    <div className="absolute bottom-0 left-0 ml-[-40%] md:ml-[-20%] mb-[15%] z-10 w-[130%] md:w-[70%] min-w-[120px] md:min-w-[290px]">
                      <div className="w-full">
                        <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5 text-left">{home.featuredGames[1].installs}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SocialScroller contact={contact} />
            <CarouselBlog items={blog} />
            <FooterCta />
            <Footer contact={contact} />
          </m.div>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

// Sanity CMS Props
export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}