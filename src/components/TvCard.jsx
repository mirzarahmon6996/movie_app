import { Link } from "react-router-dom";

const TvCard = ({ id, title, imgLink, rating, relaseDate }) => {
  return (
    <Link to={`/tv/${id}`} className="card__block">
        <i class="fa-regular cardimg fa-circle-play fa-shake"></i>
      <div className="card">
        <div className="card__img">
          <img src={imgLink} alt="Card Img" />
        </div>
        <div className="card__content">
          <h2>{title}</h2>
          <span className="relase-date">{relaseDate}</span>
          <span className="rating">{rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default TvCard;
