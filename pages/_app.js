import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Modal emitter stuff here...
    console.log('ill update on each page change');
  });

  return (
    <>
      <DefaultSeo {...SEO} />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}