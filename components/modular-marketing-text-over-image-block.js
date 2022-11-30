import { ScrollParallax } from "react-just-parallax"
import SanityImage from "./sanity-image"
import SanityBlockContent from '@sanity/block-content-to-react'

export default function ModularMarketingTextOverImageBlock({ heading, text, backgroundImage }) {
  return (
    <div className="bg-orange/40 relative overflow-hidden pt-12 lg:pt-0 pb-[90vw] lg:pb-0 border-b border-t border-black/50">
      
      <div className="scale-[1.11] absolute inset-0 w-full h-full">
        <SanityImage
          image={backgroundImage}
          alt="About Test"
          layout="fill"
          className="w-full h-full absolute inset-0 z-0 object-cover object-center"
        />        
      </div>
    

      <div className="grid grid-cols-12 py-12 lg:pt-[15vw] lg:pb-[20.5vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
        <div className="col-span-12 lg:col-span-1 relative z-10">
        </div>
        
        <div className="col-span-12 lg:col-span-6 z-10">
          <h2 className="font-black text-[clamp(44px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">{heading}</h2>
          <div className="content max-w-3xl mb-8 xl:mb-12 w-full lg:w-10/12 leading-[1.24]">
            <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
          </div>
        </div>
      </div>
    </div>
  )
}