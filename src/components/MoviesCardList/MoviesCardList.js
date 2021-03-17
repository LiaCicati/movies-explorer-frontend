import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({ cards, isSavedMoviesPage, buttonMore }) => {

  const [isLoading, setLoading] = useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            isSavedMoviesPage={isSavedMoviesPage}
          />
        ))}
      </ul>

      {isLoading ? (
        <Preloader />
      ) : (
        buttonMore && (
          <div className="cards__button-container">
            <button
              className="cards__button"
              type="button"
              name="more"
              onClick={handlePreloader}
            >
              Ещё
            </button>
          </div>
        )
      )}
      
    </section>
  );
};

export default MoviesCardList;
