import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
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
          <div className="w-full h-full min-h-screen bg-white pt-28 md:pt-24 flex items-center justify-center border-b border-black">
            <h1 className="font-black text-[8vw] mb-4 uppercase">Game The System</h1>
          </div>
        
          <m.div>
            <div className="bg-gradient-to-b from-white to-pink">
              <div className="w-full border-b border-black md:px-12">
                <div className="max-w-screen-2xl mx-auto md:border-l md:border-r border-black px-6 py-[15vw] grid grid-cols-10 items-center">
                  <div className="col-span-9 md:col-span-5 mb-12 md:mb-0">
                    <p className="text-2xl uppercase font-bold">HI,<br/>WE'RE HOMA, a gaming technology lab that gives game creators the data-driven tools and human expertise needed to turn their creative ideas into commercial hits.</p>
                  </div>
                  <div className="col-span-5 col-start-4 md:col-span-4 md:col-start-7">
                    <div className="w-full bg-black opacity-20 h-[50vw] 2xl:h-[720px] rounded-xl"></div>
                  </div>
                </div>
              </div>

              <div className="w-full border-b border-black md:px-12">
                <div className="max-w-screen-2xl mx-auto md:border-l md:border-r border-black px-6 py-12">
                  <div className="grid grid-cols-10 pb-[10vw]">
                    <div className="col-span-3">
                      <p className="text-2xl uppercase font-bold">[Icon]</p>
                    </div>
                    <div className="col-span-7">
                      <p className="text-2xl uppercase font-bold">Statistic One</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-10 pb-[10vw]">
                    <div className="col-span-3">
                      <p className="text-2xl uppercase font-bold">[Icon]</p>
                    </div>
                    <div className="col-span-7">
                      <p className="text-2xl uppercase font-bold">Statistic Two</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-10">
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
            
          </m.div>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
