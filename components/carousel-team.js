import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import ArrowRightIcon from '@/icons/arrow-right.svg'

export const CarouselTeam = () => {
  const [emblaTeamRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 3.5, align: 'start', inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla--team">
      <div className="w-[91.05vw] ml-auto flex flex-wrap mb-6">
        <div className="flex-1">
          <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] uppercase">Our Partners &amp; Investors</h2>
        </div>

        <div className="flex lg:justify-end w-full lg:w-auto lg:ml-auto pr-6 lg:pr-10 mb-5 lg:mb-0">
          <button class="embla__prev w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 border-r-0 transition-colors ease-in-out duration-300 hover:border-black/100 focus:border-black/100" onClick={scrollPrev}>
            <ArrowRightIcon className="w-full rotate-180" />
          </button>
          <button class="embla__next w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 transition-colors ease-in-out duration-300 hover:border-black focus:border-black" onClick={scrollNext}>
            <ArrowRightIcon className="w-full" />
          </button>
        </div>
      </div>

      <div class="embla__viewport w-[91.05vw] ml-auto bg-opacity-70 overflow-hidden" ref={emblaTeamRef}>
        <div className="embla__container">
          {Array.from(Array(12), (e, i) => {
            return (
              <div className="embla__slide" key={i}>
                <div className="w-full bg-gray-100 aspect-square border-b border-black/50 relative overflow-hidden">
                  <img className="block w-full h-full absolute inset-0 aspect-square scale-[1.03] embla__slide-inner-blur" src="https://place.dog/500/500" alt="PLACEHOLDER" />
                </div>
                <div className="embla__slide-inner">
                  <div className="embla__slide-inner-blur">
                    <span className="block uppercase font-bold tracking-widest text-xl leading-none lg:text-2xl lg:leading-none mb-3">Daniel Ek</span>
                    <span className="block text-base leading-none lg:text-lg lg:leading-none">Co-Founder &amp; CEO, Spotify</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}