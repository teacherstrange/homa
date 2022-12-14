import ScramblePillButton from "./scramble-pill-button"

export default function ModularMarketingMultipleCtaBlock({ title, listItems, internalId }) {
  return (
    <div className="bg-white text-black mt-0 lg:mt-0" id={internalId ? internalId : 'section' }>
      <div className="grid grid-cols-12 py-16 lg:py-[10vw] lg:px-6 xl:px-24 max-w-screen-3xl mx-auto">
        
        <div className="col-span-12 z-10">
          {title && (
            <h2 className="font-black text-[clamp(55px,_4.45vw,_86px)] leading-[0.95] mb-6 lg:mb-16 uppercase w-[85%] lg:w-[85%] max-w-[1000px] px-6 lg:px-0">{title}</h2>
          )}

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 mb-6 lg:mb-8 gap-[1px] px-6 lg:px-0">
            {listItems.map((e, i) => {
              return (
                <div className="col-span-1 outline outline-1 outline-black p-5 lg:p-6 xl:p-8 2xl:p-10 flex flex-wrap" key={i}>
                  
                  <div className="w-full pb-16 lg:pb-24">
                    <h3 className="font-black tracking-tight text-xl lg:text-2xl xl:text-2xl leading-[0.95] uppercase">{e.heading}</h3>
                  </div>

                  <div className="content content--small w-full lg:w-11/12 pb-2 lg:pb-0 leading-[1.2] mt-auto">
                    <p>{e.text}</p>

                    { e.ctaButtonText && e.ctaButtonUrl && (
                      <ScramblePillButton href={e.ctaButtonUrl} label={e.ctaButtonText} className="p-1 lg:p-1 lg:px-3 mt-3 lg:mt-5" />
                    )}
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