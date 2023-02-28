import { Link } from "react-router-dom";
export const HeroCard = ({ hero }) => {
  const { id, superhero, alter_ego, first_appearance, characters } = hero;

  const heroURLImg = `/assets/imgs/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row">
          <div className="col-4 ">
            <img className="card-img" src={heroURLImg} alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {/* No enseñar dos characters iguales */}
              {alter_ego !== characters && <p>{characters}</p>}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>More Info..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
