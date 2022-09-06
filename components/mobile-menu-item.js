import Link from "next/link"
import ArrowRightIcon from "@/icons/arrow-right.svg"

export default function MobileMenuItem({ label, href, className, onClick, dark }) {
  return (
    <Link href={href}>
      <a
        className={`block border px-6 py-5 uppercase text-base leading-none relative ${ dark ? 'border-0 bg-black text-white' : 'border-black' } ${ className ? className : null }`}
        onClick={onClick ? onClick : null}
      >
        { label }
        
        <div className={`absolute top-0 right-0 bottom-0 w-[60px] border-l flex items-center justify-center ${ dark ? 'border-white/50' : 'border-black ' }`}>
          <ArrowRightIcon className="w-[20px]" />
        </div>
      </a>
    </Link>
  )
}