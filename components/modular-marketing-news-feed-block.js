import { CarouselBlog } from "./carousel-blog";

export default function ModularMarketingNewsFeedBlock({ title, newsArticles }) {
  return (
    <div className="pt-[15vw] lg:pt-[8vw] pb-[10vw] lg:pb-0">
      <CarouselBlog heading={title} items={newsArticles} />
    </div>
  )
}