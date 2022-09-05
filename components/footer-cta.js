export default function FooterCta() {
  return (
    <div className="w-full bg-gray-100">
      <div className="grid grid-cols-12 border-black/50 border-t border-b">
        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-transparent h-[18vw]">
        </div>
      </div>

      <div className="grid grid-cols-12 border-black/50">
        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-gradient-to-b from-white to-pink p-6 md:p-10 xl:p-16 text-center">
          <span className="block font-black uppercase text-2xl md:text-3xl xl:text-4xl mb-20 md:mb-[15vw] xl:mb-[12.5vw]">Guessing Game Over</span>

          <div className="w-8/12 mx-auto max-w-md mb-20 md:mb-[15vw] xl:mb-[12.5vw] text-lg md:text-xl xl:text-2xl">
            <p>Start building games with data, insight and tested hit potential built right in.</p>
          </div>

          <a href="#" className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm">Enter the homa lab</a>
        </div>
      </div>

      <div className="grid grid-cols-12 border-black/50 border-t border-b">
        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-transparent h-[18vw]">
        </div>
      </div>
    </div>
  )
}