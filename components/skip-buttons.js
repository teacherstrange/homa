import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Box = ({ active, deactivated = false, linkToIndex, children }) => {
  let className = 'block border border-black/50 font-medium uppercase leading-none py-3 px-4 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white group tracking-wide mr-3'

  const addClass = (classToAdd) => className = `${className} ${classToAdd}`

  if (active) {
    addClass('cursor-pointer')
    addClass('bg-black text-white border-black')
  }
  else {
    addClass('cursor-pointer')
    addClass('text-black')
  }

  if (deactivated) {
    addClass('cursor-not-allowed')
    addClass('opacity-40 hover:scale-100')
  }

  return (
    deactivated ? 
      <div className={className}>
        {children}
      </div>
    :
      <Link href={linkToIndex === 1 ? '/blog' : `/blog/page/${linkToIndex}`}>
        <div className={className}>
          {children}
        </div>
      </Link>
  )
}

export default function SkipButtons({ index, maxIndex }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  let firstIndex = 0
  let secondIndex = 0
  let thirdIndex = 0
  let leftArrowDisabled = false
  let rightArrowDisabled = false

  switch (index) {
    case 1:
      firstIndex = 1
      secondIndex = 2
      thirdIndex = 3
      leftArrowDisabled = true
      break
    case maxIndex + 1:
      firstIndex = index - 2
      secondIndex = index - 1
      thirdIndex = index
      rightArrowDisabled = true
      break
    default:
      firstIndex = index - 1
      secondIndex = index
      thirdIndex = index + 1
  }

  return (
    <div className="flex items-center relative overflow-hidden">
      <Box deactivated={leftArrowDisabled} linkToIndex={rightArrowDisabled ? thirdIndex - 1 : secondIndex - 1}>
        Prev
      </Box>
      <Box active={index === firstIndex} linkToIndex={firstIndex}>0{firstIndex}</Box>
      <Box active={index === secondIndex} linkToIndex={secondIndex}>0{secondIndex}</Box>
      <Box active={index === thirdIndex} linkToIndex={thirdIndex}>0{thirdIndex}</Box>
      <Box deactivated={rightArrowDisabled} linkToIndex={leftArrowDisabled ? firstIndex + 1 : secondIndex + 1}>
        Next
      </Box>
    </div>
  )
}