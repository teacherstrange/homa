import { CarouselCards } from "./carousel-cards";

export default function ModularMarketingCaseStudiesBlock({ title, caseStudies }) {
  return (
    <div className="pt-[15vw] lg:pt-[8vw] pb-[10vw] lg:pb-0">
      <CarouselCards heading={title} items={caseStudies} />
    </div>
  )
}