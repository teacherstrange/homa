import { CarouselGames } from "./carousel-games";

export default function ModularMarketingGamesFeedBlock({ title, games }) {
  return (
    <div className="pt-[15vw] lg:pt-[8vw] pb-[10vw] lg:pb-0">
      <CarouselGames heading={title} items={games} />
    </div>
  )
}