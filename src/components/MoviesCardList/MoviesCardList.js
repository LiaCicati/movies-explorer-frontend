import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import * as utils from "../../utils/utils";

const MoviesCardList = ({
  cards,
  buttonMore,
  onClickMoreButton,
  onCardClickButton,
  movieSearchError,
}) => {
  const areVisibleCards = cards.length > 0;

  return (
    <section className="cards">
      {!areVisibleCards && <p className="cards__message">{movieSearchError}</p>}

      {areVisibleCards && (
        <ul className="cards__list">
          {cards.map((card) => (
            <MoviesCard
              key={utils.getMovieKey(card)}
              card={card}
              onCardClickButton={onCardClickButton}
            />
          ))}
        </ul>
      )}
      {buttonMore && (
        <div className="cards__button-container">
          <button
            className="cards__button"
            type="button"
            name="more"
            onClick={onClickMoreButton}
          >
            Ещё
          </button>
        </div>
      )}
    </section>
  );
};

export default MoviesCardList;
