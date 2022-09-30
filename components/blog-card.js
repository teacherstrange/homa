import Link from "next/link";
import SanityImage from "./sanity-image";

export default function BlogCard({ href, heading, category, image, date }) {
  return (
    <Link href={href}>
      <a className="block border border-black/50 w-full h-full hover:bg-pink focus:bg-pink">
        <div className="aspect-square w-full bg-gray-200 border-b border-black/50 relative overflow-hidden">
          <SanityImage
            image={image}
            layout="fill"
            className="block w-full h-full absolute inset-0 aspect-square scale-[1.03]"
          />
        </div>

        <div className="p-6 xl:p-10">
          <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase w-full mb-12 md:mb-20 lg:mb-28 xl:mb-32">{heading}</h2>


          <div className="flex items-end">
            {category && (
              <span className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm">{category}</span>
            )}

            {date && (
              <span className="block uppercase text-sm tracking-widest font-medium ml-auto">{date}</span>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}