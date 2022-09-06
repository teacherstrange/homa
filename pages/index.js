// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FooterCta from '@/components/footer-cta'
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'

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
          <div className="w-full h-full min-h-screen bg-white pt-28 md:pt-24 flex items-center justify-center border-b border-black/50 relative">
            <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
              <DayInfo className="mb-1" />
              <MousePosition />
            </div>
            <h1 className="font-black text-[8vw] mb-4 uppercase">Home Page</h1>
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