import BlockContentWrapper from '@/components/block-content-wrapper'
import ModularImageBlock from '@/components/modular-image-block'
import ModularTextBlock from '@/components/modular-text-block'
import ModularQuoteBlock from '@/components/modular-quote-block'
import ModularMarketingHeroBlock from './modular-marketing-hero-block'
import ModularMarketingTextImageSplitBlock from './modular-marketing-text-image-split-block'
import ModularMarketingTextOverImageBlock from './modular-marketing-text-over-image-block'
import ModularMarketingCareersBlock from './modular-marketing-careers-block'
import ModularMarketingCaseStudiesBlock from './modular-marketing-case-studies-block'
import ModularMarketingNewsFeedBlock from './modular-marketing-news-feed-block'
import ModularMarketingGamesFeedBlock from './modular-marketing-games-feed-block'
import ModularMarketingPeopleCarouselBlock from './modular-marketing-people-carousel-block'
import ModularMarketingLongIconListBlock from './modular-marketing-long-icon-list-block'
import ModularMarketingMultipleCtaBlock from './modular-marketing-multiple-cta-block'
import ModularMarketingTextIconBlock from './modular-marketing-text-icon-block'
import ModularMarketingCondensedCtaBlock from './modular-marketing-condensed-cta-block'
import ModularMarketingHubspotFormBlock from './modular-marketing-hubspot-form-block'
import ModularMarketingIconBlock from './modular-marketing-icon-block'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

let bodySerializers = {
  block: {
    component: BlockContentWrapper,
    wrapper: ({ children }) => 
      <div className="mb-12 md:mb-20 lg:mb-24 xl:mb-40">
        {children}
      </div>
  },
  modularImageBlock: {
    component: ModularImageBlock,
    wrapper: ({ children }) => 
      <div className="mb-12 md:mb-20 lg:mb-24 xl:mb-40">
        {children}
      </div>
  },
  modularQuoteBlock: {
    component: ModularQuoteBlock,
    wrapper: ({ children }) => 
      <div className="mb-12 md:mb-20 lg:mb-24 xl:mb-40">
        {children}
      </div>
  },
  textBlock: {
    component: ModularTextBlock,
    wrapper: ({ children }) => 
      <div className="mb-12 md:mb-20 lg:mb-24 xl:mb-40">
        {children}
      </div>
  },
  modularMarketingHeroBlock: {
    component: ModularMarketingHeroBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingTextImageSplitBlock: {
    component: ModularMarketingTextImageSplitBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingTextOverImageBlock: {
    component: ModularMarketingTextOverImageBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingCareersBlock: {
    component: ModularMarketingCareersBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingCaseStudiesBlock: {
    component: ModularMarketingCaseStudiesBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingNewsFeedBlock: {
    component: ModularMarketingNewsFeedBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingGamesFeedBlock: {
    component: ModularMarketingGamesFeedBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingPeopleCarouselBlock: {
    component: ModularMarketingPeopleCarouselBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingLongIconListBlock: {
    component: ModularMarketingLongIconListBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingMultipleCtaBlock: {
    component: ModularMarketingMultipleCtaBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingTextIconBlock: {
    component: ModularMarketingTextIconBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingCondensedCtaBlock: {
    component: ModularMarketingCondensedCtaBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingHubspotFormBlock: {
    component: ModularMarketingHubspotFormBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  },
  modularMarketingIconBlock: {
    component: ModularMarketingIconBlock,
    wrapper: ({ children }) => 
      <div className="">
        {children}
      </div>
  }
}

function getSerializers() {
  const res = {}
  for (const [key, value] of Object.entries(bodySerializers)) {
    if (key === 'block') continue
    const Component = value.component
    res[key] = (props) => <Component {...props.node} />
  }
  return res
}

export const blockSerializers = getSerializers()

const BodyRenderer = ({ body, caseStudy, careerPosts, successStories }) => {
  if (!body) return <></>
  return body.map((item) => {
    const type = item._type
    const serializer = bodySerializers[type]
    const Component = serializer?.component
    const args = serializer?.args
    const Wrapper = serializer?.wrapper

    if (!Component || !serializer) throw new Error(`No serializer implemented for body object: ${type}`)    
    
    return Wrapper ? <Wrapper key={item._key}><Component {...item} {...args} successStories={successStories} /></Wrapper> : <Component key={item._key} {...item} {...args} />
  })
}

export default BodyRenderer;