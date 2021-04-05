import "./MoviesCard.css";
import imageSaved from "../../images/saved-icon.svg";
import iconDelete from "../../images/icon-delete.svg";
import { useLocation } from "react-router-dom";
import * as utils from "../../utils/utils";

const MoviesCard = ({ card, onCardClickButton }) => {
  const location = useLocation();

  const isSavedMoviesPage = location.pathname === "/saved-movies";
  const isMoviesPage = location.pathname === "/movies";

  const savedMovie = <img src={imageSaved} alt="Сохранено" />;
  const deleteIcon = <img src={iconDelete} alt="Удалить" />;


  function handleCardClickButton() {
    onCardClickButton(card);
  }

  return (
    <li className="card">
      <div className="card__image-container">
        <a
          className="card__image-link"
          href={card.trailer || card.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={utils.getCardImage(card)}
            alt={card.nameRU}
            className="card__image"
          ></img>
        </a>
        <button
          className={`card__button ${
            card.isSaved && isMoviesPage ? "card__button_type_saved" : ""
          }`}
          type="button"
          onClick={handleCardClickButton}
        >
          {isMoviesPage && card.isSaved && savedMovie}
          {isMoviesPage && !card.isSaved && "Сохранить"}
          {isSavedMoviesPage && deleteIcon}
        </button>
      </div>
      <div className="card__text">
        <h3 className="card__title">{card.nameRU}</h3>
        <span className="card__duration">{utils.getMovieDuration(card)}</span>
      </div>
    </li>
  );
};

export default MoviesCard;
