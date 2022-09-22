import { useState, useEffect } from 'react'
import TextScrambler from './text-scrambler';

export default function MousePosition() {
  const [mouseCoords, setMouseCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    // get global mouse coordinates
    const handleWindowMouseMove = event => {
      setMouseCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
  
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);
  
  return (
    <div>
      <span className="flex space-x-2 justify-end">
        <span className="flex">
          <span>x:</span><TextScrambler text={`${mouseCoords.x}`} seed={5} />
        </span>
        <span className="flex">
          <span>y:</span><TextScrambler text={`${mouseCoords.y}`} seed={5} />
        </span>
      </span>
    </div>
  )
}