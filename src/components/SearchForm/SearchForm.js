import "./SearchForm.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <div className="search__icon"></div>
          <input
            placeholder="Фильм"
            className="search__input"
            type="text"
            required
            minLength="3"
          ></input>
          <button className="search__button" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckBox />
      </form>
    </section>
  );
};

export default SearchForm;
