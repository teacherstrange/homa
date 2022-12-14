import { CarouselGames } from "./carousel-games";

export default function ModularMarketingGamesFeedBlock({ title, games, internalId }) {
  return (
    <div className="pt-[15vw] lg:pt-[8vw] pb-[10vw] lg:pb-0" id={internalId ? internalId : 'section' }>
      <CarouselGames heading={title} items={games} />
    </div>
  )
}