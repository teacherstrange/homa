import { ScrollParallax } from "react-just-parallax"
import SanityImage from "./sanity-image"
import SanityBlockContent from '@sanity/block-content-to-react'

export default function ModularMarketingTextImageSplitBlock({ heading, text, backgroundImage, flipImage, removeTopPadding, removeBottomPadding }) {
  return (
    <div className="bg-white relative overflow-hidden">
      {!removeTopPadding && (
        <div className="w-full border-b border-black/50 hidden lg:block">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50 h-[8vw]">
              <div className="grid grid-cols-10">
                <div className="col-span-9 lg:col-span-5">
                </div>
                <div className="col-span-10 lg:col-span-5 lg:col-start-6 lg:border-l lg:border-black/50 h-[8vw]">
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full border-b border-black/50">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50">
            <div className="grid grid-cols-10">
              
              <div className={`col-span-9 lg:col-span-5 mb-0 lg:mb-0 py-10 lg:py-12 px-6 lg:px-12 flex flex-wrap order-2 ${flipImage ? 'lg:order-2 lg:border-l lg:border-black/50' : 'lg:order-1' }`}>
                <div className="w-full mb-auto">
                  <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-32 uppercase max-w-[750px]">{heading}</h2>
                </div>
                <div className="w-full mt-auto">
                  <div className="content mb-0 lg:mb-12 w-full lg:w-11/12 leading-[1.24] pb-12 lg:pb-0">
                    <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
                  </div>

                  {/* <ScramblePillButton href="https://homagang.xyz" label="Learn More" /> */}
                </div>
              </div>

              <div className={`col-span-10 lg:col-span-5 relative overflow-hidden order-1 ${flipImage ? 'lg:order-1' : 'lg:order-2 lg:col-start-6 lg:border-l lg:border-black/50' }`}>
                <div className="scale-[1.15] w-full h-full aspect-square">
                  <SanityImage
                    image={backgroundImage}
                    layout="fill"
                    className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!removeBottomPadding && (
        <div className="w-full border-b border-black/50 hidden lg:block">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50 h-[8vw]">
              <div className="grid grid-cols-10">
                <div className="col-span-9 lg:col-span-5">
                </div>
                <div className="col-span-10 lg:col-span-5 lg:col-start-6 lg:border-l lg:border-black/50 h-[8vw]">
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}