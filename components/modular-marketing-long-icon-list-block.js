import { ScrollParallax } from "react-just-parallax";
import LocalImage from "./local-image";
import SanityImage from "./sanity-image";

export default function ModularMarketingLongIconListBlock({ title, listItems, character, removeBottomBorder, removeTopBorder, internalId }) {
  return (
    <div className={`bg-gradient-to-b from-pink/20 to-pink relative overflow-hidden ${!removeTopBorder && 'border-t border-black'} ${!removeBottomBorder && 'border-b border-black'}`} id={internalId ? internalId : 'section' }>
      {character && (
        <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.15} strength={0.025} zIndex={0}>
          <div className="absolute bottom-[-12vw] lg:bottom-[-3vw] right-[10%] md:right-[3%] z-0 w-[65%] lg:w-[20%] max-w-[290px] lg:max-w-[350px] xl:max-w-[380px]">
            <LocalImage src={'/images/horse.webp'} width={792.5} height={1173.5} />
          </div>
        </ScrollParallax>
      )}
      
      {title && (
        <div className="w-full border-b border-black/50 relative z-10">
          <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50 py-[10vw] lg:py-0 lg:pl-10 px-6 lg:px-0">
              <div className="grid grid-cols-10 items-center">
                <div className="col-span-10 md:col-span-9 lg:p-12 xl:p-24 mb-4 md:mb-0">
                  <p className="font-black text-[clamp(50px,_6vw,_100px)] tracking-tight leading-[0.95] uppercase max-w-[90%]">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full border-b border-black/50 pb-56 md:pb-0 relative z-10">
        <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
          <div className="col-span-12  md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[5vw] px-6 md:px-10">
            {listItems.map((e, i) => {
              return (
                <div className={`grid grid-cols-12 pt-[4vw] ${i + 1 == listItems.length ? 'pb-[20vw] lg:pb-[10vw]' : 'pb-[10vw] lg:pb-[5vw]' }`} key={i}>
                  <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                    <div className="w-[40%] max-w-[50px] lg:max-w-[100px] lg:mx-auto">
                      <SanityImage image={e.icon} className="w-full" />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <span className="text-lg lg:text-2xl 2xl:text-3xl uppercase leading-[1.15] lg:leading-[1.15] xl:leading-[1.15] font-bold block mb-4">{e.subHeading}</span>
                    <span className="font-black text-[clamp(40px,_5vw,_86px)] tracking-tight leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">{e.heading}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}