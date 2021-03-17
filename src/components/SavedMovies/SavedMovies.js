import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedMovies from '../../utils/savedMovies';

const SavedMovies = () => {
    
    return (
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList
            cards={savedMovies}
            isSavedMoviesPage={true}
            buttonMore={false}
            />
        </section>
    )
}

export default SavedMovies