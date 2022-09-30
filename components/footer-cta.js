import Image from "next/image"
import Link from "next/link"
import { ScrollParallax } from "react-just-parallax"
import ScramblePillButton from "./scramble-pill-button"
import TextScrambler from "./text-scrambler"

export default function FooterCta({ image, children }) {
  return (
    <div className="w-full bg-gray-100 relative overflow-hidden">
      <div className="w-full h-full absolute inset-0 z-0 object-cover object-center scale-[1.075]">
        <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={0.15} zIndex={0}>
          <Image
            src={image ? image : "/images/home.jpg" }
            alt="Character Test"
            layout="fill"
            className="w-full h-full absolute inset-0 z-0 object-cover object-top"
          />
        </ScrollParallax>
      </div>

      <div className="grid grid-cols-12 border-black/50 border-t border-b relative z-10">
        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-transparent h-[18vw]">
        </div>
      </div>

      <div className="grid grid-cols-12 border-black/50 relative z-10">
        {children ? 
          children
        : <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-white bg-gradient-to-b from-pink/20 to-pink p-6 md:p-10 xl:p-16 text-center">
            <span className="block font-black uppercase text-2xl md:text-3xl xl:text-4xl mb-20 md:mb-[15vw] xl:mb-[12.5vw]">Guessing Game Over</span>

            <div className="w-8/12 mx-auto max-w-md mb-20 md:mb-[15vw] xl:mb-[12.5vw] text-lg md:text-xl xl:text-2xl">
              <p>Start building games with data, insight and tested hit potential built right in.</p>
            </div>

            <ScramblePillButton href="https://lab-v2.homagames.com/login" label="Enter The Homa Lab"/>
          </div> }
      </div>

      <div className="grid grid-cols-12 border-black/50 border-t border-b relative z-10">
        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-transparent h-[18vw]">
        </div>
      </div>
    </div>
  )
}