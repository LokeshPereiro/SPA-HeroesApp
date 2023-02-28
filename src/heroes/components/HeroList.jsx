import { useMemo } from "react";
import { getHeroByPublisher } from "../../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__fadeIn">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} hero={hero} />;
      })}
    </div>
  );
};
