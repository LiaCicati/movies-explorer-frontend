import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedMovies from '../../utils/savedMovies';

const SavedMovies = () => {
    
    return (
        <div className="saved-movies">
            <SearchForm />
            <MoviesCardList
            cards={savedMovies}
            isSavedMoviesPage={true}
            buttonMore={false}
            />
        </div>
    )
}

export default SavedMovies