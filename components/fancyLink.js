import Link from "next/link"

export default function FancyLink( {destination, a11yText, label, className, active } ) {
  return (
    <Link href={destination}>
      <a
        aria-label={a11yText}
        className={className ? className : null}
      >
        <span className="relative">
        { active && (<span className="absolute top-0 left-0 mt-[0px] lg:mt-[3px] xl:mt-[3px] 2xl:mt-[3px] md:translate-x-[-20px] lg:translate-x-[-16px] xl:translate-x-[-19px] 2xl:translate-x-[-22px] w-[8px] h-[8px] xl:w-[9px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[10px] rounded-full bg-black"></span>)}
          {label}
        </span>
      </a>
    </Link>
  )
}