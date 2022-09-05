import FancyLink from '@/components/fancyLink'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-[1000]">
      <header className="pl-6 xl:pl-10 bg-white bg-opacity-50 backdrop-blur-xl border-b border-black/50">
        <div className="flex flex-wrap items-start">
          <Link href="/">
            <a className="w-[100px] lg:w-[110px] xl:w-[125px] 2xl:w-[160px] flex items-center h-[60px] lg:h-[70px] xl:h-[80px]">
              <svg className="w-full" viewBox="0 0 200 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M102.189 46.715h12.653V12.652h4.379v34.063h12.652V12.652h4.38v34.063h12.652V0h-46.716v46.715ZM51.096 46.715H97.81V0H51.096v46.715Zm12.652-34.063h21.411v21.411H63.748v-21.41ZM153.285 0v46.715h12.652V36.01h21.411v10.705h12.653V0h-46.716Zm34.063 23.358h-21.411V12.652h21.411v10.706ZM34.063 17.032h-21.41V0H0v46.715h12.652V29.684h21.411v17.031h12.652V0H34.063v17.032Z" fill="currentColor"/></svg>
            </a>
          </Link>

          {/* Main Navigation */}
          <nav className="ml-auto w-full text-sm md:text-base md:w-auto hidden lg:block">
            <ul className="flex w-full">
              {/* Games */}
              <li>
                <FancyLink
                  destination="/games"
                  a11yText="Navigate to the games page"
                  label="Games"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                />
              </li>
              
              {/* Homa Lab */}
              <li className="nav-has-child">
                <FancyLink
                  destination="/homa-lab"
                  a11yText="Navigate to the homa lab page"
                  label="Homa Lab"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                />

                {/* Homa Lab Subnav */}
                <ul className="nav-child mt-[71px] xl:mt-[81px] lg:w-[770px] xl:w-[1000px] 2xl:w-[1200px] ml-auto">
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Overview"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Ideas"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Market Watchers"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Homa SDK"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Dev Tools"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Data Analytics"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Submissions"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                </ul>
              </li>

              <li>
                <FancyLink
                  destination="/community"
                  a11yText="Navigate to the community page"
                  label="Community"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                />
              </li>

              <li>
                <FancyLink
                  destination="/about"
                  a11yText="Navigate to the about page"
                  label="About"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                  active={router.asPath == '/about'}
                />
              </li>

              <li>
                <FancyLink
                  destination="/careers"
                  a11yText="Navigate to the careers page"
                  label="Careers"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                />
              </li>

              <li>
                <FancyLink
                  destination="/blog"
                  a11yText="Navigate to the blog page"
                  label="Blog"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                />
              </li>

              <li>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10 bg-black text-white flex"
                ><span className="hidden xl:inline">Enter The&nbsp;</span>Homa Lab</a>
              </li>
            </ul>
          </nav>

          <nav className="lg:hidden ml-auto w-1/2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="uppercase font-medium tracking-widest h-[60px] items-center justify-center text-base w-full flex border-l border-black/50 lg:hidden"
            >
              Menu
            </button>
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="w-full h-screen bg-white bg-opacity-50 backdrop-blur-xl lg:hidden p-6">
          
          {/* Mobile Navigation */}
          <nav className="ml-auto w-full">
            <ul className="w-full">
              <li className="block mb-3">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <a className="block border-black border px-6 py-5 uppercase text-base leading-none relative">
                    Home
                    
                    <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-black flex items-center justify-center">
                      <svg className="w-[20px]" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 1 10 10-10 10M0 11h20" stroke="currentColor" stroke-miterlimit="10"/></svg>
                    </div>
                  </a>
                </Link>
              </li>

              <li className="block mb-3">
                <Link href="/games" onClick={() => setMobileMenuOpen(false)}>
                  <a className="block border-black border px-6 py-5 uppercase text-base leading-none relative">
                    Games
                    
                    <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-black flex items-center justify-center">
                      <svg className="w-[20px]" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 1 10 10-10 10M0 11h20" stroke="currentColor" stroke-miterlimit="10"/></svg>
                    </div>
                  </a>
                </Link>
              </li>
              
              {/* Homa Lab */}
              <li className="block mb-3 nav-has-child">
                <Link href="/homa-lab" onClick={() => setMobileMenuOpen(false)}>
                  <a className="block border-black border px-6 py-5 uppercase text-base leading-none relative">
                    Homa Lab
                    
                    <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-black flex items-center justify-center">
                      <svg className="w-[20px]" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 1 10 10-10 10M0 11h20" stroke="currentColor" stroke-miterlimit="10"/></svg>
                    </div>
                  </a>
                </Link>

                {/* Homa Lab Subnav */}
                {/* <ul className="nav-child mt-[71px] xl:mt-[81px] lg:w-[770px] xl:w-[1000px] 2xl:w-[1200px] ml-auto">
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Ideas"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-2"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Market Watchers"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-2"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Homa SDK"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-2"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Dev Tools"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-2"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Data Analytics"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-2"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Submissions"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-2"
                    />
                  </li>
                </ul> */}
              </li>
              
              <li className="block mb-3">
                <Link href="/community" onClick={() => setMobileMenuOpen(false)}>
                  <a className="block border-black border px-6 py-5 uppercase text-base leading-none relative">
                    Community
                    
                    <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-black flex items-center justify-center">
                      <svg className="w-[20px]" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 1 10 10-10 10M0 11h20" stroke="currentColor" stroke-miterlimit="10"/></svg>
                    </div>
                  </a>
                </Link>
              </li>

              <li className="block mb-3">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                  <a className="block border-black border px-6 py-5 uppercase text-base leading-none relative">
                    About
                    
                    <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-black flex items-center justify-center">
                      <svg className="w-[20px]" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 1 10 10-10 10M0 11h20" stroke="currentColor" stroke-miterlimit="10"/></svg>
                    </div>
                  </a>
                </Link>
              </li>

              <li className="block mb-3">
                <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>
                  <a className="block border-black border px-6 py-5 uppercase text-base leading-none relative">
                    Careers
                    
                    <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-black flex items-center justify-center">
                      <svg className="w-[20px]" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 1 10 10-10 10M0 11h20" stroke="currentColor" stroke-miterlimit="10"/></svg>
                    </div>
                  </a>
                </Link>
              </li>

              <li className="block mb-3">
                <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                  <a className="block border-black border px-6 py-5 uppercase text-base leading-none relative">
                    Blog
                    
                    <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-black flex items-center justify-center">
                      <svg className="w-[20px]" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 1 10 10-10 10M0 11h20" stroke="currentColor" stroke-miterlimit="10"/></svg>
                    </div>
                  </a>
                </Link>
              </li>

              <li className="block mb-3">
                <Link href="/homa-lab" onClick={() => setMobileMenuOpen(false)}>
                  <a className="block bg-black text-white px-6 py-5 uppercase text-base leading-none relative">
                    Enter The Homa Lab
                    
                    <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-white/50 flex items-center justify-center">
                      <svg className="w-[20px]" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 1 10 10-10 10M0 11h20" stroke="currentColor" stroke-miterlimit="10"/></svg>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}