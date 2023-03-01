import { heroes } from "../../public/assets/data/dataHeroes";

export const getHeroByID = (id) => {
  // Lo necesitamos para recorrer el arreglo y asignarle el id especifico para que me devulva solo el heroe que haga match con el id
  return heroes.find((hero) => hero.id === id);
};
