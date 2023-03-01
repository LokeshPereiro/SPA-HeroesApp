import { heroes } from "../../public/assets/data/dataHeroes";

export const getHeroByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  //   Small validation so that we can only filter 'DC Comics' & 'Marvel' heros
  if (!validPublishers.includes(publisher)) {
    throw new Error(`Sorry, ${publisher} is not defined in our database`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
