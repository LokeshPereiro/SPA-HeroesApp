import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroByID } from "../../helpers";

export const HeroInfo = () => {
  const navigate = useNavigate();
  const onNavBack = () => {
    navigate(-1);
  };

  const { heroId } = useParams();

  // A priori no sería necesario el useMemo en este caso.. no obstante es bueno hacerlo para que no se tenga que llamar otra vez a la función para mostrar lo mismo (no haya ser que el heroId cambie).
  // EN nuestro caso la base de datos es pequeño, la obtimización casi se no se nota pero si esto puera una llamada a la api si se notaría
  const wishedHero = useMemo(() => getHeroByID(heroId), [heroId]);

  if (!wishedHero) {
    // Definimos esta pequeña validación para no nos muestre undefined en el caso de no encontrar el id correcto, se podría enviar al user al homepage pero personalmente me gusta mostrar el error
    return <Navigate to="/err" />;
  }
  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img
          src={`/assets/imgs/${heroId}.jpg`}
          alt={wishedHero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{wishedHero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b>
            {wishedHero.alter_ego}
          </li>

          <li className="list-group-item">
            <b>Company: </b>
            {wishedHero.publisher}
          </li>

          <li className="list-group-item">
            <b>First Apparence: </b>
            {wishedHero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{wishedHero.characters}</p>

        <button onClick={onNavBack} className="btn btn-outline-danger">
          Volver
        </button>
      </div>
    </div>
  );
};
