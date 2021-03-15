import "./SearchForm.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

const SearchForm = () => {

  return (
    <div className="search">
      <form className="search__form">
        <div className="search__container">
          <div className="search__icon"></div>
          <input placeholder="Фильм" className="search__input" type="text" required></input>
          <button className="search__button" type="submit" >Найти</button>
        </div>
        <FilterCheckBox />
      </form>
    </div>
  );
};

export default SearchForm;
