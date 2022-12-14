import LocationIcon from '@/icons/location.svg'
import ClockIcon from '@/icons/clock.svg'
import GraphIcon from '@/icons/graph.svg'
import useSWR from 'swr'

export default function ModularMarketingCareersBlock({ internalId }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('https://apply.workable.com/api/v1/widget/accounts/homa-games?details=true', fetcher)

  return (
    <div className="w-full bg-pink/20 border-b border-black/50 mx-auto relative overflow-hidden" id={internalId ? internalId : 'section' }>
      <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
        <div className="col-span-12 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[10vw] px-6 md:px-16 xl:px-24 relative">
          <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full lg:w-[65%] lg:absolute lg:top-0 lg:right-0 block lg:translate-y-[-15.5%]`}>
            <source src={'/videos/faces.mov'} type="video/quicktime" />
            <source src={'/videos/faces.webm'} type="video/webm" />

            Sorry. Your browser does not support the video tag.
          </video>

          <h2 className="display-text w-10/12 xl:w-[60%] mb-8 lg:mb-24">Want to join us?</h2>
          <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">Open Roles</span>
          
          <div className="mb-8 lg:mb-12">
            {error && (
              <p>Coulr not load jobs...</p>
            )}

            {data?.jobs.slice(0,8).map((e, i) => {
              return (
                <a key={i} href={e.shortlink} target="_blank" rel="noreferrer noopener" className={`flex flex-wrap border-l border-r border-b border-black/50 p-6 lg:p-10 hover:bg-pink focus:bg-pink ${(i == 0) && 'border-t'}`}>
                  <div className="w-full lg:w-2/3 pr-8 lg:pr-16 xl:pr-24 mb-6 lg:mb-0">
                    <span className="block font-black text-[clamp(20px,_3vw,_66px)] leading-[0.95] uppercase mb-8 lg:mb-0">{e.title}</span>
                  </div>
                  <div className="w-full lg:w-1/3">
                    <div className="w-full">
                      <span className="flex uppercase font-medium tracking-wider text-sm lg:text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 border border-b-0 border-black/50">
                        <div className="px-4 border-r border-black/50 flex items-center justify-center">
                          <LocationIcon className="w-[25px] lg:w-[30px]"/>
                        </div>
                        <div className="px-3 py-4 lg:py-5">
                          {e.city}
                        </div>
                      </span> 
                    </div>
                    <div className="w-full">
                      <span className="flex uppercase font-medium tracking-wider text-sm lg:text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 border border-b-0 border-black/50">
                        <div className="px-4 border-r border-black/50 flex items-center justify-center">
                          <ClockIcon className="w-[25px] lg:w-[30px]"/>
                        </div>
                        <div className="px-3 py-4 lg:py-5">
                          {e.employment_type}
                        </div>
                      </span>
                    </div>
                    <div className="w-full">
                      <span className="flex uppercase font-medium tracking-wider text-sm lg:text-base leading-none lg:leading-none xl:leading-none 2xl:leading-none w-11/12 border border-black/50">
                        <div className="px-4 border-r border-black/50 flex items-center justify-center">
                          <GraphIcon className="w-[25px] lg:w-[30px]"/>
                        </div>
                        <div className="px-3 py-4 lg:py-5">
                          {e.department}
                        </div>
                      </span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          <a href="https://apply.workable.com/homa-games/" target="_blank" rel="noopener noreferrer" className="roll-btn block lg:inline-block">
            <span className="roll-btn__front">See All Open Roles</span>
            <span className="roll-btn__back">See All Open Roles</span>
          </a>
        </div>
      </div>
    </div>

  )
}