import "./MoviesCard.css";
import imageSaved from "../../images/saved-icon.svg";
import iconDelete from "../../images/icon-delete.svg";

const MoviesCard = ({ card, isSavedMoviesPage}) => {
  
  const savedMovie = <img src={imageSaved} alt="Сохранено" />;
  const deleteIcon = <img src={iconDelete} alt="Удалить" />;

  return (
    <li className="card">
      <div className="card__image-container">
        <img src={card.image} alt={card.title} className="card__image"></img>
        <button
          className={`card__button ${
            card.saved && !isSavedMoviesPage? "card__button_type_saved" : ""
          }`}
          type="button"
        >
          { !isSavedMoviesPage && card.saved && savedMovie }
        { !isSavedMoviesPage && !card.saved && 'Сохранить' }
          {isSavedMoviesPage && deleteIcon}
        </button>
      </div>
      <div className="card__text">
        <h3 className="card__title">{card.title}</h3>
        <span className="card__duration">{card.duration}</span>
      </div>
    </li>
  );
};

export default MoviesCard;
