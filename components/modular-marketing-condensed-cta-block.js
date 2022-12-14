import LocalImage from "./local-image";

export default function ModularMarketingCondensedCtaBlock({ heading, subHeading, backgroundImage, ctaButtonText, ctaButtonId, ctaButtonUrl, backgroundLandscape, internalId }) {
  return (
    <div className={`w-full h-full bg-gradient-to-b from-pink to-pink/30  border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden pt-[25vw] pb-[18vw] lg:py-[15vw]`} id={internalId ? internalId : 'section' }>

      { backgroundLandscape !== 'none' && (
        <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
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
        </div>
      )}

      <div className="max-w-screen-3xl mx-auto relative z-10 pb-8 md:pb-12 text-center">
        { subHeading && (
          <span className="uppercase text-sm md:text-lg lg:text-xl xl:text-2xl tracking-widest mb-5 lg:mb-8 block font-medium">{subHeading}</span>
        )}
        <h1 className="font-black text-[clamp(50px,_7vw,120px)] leading-[0.9] tracking-tight mb-12 lg:mb-20 uppercase relative z-10 w-full lg:w-full max-w-screen-2xl mx-auto">{heading}</h1>

        { ctaButtonText && (ctaButtonUrl || ctaButtonId ) && (
          <>
            <a 
              href={ctaButtonUrl ? ctaButtonUrl : `#${ctaButtonId}` }
              {...(ctaButtonUrl ? {target: 'blank', rel: 'noreferrer noopener'} : {})}
              className="roll-btn block lg:inline-block"
            >
              <span className="roll-btn__front">{ctaButtonText}</span>
              <span className="roll-btn__back">{ctaButtonText}</span>
            </a>
          </>
        )}
      </div>
    </div>
  )
}