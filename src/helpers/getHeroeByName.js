import { heroes } from "../../public/assets/data/dataHeroes";

export const getHeroeByName = (name = "") => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
