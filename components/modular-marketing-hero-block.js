import { ScrollParallax } from "react-just-parallax";
import DayInfo from "./day-info";
import LocalImage from "./local-image";
import MousePosition from "./mouse-position";
import SanityImage from "./sanity-image";
import TextScrambler from "./text-scrambler";


export default function ModularMarketingHeroBlock({ heading, text, backgroundImage, ctaButtonText, ctaButtonUrl, characterIcon, backgroundLandscape }) {
  let character = null
  let characterW = null
  let characterH = null
  let classList = null

  if (characterIcon == 'skull') {
    character = '/images/skull-new.webp'
    characterW = 727
    characterH = 1184
    classList = 'bottom-[-7%] w-[50%] lg:w-[33%] xl:w-[25%] max-w-[200px] md:max-w-[280px] lg:max-w-[370px] xl:max-w-[420px] right-[30%] md:right-[35%] lg:right-[12%]'
  } else if (characterIcon == 'horse') {
    character = '/images/horse.webp'
    characterW = 792.5
    characterH = 1173.5
    classList = 'bottom-[-7%] w-[50%] lg:w-[33%] xl:w-[25%] max-w-[200px] md:max-w-[280px] lg:max-w-[370px] xl:max-w-[420px] right-[30%] md:right-[35%] lg:right-[12%]'
  } else if (characterIcon == 'farmer') {
    character = '/images/farmer-new.webp'
    characterW = 325
    characterH = 1260
    classList = 'bottom-[-25%] w-[50%] lg:w-[17%] xl:w-[14%] max-w-[130px] md:max-w-[180px] lg:max-w-[180px] xl:max-w-[260px] right-[30%] md:right-[35%] lg:right-[18%]'
  } else if (characterIcon == 'robot') {
    character = '/images/robot-new.webp'
    characterW = (2238 / 2)
    characterH = (2256 / 2)
    classList = 'bottom-[-2%] w-[60%] lg:w-[35%] xl:w-[28%] max-w-[300px] md:max-w-[320px] lg:max-w-[420px] xl:max-w-[520px] right-[25%] md:right-[35%] lg:right-[12%]'
  } else if (characterIcon == 'princess') {
    character = '/images/girl-new.webp'
    characterW = (1555 / 2)
    characterH = (2729 / 2)
    classList = 'bottom-[-3%] w-[50%] lg:w-[33%] xl:w-[25%] max-w-[200px] md:max-w-[280px] lg:max-w-[370px] xl:max-w-[420px] right-[30%] md:right-[35%] lg:right-[12%]'
  } else if (characterIcon == 'panda') {
    character = '/images/panda-new.webp'
    characterW = (2162 / 2)
    characterH = (2785 / 2)
    classList = 'bottom-[-3%] w-[60%] lg:w-[35%] xl:w-[28%] max-w-[300px] md:max-w-[320px] lg:max-w-[420px] xl:max-w-[520px] right-[25%] md:right-[35%] lg:right-[12%]'
  } else if (characterIcon == 'none') {
    character = null
    characterW = null
    characterH = null
  }

  return (
    <div className={`w-full h-full min-h-screen lg:min-h-[100vh] bg-gradient-to-b from-pink to-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden ${characterIcon ? 'pb-[260px] lg:pb-0' : '' }`}>

      {characterIcon && (
        <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.15} zIndex={10}>
          <div className={`absolute z-10 ${classList ? classList : null}`}>
            {/* <Image
              src="/images/horse.webp"
              alt="Bee"
              layout="responsive"
              width={864}
              height={865}
              className="w-full"
            /> */}
            <LocalImage src={character} width={characterW} height={characterH} />
          </div>
        </ScrollParallax>
      )}

      { backgroundLandscape !== 'none' && (
        <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
          <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={1} strength={-0.035}>
            <LocalImage
              src={`/images/heros/${backgroundLandscape}.jpg`}
              layout="fill"
              className="w-full h-full absolute inset-0 z-0 object-cover cover-image--bottom hidden lg:block"
            />
            <LocalImage
              src={`/images/heros/${backgroundLandscape}.jpg`}
              layout="fill"
              className="w-full h-full absolute inset-0 z-0 object-cover cover-image--bottom block lg:hidden"
            />
          </ScrollParallax>
        </div>
      )}

      <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
        <DayInfo className="mb-1" />
        <MousePosition />
      </div>

      <div className="max-w-screen-3xl mx-auto relative z-10 pb-8 md:pb-12">
        <h1 className="font-black text-[clamp(54px,_8.5vw,170px)] leading-[0.95] tracking-tight mb-16 lg:mb-32 uppercase relative z-10 w-full lg:w-full"><TextScrambler text={heading} seed={50} step={3} /></h1>

        {text && (
          <div className="w-11/12 md:w-2/3 max-w-[670px] mb-8 md:mb-12">
            <p className="text-base md:text-xl xl:text-2xl">{text}</p> 
          </div>
        )}
        
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