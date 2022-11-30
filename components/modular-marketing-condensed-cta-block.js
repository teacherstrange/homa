import { ScrollParallax } from "react-just-parallax";
import SanityImage from "./sanity-image";
import TextScrambler from "./text-scrambler";


export default function ModularMarketingCondensedCtaBlock({ heading, subHeading, backgroundImage, ctaButtonText, ctaButtonUrl }) {
  return (
    <div className={`w-full h-full bg-gradient-to-b from-pink to-pink/30  border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden py-[20vw] lg:py-[12vw]`}>

      { backgroundImage && (
        <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
          <SanityImage
            image={backgroundImage}
            layout="fill"
            className="w-full h-full absolute inset-0 z-0 object-cover cover-image--bottom hidden lg:block"
          />
          <SanityImage
            image={backgroundImage}
            layout="fill"
            className="w-full h-full absolute inset-0 z-0 object-cover cover-image--bottom block lg:hidden"
          />
        </div>
      )}

      <div className="max-w-screen-3xl mx-auto relative z-10 pb-8 md:pb-12 text-center">
        { subHeading && (
          <span className="uppercase text-base md:text-lg lg:text-xl xl:text-2xl tracking-widest mb-5 lg:mb-8 block font-medium">{subHeading}</span>
        )}
        <h1 className="font-black text-[clamp(45px,_7vw,120px)] leading-[0.9] tracking-tight mb-16 lg:mb-32 uppercase relative z-10 w-full lg:w-full">{heading}</h1>
        
        { ctaButtonText && ctaButtonUrl && (
          <a href={ctaButtonUrl} target="_blank" rel="noopener noreferrer" className="roll-btn block lg:inline-block">
            <span className="roll-btn__front">{ctaButtonText}</span>
            <span className="roll-btn__back">{ctaButtonText}</span>
          </a>
        )}
      </div>
    </div>
  )
}