import { heroes } from "../../public/assets/data/dataHeroes";

export const getHeroByPublisher = (publisherArg) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  //   Small validation so that we can only filter 'DC Comics' & 'Marvel' heros
  if (!validPublishers.includes(publisherArg)) {
    throw new Error(`Sorry, ${publisherArg} is not defined in our database`);
  }

  return heroes.filter((hero) => hero.publisher === publisherArg);
};
