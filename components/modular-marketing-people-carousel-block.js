import { CarouselTeam } from "./carousel-team";

export default function ModularMarketingPeopleCarouselBlock({ title, people, internalId }) {
  return (
    <div className="pt-[15vw] lg:pt-[8vw] pb-[10vw] lg:pb-[8vw]" id={internalId ? internalId : 'section' }>
      <CarouselTeam heading={title} items={people} />
    </div>
  )
}