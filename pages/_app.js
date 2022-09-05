import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import useKeypress from 'react-use-keypress'
import SEO from '@/helpers/seo.config';
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [grid, setGrid] = useState(false);

  useKeypress('g', () => {
    setGrid(!grid)
  })

  return (
    <>
      <DefaultSeo {...SEO} /> 

      { grid && (
        <div className="fixed inset-0 w-full h-full z-[100000] pointer-events-none grid grid-cols-12 gap-[1px] max-w-screen-3xl mx-auto">
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
          <div className="bg-orange bg-opacity-[25%] col-span-1"></div>
        </div>
      )}

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}