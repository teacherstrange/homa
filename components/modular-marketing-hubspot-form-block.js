import { useHubspotForm } from "next-hubspot";
import { useEffect } from "react";
import { ScrollParallax } from "react-just-parallax";
import LocalImage from "./local-image";
import ScramblePillButton from "./scramble-pill-button";

export default function ModularMarketingHubspotFormBlock({ title, hubspotFormId, text, backgroundLandscape, internalId }) {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '25941253',
    formId: hubspotFormId,
    target: '#hubspot-form-wrapper',
    cssRequired: ' ',
  });

  return (
    <div className="w-full bg-gray-100 relative overflow-hidden" id={internalId ? internalId : 'section' }>
      <div className="w-full h-full absolute inset-0 z-0 object-cover object-center lg:scale-[1.075] bg-gray-200">
        { (backgroundLandscape && backgroundLandscape !== 'none') ? (
          <LocalImage
            src={`/images/heros/${backgroundLandscape}.jpg`}
            layout="fill"
            className="w-full h-full absolute inset-0 z-0 object-cover object-top"
          />
        ) : (
          <></>
        )}
      </div>

      <div className="grid grid-cols-12 border-black/50 border-t border-b relative z-10 items-center">
        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-transparent h-[12vw] w-full mx-auto">
        </div>
      </div>

      <div className="grid grid-cols-12 border-black/50 relative z-10">
        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-white bg-gradient-to-b from-pink/20 to-pink p-6 md:p-16 xl:p-16 text-center flex flex-wrap justify-center">
          <span className="block font-black uppercase text-lg md:text-3xl xl:text-4xl text-center w-full mb-6 lg:mb-12">{ title ? title : 'Guessing Game Over' }</span>

          {text && (
            <p className="mb-6 lg:mb-10">{text}</p>
          )}

          <div className="w-full mx-auto">
            <div className="w-11/12 lg:w-8/12 max-w-md text-base mx-auto form--fancy">
              <div id="hubspot-form-wrapper" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 border-black/50 border-t border-b relative z-10">
        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-transparent h-[12vw] w-full mx-auto">
        </div>
      </div>
    </div>
  )
}