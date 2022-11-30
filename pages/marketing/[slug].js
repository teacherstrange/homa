// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Transitions
import { fade } from '@/helpers/transitions'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FooterCta from '@/components/footer-cta'
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import Link from 'next/link'

// Sanity
import SanityPageService from '@/services/sanityPageService'
import BodyRenderer from '@/components/body-renderer'
import SanityImage from '@/components/sanity-image'

const query = `{
  "page": *[_type == "marketingPages" && slug.current == $slug][0]{
    title,
    contentBlocks[] {
      ...,
      text,
      caseStudies[]-> {
        ...
      },
      games[]-> {
        ...
      },
      newsArticles[]-> {
        ...,
        category-> {
          title,
          slug {
            current
          }
        },
      },
      authorName,
      authorJobTitle,
      image {
        asset-> {
          ...
        },
        overrideVideo {
          asset-> {
            ...
          }
        },
        overrideVimeoVideo,
        alt,
        caption,
        captionSubHeading
      },
    },
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "successStories": *[_type == "caseStudies"]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    partnerName,
    projectName,
    publishDate,
    slug {
      current
    }
  },
  "products": *[_type == "products"] | order(orderRank asc){
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0]{
    email,
    phone,
    twitter,
    instagram,
    linkedIn,
    facebook,
    tikTok,
    discord,
    discordGameMakers
  }
}`

const pageService = new SanityPageService(query)

export default function BlogSlug(initialData) {
  // Sanity Data
  const { data: { page, contact, products, successStories } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo
        title={page.seo?.metaTitle ? page.seo?.metaTitle : page.title }
        description={page.seo?.metaDesc ? page.seo?.metaDesc : null}
        openGraph={{
          title: page.seo?.metaTitle ? page.seo?.metaTitle : page.title,
          description: page.seo?.metaDesc ? page.seo?.metaDesc : null,
          images: [
            {
              url: page.seo?.shareGraphic?.asset.url ? page.seo?.shareGraphic?.asset.url : null,
              width: page.seo?.shareGraphic?.asset.metadata.dimensions.width ? page.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: page.seo?.shareGraphic?.asset.metadata.dimensions.height ? page.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ]
        }}
      />

      <Header homaLabNav={products} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade}>
            <BodyRenderer body={page.contentBlocks} successStories={successStories} />

            <Footer contact={contact} homaLabNav={products} />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

// Sanity CMS Props
export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return props
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('marketingPages')
  return {
    paths: paths,
    fallback: false,
  };
}