import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import cards from '../../utils/movies';

function Movies() {
  return (
    
    <div className="movies">
      <SearchForm />
      <MoviesCardList
        cards={cards}
        isSavedMoviesPage={false}
        buttonMore={true}
      />
    </div>
  );
}

export default Movies;