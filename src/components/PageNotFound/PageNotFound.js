import { useHistory } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  const history = useHistory();

  function handleClickButtonBack()  {
    history.goBack();
    history.goBack();
  };

  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
      </div>
      <button
        type="button"
        className="error__button"
        onClick={handleClickButtonBack}
      >
        Назад
      </button>
    </div>
  );
};

export default PageNotFound;
