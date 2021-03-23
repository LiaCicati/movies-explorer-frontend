import { useEffect, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import InfoTooltip from "../InfoToolTip/InfoTooltip";
import authSuccess from "../../images/success.svg";
import authFail from "../../images/fail.svg";

const App = () => {

  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipImage, setTooltipImage] = useState("");
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    tokenCheck();
  });

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            history.push("/movies");
          }
        })
        .catch((err) => {
          if (err === 400)
            return console.log("Токен не передан или передан не в том формате");
          if (err === 401) return console.log("Переданный токен некорректен");
        });
    }
  }

  function onRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res.email) {
          setIsInfoTooltipOpen(true);
          setTooltipImage(authSuccess);
          setIsLoggedIn(true);
          setMessage("Вы успешно зарегистрировались!");
          history.push("/movies");
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setTooltipImage(authFail);
        setMessage("Что-то пошло не так! Попробуйте еще раз");
        if (err === "Ошибка: 400")
          console.log(" некорректно заполнено одно из полей ");
      });
  }

  function onLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setTooltipImage(authFail);
        setMessage("Что-то пошло не так! Попробуйте ещё раз.");
        if (err === "Ошибка: 400") {
          console.log("не передано одно из полей");
        } else if (err === "Ошибка: 401") {
          console.log("Пользователь с данным email не найден");
        }
      });
  }

  function onSignOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history.push("/signin");
  }

  function closeAllModals() {
    setIsInfoTooltipOpen(false);
  }

  function handlerEscClose(evt) {
    if (evt.key === "Escape") {
      closeAllModals();
    }
  }

  function closeByOverlay(evt) {
    if (evt.target.classList.contains("modal-tooltip")) {
      closeAllModals();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handlerEscClose);
    document.addEventListener("click", closeByOverlay);
    return () => {
      document.removeEventListener("keydown", handlerEscClose);
      document.removeEventListener("click", closeByOverlay);
    };
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header loggedIn={true} />
            <Movies />
            <Footer />
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
          </Route>
          <Route path="/saved-movies">
            <Header loggedIn={true} />
            <SavedMovies />
            <Footer />
            {loggedIn ? <Redirect to="/saved-movies" /> : <Redirect to="/" />}
          </Route>
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="/signin">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/profile">
            <Header loggedIn={true} />
            <Profile onSignOut={onSignOut} />
            {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/" />}
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllModals}
          image={tooltipImage}
          message={message}
          loggedIn={loggedIn}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
