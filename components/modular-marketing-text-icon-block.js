import SanityBlockContent from '@sanity/block-content-to-react'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import LocalImage from './local-image'
import ScramblePillButton from './scramble-pill-button'

export default function ModularMarketingTextIconBlock({ heading, text, subHeading, ctaButtonText, ctaButtonUrl, animatedIcon, characterIcon }) {

  let webmVideo = null
  if (animatedIcon == 'flagpole') {
    webmVideo = '/videos/flagpole.webm'
  } else if (animatedIcon == 'hands') {
    webmVideo = '/videos/hands.webm'
  } else if (animatedIcon == 'eyeball') {
    webmVideo = '/videos/eye.webm'
  } else if (animatedIcon == 'faces') {
    webmVideo = '/videos/faces.webm'
  } else if (animatedIcon == 'chess') {
    webmVideo = '/videos/chess.webm'
  }

  let character = null
  let characterW = null
  let characterH = null

  if (characterIcon == 'skull') {
    character = '/images/skull-new.webp'
    characterW = 727
    characterH = 1184
  } else if (characterIcon == 'horse') {
    character = '/images/horse.webp'
    characterW = 792.5
    characterH = 1173.5
  } else if (characterIcon == 'bees') {
    character = true
  } else if (characterIcon == 'robot') {
    character = '/images/robot-new.webp'
    characterW = (2238 / 2)
    characterH = (2256 / 2)
  } else if (characterIcon == 'princess') {
    character = '/images/girl-new.webp'
    characterW = (1555 / 2)
    characterH = (2729 / 2)
  } else if (characterIcon == 'panda') {
    character = '/images/panda-new.webp'
    characterW = (2162 / 2)
    characterH = (2785 / 2)
  } else if (characterIcon == 'none') {
    character = null
    characterW = null
    characterH = null
  }

  return (
    <div className={`bg-white text-black border-t border-black/50 z-0 pt-10 pb-20 lg:pt-0 lg:pb-0`}>
      <div className="grid grid-cols-12 px-6 xl:px-10 max-w-screen-3xl mx-auto items-center py-[15vw] lg:py-[10vw]">
        
        <div className="col-span-12 order-2 lg:order-1 lg:col-span-6 z-10">
          {subHeading && (
            <span className="uppercase text-xs lg:text-sm tracking-widest mb-2 lg:mb-8 block font-medium">{subHeading}</span>
          )}
          <h2 className="display-text--small mb-12 lg:mb-12 xl:mb-16">{heading}</h2>
          <div className="content content--lg max-w-3xl mb-8 xl:mb-12 w-full lg:w-10/12 leading-[1.24]">
            <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={text} />

            { ctaButtonText && ctaButtonUrl && (
              <ScramblePillButton href={ctaButtonUrl} label={ctaButtonText} className="p-1 lg:p-1 lg:px-3 mt-6 lg:mt-8" />
            )}
          </div>
        </div>

        <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 z-10 h-full">
          <div className="h-full flex items-center justify-center relative">
            { !character && (
              <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full translate-y-[-1%]`}>
                <source src={webmVideo} type="video/webm" />

                Sorry. Your browser does not support the video tag.
              </video>
            )}
            
            { character && (
              <div className={`z-0 mx-auto ${characterIcon == 'bees' ? 'lg:translate-y-[-10vw] lg:translate-x-[6%] w-[75%] md:w-[80%] lg:w-[75%]' : 'w-[65%] md:w-[55%] lg:w-[55%] lg:translate-x-[15%]' }`}>
                {characterIcon == 'bees' ? (
                   <div className="order-1 md:order-3 col-span-12 md:col-span-6 lg:col-span-4 relative z-0 h-[300px] md:h-full mb-12 lg:mb-0">
                   <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.15} strength={-0.015} zIndex={0}>
                     <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.15} strength={-0.14} zIndex={0}>
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
   
                   <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.15} strength={-0.025} zIndex={0}>
                     <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.15} strength={-0.23} zIndex={0}>
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
   
                   <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.15} strength={0.025} zIndex={0}>
                     <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.15} strength={0.1} zIndex={0}>
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
                ) : (
                  <LocalImage
                    src={character}
                    width={characterW}
                    height={characterH}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}