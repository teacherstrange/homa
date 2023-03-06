import { PortableText, PortableTextComponents } from '@portabletext/react'
import BlockContent from '@sanity/block-content-to-react'

export default function ModularTextBlock({ text }) {
  const components = {
    marks: {
      link: ({value, children}) => {
        return (
          <a href={value?.href} target={'_blank'} rel={'noindex nofollow'}>
            {children}
          </a>
        )
      },
    },
  }
  

  return (
    <div className="flex flex-wrap justify-center">
      <div className="content w-full lg:w-[60%] xl:w-[50%] 2xl:w-[40%] bg">
        <PortableText
          value={text} 
          components={components}
          // serializers={{ serializers, container: ({ children }) => children }}
        />
      </div>
    </div>
  )
}