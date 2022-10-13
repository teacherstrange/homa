import Link from "next/link";
import SanityImage from "./sanity-image";

export default function BlogCard({ href, heading, category, image, date }) {
  return (
    <Link href={href}>
      <a className="flex flex-wrap flex-col justify-start items-start border border-black/50 w-full h-full hover:bg-pink focus:bg-pink">
        <div className="w-full">
          <div className="aspect-square bg-gray-200 border-b border-black/50 relative overflow-hidden self-start">
            <SanityImage
              image={image}
              layout="fill"
              className="block w-full h-full absolute inset-0 aspect-square scale-[1.02]"
            />
          </div>
        </div>

        <div className="p-6 xl:p-10 w-full flex-1">
          <div className="flex flex-wrap h-full">
            <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase w-full mb-16 md:mb-20 lg:mb-28 xl:mb-32 leading-[1.15]">{heading}</h2>


            <div className="flex w-full items-end mt-auto">
              {category && (
                <span className="inline-block border border-black/50 font-medium uppercase text-sm lg:text-base leading-none p-1 lg:p-3 rounded-sm">{category}</span>
              )}

              {date && (
                <span className="block uppercase text-sm tracking-wide font-medium ml-auto">{date}</span>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}