import { TextScramble } from "@a7sc11u/scramble"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function TextScrambler({ text, seed }) {
  const scrambleIsInView = useRef(null)
  const isInView = useInView(scrambleIsInView)

  return (
    <div ref={scrambleIsInView}>
      { isInView ? (
        <TextScramble
          as="div"
          play={true}
          speed={0.5}
          scramble={5}
          step={1}
          stepInterval={1}
          seed={seed ? seed : 10}
          seedInterval={5}
          text={text}
        />
      ) : (
        <span className="block">{text}</span>
      )}
    </div>
  )
}