import { useEffect, useRef, useState } from "react";
import { ImagePixelated } from "react-pixelate"
import { useInView } from "framer-motion"

export default function PixelatedImage({ image, width, height }) {
  const [currentIndex, setCurrentIndex] = useState(40);
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    let speed = 100

    const i_id = setInterval(() => {
      if (currentIndex == 0) {
      } else {
        if (isInView) {
          setCurrentIndex(currentIndex => currentIndex-5)
        }
      }
    }, speed);

    return () => {
      clearInterval(i_id);
      
      if (!isInView) {
        setCurrentIndex(40)
      }
    }
  },[currentIndex, isInView]);

  return (
    <div ref={ref}>
      <ImagePixelated
        src={image}
        width={width}
        height={height}
        pixelSize={currentIndex}
        centered
        fillTransparencyColor={'transparent'}
      />
    </div>
  )
}