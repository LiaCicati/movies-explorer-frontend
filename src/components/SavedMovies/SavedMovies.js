import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import * as utils from "../../utils/utils";
import { MOVIES_NOT_FOUND, NO_SAVED_MOVIES } from "../../utils/constants";

const SavedMovies = ({ savedMovies, onCardClickButton }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [movies, setMovies] = useState(savedMovies);

  const handleSearchSubmit = (value) => {
    setSearchValue(value);
  };

  const handleToggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  useEffect(() => {
    const moviesFound = utils.searchMovie(savedMovies, searchValue);
    const moviesFiltered = utils.filterMovies(moviesFound, isSwitchOn);
    setMovies(moviesFiltered);
  }, [savedMovies, searchValue, isSwitchOn]);

  return (
    <>
      <Header/>
      <div className="saved-movies">
        <SearchForm
          onSearchSubmit={handleSearchSubmit}
          isOn={isSwitchOn}
          handleToggle={handleToggleSwitch}
        />
        <MoviesCardList
          cards={movies}
          isSavedMoviesPage={true}
          buttonMore={false}
          onCardClickButton={onCardClickButton}
          movieSearchError={
            savedMovies.length < 1 ? NO_SAVED_MOVIES : MOVIES_NOT_FOUND
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default SavedMovies;
