import DiamondIcon from '@/icons/diamond.svg'
import FlagpoleIcon from '@/icons/flagpole.svg'
import HouseIcon from '@/icons/house.svg'
import PinIcon from '@/icons/pin.svg'
import VolumeIcon from '@/icons/volume.svg'
import WorldIcon from '@/icons/world.svg'
import SanityImage from './sanity-image'

export default function ModularMarketingIconBlock({ title, listItems, removeTopBorder, removeBottomBorder }) {
  return (
    <div className={`bg-lime text-black border-black/50 ${!removeTopBorder && 'border-t'} ${!removeBottomBorder && 'border-b'}`}>
      <div className="grid grid-cols-12 py-20 lg:py-[10vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
        
        <div className="col-span-12 z-10">
          <h2 className="display-text--small w-full lg:w-8/12 mb-12 lg:mb-24 xl:mb-32">{title}</h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[1px] mb-6 lg:mb-8">
            {listItems.map((e, i) => {
              let webmVideo = null
              let movVideo = null
              if (e.animatedIcon == 'flagpole') {
                webmVideo = '/videos/flagpole.webm'
                movVideo = '/videos/flagpole.mov'
              } else if (e.animatedIcon == 'hands') {
                webmVideo = '/videos/hands.webm'
                movVideo = '/videos/hands.mov'
              } else if (e.animatedIcon == 'eyeball') {
                webmVideo = '/videos/eye.webm'
                movVideo = '/videos/eye.mov'
              } else if (e.animatedIcon == 'faces') {
                webmVideo = '/videos/faces.webm'
                movVideo = '/videos/faces.mov'
              } else if (e.animatedIcon == 'chess') {
                webmVideo = '/videos/chess.webm'
                movVideo = '/videos/chess.mov'
              }

              return (
                <div className={`col-span-1 p-5 lg:p-6 xl:p-8 2xl:p-10 outline outline-1 outline-black`} key={i}>

                  <div className="content content--small w-11/12 h-full lg:aspect-square">
                    <div className="pb-12">
                      {e.icon ? (
                        <SanityImage image={e.icon} className="w-[35%] max-w-[90px] lg:max-w-[200px] mt-auto" />
                      ) : (
                        <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full translate-y-[-1%]`}>
                          <source src={movVideo} type="video/quicktime" />
                          <source src={webmVideo} type="video/webm" />

                          Sorry. Your browser does not support the video tag.
                        </video>
                      )}
                    </div>

                    <div className="w-full mb-5 lg:mb-8">
                      <h3 className="font-black tracking-tight text-xl lg:text-2xl xl:text-2xl leading-[0.95] uppercase mb-0 pb-0">{e.heading}</h3>
                    </div>

                    <div className="w-full content content--small leading-[1.24]">
                      <p>{e.text}</p>
                    </div>  
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