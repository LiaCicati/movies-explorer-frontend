import "./SearchForm.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import { useState } from "react";
import { KEYWORD_ENTERED_MESSAGE } from "../../utils/constants";
import { removeWhiteSpace } from "../../utils/utils";

const SearchForm = ({ onSearchSubmit, isOn, handleToggle }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleChange(evt) {
    setValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!value) {
      setError(KEYWORD_ENTERED_MESSAGE);
    } else {
      setError("");
      onSearchSubmit(removeWhiteSpace(value));
    }
  }
  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className="search__container">
          <div className="search__icon"></div>
          <input
            placeholder="Фильм"
            className="search__input"
            type="text"
            required
            minLength="3"
            value={value}
            onChange={handleChange}
          ></input>
          <button className="search__button" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckBox isOn={isOn} handleToggle={handleToggle} />
      </form>
      <span className="search__error">{error}</span>
    </section>
  );
};

export default SearchForm;
