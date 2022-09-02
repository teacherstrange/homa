import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'

export default function Header() {
  return (
    <header className="bg-gray-200 fixed top-0 left-0 right-0 w-full py-5 md:py-0 z-[1000]">
      <Container>
        <div className="flex flex-wrap md:h-[80px] items-center">
          <FancyLink destination="/" a11yText="Navigate to the home page" label="Homa" extraClasses="mb-1 md:mb-0" />

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home" />

            <FancyLink destination="/about" a11yText="Navigate to the about page" label="About" />
          </nav>
        </div>
      </Container>
    </header>
  )
}